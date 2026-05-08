---
layout: post
title: Collaborative Editing Configuration in Angular Diagram | Syncfusion
description: Checkout and learn to configure SignalR and Redis for real-time collaborative editing in Syncfusion Angular Diagram.
control: Diagram
documentation: ug
platform: ej2-angular
domainurl: ##DomainURL##
---

# SignalR hub configuration in Angular application

## Overview

This guide explains how to configure SignalR Hub in an Angular application for real-time collaborative diagram editing.

## Prerequisites

* [System requirements for Angular components](https://ej2.syncfusion.com/angular/documentation/system-requirement)

## How to create Angular sample

To create an Angular application, follow the steps outlined in the Angular [Getting Started](https://ej2.syncfusion.com/angular/documentation/diagram/getting-started) documentation.

## How to add packages in the Angular application

Open the terminal and install the following packages using npm.

* @microsoft/signalr
* @syncfusion/ej2-angular-diagrams

## Configure SignalR service in Angular application

To enable real-time collaboration, configure SignalR HubConnection in your Angular component as follows:

* Initialize the `HubConnection` within the component's `ngOnInit` life cycle hook and start it by calling `start()`.
* Connect to the `/diagramHub` endpoint with WebSocket transport `skipNegotiation: true` and enable automatic reconnect to handle transient network issues.
* Subscribe to the `OnConnectedAsync` callback to receive the unique connection ID, confirming a successful handshake with the server.
* Join a SignalR group by calling `JoinDiagram(roomName)` after connecting. This ensures updates are shared only with users in the same diagram session.
* Refer to Create Angular [Simple Diagram](https://ej2.syncfusion.com/angular/documentation/diagram/getting-started)

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-diagram',
  template: `
    <!-- Diagram component will be added here -->
  `,
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit, OnDestroy {
  private connection: signalR.HubConnection | null = null;
  private roomName: string = 'Syncfusion';
  isConnected: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeSignalRConnection();
  }

  ngOnDestroy(): void {
    if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
      this.connection.stop();
    }
  }

  private initializeSignalRConnection(): void {
    if (this.connection === null) {
      // Create connection
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5000/diagramHub', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build();

      // Triggered when the connection to the SignalR Hub is successfully established
      this.connection.on('OnConnectedAsync', (id: string) => {
        this.onConnectedAsync(id);
      });

      // Start the connection
      this.connection.start()
        .then(() => {
          console.log('Connected to SignalR Hub');
          this.isConnected = true;
        })
        .catch((error: Error) => {
          console.error('Connection failed:', error);
        });
    }
  }

  private onConnectedAsync(id: string): void {
    if (id && id.length > 0) {
      console.log('Connection ID:', id);
      // Join the room after connection is established
      this.connection?.invoke('JoinDiagram', this.roomName)
        .catch((error: Error) => {
          console.error('JoinDiagram failed:', error);
        });
    }
  }
}
```

>**Notes:**
>* Use a unique `roomName` per diagram (e.g., a diagram ID) to isolate sessions.
>* If `WebSockets` may be unavailable, remove `SkipNegotiation` so SignalR can fall back to SSE or Long Polling.
>* Consider handling reconnecting/disconnected states in the UI and securing the connection with authentication, if required.


## Sending and applying real-time diagram changes

* The Angular Diagram component triggers the [historyChange](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#historychange) event whenever the diagram is modified (e.g., add, delete, move, resize, or edit nodes/connectors).
* Use [getDiagramUpdates](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#getdiagramupdates) to produce a compact set of incremental updates (JSON-formatted changes) representing just the changes, not the entire diagram.
* Send these changes to the hub method `BroadcastToOtherUsers`, which relays them to all users joined to the same SignalR group (room).
* Each remote user listens for ReceiveData and applies the incoming changes with [setDiagramUpdates](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#setdiagramupdates), keeping their view synchronized without reloading the full diagram.
* Enable the [enableCollaborativeEditing](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#enablecollaborativeediting) property on the diagram to treat multi-step edits (like drag/resize sequences or batch changes) as a single operation.

```typescript
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-diagram-collaborative',
  template: `
    <ejs-diagram
      #diagram
      id="diagram"
      width="100%"
      height="700px"
      [nodes]="nodes"
      [connectors]="connectors"
      [enableCollaborativeEditing]="true"
      (historyChange)="onHistoryChange($event)"
    >
    </ejs-diagram>
  `,
  styleUrls: ['./diagram-collaborative.component.css']
})
export class DiagramCollaborativeComponent implements OnInit, OnDestroy {
  @ViewChild('diagram')
  diagramComponent!: DiagramComponent;

