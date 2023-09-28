---
layout: post
title: Drag and drop from another component in Angular Gantt component | Syncfusion
description: Learn here all about Drag and drop from another component in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drag and drop from another component 
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop from another component in Angular Gantt component

In Gantt, it is possible to drag a record from another component and drop it in Gantt chart with updating the Gantt record. Here, dragging an item from TreeView component to Gantt and that item is updated as a resource for the Gantt record, we can achieve this, by using [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) event of TreeView control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/how-to/drag-and-drop-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/drag-and-drop-cs1" %}

The following screenshot shows dropping record from another component in to Gantt, and **Rose Fuller** is added as resource for the task **Develop floor plan estimation**.

![Dropping Record](../images/dropping.png)