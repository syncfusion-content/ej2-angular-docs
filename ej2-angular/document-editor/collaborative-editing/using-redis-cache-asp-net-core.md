---
layout: post
title: Collaborative Editing in Angular Document editor control | Syncfusion
description: Learn how to enable collaborative editing in Syncfusion Angular Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Collaborative Editing
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing

Allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made. Collaborative editing can be a great way to improve efficiency, as it allows team members to work together on a document without having to wait for others to finish their changes.

## Prerequisites

The following are needed to enable collaborative editing in Document Editor.

* `SignalR`
* `Redis`

## SignalR

In collaborative editing, real-time communication is Essential<sup style="font-size:70%">&reg;</sup> for users to see each other's changes instantly. We use a real-time transport protocol to efficiently send and receive data as edits occur. For this, we utilize SignalR, which supports real-time data exchange between the client and server. SignalR ensures that updates are transmitted immediately, allowing seamless collaboration by handling the complexities of connection management and offering reliable communication channels.

To make SignalR work in a distributed environment (with more than one server instance), it needs to be configured with either Azure SignalR Service or a Redis backplane.

### Scale-out SignalR using Azure SignalR service

Azure SignalR Service is a scalable, managed service for real-time communication in web applications. It enables real-time messaging between web clients (browsers) and your server-side application(across multiple servers). 

Below is a code snippet to configure Azure SignalR in an ASP.NET Core application using the ```AddAzureSignalR``` method

```csharp
builder.Services.AddSignalR() .AddAzureSignalR("<your-azure-signalr-service-connection-string>", options => { 
    // Specify the channel name 
    options.Channels.Add("document-editor");
 }); 
```

### Scale-out SignalR using Redis

Using a Redis backplane, you can achieve horizontal scaling of your SignalR application. The SignalR leverages Redis to efficiently broadcast messages across multiple servers. This allows your application to handle large user bases with minimal latency.

In the SignalR app, install the following NuGet package:
* ` Microsoft.AspNetCore.SignalR.StackExchangeRedis`

Below is a code snippet to configure Redis backplane in an ASP.NET Core application using the ```AddStackExchangeRedis ``` method

```csharp
builder.Services.AddSignalR().AddStackExchangeRedis("<your_redis_connection_string>");
```
Configure options as needed:

The following example shows how to add a channel prefix in the ConfigurationOptions object. 

```csharp
builder.Services.AddDistributedMemoryCache().AddSignalR().AddStackExchangeRedis(connectionString, options =>
  {
      options.Configuration.ChannelPrefix = "document-editor";
  });
```

## Redis

In collaborative editing, Redis is used to store temporary data that helps queue editing operations and resolve conflicts using the `Operational Transformation` algorithm. 

All editing operations in collaborative editing are stored in the Redis cache. To prevent memory buildup, we can configure  a `SaveThreshold` limit at the application level. If the `SaveThreshold` is 100, editing operations up to twice the save threshold limit are kept in Redis per document. Once exceeded, the first 100 operations (as defined by the save threshold) are removed from the cache and automatically saved to the source input document.

The configuration and store size of the Redis cache can be adjusted based on the following considerations.

- *Storage Requirements*: A minimum of 400KB of cache memory is needed for editing a single document, with the capacity to store up to 100 editing operations. Storage needs may increase based on following factor.
    - *Images*: Increases with the number of images added to the document.
    - *Pasted content*: Depends on the size of the SFDT content.
- *Connection Limits*: Redis has a limit on concurrent connections. Choose the Redis configuration based on your user base to ensure optimal performance.

> For better performance, we recommend to have minimum `SaveThreshold` limit of 100.

## How to enable collaborative editing in client side

### Step 1: Enable collaborative editing in Document Editor

