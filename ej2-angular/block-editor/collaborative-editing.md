---
layout: post
title: Collaborative Editing in Angular Block Editor Control | Syncfusion
description: Learn how to enable real-time collaborative editing in the Angular Block Editor control, including user presence, version history, and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: https://www.syncfusion.com/angular-components/angular-block-editor/
---

# Collaborative Editing in Angular Block Editor control

The Block Editor supports real-time collaborative editing, enabling multiple users to work on the same document simultaneously. Collaboration is powered by **Yjs**, a Conflict-free Replicated Data Type (CRDT) framework that synchronizes document changes across all connected users and automatically resolves conflicts.

With collaboration enabled, users can:

* Edit the same document in real time.
* View remote user cursors and selections.
* Track active collaborators.
* Perform collaboration-aware undo and redo operations.
* Create, restore, compare, export, and import document versions.

## Prerequisites

Before enabling collaboration, install the `yjs` library and a Yjs provider. See [Yjs Providers](https://docs.yjs.dev/ecosystem/connection-provider) to choose the right provider for your use case.

Inject the `Collaboration` module into the Block Editor before use in your Angular component.

```typescript
import { BlockEditorComponent, Collaboration } from '@syncfusion/ej2-angular-blockeditor';

BlockEditorComponent.Inject(Collaboration);
```

## Yjs Providers

A Yjs provider handles the transport of document updates between connected users. Choose a provider based on your deployment requirements.

| Provider | Type | Use Case |
| -------- | ---- | -------- |
| `y-websocket` | Self-hosted | Production deployments with your own WebSocket server. |
| `y-webrtc` | Peer-to-peer | Quick local testing and development; no server required. |
| `y-indexeddb` | Local storage | Offline persistence within a single browser. |
| [Hocuspocus](https://tiptap.dev/docs/hocuspocus/getting-started/overview) | Open-source server | Scalable Node.js server with pluggable storage and Redis support. |
| [Liveblocks](https://liveblocks.io/) | Fully managed | Hosted WebSocket infrastructure with REST API and DevTools. |
| [PartyKit](https://www.partykit.io/) | Serverless | Serverless provider on Cloudflare; ideal for prototyping. |

> **Note:** For development and testing, `y-webrtc` or PartyKit allow you to get started without a server. For production, use `y-websocket` or a managed provider such as Liveblocks or Hocuspocus for reliable, persistent synchronization.

## Configure collaboration settings

Use the `collaborationSettings` property of type `CollaborationSettingsModel` to configure collaboration settings for your Block Editor. It provides the following properties that allow you to customize the collaboration behavior:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `provider` | `any` | Real-time transport used to synchronize document changes. |
| `enableAwareness` | `boolean` | Enables user presence, remote cursors, and text selection overlays. |
| `adapter` | `CollaborationAdapter` | Provides the Yjs runtime and shared XML fragment. |
| `versionHistory` | `VersionHistorySettingsModel` | Configures document version history support. |

## Getting Started

The following steps will help you set up real-time collaboration in the Block Editor using `Yjs` in your Angular application.

### Step 1: Create a Yjs document

Create a shared Yjs document and XML fragment in your Angular component.

```typescript
import * as Y from 'yjs';

const yDoc = new Y.Doc();
const yFragment = yDoc.getXmlFragment('blockeditor');
```

### Step 2: Create a Yjs adapter

Create an adapter that provides the Yjs runtime and the shared fragment to the Block Editor.

```typescript
import * as Y from 'yjs';

const adapter = new YjsAdapter({
    yRuntime: Y,
    yXmlFragment: yFragment
});
```

### Step 3: Configure a provider

Create a provider that connects users to the same shared document. The following example 
uses `y-websocket` for production use. For local development, replace it with `y-webrtc` 
or a PartyKit provider — no server setup is required.

**Production (y-websocket):**

```typescript
import { WebsocketProvider } from 'y-websocket';

const provider = new WebsocketProvider(
    'wss://your-server-url',
    'document-room-id',
    yDoc
);
```

**Development (y-webrtc):**

```typescript
import { WebrtcProvider } from 'y-webrtc';

const provider = new WebrtcProvider('document-room-id', yDoc);
```

### Step 4: Enable Collaboration in Angular Component

Pass the adapter and provider to the Block Editor through the `collaborationSettings` property in your Angular template or component configuration.

**In component TypeScript file:**

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockEditorComponent } from '@syncfusion/ej2-angular-blockeditor';

@Component({
    selector: 'app-block-editor',
    templateUrl: './block-editor.component.html'
})
export class BlockEditorComponent implements OnInit {
    @ViewChild('blockEditor') blockEditor: BlockEditorComponent;
    
    collaborationSettings: any;
    
    ngOnInit() {
        this.collaborationSettings = {
            adapter: adapter,
            provider: provider
        };
    }
}
```

**In component template (HTML):**

```html
<ejs-blockeditor [collaborationSettings]="collaborationSettings"></ejs-blockeditor>
```

## User presence and remote cursors

The Block Editor can display remote cursors, text selection overlays, and user details on hover. To enable these user presence features, set `enableAwareness` to `true` in `collaborationSettings` property.

```typescript
this.collaborationSettings = {
    adapter: adapter,
    provider: provider,
    enableAwareness: true
};
```

## Configure the current user

Set the current user's display name and cursor highlight avatarBgColor using the `users` and `currentUserId` properties. The `avatarBgColor` value is used for that user's remote cursor and text selection overlay.

The following properties are available when configuring users via the `users` property.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | `string` | Unique identifier for the user. |
| `user` | `string` | Display name shown on remote cursors and presence indicators. |
| `avatarBgColor` | `string` | Hex avatarBgColor used for this user's remote cursor and selection highlight. |

```typescript
export class BlockEditorComponent implements OnInit {
    users: any[] = [{
        id: 'user-1',
        user: 'John Doe',
        avatarBgColor: '#e74c3c'
    }];
    
    currentUserId: string = 'user-1';
    
    ngOnInit() {
        // Initialize with users configuration
    }
}
```

**In template:**

```html
<ejs-blockeditor [users]="users" [currentUserId]="currentUserId" [collaborationSettings]="collaborationSettings"></ejs-blockeditor>
```

### Get active users

Retrieve all currently connected users using the `users` property in the block editor.

```typescript
const users = this.blockEditor.users;
```

## Version history

`Version History` allows you to capture document snapshots and restore earlier versions. This is a built-in capability of the Block Editor and does not require a third-party service.

### Enable version history

Inject the `VersionHistory` module and configure the `versionHistory` property under `collaborationSettings` property in your Angular component.

```typescript
import { BlockEditorComponent, Collaboration, VersionHistory } from '@syncfusion/ej2-angular-blockeditor';

BlockEditorComponent.Inject(Collaboration, VersionHistory);

export class BlockEditorComponent implements OnInit {
    myStorage: any;
    collaborationSettings: any;
    
    ngOnInit() {
        this.myStorage = new CustomVersionStorage(`blockeditor-${uniqueId}`);
        
        this.collaborationSettings = {
            adapter: adapter,
            provider: provider,
            versionHistory: {
                storage: this.myStorage,
                snapshotInterval: 3000
            }
        };
    }
}
```

### Access the version history instance

After the Block Editor initializes, retrieve the version history instance and wait for snapshot data to load before calling any version history methods.

```typescript
export class BlockEditorComponent implements OnInit {
    @ViewChild('blockEditor') blockEditor: BlockEditorComponent;
    
    async getVersionHistory() {
        const versionHistory = this.blockEditor.getVersionHistory();
        await versionHistory.whenReady();
        return versionHistory;
    }
}
```

### Configure snapshot storage

Version snapshots need to be persisted to enable version history across browser sessions. Implement the `IVersionStorage` interface to provide a custom storage backend for managing snapshots. You can use IndexedDB, a backend database, or any other storage solution suitable for your deployment.

The `IVersionStorage` interface defines the following methods:

| Method | Signature | Description |
| -------- | -------- | ----------- |
| `saveSnapshot` | `(snapshot: VersionSnapshot): Promise<void>` | Persist a snapshot. |
| `loadAllSnapshots` | `(): Promise<VersionSnapshot[]>` | Load all persisted snapshots, ordered by timestamp ascending. |
| `loadSnapshot` | `(id: string): Promise<VersionSnapshot \| null>` | Load a single snapshot by id. |
| `deleteSnapshot` | `(id: string): Promise<void>` | Permanently remove a snapshot by id. |
| `clearAll` | `(): Promise<void>` | Remove all snapshots from storage. |

### Methods

#### Create a snapshot

Creates a new snapshot of the current document state with an optional label and metadata.

```typescript
async createSnapshot() {
    const versionHistory = await this.getVersionHistory();
    const snapshot = await versionHistory.createSnapshot({
        label: 'Before major update',
        modifiedBy: this.currentUserId
    });
    return snapshot;
}
```

#### List snapshots

Retrieves all saved snapshots or a paginated subset. Snapshots are returned in chronological order.

```typescript
async listSnapshots() {
    const versionHistory = await this.getVersionHistory();
    
    // Retrieve all snapshots
    const snapshots = versionHistory.getSnapshots();
    
    // Retrieve a paginated subset — getSnapshots(skip, take)
    const paginatedSnapshots = versionHistory.getSnapshots(20, 40);
    
    return paginatedSnapshots;
}
```

#### Rename a snapshot

Updates the label or metadata of an existing snapshot without modifying its content.

```typescript
async renameSnapshot(snapshotId: string, newLabel: string) {
    const versionHistory = await this.getVersionHistory();
    await versionHistory.renameSnapshot(snapshotId, newLabel);
}
```

#### Restore a snapshot

Reverts the document to a previously saved snapshot state. The current document state is automatically backed up before restoration.

```typescript
async restoreSnapshot(snapshotId: string) {
    const versionHistory = await this.getVersionHistory();
    await versionHistory.restoreSnapshot(snapshotId);
}
```

> **Note:** When a snapshot is restored, the current document state is automatically 
> backed up before the restore operation is applied.

#### Compare versions

Compares two snapshots to identify differences such as added, removed, or modified content.

```typescript
async compareVersions(snapshotIdA: string, snapshotIdB: string) {
    const versionHistory = await this.getVersionHistory();
    const diff = versionHistory.compareVersions(snapshotIdA, snapshotIdB);
    return diff;
}
```

The returned `VersionDiff` object provides a summary of the differences between the two selected versions.

#### Export a snapshot

Serializes a snapshot into a portable format that can be stored externally or transferred between systems.

```typescript
async exportSnapshot(snapshotId: string) {
    const versionHistory = await this.getVersionHistory();
    const exported = await versionHistory.exportSnapshot(snapshotId);
    return exported;
}
```

Exported snapshots can be stored externally or transferred between systems.

#### Import a snapshot

Imports a previously exported snapshot back into the version history storage.

```typescript
async importSnapshot(exported: any) {
    const versionHistory = await this.getVersionHistory();
    const imported = await versionHistory.importSnapshot(exported);
    return imported;
}
```

### Events

Use the following event callbacks in `versionHistory` settings to respond to snapshot life cycle events.

#### snapshotCreated

Triggered when a new snapshot is created.

```typescript
this.collaborationSettings = {
    versionHistory: {
        storage: this.myStorage,
        snapshotCreated: ({ snapshot }) => {
            console.log('Snapshot created:', snapshot.id);
        }
    }
};
```

#### snapshotRestored

Triggered when a snapshot is restored.

```typescript
this.collaborationSettings = {
    versionHistory: {
        storage: this.myStorage,
        snapshotRestored: ({ snapshot, backupSnapshot }) => {
            console.log('Snapshot restored:', snapshot.label);
        }
    }
};
```

## Best Practices

* **Use WebRTC or PartyKit for development** — These providers require no server setup and 
  are ideal for local testing and prototyping before moving to a production provider.
* **Use WebSocket-based providers in production** — `y-websocket`, Hocuspocus, or a managed 
  service like Liveblocks provides reliable, low-latency, persistent synchronization at scale.
* **Use stable room identifiers** — Use a unique document ID as the collaboration room name 
  to prevent unintended document sharing between different documents.
* **Persist snapshots externally** — Store snapshots in a database or cloud storage to 
  preserve version history across sessions.
* **Enable awareness selectively** — Disable `enableAwareness` when user presence 
  information is not required to reduce network and processing overhead.

## Troubleshooting

### Changes Are Not Synchronizing

Verify the following:

* All users are connected to the same collaboration room.
* The provider connection is active.
* The shared Yjs document is correctly configured.

### Remote Cursors Are Not Visible

Verify the following:

* `enableAwareness` is set to `true`.
* The configured provider supports the Yjs awareness protocol.
* User information is set via the `users` and `currentUserId` properties.
* Each user has a unique `id` value.

### Remote User Names Are Not Appearing on Cursors

Verify the following:

* The `user` field is populated for all entries in the `users` array.

### Version History Is Not Available

Verify the following:

* The `VersionHistory` module is injected into the Block Editor.
* A valid `IVersionStorage` implementation is provided.
* `whenReady()` has been awaited before accessing snapshots.
