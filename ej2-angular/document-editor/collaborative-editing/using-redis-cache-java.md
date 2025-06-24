---
layout: post
title: Collaborative Editing in Angular Document editor control | Syncfusion
description: Learn how to enable collaborative editing in Syncfusion Angular Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Collaborative Editing Java
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing

Allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made. Collaborative editing can be a great way to improve efficiency, as it allows team members to work together on a document without having to wait for others to finish their changes.

## Prerequisites

The following are needed to enable collaborative editing in Document Editor

- `SockJS`
- `Redis`

## How to enable collaborative editing in client side

### Step 1: Enable collaborative editing in Document Editor

To enable collaborative editing, inject `CollaborativeEditingHandler` and set the property `enableCollaborativeEditing` to true in the Document Editor, like in the code snippet below.
```html
<!-- ./app.component.html -->
<div>
    <div id="documenteditor_titlebar" class="e-de-ctn-title" style="height:35px;"></div>
    <ejs-documenteditorcontainer #documenteditor_default [enableToolbar]="true" (created)="onCreated()" (contentChange)="onContentChange($event)" height="600px" style="display: block;"> </ejs-documenteditorcontainer>
</div>
```

```typescript
import { DocumentEditorContainerModule, ToolbarService, DocumentEditorContainerComponent, ContainerContentChangeEventArgs, Operation } from '@syncfusion/ej2-angular-documenteditor';
 
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
private collaborativeEditingHandler!: CollaborativeEditingHandler;

onCreated() {
    // Enable collaborative editing in Document Editor.
    this.container.documentEditor.enableCollaborativeEditing = true;
  }
```

### Step2: Configure SockJS to send and receive changes

To broadcast the changes made and receive changes from remote users, configure SockJS like below.

```typescript
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
//Initialize SockJS
initializeSockJS(): void {
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
      console.log('WebSocket connection established.');
      this.onConnected();
    });
  }
// Subscribe to the topic.
onConnected() {
    if (this.stompClient.connected) {
        // Subscribe to the specific user
        var roomName = this.fileName;
        this.stompClient.subscribe('/topic/public/' + this.fileName, this.onMessageReceived);
        this.joinGroup(this.fileName);
    }
}
//Receive the remote action and apply to currenty document.
onMessageReceived = (data: any) => {
    var content = JSON.parse(data.body);
    if (content.payload.operations != null) {
      this.collaborativeEditingHandler.applyRemoteAction("action", content.payload);
    }
}
```

### Step 3: Subscribe to specific topic while opening the document

When opening a document, we need to generate a unique ID for each document. These unique IDs are then used to create rooms using SockJS, which facilitates sending and receiving data from the server.

```typescript
//Load the document
loadDefaultDocument(): void {
    // Define HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    });
    this.http.post<any>(this.serviceurl + 'ImportFile', { "fileName": this.fileName, "documentOwner": this.documentOwner }, { headers }).subscribe(
        (response) => {
          // On success
          this.container.documentEditor.open(response.sfdt);
          this.collaborativeEditingHandler.updateRoomInfo(this.fileName, response.version, this.serviceurl);
          setTimeout(() => {
            this.initializeSockJS();
          });
        });
}
//Send the user information to the other users that I have joined.
joinGroup(documentName: any) {
    var userInfo = {
        currentUser: this.username,
        clientVersion: 0,
        roomName: documentName,
        connectionId: "",
    };
    // Send the joinGroup message to the server
    this.stompClient.send("/app/join/" + documentName, {}, JSON.stringify(userInfo));
}
```

### Step 4: Broadcast current editing changes to remote users

Changes made on the client-side need to be sent to the server-side to broadcast them to other connected users. To send the changes made to the server, use the method shown below from the document editor using the `contentChange` event.

```typescript
onContentChange = (args: ContainerContentChangeEventArgs) => {
    if (this.collaborativeEditingHandler) {
      this.collaborativeEditingHandler.sendActionToServer(args.operations as Operation[])
    }
}
```

## How to enable collaborative editing in Java

### Step 1: Configure SockJS hub to create room for collaborative editing session.

To manage groups for each document, create a folder named “Hub” and add a file named ``` DocumentEditorHub.java ``` inside it. Add the following code to the file to manage SockJS groups using room names.

Join the group by using unique id of the document by using `joinGroup` method.

