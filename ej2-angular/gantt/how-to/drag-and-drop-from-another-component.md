---
layout: post
title: Drag and drop from another component in Angular Gantt | Syncfusion
description: Learn how to drag records from another component into the Syncfusion Angular Gantt component to update tasks or resources efficiently.
platform: ej2-angular
control: Drag and drop
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop from another component in Angular Gantt component

The Angular Gantt component supports dragging records from another component, such as a TreeView, and dropping them into the Gantt chart to update tasks or resources seamlessly. For example, dragging a resource item from a TreeView and dropping it onto a Gantt task can assign that resource to the task, enhancing project management workflows. Use the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) event of the TreeView to capture the dragged item’s data and updating the Gantt’s data source with the new resource or task details. Configure valid [`taskFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskfields) and [`resourceFields`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#resourcefields) mappings to ensure dropped data integrates correctly with tasks or resources. This feature integrates with task scheduling, dependencies, and critical path, enabling dynamic updates to the project structure. The following screenshot demonstrates dropping a TreeView item, such as **Rose Fuller** onto the Gantt task **Develop floor plan estimation** to assign it as a resource.

![Dropping record from TreeView to Gantt](../images/dropping.png)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/how-to/drag-and-drop-cs1" %}

## See also
- [How to configure row drag and drop?](https://ej2.syncfusion.com/angular/documentation/gantt/rows/drag-and-drop)
- [How to manage resources?](https://ej2.syncfusion.com/angular/documentation/gantt/resources)
- [How to configure task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)