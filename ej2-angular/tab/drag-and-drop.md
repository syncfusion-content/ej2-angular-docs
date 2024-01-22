---
layout: post
title: Drag and drop in Angular Tab component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular Tab component

The Tab component allows you to drag and drop any item by setting [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/tab/#allowdraganddrop)&nbsp;to **true**. Items can be reordered to any place by dragging and dropping them onto the desired location.

* If you need to prevent dragging action for a particular item, the [`onDragStart`](https://ej2.syncfusion.com/angular/documentation/api/tab/#ondragstart) event can be used which will trigger when the item drag is started. If you need to prevent dropping action for a particular item, the [`dragged`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragged) event can be used which will trigger when the drag action is stopped.

* The [`dragArea`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragArea) defines the area in which the draggable element movement will be occurring. Outside that area will be restricted for the draggable element movement.

* The [`onDragStart`](https://ej2.syncfusion.com/angular/documentation/api/tab/#ondragstart) event will be triggered before dragging the item from Tab.

* The [`dragging`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragging) event will be triggered when the Tab item is being dragged.

* The [`dragged`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragged) event will be triggered when the Tab item is dropped on the target element successfully.

In the following sample, the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/tab/#allowdraganddrop) property is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/default-cs1" %}

## Drag and drop item between tabs

It is possible to drag and drop the tab items between two tabs, by manually saving those dropped items as new tab item data through the `addTab` method of Tab and removing the dragged item through the `removeTab` method of Tab.

In this example, we have used the tab control as an external source, and the item from the tab component is dragged and dropped onto another Tab. Therefore, it is necessary to use the `onDragStart` and `dragged` event of the Tab component, where we can form an event object and save it using the `addTab` method of the Tab and remove the dragged item through `removeTab` method of Tab using the dragged item index.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/tab-to-tab-cs1" %}

## Drag and drop items to external source

It is possible to drag and drop the items to any of the external sources from the Tab, by manually saving those dropped items as new node data through the `addNodes` method of Treeview and removing the dragged item through the `removeTab` method of Tab.

In this example, we have used the tree view control as an external source, and the item from the tab component is dragged and dropped onto the child nodes of the tree view component. Therefore, it is necessary to use  the `dragged` event of the Tab component, where we can form an event object and save it using the `addNodes` method of the Treeview and remove the dragged item through the `removeTab` method of Tab using the dragged item index.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/tab-to-treeview-cs1" %}

## Drag and drop items from external source

It is possible to drag and drop the items from any of the external sources into the Tab, by manually saving those dropped items as new item data through the `addTab` method of Tab and removing the dragged node through the `removeNodes` method of Treeview.

In this example, we have used the tree view control as an external source, and the child nodes from the tree view component are dragged and dropped onto the Tab. Therefore, it is necessary to use the `nodeDragStop` event of the Treeview component, where we can form an event object and save it using the `addTab` method of the Tab and remove the dragged node through the `removeNodes` method of Treeview.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/treeview-to-tab-cs1" %}