---
layout: post
title: Angular Gantt Chart with Real-time Updates Using SignalR | Syncfusion
description: Real-time Syncfusion Angular Gantt Chart updates with ASP.NET Core SignalR. Sync tasks, progress, and changes instantly across users without page reloads.
platform: ej2-angular
control: SignalR
documentation: ug
domainurl: ##DomainURL##
---

# Connecting Real-Time Data to Angular Gantt Chart Using SignalR

The Syncfusion Angular Gantt Chart component supports real-time data binding using **SignalR**, a powerful library for bi-directional communication between servers and clients. This approach enables live data updates without page refreshes, making it ideal for applications that require instant information delivery such as stock tickers, live dashboards, and real-time notifications.

**What is SignalR?**

SignalR is an open-source .NET library that simplifies adding real-time web functionality to applications. It automatically handles the best transport method (WebSockets, Server-Sent Events, or Long Polling) and provides a high-level API for server-to-client and client-to-server communication. SignalR enables persistent two-way connections between clients and servers, allowing instant data synchronization without polling.

**Key Benefits of SignalR**

- **Real-Time Communication**: Establish persistent connections for instant data updates across all connected clients.
- **Bidirectional**: Support both server-to-client (broadcasting) and client-to-server (commands) communication.
- **Automatic Transport Selection**: Intelligently choose the best transport protocol (WebSockets, SSE, Long Polling) based on browser and server capabilities.
- **Scalable Broadcasting**: Efficiently broadcast updates to multiple clients simultaneously using SignalR groups.
- **Built-in Reconnection**: Automatically handles client reconnection with exponential back off retry logic.
- **No Page Refresh Required**: Update UI dynamically without reloading the page.
- **Cross-Platform**: Works across browsers, mobile devices, and desktop applications.

## Prerequisites 

Ensure the following software and packages are installed before proceeding: 

| Software/Package | Version | Purpose |
|------------------|---------|---------|
|Syncfusion License Key | Latest | Required for Syncfusion components|
|.NET SDK | 8.0 or later | Backend development with SignalR |
|Node.js & Angular CLI | 18+ | Frontend development with Angular |
|Visual Studio / VS Code | Latest | IDE for development |
|Basic knowledge of Angular, .NET Core, and SignalR  | N/A | Understanding the integration |

## Setting Up SignalR with Real-Time Data

### Step 1: Create a New Angular Project

