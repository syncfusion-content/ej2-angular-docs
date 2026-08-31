---
layout: post
title: Drag and Drop in Angular Tree View | Syncfusion
description: Reorder Angular Tree View nodes by drag and drop with allowDragAndDrop, plus multi-node drag using allowMultiSelection.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Angular Tree View

The TreeView component enables drag and drop functionality for nodes when the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowdraganddrop) property is set to **true**. This feature allows users to reorganize the hierarchical structure by dragging nodes and dropping them at different positions within the TreeView. Nodes can be dragged and dropped at all levels of the same TreeView, providing flexible data manipulation capabilities.

The dragged nodes can be dropped at any level by indicator lines with the **line (sibling)**, **plus (child)**, and **restrict (no-drop)** icons. These visual indicators represent the exact position where the node will be dropped as either a sibling or child of the target node.

The following table explains the usage of indicator icons.

| Icons | Description |
|------|-------------|
| Plus (+) icon | Indicates that the dragged node will be added as a child of the target node. |
| Line (sibling) icon | Indicates that the dragged node will be added as a sibling (in-between) of the hovered node. |
| Restrict (no-drop) icon | Indicates that the dragged node cannot be dropped at the hovered region. |

> Use the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) event to cancel (prevent) the drop operation. The event argument exposes the `dropIndicator` property with values such as `e-drop-in` (child) and `e-drop-next` (sibling) to determine the current drop target.

* If you need to prevent dragging action for a particular node, the [`nodeDragStart`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstart) event can be used which is triggered when the node drag is started. If you need to prevent dropping action for a particular node, the [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) event can be used which is triggered when the drag is stopped.

* The [`nodeDragging`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragging) event is triggered when the TreeView node is being dragged. You can customize the cloned element in this event.

* The [`nodeDropped`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedropped) event is triggered when the TreeView node is dropped on the target element successfully.

In the following sample, the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowdraganddrop) property is enabled.
{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs6/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/tree-view/getting-started-cs6" %}

## Multiple-node drag and drop

To drag and drop more than one node, you should enable the [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowmultiselection) property along with the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowdraganddrop) property.

To perform multi-selection, press and hold the **CTRL** key and click the desired nodes. To select range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following sample, the `allowMultiSelection` property is enabled along with the `allowDragAndDrop` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs7/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs7" %}

## See Also

* [How to restrict the drag-and-drop for particular tree nodes](./how-to/restrict-the-drag-and-drop-for-particular-tree-nodes)