---
layout: post
title: Collaborative Editing in Angular Document editor control | Syncfusion
description: Learn about collaborative editing in Syncfusion Angular Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Collaborative Editing
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing

Allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made. Collaborative editing can be a great way to improve efficiency, as it allows team members to work together on a document without having to wait for others to finish their changes.

## Prerequisites

- *Real-time Transport Protocol*: This protocol facilitates instant communication between clients and the server, ensuring immediate updates during collaborative editing.
- *Distributed Cache or Database*: Used to temporarily store the queue of editing operations.

### Real time transport protocol

- *Managing Connections*: Keeps active connections open for real-time collaboration, allowing seamless communication between users and the server.
- *Broadcasting Changes*: Ensures that any edits made by one user are instantly sent to all collaborators, keeping everyone on the same page with the latest document version.

### Distributed cache or database

To support collaborative editing, it's crucial to have a backing system that temporarily stores the editing operations of all active users. There are two primary options:

- *Distributed Cache*: Handles a higher number of `HTTP` requests per second compared to a database approach. For instance, a server with 2 vCPUs and 8GB RAM can handle up to 125 requests per second using a distributed cache.
- *Database*: With the same server configuration, it can handle up to 50 requests per second.

Using the distributed cache or database all the editing operations are queued in order and conflict resolution is performed using `Operational Transformation` Algorithm.

> *Recommendation* - If you expect average `http` requests per second of your live application as 50 or below, then the database can provide reliable a backing system for operation queue. If you expect average requests per second of your live application as above 50, then the distributed cache is highly recommended backing system.
> Tips to calculate the average requests per second of your application:
Assume the editor in your live application is actively used by 1000 users and each user's edit can trigger 2 to 5 requests per second. The total requests per second of your applications will be around 2000 to 5000. In this case, you can finalize a configuration to support around 5000 average requests per second.

> Note: The above metrics are based solely on the collaborative editing module. Actual throughput may decrease depending on other server-side interactions, such as document importing, pasting formatted content, editing restrictions, and spell checking. Therefore, it is advisable to monitor your app's traffic and choose a configuration that best suits your needs.
#### See Also

- [Collaborative editing using Redis cache in ASP.NET Core](../../document-editor/collaborative-editing/using-distributed-cache-asp-net-core)
- [Collaborative editing using Microsoft SQL server in ASP.NET Core](../../document-editor/collaborative-editing/using-database-in-asp-net-core)
- [Collaborative editing using Java](../../document-editor/collaborative-editing/using-java)