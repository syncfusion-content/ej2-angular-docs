---
layout: post
title: Resource view in Angular Gantt component | Syncfusion
description: Learn here all about Resource view in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Resource view 
documentation: ug
domainurl: ##DomainURL##
---

# Resource view in Angular Gantt component

The resource breakdown view is used to visualize the tasks assigned to each resource in hierarchy manner. Resources are displayed as parents and all the tasks assigned to each resource are displayed as its child records. It can be initialized by setting the [`viewType`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#viewtype) property to `ResourceView`.

## Resource task

A task assigned to one or more resources are termed as resource task and it is added as child task to the respective resource. Already assigned task can also be shared or moved with other resources by adding a resource name to the task or removing resource name from the task by cell or dialog editing.

>Note: Currently there is no support for unscheduled task in Resource view Gantt.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/resource-view-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/resource-view-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/resourceview/resource-view-cs1" %}

## Resource overAllocation

When a resource is assigned too much of work to complete within a day of resource’s available time then it is called as overallocation.

The available working time of resources for completing the task in a day will be calculated based on the `dayWorkingTime` property and `resource unit`.

The range of overallocation dates can be highlighted by a square bracket. It can be enabled by setting the `showOverallocation` property as `true`. The following code example demonstrates how to hide or show the over allocation by clicking the custom button.

>Note: By default, the `showOverAllocation` property value is `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/show-hide-overallocation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/show-hide-overallocation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/resourceview/show-hide-overallocation-cs1" %}

## Unassigned task

A task not assigned to any one of the resource are termed as unassigned tasks. The unassigned tasks are grouped with a name as `Unassigned Task` and displayed at the bottom of Gantt data collection . It is validated at load time during Gantt record creation by default based on a task `resourceInfo` mapping property in the Gantt chart data source. If the resource is assigned to the unassigned grouped tasks, the task will be moved as child to the respective resource.

## Enable taskbar drag and drop

In Gantt, you can enable taskbar drag and drop between resources by using the [`allowTaskbarDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowtaskbardraganddrop) property. This allows you to move a taskbar from one resource to another vertically, making it easier to schedule tasks and manage resources.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/resourceview/multitaskbar-cs2" %}