To enable collaborative editing, inject `CollaborativeEditingHandler` and set the property `enableCollaborativeEditing` to true in the Document Editor, like in the code snippet below.
```html
<!-- ./app.component.html -->
<div>
  <div id="documenteditor_titlebar" class="e-de-ctn-title" style="height:35px;"></div>
  <ejs-documenteditorcontainer #documenteditor_default [enableToolbar]="true" (created)="onCreated()"
    (contentChange)="onContentChange($event)" height="600px" style="display: block;"></ejs-documenteditorcontainer>
</div>
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { DocumentEditorContainerModule, ToolbarService, DocumentEditorContainerComponent, ContainerContentChangeEventArgs, Operation } from '@syncfusion/ej2-angular-documenteditor';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DocumentEditor, CollaborativeEditingHandler } from '@syncfusion/ej2-documenteditor';
import { TitleBar } from "./title-bar"
import { HubConnectionBuilder, HttpTransportType, HubConnectionState, HubConnection } from '@microsoft/signalr';
import { hideSpinner, showSpinner } from '@syncfusion/ej2-popups';
 
//Inject collaborative editing module.
DocumentEditorComponent.Inject(CollaborativeEditingHandler);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocumentEditorContainerModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ToolbarService],
})

@ViewChild("#documenteditor_default")
private container!: DocumentEditorContainerComponent;
private collaborativeEditingHandler!: CollaborativeEditingHandler;
private serviceUrl: string = "http://localhost:5212/";

onCreated() {
    // Enable collaborative editing in Document Editor.
    this.container.documentEditor.enableCollaborativeEditing = true;
    this.collaborativeEditingHandler = this.container.documentEditor.collaborativeEditingHandlerModule;
    this.loadDocumentFromServer();
  }
```

### Step 2: Configure SignalR to send and receive changes

To broadcast the changes made and receive changes from remote users, configure SignalR like below.

```typescript
public connection?: HubConnection;
public connectionId: string = '';

initializeSignalR = (): void => {
  // SignalR connection
  this.connection = new HubConnectionBuilder().withUrl(this.serviceUrl + 'documenteditorhub', {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets
  }).withAutomaticReconnect().build();
  //Event handler for signalR connection
  this.connection.on('dataReceived', this.onDataRecived.bind(this));

  this.connection.onclose(async () => {
    if (this.connection && this.connection.state === HubConnectionState.Disconnected) {
      alert('Connection lost. Please relod the browser to continue.');
    }
  });
}

onDataRecived(action: string, data: any) {
  if (this.collaborativeEditingHandler) {
    debugger;
    if (action == 'connectionId') {
      //Update the current connection id to track other users
      this.connectionId = data;
    } else if (this.connectionId != data.connectionId) {
      if (this.titleBar) {
        if (action == 'action' || action == 'addUser') {
          //Add the user to title bar when user joins the room
          this.titleBar.addUser(data);
        } else if (action == 'removeUser') {
          //Remove the user from title bar when user leaves the room
          this.titleBar.removeUser(data);
        }
      }
    }
    //Apply the remote action in DocumentEditor
    this.collaborativeEditingHandler.applyRemoteAction(action, data);
  }
}

public connectToRoom(data: any) {
  try {
    if (this.connection) {
      // start the connection.
      this.connection.start().then(() => {
        // Join the room.
        if (this.connection) {
          this.connection.send('JoinGroup', { roomName: data.roomName, currentUser: data.currentUser });
        }
        console.log('server connected!!!');
      });
    }
  } catch (err) {
    console.log(err);
    //Attempting to reconnect in 5 seconds
    setTimeout(this.connectToRoom, 5000);
  }
};
```

### Step 3: Join SignalR room while opening the document

When opening a document, we need to generate a unique ID for each document. These unique IDs are then used to create rooms using SignalR, which facilitates sending and receiving data from the server.

```typescript

openDocument(responseText: string, roomName: string): void {
  showSpinner(document.getElementById('container') as HTMLElement);

  let data = JSON.parse(responseText);
  if (this.container) {

    this.collaborativeEditingHandler = this.container.documentEditor.collaborativeEditingHandlerModule;
    //Update the room and version information to collaborative editing handler.
    this.collaborativeEditingHandler.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/CollaborativeEditing/');

    //Open the document
    this.container.documentEditor.open(data.sfdt);

    setTimeout(() => {
      if (this.container) {
        // connect to server using signalR
        this.connectToRoom({ action: 'connect', roomName: roomName, currentUser: this.container.currentUser });
      }
    });
  }
  hideSpinner(document.getElementById('container') as HTMLElement);
}
```

### Step 4: Broadcast current editing changes to remote users

Changes made on the client-side need to be sent to the server-side to broadcast them to other connected users. To send the changes made to the server, use the method shown below from the document editor using the `contentChange` event.