```java
@MessageMapping("/join/{documentName}")
public void joinGroup(ActionInfo info, SimpMessageHeaderAccessor headerAccessor,
        @DestinationVariable String documentName) throws JsonProcessingException {
    // To get the connection Id
    String connectionId = headerAccessor.getSessionId();
    info.setConnectionId(connectionId);
    String docName = info.getRoomName();
    HashMap<String, Object> additionalHeaders = new HashMap<>();
    additionalHeaders.put("action", "connectionId");
    MessageHeaders headers = new MessageHeaders(additionalHeaders);
    // send the connection Id to the client
    broadcastToRoom(docName, info, headers);
    …………
    …………
    …………
}

public static void broadcastToRoom(String roomName, Object payload, MessageHeaders headers) {
    messagingTemplate.convertAndSend("/topic/public/" + roomName, MessageBuilder.createMessage(payload, headers));
}
```
### Step 2: Handle user disconnection using SockJS.

```java
@EventListener
public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) throws Exception {
    String sessionId = event.getSessionId();
    try (Jedis jedis = RedisSubscriber.getJedis()) {
        // to get the user details of the provided sessionId
        String docName = jedis.hget("documentMap", sessionId);
        // Publish a message indicating the user's departure from the group
        jedis.publish(docName, "LEAVE|" + sessionId);
    } catch (JedisConnectionException e) {
        System.out.println(e);
    }
}
```

### Step 3: Configure Redis cache connection string in application level.

Configure the Redis that stores temporary data for the collaborative editing session. Provide the Redis connection string in `application.properties` file.

```java
//Redis configuration
spring.datasource.redishost= "<Redis host string>"
spring.datasource.redisport= "<Redis port>"
spring.datasource.redispassword= "<Redis password>"
spring.datasource.redisssl = <boolean>
```

### Step 4: Configure Web API actions for collaborative editing.

#### Import File
-	When opening a document, create a Redis cache to store temporary data for the collaborative editing session.
-	If the Redis cache already exists, retrieve the records from the Redis cache and apply them to the WordProcessorHelper instance using the `updateActions` method before converting it to the SFDT format.

```java
public String importFile(@RequestBody FilesPathInfo file) throws Exception {
    try {
        ClassLoader classLoader = getClass().getClassLoader();
        // Get source document from database/file system/blob storage
        WordProcessorHelper document = getDocumentFromBucketS3(file.getFileName(), datasourceAccessKey,
        datasourceSecretKey, datasourceBucketName);
        documentName=file.getFileName();
        // Get the list of pending operations for the document
        List<ActionInfo> actions = getPendingOperations(file.getFileName(), 0, -1);
        if (actions != null && actions.size() > 0) {
            // If there are any pending actions, update the document with these actions
            document.updateActions(actions);
        }
        // Serialize the updated document to SFDT format
        String json = WordProcessorHelper.serialize(document);
        // Return the serialized content as a JSON string
        return json;
    } catch (Exception e) {
        e.printStackTrace();
        return "{\"sections\":[{\"blocks\":[{\"inlines\":[{\"text\":" + e.getMessage() + "}]}]}]}";
    }
}
```

#### Update editing records to Redis
-	Each edit operation made by the user is sent to the server and is pushed to the Redis. Each operation receives a version number after being inserted into the Redis.
-	After inserting the records to the server, the position of the current editing operation must be transformed against any previous editing operations not yet synced with the client using the TransformOperation method.
-	After performing the transformation, the current operation is broadcast to all connected users within the group.

```java
public ActionInfo updateAction(@RequestBody ActionInfo param) throws Exception {
    String roomName = param.getRoomName();
    ActionInfo transformedAction = addOperationsToCache(param);
    HashMap<String, Object> action = new HashMap<>();
    action.put("action", "updateAction");
    DocumentEditorHub.publishToRedis(roomName, transformedAction);
    DocumentEditorHub.broadcastToRoom(roomName, transformedAction, new MessageHeaders(action));
    return transformedAction;
}

private ActionInfo addOperationsToCache(ActionInfo action) throws Exception {
    int clientVersion = action.getVersion();
    …………
    …………
    …………

    // Define the keys for Redis operations based on the action's room name
    String[] keys = { roomName + CollaborativeEditingHelper.versionInfoSuffix, roomName,
            roomName + CollaborativeEditingHelper.revisionInfoSuffix,
            roomName + CollaborativeEditingHelper.actionsToRemoveSuffix };
    // Prepare values for the Redis script
    String[] values = { serializedAction, String.valueOf(clientVersion),
            String.valueOf(CollaborativeEditingHelper.saveThreshold) };

    …………
    …………
    …………
    // Return the updated action
    return action;
}
```

#### Add Web API to get previous operation as a backup to get lost operations
On the client side, messages send from server using SockJS may be received in a different order, or some operations may be missed due to network issues. In these cases, we need a backup method to retrieve missing records from the Redis.
Using the following method, we can retrieve all operations after the last successful client-synced version and return all missing operations to the requesting client. 

