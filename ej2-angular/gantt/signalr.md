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
    registerLicense('YOUR_SYNCFUSION_LICENSE_KEY');
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

The `actionComplete` event is triggered after add, edit, and delete operations are completed in the Gantt Chart. By checking the `requestType` property, you can identify the performed operation and send the corresponding task data to the SignalR hub. Connected clients receive the notification and apply the appropriate CRUD operation, ensuring real-time synchronization across all Gantt Chart instances.

```ts
app.component.ts

import { Component, ViewChild, OnInit } from '@angular/core';
import { GanttAllModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { RouterOutlet } from '@angular/router';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('gantt')
  public ganttObj!: GanttComponent;
  public data!: Object;
  public taskSettings!: object;
  public columns!: object[];
  public editSettings!: object;
  public toolbar!: string[];
  private connection!: signalR.HubConnection;
  private connectionId!: string;
  private toRefreshGantt  = false;
  private projectId = "1"; // dynamic later (route, API, etc.)
  ngOnInit(): void {
    // DataManager
    this.data = new DataManager({
      url: 'https://localhost:xxxx/Home/DataSource', // Configure server-side port number
      batchUrl: 'https://localhost:xxxx/Home/BatchUpdate',
      adaptor: new UrlAdaptor(),
      crossDomain: true
    });
    this.taskSettings = {
      id: 'taskId',
      name: 'taskName',
      startDate: 'startDate',
      duration: 'duration',
      progress: 'progress',
      dependency: 'predecessor',
      parentID: 'parentID'
    };
    this.columns = [
      { field: 'taskId', headerText: 'ID', width: 80 },
      { field: 'taskName', headerText: 'Task Name', width: 150 },
      { field: 'startDate' },
      { field: 'duration' },
      { field: 'progress' }
    ];
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true
    };
    this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
    // SignalR setup
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:xxxx/ganttHub") // Configure server-side port number
      .withAutomaticReconnect()
      .build();
  }
  
created() {

  this.connection.on("ReceiveTaskChange", (message: any) => {

  console.log("SignalR connection established successfully", message);

  const { projectId, type, data, sender } = message;

    if (projectId !== this.projectId) return;
    if (sender === this.connectionId) return;

    this.toRefreshGantt  = true;

    switch (type) {
      case 'add':
        this.ganttObj.addRecord(data);
        break;
      case 'update':
        this.ganttObj.updateRecordByID(data);
        break;
      case 'delete':
        this.ganttObj.deleteRecord(data.taskId);
        break;
    }
  });

  // IMPORTANT: make sequential flow
  this.connection.start()
    .then(() => {
      this.connectionId = this.connection.connectionId!;
      return this.connection.invoke("JoinProject", this.projectId); // RETURN this promise
    })
    .then(() => {
      console.log("Joined group successfully");
    })
    .catch(err => console.error(err));
}
  // Trigger when user changes data
  actionComplete(args: any) {
    
    if (this.toRefreshGantt  && (args.requestType == "save" || args.requestType == "add" || 
args.requestType == "delete")) {
      this.toRefreshGantt  = false;
      return;
    }
    switch (args.requestType) {
      case 'save':
        this.sendMessage('update', args.data.taskData);
        break;
      case 'add':
        this.sendMessage('add', args.newTaskData);
        break;
      case 'delete':
        this.sendMessage('delete', args.data[0].taskData);
        break;
    }
  }
 
 
// Global sender
  private sendMessage(type: string, data: any) {
    const payload = {
      ProjectId: this.projectId.toString(),
      Type: type,
      Data: data,
      Sender: this.connectionId
    };
    // IMPORTANT → pass TWO parameters
    this.connection.invoke(
      'BroadCastTaskChange',
      this.projectId.toString(),  // routing
      payload          // data
    ).catch(err => console.error(err));
  }
}
```

- **HubConnectionBuilder**: Configures and creates the SignalR connection to the backend hub. It allows you to specify the hub URL, authentication options (such as credentials), logging level, and reconnection behavior. Once configured, the `.build()` method creates the `HubConnection` instance that manages communication with the server.

- **on()**: Registers a client-side listener for messages broadcast by the server. In this implementation, it listens for the `ReceiveTaskChange` event. Based on the received operation type (add, update, or delete), the corresponding Gantt Chart method is invoked to synchronize task changes across connected clients.

- **invoke()**: Allows the client to call a method on the server-side hub. In this implementation, it invokes the `BroadCastTaskChange` method and sends a payload containing the operation type, task data, and sender connection ID to synchronize task changes across connected clients.

**Handling add operations**

When a user adds a task, the `actionComplete` event is triggered with a request type of add. The newly created task data is sent to the SignalR hub using the `BroadCastTaskChange` method.
When other connected clients receive the notification, the task is inserted into their Gantt Chart instances by calling:

```ts
this.ganttObj.addRecord(data);
```

**Handling edit operations**

When a task is modified, the `actionComplete` event is triggered with a request type of save. The updated task data is broadcast through SignalR.
Upon receiving the update notification, connected clients update the corresponding task using:

```ts
this.ganttObj.updateRecordByID(data);
```

**Handling delete operations**

When a task is deleted, the deleted task information is sent to the SignalR hub.
Connected clients remove the corresponding task record using:

```ts
this.ganttObj.deleteRecord(data.taskId);
```

**Preventing Duplicate Broadcasts**

To avoid broadcast loops during synchronization, incoming SignalR updates are applied locally without re-broadcasting them. The implementation uses the **toRefreshGantt** flag and sender connection ID validation to ensure that each add, update, or delete operation is processed only once across all connected Gantt Chart instances.

