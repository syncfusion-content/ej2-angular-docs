---
title: "Collaborative Editing (preview)"
component: "DocumentEditor"
description: "Learn how to enable collaborative editing"
---

# Collaborative Editing (preview)

Allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made. Collaborative editing can be a great way to improve efficiency, as it allows team members to work together on a document without having to wait for others to finish their changes.

> Note: Collaborative editing support is currently in preview mode only and is not yet ready for production environments.

## Prerequisites

Following things are needed to enable collborative editing in Document Editor

* `SignalR`
* `Microsoft SQL Server`

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

## Step2: Configure SignalR to send and receive changes

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

### Step 5: Broadcast current editing changes to remote users

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

### Step 3: Configure Microsoft SQL database connection string in application level

Configure the SQL database that stores temporary data for the collaborative editing session. Provide the SQL database connection string in `appsettings.json` file.

```json
.....
"ConnectionStrings": {
  "DocumentEditorDatabase": "<SQL server connection string>"
}
.....

```