  private connection: signalR.HubConnection | null = null;
  private roomName: string = 'Syncfusion';
  private diagramId: string = 'diagram';
  nodes: any[] = [];
  connectors: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeConnection();
  }

  ngOnDestroy(): void {
    if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
      this.connection.stop();
    }
  }

  private initializeConnection(): void {
    // Initialize SignalR connection
    if (this.connection === null) {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('<<Your ServiceURL>>', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build();

      // Listen for remote changes from other users
      this.connection.on('ReceiveData', (diagramChanges: string[]) => {
        if (diagramChanges && diagramChanges.length > 0) {
          if (this.diagramComponent && this.diagramComponent.setDiagramUpdates) {
            this.diagramComponent.setDiagramUpdates(diagramChanges);
          }
        }
      });

      this.connection.start()
        .then(() => {
          console.log('Connected to SignalR Hub');
        })
        .catch((error: Error) => {
          console.error('Connection failed:', error);
        });
    }
  }

  onHistoryChange(args: any): void {
    if (args && this.diagramComponent && this.diagramComponent.getDiagramUpdates) {
      // Get diagram updates (incremental changes) and send to hub
      const diagramChanges = this.diagramComponent.getDiagramUpdates(args);

      // When enableCollaborativeEditing is enabled, retrieve diagramChanges only after the group action completes.
      if (diagramChanges && diagramChanges.length > 0) {
        // Send changes to the SignalR Hub for broadcasting
        if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
          this.connection.invoke('BroadcastToOtherUsers', diagramChanges, this.roomName)
            .catch((err: Error) => {
              console.error('Send failed:', err);
            });
        }
      }
    }
  }
}
```

## Conflict policy (optimistic concurrency) in Angular application

To maintain consistency during collaborative editing, each user applies incoming changes using [setDiagramUpdates](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#setdiagramupdates). After applying changes, the Angular sample synchronizes its `userVersion` with the  `serverVersion` through the `UpdateVersion` event. This version-based approach ensures conflicts are resolved without locking, allowing real-time responsiveness while preserving data integrity.

Add the following code in the Angular sample application:
```typescript
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-diagram-conflict-resolution',
  template: `
    <div>
      <ejs-diagram
        #diagram
        width="100%"
        height="700px"
        [enableCollaborativeEditing]="true"
        [nodes]="nodes"
        [connectors]="connectors"
        (historyChange)="onHistoryChange($event)"
      >
      </ejs-diagram>
    </div>
  `,
  styleUrls: ['./diagram-conflict-resolution.component.css']
})
export class DiagramConflictResolution implements OnInit, OnDestroy {
  @ViewChild('diagram')
  diagramComponent!: DiagramComponent;

  private userVersion: number = 0;
  private connection: signalR.HubConnection | null = null;
  private roomName: string = 'Syncfusion';
  nodes: NodeModel[] = [];
  connectors: ConnectorModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeConnection();
  }

  ngOnDestroy(): void {
    if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
      this.connection.stop();
    }
  }

  private initializeConnection(): void {
    // Initialize SignalR connection
    if (this.connection === null) {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl('<<Your ServiceURL>>', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build();

      // Listen for remote changes with version tracking
      this.connection.on('ReceiveData', (diagramChanges: string[], serverVersion: number) => {
        this.applyRemoteDiagramChanges(diagramChanges, serverVersion);
      });

      // Listen for conflict notifications
      this.connection.on('ShowConflict', () => {
        this.showConflict();
      });

      // Listen for explicit version updates
      this.connection.on('UpdateVersion', (serverVersion: number) => {
        this.updateVersion(serverVersion);
      });

      this.connection.start()
        .then(() => {
          console.log('Connected to SignalR Hub');
        })
        .catch((error: Error) => {
          console.error('Connection failed:', error);
        });
    }
  }

  private applyRemoteDiagramChanges(diagramChanges: string[], serverVersion: number): void {
    // Sets diagram updates to current diagram
    if (this.diagramComponent && this.diagramComponent.setDiagramUpdates) {
      this.diagramComponent.setDiagramUpdates(diagramChanges);
    }
    // Update user version to server version after applying changes
    this.userVersion = serverVersion;
  }

  // Capture local changes and send with version and edited IDs
  onHistoryChange(args: any): void {
    if (!this.diagramComponent) {
      return;
    }

    const diagramChanges = this.diagramComponent.getDiagramUpdates(args);
    if (diagramChanges && diagramChanges.length > 0) {
      const editedElements = this.getEditedElements(args);
      // Send changes with version and edited element IDs
      if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
        this.connection.invoke('BroadcastToOtherUsers', diagramChanges, this.userVersion, editedElements, this.roomName)
          .catch((err: Error) => {
            console.error('Send failed:', err);
          });
      }
    }
  }

  private getEditedElements(args: any): string[] {
    // Extract and return IDs of affected nodes/connectors from args
    // TODO: implement extraction logic based on historyChange event args
    return [];
  }

  private updateVersion(serverVersion: number): void {
    this.userVersion = serverVersion;
  }

  private showConflict(): void {
    // Show notification to inform user their update was rejected due to conflict
    const message = "Your changes conflicted with another user's updates and were not applied. Please refresh to see the latest version.";
    alert(message);
  }
}
```