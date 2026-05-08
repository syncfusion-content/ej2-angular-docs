---
layout: post
title: SignalR Hub for Collaborative Angular Diagrams | Syncfusion
description: Checkout and learn to implement SignalR hub services with Redis for real-time collaborative editing in Syncfusion Angular Diagram.
control: Diagram
documentation: ug
platform: ej2-angular
domainurl: ##DomainURL##
---

# SignalR hub configuration for collaborative editing

## Overview

This guide explains how to configure ASP.NET Core SignalR with Redis for real-time collaborative editing in an Angular application. It covers creating the backend server, installing packages, configuring SignalR, implementing the hub, handling conflicts, and managing Redis cleanup.

## Prerequisites

* [System requirements for ASP.NET Core components](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)

## How to create ASP.NET Core app

Create an ASP.NET Core Web App using the Razor Pages template in Visual Studio via [Microsoft Templates Guide](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-8.0&tabs=visual-studio#create-a-razor-pages-web-app).

## How to install required packages

Open the NuGet package manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution), then search and install the following packages in the application.

* Microsoft.AspNetCore.SignalR.StackExchangeRedis
* Microsoft.Azure.SignalR
* Microsoft.Extensions.Caching.StackExchangeRedis
* StackExchange.Redis

## Configure SignalR with Redis

To enable real-time collaboration, add your Redis connection string in `appsettings.json`, then register a singleton `IConnectionMultiplexer` in `Program.cs` to efficiently reuse the Redis connection. Finally, configure `SignalR` by registering its services in `Program.cs` to enable hub-based communication between Angular app and the ASP.NET Core hub server.

Add the following configuration to the `appsettings.json` file:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "RedisConnectionString": "<<Your Redis connection string>>"
  }
}
```
Add the following configuration to the `Program.cs` file:
```csharp
using StackExchange.Redis;

--------------
--------------
// Redis connection
builder.Services.AddSingleton<IConnectionMultiplexer>(sp =>
{
    string connectionString = builder.Configuration.GetConnectionString("RedisConnectionString");
    return ConnectionMultiplexer.Connect(connectionString);
});

// SignalR configuration
builder.Services.AddSignalR();

// Map the hub connection
app.MapHub<DiagramHub>("/diagramHub");

----------------
----------------

```

## Implement DiagramHub

Create a file named `DiagramHub.cs` and define a class `DiagramHub` that inherits from Hub. Implement the `OnConnectedAsync` method to notify clients when a new connection is established. Add a `JoinDiagram` method to manage SignalR groups for collaborative sessions. This method allows users to join specific rooms, broadcasts updates to all participants in the same room (excluding the sender), and ensures proper cleanup of group memberships when users disconnect to prevent stale sessions.

```csharp
public class DiagramHub : Hub
{
    private readonly ILogger<DiagramHub> _logger;

    public DiagramHub(ILogger<DiagramHub> logger)
    {
        _logger = logger;
    }

    // 1) Triggers when a user connects to the hub
    public override Task OnConnectedAsync()
    {
        // Send a unique connection ID back to the user
        Clients.Caller.SendAsync("OnConnectedAsync", Context.ConnectionId);
        return base.OnConnectedAsync();
    }

    // 2) Add the current connection to a SignalR group (room)
    public async Task JoinDiagram(string roomName)
    {
        string userId = Context.ConnectionId;

        // Store the room name in the connection context for later retrieval (e.g., on disconnect)
        Context.Items["roomName"] = roomName;

        // Add this connection to the specified group (room)
        await Groups.AddToGroupAsync(userId, roomName);
    }

    // 3) Broadcasts updates to other users in the same room (excludes the sender)
    public async Task BroadcastToOtherUsers(List<string> payloads, string roomName)
    {
        // Send the updates to all other connections in the room
        await Clients.OthersInGroup(roomName).SendAsync("ReceiveData", payloads);
    }

    // 4) Removes the connection from its room when the user disconnects
    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        // Retrieve previously stored room name
        string? roomName = Context.Items.TryGetValue("roomName", out var value) ? value as string : null;

        if (!string.IsNullOrEmpty(roomName))
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
        }
        await base.OnDisconnectedAsync(exception);
    }
}
```

## Conflict resolution (optimistic concurrency)

Collaborative edits use a version-based optimistic concurrency model. In `BroadcastToOtherUsers` method  includes the user’s current `userVersion`, payloads, and the IDs of elements affected by the edit (editedElementIds). Instead of locking, the server validates the version for every update. If discrepancies occur, the server rejects or re-applies changes as needed. This approach ensures data consistency while maintaining real-time responsiveness for all participants. Add the `RedisService` to the `Program.cs` file.

Add the following code in the `DiagramHub` class:

```csharp
using Microsoft.AspNetCore.SignalR;