Before proceeding, ensure that you have completed the base Angular Gantt Chart setup as described in the [Getting Started guide](https://ej2.syncfusion.com/angular/documentation/gantt/getting-started). The guide provides comprehensive instructions for Angular CLI setup, package installation, CSS imports, module injection, and basic component configuration.

```bash
ng new gantt-signalr   
cd gantt-signalr 
```

### Step 2: Install SignalR Client Package

Install the SignalR client for Angular. 

```bash
npm install @microsoft/signalr --save
```
### Step 3: Register Syncfusion License

Add the Syncfusion license key in `app.component.ts`: 

```ts
app.component.ts 
 
import { Component } from '@angular/core';   
import { registerLicense } from '@syncfusion/ej2-base';   

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
})   

export class AppComponent {   
  constructor() {
    registerLicense('YOUR_SYNC_FUSION_LICENSE_KEY');
  }   
}
```

### Step 4: Configure the Gantt Chart with Events

To enable real-time collaboration, you need to integrate the Syncfusion Gantt Chart component into your Angular application and bind two important lifecycle events: created and actionComplete.

```html
<ejs-gantt id="ganttDefault" (actionComplete)="actionComplete($event)" (created)="created()">   
    <!-- Gantt configuration here (e.g., dataSource, taskFields) -->   
</ejs-gantt> 
```

### Step 5: Implement SignalR Connection

In `app.component.ts`, import SignalR and configure the connection using the following lifecycle events:

**created Event**

The `created` event establishes the SignalR connection to the backend hub. Initializing the connection here ensures that the real-time communication channel is ready as soon as the Gantt Chart component is rendered.

**actionComplete Event**

The `actionComplete` event is triggered whenever a user performs an action in the Gantt Chart, such as: 

- Adding a new task
- Editing an existing task
- Deleting a task
- Saving changes (in edit mode)

Inside the `actionComplete` event handler, check the `requestType` property of the event arguments to detect meaningful changes (add, edit, save, delete). When such an action occurs, invoke the SignalR hub method to broadcast a refresh notification to all connected clients, ensuring real-time synchronization across all users.

```ts
app.component.ts

import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})   

export class AppComponent {   

  public connection: HubConnection;
  
  created() {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7297/chatHub', {
        withCredentials: true
      })
      .configureLogging(LogLevel.Information)
      .build();
    this.connection.on('ReceiveMessage', (message: string) => {
      if (message === 'refreshPages') {
        this.refreshGantt(); // Implement refresh logic
      }
    });
    this.connection.start()
      .then(() => {
        console.log('SignalR connection established');
        return this.connection.invoke('SendMessage', 'refreshPages');
      })
      .catch(err => console.error('SignalR Error: ', err));
  }

  actionComplete(args: any) {
    if (args.requestType === 'save' || args.requestType === "add" || args.requestType === 'delete') {
      this.connection.invoke('SendMessage', "refreshPages")
        .catch((err: Error) => {
          console.error(err.toString());
        });
    }
  }

  refreshGantt() {   
    // Logic to refresh Gantt data (e.g., rebind dataSource)
    console.log('Refreshing Gantt...');
  }
}
```

- **HubConnectionBuilder**: Configures and creates the SignalR connection to the backend hub. It allows you to specify the hub URL, authentication options (such as credentials), logging level, and reconnection behavior. Once configured, the `.build()` method creates the `HubConnection` instance that manages communication with the server.

- **on()**: Registers a client-side listener for messages broadcast by the server. In this implementation, it listens for the `ReceiveMessage` event sent from the hub. When a message is received (e.g., "refreshPages"), the callback function executes and triggers a refresh of the Gantt Chart to reflect the latest changes made by any user.

- **invoke()**: Allows the client to call a method on the server-side hub. In this implementation, it invokes the `SendMessage` method on the hub to broadcast a refresh notification to all connected clients whenever a significant change occurs in the Gantt Chart (e.g., adding, editing, or deleting a task).


## Create the Background Service

### Step 1: Create ASP.NET Core Web API Project

Create an ASP.NET Core Web API project to host the SignalR hub. Refer to the [Getting started with ASP.NET Core Gantt Control](https://ej2.syncfusion.com/aspnetcore/documentation/gantt/getting-started) for additional setup guidance.

### Step 2: Implementing the SignalR Hub

Create a `Hubs` folder in the project root and add `ChatHub.cs`:

```csharp
ChatHub.cs

using Microsoft.AspNetCore.SignalR;
namespace GanttSignalRBackend.Hubs   
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
```

The `SendMessage` method broadcasts a message (e.g., "refreshPages") to all connected clients whenever a change occurs in the Gantt Chart. 

### Step 3: Configure SignalR Services and CORS

Update `Program.cs` to register SignalR services and configure CORS:

```csharp
using GanttSignalRBackend.Hubs; // Adjust namespace if needed
var builder = WebApplication.CreateBuilder(args);
// Add SignalR services
builder.Services.AddSignalR();
// Enable CORS   
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("https://localhost:4200") // Angular dev server URL
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Use CORS
app.UseCors();

// Map SignalR hub   
app.MapHub<ChatHub>("/chatHub");

app.Run();
```

This configuration registers SignalR services and configures CORS to allow connections from the Angular application.

## Configure Syncfusion Angular Gantt with SignalR 

### Step 1: Install and Configure Angular Gantt Components

The Syncfusion Angular Gantt Chart package (@syncfusion/ej2-angular-gantt) has already been installed in your project via npm. 

To make the Gantt Chart component available throughout your Angular application, you need to import the GanttModule and register it in your module file. 

Open src/app/app.module.ts (or your main feature module if you're using a modular structure) and update it as follows.

```ts
app.module.ts 
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GanttModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
```


```CSS
/* Add CSS styles in styles.css (e.g., for Tailwind theme).*/
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
/* Add other Syncfusion styles as needed */
```
### Step 2: Update the Angular Gantt Component

Update the sample to include a fully configured Syncfusion Gantt Chart with sample data binding. This step defines the basic structure of the Gantt component, including data source, task fields, and columns.

```html
app.component.html
 
<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [taskFields]="taskFields"
           (actionComplete)="actionComplete($event)" (created)="created()">
    <e-columns>
        <e-column field='TaskID' headerText='Task ID'></e-column>
        <e-column field='TaskName' headerText='Task Name'></e-column>
        <!-- Add more columns --> 
    </e-columns>
</ejs-gantt> 
```

### Step 3: Implement Real-Time Refresh

To ensure all connected users see the latest project state immediately after any change, implement the refreshGantt() method in your Angular component. This method is responsible for updating the Gantt Chart’s data when a refresh notification is received from SignalR.

```ts
refreshGantt() {
  // If data is from API, fetch again: this.ganttInstance.dataSource = await fetchData();
  this.ganttInstance.refresh(); // Refresh UI
} 
```
## How Real-Time Sync Works

The integration enables seamless, instant updates across multiple users. The process follows this flow: 

**1. User Action Triggers Event**

When a user makes a change such as editing, adding, or deleting a task in the Gantt Chart, the `actionComplete` event is automatically triggered.

**2. Broadcast the Change**

Inside the `actionComplete` handler, the client checks the `requestType` property (e.g., add, edit, save, delete). If a meaningful change has occurred, the client calls `invoke('SendMessage', 'refreshPages')` on the SignalR connection. This sends a lightweight notification to the server-side hub.

**3. Server Broadcasts to All Clients**

Once the SignalR hub receives the message, it uses `Clients.All.SendAsync("ReceiveMessage", "refreshPages")` to push the notification to all connected clients.

**4. Clients Refresh Automatically**

When each client receives the `ReceiveMessage` event, it checks if the message is "refreshPages". If so, the client executes the `refreshGantt()` method. The Gantt Chart then updates its data (either by re-fetching from the API or refreshing the UI), and the latest project state appears instantly for all users.

This mechanism ensures that collaborative changes are reflected in real time without requiring manual page refreshes, providing a smooth and responsive multi-user experience.

## Running the Application 

**Step 1: Build the Service** 

```bash
dotnet build
```

**Step 2: Run the Service**

```bash
dotnet run
``` 

The backend starts on `https://localhost:7297`.

**Step 3: Run the Angular project**  

```bash
ng serve
```

The Angular application will be accessible at http://localhost:4200. 

**Step 4: Test Real-Time Sync**

- Open http://localhost:4200 in two separate browser tabs.
- In the first tab, perform an action such as adding, editing, or deleting a task. 
- Observe that the second tab automatically updates with the changes in real time without requiring a manual page refresh.

The application now provides a collaborative project management tool. Experiment with adding database persistence (e.g., using Entity Framework) or advanced features like user-specific updates.

> Refer to the complete working sample in the [GitHub repository](https://github.com/SyncfusionExamples/How-to-integrate-Syncfusion-Angular-GanttChart-with-SignalR).

## Summary

This guide demonstrates building a real-time collaborative Gantt Chart application using SignalR with Angular:

- Configure SignalR client in Angular using `@microsoft/signalr` package
- Create ASP.NET Core Web API with SignalR hub for bidirectional communication
- Handle `created` event to establish SignalR connection on component initialization
- Use `actionComplete` event to broadcast changes across all connected users
- Configure CORS to allow Angular-to-backend communication
- Implement troubleshooting strategies for common connection and synchronization issues

This architecture enables teams to collaborate seamlessly with instant visibility of project changes and can be extended with database persistence, user-specific notifications, and conflict resolution features.

## Reference Links

- [Introduction to SignalR](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction)
- [Angular Gantt Chart Component](https://ej2.syncfusion.com/angular/documentation/gantt/getting-started)
- [Gantt API Reference](https://ej2.syncfusion.com/angular/documentation/api/gantt)

## Troubleshooting Common SignalR + Angular Gantt Issues

This section covers the most frequent problems developers encounter when integrating SignalR with the Angular Gantt Chart component for real-time collaboration.

| # | Problem | Possible Causes | Solution |
|---|---------|----------------|----------|
| 1 | "Failed to connect to SignalR hub" or connection stays in "Connecting" state | CORS policy blocking, incorrect hub URL, backend not running, firewall/proxy blocking WebSocket | Verify CORS is properly configured in `Program.cs` with `AllowCredentials()`. Ensure the hub URL matches exactly (e.g., `https://localhost:7297/chatHub`). Check browser console → Network tab for 400/403/502 errors on WebSocket connection. Ensure the backend is running before starting the Angular app. |
| 2 | "CORS policy: No 'Access-Control-Allow-Origin' header is present" | CORS not configured or incorrect origin URL in backend | In `Program.cs`, ensure `WithOrigins("https://localhost:4200")` matches your Angular dev server URL exactly (including protocol and port). Add `.AllowCredentials()` to the policy. Call `app.UseCors()` before `app.MapHub()`. |
| 3 | "Cannot read properties of undefined (reading 'invoke')" | SignalR connection not established before calling `invoke()`, connection object is null | Check that `this.connection` is not null/undefined before calling `invoke()`. Ensure `created()` event has completed and connection is started before `actionComplete()` tries to invoke methods. Add error handling: `if (!this.connection) return;` |
| 4 | Changes made by one user don't appear for other users | Hub not broadcasting to all clients, clients not in the same group, message name mismatch | Verify hub method uses `Clients.All.SendAsync()` or the appropriate group targeting. Ensure the message name matches on both send and receive (e.g., "ReceiveMessage"). Check that all clients are listening with `connection.on('ReceiveMessage', ...)`. |
| 5 | Infinite loop: Gantt keeps refreshing continuously | `refreshGantt()` triggering `actionComplete`, which triggers another refresh | Prevent refresh loops by checking the source of the action. Add a flag to prevent recursive refreshes: `if (this.isRefreshing) return; this.isRefreshing = true; /* refresh */ this.isRefreshing = false;`. Or filter `actionComplete` to only respond to user-initiated changes. |

### Quick Diagnostic Steps

When troubleshooting SignalR issues with Angular Gantt, follow these steps systematically:

**1. Verify Backend is Running**
```bash
# Ensure your .NET backend is running
dotnet run
# Look for output: "Now listening on: https://localhost:7297"
```

**2. Check Browser Console**
- Open Developer Tools (F12) → Console tab
- Look for SignalR connection messages (success or errors)
- Check for CORS errors, connection failures, or JavaScript errors

**3. Inspect Network Traffic**
- Open Developer Tools → Network tab → Filter by WS (WebSocket)
- Look for connection to your hub endpoint (e.g., `/chatHub`)
- Status should show "101 Switching Protocols" for successful WebSocket upgrade
- If you see repeated XHR requests instead, WebSocket fallback to long polling occurred

### Common Solutions Summary

**Most real-time issues in Angular + SignalR setups are solved by:**

1. **Correct CORS Configuration**: Ensure `AllowCredentials()` is set and the origin URL matches exactly (including protocol and port)
2. **Proper URL Construction**: Use absolute URLs with correct protocol (`https://` not `http://` for production)
3. **Connection State Checking**: Always verify connection state before invoking methods
4. **Message Name Matching**: Ensure server-side `SendAsync("MessageName")` matches client-side `on('MessageName')`
5. **WebSocket Support**: Verify WebSocket protocol is enabled on your hosting environment
6. **Error Handling**: Implement comprehensive try-catch blocks and error logging
7. **Proper Disposal**: Clean up connections in `ngOnDestroy()` to prevent memory leaks