```typescript
onContentChange = (args: ContainerContentChangeEventArgs) => {
 if (this.collaborativeEditingHandler) {
   //Send the editing action to server
   this.collaborativeEditingHandler.sendActionToServer(args.operations as Operation[])
 }
}
```

## How to enable collaborative editing in ASP.NET Core

### Step 1: Configure SignalR in ASP.NET Core 

We are using Microsoft SignalR to broadcast the changes. Please add the following configuration to your application's Program.cs file.

```csharp
    using Microsoft.Azure.SignalR;
    .....
    builder.Services.AddSignalR();
    .....
    .....
    .....
    app.MapHub<DocumentEditorHub>("/documenteditorhub");
    .....
    .....
```

### Step 2: Configure SignalR hub to create room for collaborative editing session

To manage groups for each document, create a folder named "Hub" and add a file named "DocumentEditorHub.cs" inside it. Add the following code to the file to manage SignalR groups using room names.

Join the group by using unique id of the document by using `JoinGroup` method.

```csharp
static Dictionary<string, ActionInfo> userManager = new Dictionary<string, ActionInfo>();
    internal static Dictionary<string, List<ActionInfo>> groupManager = new Dictionary<string, List<ActionInfo>>();

    // Join to the specified room name
    public async Task JoinGroup(ActionInfo info)
    {
        if (!userManager.ContainsKey(Context.ConnectionId))
        {
            userManager.Add(Context.ConnectionId, info);
        }
        info.ConnectionId = Context.ConnectionId;
        //Add the current connected use to the specified group
        await Groups.AddToGroupAsync(Context.ConnectionId, info.RoomName);
        if (groupManager.ContainsKey(info.RoomName))
        {
            await Clients.Caller.SendAsync("dataReceived", "addUser", groupManager[info.RoomName]);
        }
        lock (groupManager)
        {
            if (groupManager.ContainsKey(info.RoomName))
            {
                groupManager[info.RoomName].Add(info);
            }
            else
            {
                List<ActionInfo> actions = new List<ActionInfo>
                {
                    info
                };
                groupManager.Add(info.RoomName, actions);
            }
        }
       // Notify other users in the group about new user joined the collaborative editing session.
        Clients.GroupExcept(info.RoomName, Context.ConnectionId).SendAsync("dataReceived", "addUser", info);
    }

```

Handle user disconnection using SignalR.

```csharp
//Handle disconnection from group.
    public override Task OnDisconnectedAsync(Exception? e)
    {
        string roomName = userManager[Context.ConnectionId].RoomName;
        if (groupManager.ContainsKey(roomName))
        {
            groupManager[roomName].Remove(userManager[Context.ConnectionId]);

            if (groupManager[roomName].Count == 0)
            {
                groupManager.Remove(roomName);
//If all user disconnected from current room. Auto save the change to source document.
CollaborativeEditingController.UpdateOperationsToSourceDocument(roomName, “<<documentpath>>”, false);
            }
        }

        if (userManager.ContainsKey(Context.ConnectionId))
        {
            //Notify other user in the group about user exit the collaborative editing session
            Clients.OthersInGroup(roomName).SendAsync("dataReceived", "removeUser", Context.ConnectionId);
            Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
            userManager.Remove(Context.ConnectionId);
        }
        return base.OnDisconnectedAsync(e);
    }

```

### Step 3: Configure Redis cache connection string in application level

Configure the Redis that stores temporary data for the collaborative editing session. Provide the Redis connection string in `appsettings.json` file.

```json
.....
"ConnectionStrings": {
  "RedisConnectionString": "<<Your Redis connection string>>"
}
.....

```

### Step 4: Configure Web API actions for collaborative editing

#### Import File

1.	When opening a document, check the Redis cache for pending operations and retrieve them for the collaborative editing session.
2.	If pending operations exist, apply them to the WordDocument instance using the `UpdateActions` method before converting it to the SFDT format.

```csharp
public string ImportFile([FromBody] FileInfo param)
 {
     .....
     .....
     DocumentContent content = new DocumentContent();

     .....
     //Get source document from database/file system/blob storage
     WordDocument document = GetSourceDocument(param.fileName);
     .....
     //Get the temporary operations
     List<ActionInfo> actions = await GetPendingOperations(param.fileName, 0, -1);
     if(actions!=null && actions.Count > 0)
     {
         //Apply temporary data to the document.
         document.UpdateActions(actions);
     }
     string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
     content.version = 0;
     content.sfdt = json;
     return Newtonsoft.Json.JsonConvert.SerializeObject(content);
 }

```

