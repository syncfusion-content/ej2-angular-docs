---
layout: post
title: Copy and paste records in Angular Gantt component | Syncfusion
description: Learn how to programmatically copy and paste records in the Syncfusion Angular Gantt component using context menus for efficient task duplication.
platform: ej2-angular
control: Copy paste records
documentation: ug
domainurl: ##DomainURL##
---

# Copy and paste records in Angular Gantt component

The copy and paste functionality in the Angular Gantt component enables efficient task duplication, allowing you to replicate tasks or entire task hierarchies using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/gantt/#addrecord) method and a custom context menu configured via [contextMenuItems](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuitems). For example, right-clicking a parent task to copy and paste it with its child tasks at a specified position streamlines project management workflows. Inject `EditService` and enable `editSettings.allowAdding` to support adding copied records. Define valid [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) mappings (e.g., id, name, startDate) to ensure task data is correctly replicated, including hierarchical structures with child tasks. Use the [contextMenuClick](https://ej2.syncfusion.com/angular/documentation/api/gantt/#contextmenuclick) event to handle custom copy-paste actions, specifying the paste position (e.g., child, above, below) via `addRecord` parameters. This feature integrates with dependencies, critical path, and virtual scrolling, ensuring duplicated tasks align with the project structure for seamless schedule management.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/copypaste-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/copypaste-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/how-to/copypaste-cs1" %}

## See also
- [How to configure context menu?](https://ej2.syncfusion.com/angular/documentation/gantt/context-menu)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)