public class DiagramUpdateMessage
{
    public string SourceConnectionId { get; set; } = "";
    public long Version { get; set; }
    public List<string>? ModifiedElementIds { get; set; }
}

public class DiagramHub : Hub
{
    private readonly ILogger<DiagramHub> _logger;
    private readonly IRedisService _redisService;

    public DiagramHub(ILogger<DiagramHub> logger, IRedisService redisService)
    {
        _logger = logger;
        _redisService = redisService;
    }

    // Triggers the method when the user send the data to other users via signalR
    public async Task BroadcastToOtherUsers(List<string> payloads, long userVersion, List<string>? elementIds, string roomName)
    {
        try
        {
            string versionKey = "diagram:version";
            // Try to accept based on expected version (CAS via Lua script)
            (bool accepted, long serverVersion) = await _redisService.CompareAndIncrementAsync(versionKey, userVersion);

            if (!accepted)
            {
                // Check for overlaps since user's version
                List<DiagramUpdateMessage> recentUpdates = await GetUpdatesSinceVersionAsync(userVersion, maxScan: 200);
                HashSet<string> recentlyTouched = new HashSet<string>(StringComparer.Ordinal);
                foreach (DiagramUpdateMessage message in recentUpdates)
                {
                    if (message.ModifiedElementIds == null) continue;
                    foreach (string id in message.ModifiedElementIds)
                        recentlyTouched.Add(id);
                }

                List<string>? overlaps = elementIds?.Where(id => recentlyTouched.Contains(id)).Distinct().ToList();
                if (overlaps?.Count > 0)
                {
                    // Reject and notify user to conflict message
                    await Clients.Caller.SendAsync("ShowConflict");
                    return;
                }

                // Accept non-overlapping stale update: increment once more
                (bool _, long newServerVersion) = await _redisService.CompareAndIncrementAsync(versionKey, serverVersion);
                serverVersion = newServerVersion;
            }
            // Store update in Redis history
            DiagramUpdateMessage update = new DiagramUpdateMessage
            {
                SourceConnectionId = connectionId,
                Version = serverVersion,
                ModifiedElementIds = elementIds
            };
            await StoreUpdateInRedis(update);
            // Broadcast to others in the same room, including serverVersion
            await Clients.OthersInGroup(roomName).SendAsync("ReceiveData", payloads, serverVersion);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error broadcasting diagram updates");
        }
    }

    // Compare version from user's interactions and filter the updates.
    private async Task<IReadOnlyList<DiagramUpdateMessage>> GetUpdatesSinceVersionAsync(long sinceVersion, int maxScan = 200)
    {
        string historyKey = "diagram_updates_history";
        long length = await _redisService.ListLengthAsync(historyKey);
        if (length == 0) return Array.Empty<DiagramUpdateMessage>();

        long start = Math.Max(0, length - maxScan);
        long end = length - 1;

        var range = await _redisService.ListRangeAsync(historyKey, start, end);

        var results = new List<DiagramUpdateMessage>(range.Length);
        foreach (var item in range)
        {
            if (item.IsNullOrEmpty) continue;
            var update = JsonSerializer.Deserialize<DiagramUpdateMessage>(item.ToString());
            if (update is not null && update.Version > sinceVersion && update.SourceConnectionId != Context.ConnectionId)
                results.Add(update);
        }
        results.Sort((a, b) => a.Version.CompareTo(b.Version));
        return results;
    }
}
```

On acceptance, the hub broadcasts the diagram changes along with the authoritative `serverVersion` to all other users in the same room (ReceiveData). 

## Redis cleanup strategy

To prevent unbounded memory growth and maintain stable performance, implement one or both of the following:
* Keep only the last K versions
    * Maintain a fixed-size history (e.g., the last 200 updates) and trim older entries after each push.
    * Retains only recent updates needed for conflict checks and recovery.
* Apply TTL (Time-to-Live) to keys
    * Set expiration on Redis keys that store version and history data.
    * Bounds memory usage and automatically cleans up stale sessions.

```csharp
// In IRedisService
Task<bool> SetAsync<T>(string key, T value, TimeSpan? expiry = null);
// In RedisService
public async Task<bool> SetAsync<T>(string key, T value, TimeSpan? expiry = null)
{
    try
    {
        string serializedValue = JsonSerializer.Serialize(value);
        return await _database.StringSetAsync(key, serializedValue, expiry);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Error setting key {Key}", key);
        return false;
    }
}

// For example, Applying TTL to the version key
const string versionKey = "diagram:version";
long version = 5;
await _redisService.SetAsync(versionKey, version, TimeSpan.FromHours(1));
```