```java
@PostMapping("/api/collaborativeediting/GetActionsFromServer")
public String getActionsFromServer(@RequestBody ActionInfo param) throws ClassNotFoundException {
    try (Jedis jedis = RedisSubscriber.getJedis()) {
        // Initialize necessary variables from the parameters and helper class
        int saveThreshold = CollaborativeEditingHelper.saveThreshold;
        String roomName = param.getRoomName();
        int lastSyncedVersion = param.getVersion();
        int clientVersion = param.getVersion();
        // Fetch actions that are effective and pending based on the last synced version
        List<ActionInfo> actions = GetEffectivePendingVersion(roomName, lastSyncedVersion, jedis);
        List<ActionInfo> currentAction = new ArrayList<>();

        for (ActionInfo action : actions) {
            // Increment the version for each action sequentially
            action.setVersion(++clientVersion);

            // Filter actions to only include those that are newer than the client's last
            // known version
            if (action.getVersion() > lastSyncedVersion) {
                // Transform actions that have not been transformed yet
                if (!action.isTransformed()) {
                    CollaborativeEditingHandler.transformOperation(action, new ArrayList<>(actions));
                }
                currentAction.add(action);
            }
        }
        // Serialize the filtered and transformed actions to JSON and return
        return gson.toJson(currentAction);
    } catch (Exception ex) {
        ex.printStackTrace();
        // In case of an exception, return an empty JSON object
        return "{}";
    }
}
```
## How to perform Scaling in Collaborative Editing.

### Role of Scaling in Collaborative editing
As the number of users increases, collaborative application face challenges in maintaining responsiveness and performance. This is where scaling becomes crucial. Scaling refers to the ability of an application to handle growing demands by effectively distributing the workload across multiple resources.

During scaling the users may connected to different servers, so collaborative editing application introduces a specific challenge like, updating the edit operations to all the users connected in different serves. To overcome this issue you need to use ``` Redis Cache pub/sub ``` for message relay(syncing the editing operations to the users connected to different server instance)

### Use of Redis Pub/Sub in scaling environment
Redis offers Pub/Sub functionality. The publish/subscribe (pub/sub) pattern provides asynchronous communication among multiple AWS services without creating interdependency. When a user edits a document, the application can publish the changes to a Redis channel. Clients (in different server instances) subscribed to that channel receive real-time updates, reflecting the changes in their document views. 

### Steps to configure Redis in Collaborative Editing Application
Refer to the below steps to know about the Redis pub/sub implementation to sync the messages.

#### Step 1: Configure Redis in application level to establish the connection.

```java
//Redis configuration
spring.datasource.redishost= "<Redis host link>"
spring.datasource.redisport= "<Redis port number>"
```
#### Step 2: Publish each editing operation to a Redis channel

Publish each editing operation to Redis channel with the room name. This will send notifications to all the users(in different servers) subscribed to that specific channel. Refer to the publishToRedis() method in DocumentEditorHub.Java for details.

```java
try (Jedis jedis = RedisSubscriber.jedisPool.getResource()) {                           
jedis.publish("collaborativeedtiting", new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(payload));                    
    break;
    } catch (JedisConnectionException e) {
    }
```
#### Step 3: Subscribe to the specific channel using the Redis cache 'Subscribe'

 Redis cache will be initialized and subscribe to the specific channel using the Redis cache 'Subscribe' option. This ensures that users in any server will get notified when an editing operation is published to the Redis cache using the onMessage() API. Refer to the code snippet in RedisSubscriber.Java for details.

 ```java
@PostConstruct
      public void subscribeToInstanceChannel() {
            //Subscriber to `collaborativeediting`
            String channel = "collaborativeedtiting";
             new Thread(() -> {
                   JedisPoolConfig poolConfig = new JedisPoolConfig();
                    jedisPool = new JedisPool(poolConfig, REDIS_HOST, REDIS_PORT);
                    try (Jedis jedis = jedisPool.getResource()) {      
                           jedis.subscribe(new JedisPubSub() {
                                 @Override
                                 public void onMessage(String channel, String message) {                               
                                       ------------- 
                                        ------
                                           // Message will be broadcasted to all the users connected to that room using sockjs
                                              DocumentEditorHub.broadcastToRoom(action.getRoomName(), action, updateActionheaders);
                                       } catch (JsonProcessingException e) {
                                               e.printStackTrace();
                                       }
                                }
                                 @Override
                                 public void onSubscribe(String  channel, int subscribedChannels) {
                                       System.out.println("Subscribed to channel: " + channel);
                                }
                            }, channel);
                   } catch (JedisConnectionException e) {
                           // Handle the connection exception
                          System.out.println("Connection failed. Retrying ...");
                   }
            }).start();
      }
```


Full version of the code discussed about can be found in below GitHub location.

GitHub Example: [`Collaborative editing examples`](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing)

