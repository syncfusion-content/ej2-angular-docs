---
layout: post
title: Collaborative Editing in Syncfusion Angular Diagram | Syncfusion
description: Checkout and learn to set up real-time collaborative editing in Syncfusion Angular Diagram using WebSocket and Redis.
control: Diagram
documentation: ug
platform: ej2-angular
domainurl: ##DomainURL##
---

# Collaborative editing in Angular Diagram

Collaborative editing enables multiple users to edit diagrams simultaneously in real-time, providing a seamless collaborative experience in Angular applications.

## Purpose

Collaborative editing in Diagram allows multiple users to edit and review diagrams in real time, ensuring accuracy, consistency, and faster updates. It streamlines teamwork by reducing delays, improving communication through comments, and maintaining data integrity with version tracking.

## Configuration

* Use `SignalR` for real-time communication between the Angular app and a ASP.NET Core SignalR server
* Use `Redis` as a temporary data store to manage updates and version state
* Basic setup:
    * Configure a SignalR server. [Refer link](./collaborative-editing-hub)
    * Connect the Angular app to the server. [Refer link](./angular-app-collaborative-editing)

## Limitations

* Default deployment
    * By default, a single server instance works without additional setup. For multi-instance (scale-out) deployments, configure a `SignalR` backplane (e.g., Redis) and use a shared `Redis` store so all nodes share group messages and version state consistently.
* View-only interactions
    * Zoom and pan are local to each user and are not synchronized, so collaborators may view different areas of the diagram.
* Unsupported synchronized settings
    * Changes to [pageSettings](../page-settings), [contextMenuSettings](../context-menu), [snapSettings](../grid-lines#snapping), [rulerSettings](../ruler), [layout](../automatic-layout/automatic-layout), and [scrollSettings](../scroll-settings) are not propagated to other users and apply only locally.

>**Note:** 
Collaboration will work when [DiagramCollaboration](https://ej2.syncfusion.com/angular/documentation/diagram/getting-started#module-injection) and [UndoRedo](https://ej2.syncfusion.com/angular/documentation/diagram/getting-started#module-injection) modules are enabled. Collaboration applies to actions that raise the [historyChange](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#historychange) event.

## Sample code

A complete working example is available in the [Syncfusion Angular Collaborative Editing GitHub repository](https://github.com/syncfusion/ej2-showcase-angular-diagram-collaborative-editing)