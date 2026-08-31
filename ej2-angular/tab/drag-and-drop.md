---
layout: post
title: Drag and Drop in Angular Tab | Syncfusion
description: Reorder Angular Tab items by drag and drop with allowDragAndDrop, and move items between tabs or to external sources via events.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Angular Tab

The Tab component provides built-in drag and drop functionality that enables users to reorder tab items dynamically by dragging them to different positions. This interactive feature enhances user experience by allowing flexible content organization.

Enable drag and drop by setting the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/tab#allowdraganddrop) property to **true**. Once enabled, users can drag tab items and drop them at any desired location within the defined drag area.

## Drag and drop events and configuration

The Tab component provides comprehensive event handling and configuration options for drag and drop operations:

* **Drag Prevention**: Use the [`onDragStart`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#ondragstart) event to prevent dragging of specific items. This event triggers when dragging begins, allowing you to cancel the operation based on your conditions.

* **Drop Prevention**: Use the [`dragged`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#dragged) event to prevent dropping of items at specific locations. This event triggers when the drag action completes, enabling conditional drop validation.

* **Drag Area Restriction**: The [`dragArea`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#dragarea) property defines the boundary within which tab items can be dragged. Tab items cannot be moved outside this specified area, providing controlled drag behavior. Accepted values: a CSS selector `(string)` (e.g., `'#container'`) or the `HTMLElement` reference of a DOM node.

## Event sequence

The drag and drop operation follows the event sequence shown below:

| # | Event | Description |
|---|-------|-------------|
| 1 | [`onDragStart`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#ondragstart) | Triggers before dragging begins; allows drag prevention. |
| 2 | [`dragging`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#dragging) | Triggers continuously while the tab item is being dragged. |
| 3 | [`dragged`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#dragged) | Triggers when the tab item is successfully dropped on the target location. |

The following sample demonstrates basic drag and drop functionality with the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#allowdraganddrop) property enabled:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/default-cs1" %}

> **Note:** When dropping a tab item, the source indices are recomputed after the `removeTab` call. Always re-read the dragged item index from the event payload (`event.draggedItemIndex`) before invoking `removeTab`.

## Drag and drop item between tabs

Drag and drop tab items between two Tabs by manually saving the dropped items as new tab item data through the `addTab` method of Tab and removing the dragged item through the `removeTab` method of Tab.

In this example, the Tab control is used as the external source. An item from the Tab component is dragged and dropped onto another Tab. The `onDragStart` and `dragged` events of the Tab component are used to form an event object. The dropped item is saved using the `addTab` method, and the dragged item is removed through the `removeTab` method using the dragged item index from `event.draggedItemIndex`.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/tab-to-tab-cs1" %}

## Drag and drop items to external source

Drag and drop items from the Tab to any external source by manually saving the dropped items as new node data through the `addNodes` method of Treeview, and removing the dragged item through the `removeTab` method of Tab.

In this example, the TreeView control is used as the external source. An item from the Tab component is dragged and dropped onto the child nodes of the TreeView component. The `dragged` event of the Tab component is used to form an event object. The item is saved using the `addNodes` method of the Treeview, and the dragged item is removed through the `removeTab` method of Tab using the dragged item index.

> **Required imports** for this example: `TabModule` from `@syncfusion/ej2-angular-navigations` and `TreeViewModule` from `@syncfusion/ej2-angular-treeview`.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/tab-to-treeview-cs1" %}

## Drag and drop items from external source

Drag and drop items from any external source into the Tab by manually saving the dropped items as new item data through the `addTab` method of Tab and removing the dragged node through the `removeNodes` method of Treeview.

In this example, the TreeView control is used as the external source. Child nodes from the TreeView component are dragged and dropped onto the Tab. The `nodeDragStop` event of the Treeview component is used to form an event object. The item is saved using the `addTab` method of Tab, and the dragged node is removed through the `removeNodes` method of Treeview.

> **Required imports** for this example: `TabModule` from `@syncfusion/ej2-angular-navigations` and `TreeViewModule` from `@syncfusion/ej2-angular-treeview`.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/drag-and-drop/treeview-to-tab-cs1" %}