#### Update editing records to Redis cache.

Each edit operation performed by the user is sent to the server and pushed into a Redis list data structure. Each operation is assigned a version number upon insertion into Redis.

After inserting the records into the server, the position of the current editing operation must be transformed relative to any previous editing operations not yet synced with the client using the `TransformOperation` method to resolve any potential conflicts with the help of the `Operational Transformation` algorithm.

Once the conflict is resolved, the current operation is broadcast to all connected users within the group.

```csharp
public async Task<ActionInfo> UpdateAction([FromBody] ActionInfo param)
{
    try
    {
        ActionInfo modifiedAction = AddOperationsToCache(param);
        //After transformation broadcast changes to all users in the gropu
        await _hubContext.Clients.Group(param.RoomName).SendAsync("dataReceived", "action", modifiedAction);
        return modifiedAction;
    }
    catch
    {
        return null;
    }
}

private ActionInfo AddOperationsToCache(ActionInfo action)
 {
     int clientVersion = action.Version;
     string insertScript = "-------"
     …………
     …………
     …………
     ………… 

    IDatabase database = _redisConnection.GetDatabase();
    // Define the keys for Redis operations based on the action's room name
    RedisKey[] keys = new RedisKey[] { action.RoomName + CollaborativeEditingHelper.VersionSuffix, action.RoomName, action.RoomName + CollaborativeEditingHelper.RevisionSuffix };
    // Serialize the action and prepare values for the Redis script
    RedisValue[] values = new RedisValue[] { JsonConvert.SerializeObject(action), clientVersion.ToString(), CollaborativeEditingHelper.SaveThreshold.ToString() };
    // Execute the Lua script in Redis and store the results
    RedisResult[] results = (RedisResult[])await database.ScriptEvaluateAsync(insertScript, keys, values);

    List<ActionInfo> previousOperations = ((RedisResult[])results[1]).Select(value => JsonConvert.DeserializeObject<ActionInfo>(value.ToString())).ToList();
     previousOperations.ForEach(op => op.Version = ++clientVersion);
     if (previousOperations.Count > 1)
     {
        // Set the current action to the last operation in the list
        action = previousOperations.Last();
        // Transform operations that have not been transformed yet
        previousOperations.Where(op => !op.IsTransformed).ToList().ForEach(op => CollaborativeEditingHandler.TransformOperation(op, previousOperations));
     }
     action = actions[actions.Count - 1];
     action.Version = updateVersion;
     //Return the transformed operation to broadcast it to other clients.
     return action;
 }

```

#### Add Web API to get previous operation as a backup to get lost operations

On the client side, messages broadcast using SignalR might be received out of order or lost due to network issues. In such cases, we need a backup method to retrieve missing operations from Redis. By using the following method, we can retrieve all operations performed after the last successful client-synchronized version and return any missing operations to the requesting client.

```csharp
public async Task<string> GetActionsFromServer(ActionInfo param)
  {
      try
      {
          // Initialize necessary variables from the parameters and helper class
          int saveThreshold = CollaborativeEditingHelper.SaveThreshold;
          string tableName = param.RoomName;
          int lastSyncedVersion = param.Version;
          int clientVersion = param.Version;

          // Retrieve the database connection
          IDatabase database = _redisConnection.GetDatabase();

          // Fetch actions that are effective and pending based on the last synced version
          List<ActionInfo> actions = await GetEffectivePendingVersion(tableName, lastSyncedVersion);

          // Increment the version for each action sequentially
          actions.ForEach(action => action.Version = ++clientVersion);

          // Filter actions to only include those that are newer than the client's last known version
          actions = actions.Where(action => action.Version > lastSyncedVersion).ToList();

          // Transform actions that have not been transformed yet
          actions.Where(action => !action.IsTransformed).ToList()
              .ForEach(action => CollaborativeEditingHandler.TransformOperation(action, actions));

          // Serialize the filtered and transformed actions to JSON and return
          return Newtonsoft.Json.JsonConvert.SerializeObject(actions);
      }
      catch (Exception ex)
      {
          // In case of an exception, return an empty JSON object
          return "{}";
      }
  }

```

Full version of the code discussed about can be found in below GitHub location.

GitHub Example: [`Collaborative editing examples`](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing)
