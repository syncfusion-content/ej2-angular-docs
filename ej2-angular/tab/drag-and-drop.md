---
layout: post
title: Drag and drop in Angular Tab component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular Tab component

The Tab component provides built-in drag and drop functionality that enables users to reorder tab items dynamically by dragging them to different positions. This interactive feature enhances user experience by allowing flexible content organization.

Enable drag and drop by setting the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/tab/#allowdraganddrop) property to **true**. Once enabled, users can drag tab items and drop them at any desired location within the defined drag area.

## Drag and drop events and configuration

The Tab component provides comprehensive event handling and configuration options for drag and drop operations:

* **Drag Prevention**: Use the [`onDragStart`](https://ej2.syncfusion.com/angular/documentation/api/tab/#ondragstart) event to prevent dragging of specific items. This event triggers when dragging begins, allowing you to cancel the operation based on your conditions.

* **Drop Prevention**: Use the [`dragged`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragged) event to prevent dropping of items at specific locations. This event triggers when the drag action completes, enabling conditional drop validation.

* **Drag Area Restriction**: The [`dragArea`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragArea) property defines the boundary within which tab items can be dragged. Tab items cannot be moved outside this specified area, providing controlled drag behavior.

## Event sequence

The drag and drop operation follows this event sequence:

1. **[`onDragStart`](https://ej2.syncfusion.com/angular/documentation/api/tab/#ondragstart)** - Triggers before dragging begins, allowing drag prevention
2. **[`dragging`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragging)** - Triggers continuously while the tab item is being dragged
3. **[`dragged`](https://ej2.syncfusion.com/angular/documentation/api/tab/#dragged)** - Triggers when the tab item is successfully dropped on the target location

The following sample demonstrates basic drag and drop functionality with the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/tab/#allowdraganddrop) property enabled:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/src/app.component.ts %}
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

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/treeview-to-tab-cs1" %}