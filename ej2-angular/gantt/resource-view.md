---
layout: post
title: Resource View in Angular Gantt Chart Component | Syncfusion
description: Learn how to configure resource view in the Syncfusion Angular Gantt Chart component for hierarchical task visualization and resource allocation.
platform: ej2-angular
control: Resource view
documentation: ug
domainurl: ##DomainURL##
---

# Resource View in Angular Gantt Chart Component

The resource view in the Angular Gantt Chart component organizes tasks hierarchically by resource, displaying resources as parent nodes and their assigned tasks as child taskbars in a timeline. Enabled by setting [viewType](https://ej2.syncfusion.com/angular/documentation/api/gantt#viewtype) to **ResourceView**, this view visualizes workloads, such as multiple tasks per resource, with taskbars showing duration, progress, and dependencies. Unassigned tasks group under an **Unassigned Task** node. The [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querytaskbarinfo) event customizes taskbar styles, and overallocation indicators highlight scheduling conflicts. Taskbars include ARIA labels for accessibility, ensuring screen reader compatibility, and adapt to responsive designs, though narrow screens may truncate resource names. Parent tasks are not supported, and tasks require scheduling (start date and duration).

## Configure resource view

Enable resource view by setting [viewType](https://ej2.syncfusion.com/angular/documentation/api/gantt#viewtype) to **ResourceView** and mapping resources via [resources](https://ej2.syncfusion.com/angular/documentation/api/gantt#resources) and [resourceFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#resourcefields). Tasks are assigned using [taskFields.resourceInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields#resourceinfo).

The following example configures resource view:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/resource-view-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/resource-view-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/resourceview/resource-view-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/resourceview/resource-view-cs1" %}

This configuration groups tasks by resources, displaying them as child nodes.

## Visualize resource overallocation

Overallocation occurs when tasks exceed a resource’s daily capacity, calculated from [dayWorkingTime](https://ej2.syncfusion.com/angular/documentation/api/gantt#dayworkingtime) and resource unit in [resourceFields.unit](https://ej2.syncfusion.com/angular/documentation/api/gantt/resourceFields#unit). Enable indicators with [showOverAllocation](https://ej2.syncfusion.com/angular/documentation/api/gantt#showoverallocation) set to **true** (default: **false**), highlighting affected date ranges with square brackets.

The following example toggles overallocation visibility:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/show-hide-overallocation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/show-hide-overallocation-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/resourceview/show-hide-overallocation-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/resourceview/show-hide-overallocation-cs1" %}

This configuration highlights scheduling conflicts for workload management.

## Manage unassigned tasks

Tasks not assigned to any resource are termed unassigned tasks. These tasks are automatically grouped under a node labeled **Unassigned Task** and displayed at the bottom of the Gantt data collection. The system validates task assignments during load time based on the [taskFields.resourceInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields#resourceinfo) mapping property in the data source.

When a resource is subsequently assigned to an unassigned task, the task automatically moves to become a child of the respective resource node.

## Enable taskbar drag and drop

Enable taskbar drag-and-drop between resources with [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt#allowtaskbardraganddrop) set to **true**, requiring the `RowDDService` module. This allows vertical taskbar movement for reassignment, triggered by the [rowDragStart](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdragstart) and [rowDrop](https://ej2.syncfusion.com/angular/documentation/gantt/events#rowdrop) events.

The following example enables drag-and-drop:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs2/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/resourceview/multitaskbar-cs2" %}

This configuration supports dynamic task reassignment.

## Customize the taskbar based on resource view

You can customize the taskbar appearance based on resource view using the [queryTaskbarInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/customize-taskbar/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/customize-taskbar/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/resourceview/customize-taskbar/src/data.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/gantt/resourceview/customize-taskbar" %}

## Hide columns in resource tab

To hide a column in the Gantt Chart's resource view, handle the [actionBegin](https://ej2.syncfusion.com/angular/documentation/gantt/events#actionbegin) event and set the `visible` property of the target column to **false** when the `requestType` is `beforeOpenAddDialog` or `beforeOpenEditDialog`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/resource-tab/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/resource-tab/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/resourceview/resource-tab/src/data.ts %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/samples/gantt/resourceview/resource-tab" %}

## Limitations

- Resource view does not support parent tasks; all tasks must be child tasks under resources or the **Unassigned Task** node.
- Unscheduled tasks (lacking start date or duration) are not supported in resource view.

## See also
- [How to configure resources?](https://ej2.syncfusion.com/angular/documentation/gantt/resources)
- [How to enable multi taskbar?](https://ej2.syncfusion.com/angular/documentation/gantt/multi-taskbar)
- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)