## Create the Background Service

### Step 1: Create ASP.NET Core Web API Project

Create an ASP.NET Core Web API project to host the SignalR hub. Refer to the [Getting started with ASP.NET Core Gantt Control](https://ej2.syncfusion.com/aspnetcore/documentation/gantt/getting-started) for additional setup guidance.

### Step 2: Implementing the SignalR Hub

Create a `Hubs` folder in the project root and add `GanttHub.cs`:

```csharp
GanttHub.cs

using Microsoft.AspNetCore.SignalR;
namespace GanttSignalRBackend.Hubs
{
    public class GanttHub : Hub
    {
        public async Task JoinProject(string projectId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, projectId);
        }
        public async Task BroadCastTaskChange(string projectId, TaskChange change)
        {
            await Clients.OthersInGroup(projectId)
                         .SendAsync("ReceiveTaskChange", change);
        }
    }
    public class TaskChange
    {
        public string ProjectId { get; set; }
        public string Type { get; set; }
        public object Data { get; set; }
        public string Sender { get; set; }
    }
}
```

The `BroadCastTaskChange` method broadcasts task changes to other connected clients in the specified SignalR group. The task change data is sent through the `ReceiveTaskChange` event, allowing connected Gantt Chart instances to remain synchronized.

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
app.MapHub<GanttHub>("/ganttHub");

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

## How Real-Time Sync Works

The integration enables seamless, instant updates across multiple users. The process follows this flow: 

**1. User Action Triggers Event**

When a user makes a change such as editing, adding, or deleting a task in the Gantt Chart, the `actionComplete` event is automatically triggered.

**2. Broadcast the Change**

Inside the `actionComplete` handler, the client checks the `requestType` property (e.g., add, edit, save, delete). If a meaningful change has occurred, the client calls `invoke('BroadCastTaskChange', 'JoinProject')` on the SignalR connection. This sends a lightweight notification to the server-side hub.

**3. Server Broadcasts to All Clients**

Once the SignalR hub receives the message, it uses `Clients.All.SendAsync("ReceiveMessage", "JoinProject")` to push the notification to all connected clients.

**4. Connected Clients Apply the Operation**

Each client receives the notification and applies the corresponding operation directly to its Gantt Chart instance.

| Operation | Gantt Method         |
| --------- | -------------------- |
| Add       | `addRecord()`        |
| Update    | `updateRecordByID()` |
| Delete    | `deleteRecord()`     |

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
- Observe that the task is automatically added, updated, or removed in the second tab as corresponding operations are synchronized through SignalR.

The application now provides a collaborative project management tool. Experiment with adding database persistence (e.g., using Entity Framework) or advanced features like user-specific updates.

> Refer to the complete working sample in the [GitHub repository](https://github.com/SyncfusionExamples/How-to-integrate-Syncfusion-Angular-GanttChart-with-SignalR).

## Summary

This guide demonstrates building a real-time collaborative Gantt Chart application using SignalR with Angular:

- Configure SignalR client in Angular using `@microsoft/signalr` package
- Create ASP.NET Core Web API with SignalR hub for bidirectional communication
- Handle `created` event to establish SignalR connection on component initialization
- Use `actionComplete` event to:
  - Broadcast CRUD operation payloads through SignalR.
  - Synchronize records using:
    - `addRecord()`
    - `updateRecordByID()`
    - `deleteRecord()`
  - Prevent duplicate processing using sender tracking and broadcast suppression.
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
| 1 | "Failed to connect to SignalR hub" or connection stays in "Connecting" state | CORS policy blocking, incorrect hub URL, backend not running, firewall/proxy blocking WebSocket | Verify CORS is properly configured in `Program.cs` with `AllowCredentials()`. Ensure the hub URL matches exactly (e.g., `https://localhost:7297/ganttHub`). Check browser console → Network tab for 400/403/502 errors on WebSocket connection. Ensure the backend is running before starting the Angular app. |
| 2 | "CORS policy: No 'Access-Control-Allow-Origin' header is present" | CORS not configured or incorrect origin URL in backend | In `Program.cs`, ensure `WithOrigins("https://localhost:4200")` matches your Angular dev server URL exactly (including protocol and port). Add `.AllowCredentials()` to the policy. Call `app.UseCors()` before `app.MapHub()`. |
| 3 | "Cannot read properties of undefined (reading 'invoke')" | SignalR connection not established before calling `invoke()`, connection object is null | Check that `this.connection` is not null/undefined before calling `invoke()`. Ensure `created()` event has completed and connection is started before `actionComplete()` tries to invoke methods. Add error handling: `if (!this.connection) return;` |
| 4 | Changes made by one user don't appear for other users | Hub not broadcasting to all clients, clients not in the same group, message name mismatch | Verify hub method uses `Clients.All.SendAsync()` or the appropriate group targeting. Ensure the message name matches on both send and receive (e.g., "ReceiveMessage"). Check that all clients are listening with `connection.on('ReceiveMessage', ...)`. |
| 5 | Infinite loop: CRUD operations are repeatedly broadcast between clients | Remote CRUD operations triggering `actionComplete`. Missing suppression logic. | Prevent recursive broadcasts by tracking operations that originate from SignalR. Use a flag such as `toRefreshGantt` to skip broadcasting when a synchronized operation is being applied locally. Additionally, include the sender's SignalR connection ID in the payload and ignore messages originating from the current client.  |

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
- Look for connection to your hub endpoint (e.g., `/ganttHub`)
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

