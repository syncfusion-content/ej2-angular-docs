---
layout: post
title: Restrict drag-and-drop for particular tree nodes in Angular Tree View | Syncfusion
description: Restrict Angular Tree View drag and drop to allow files into folders only by handling nodeDragging and nodeDragStop events.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# How to restrict drag-and-drop for particular tree nodes in Angular Tree View

You are able to restrict drag and drop operations to allow files to be dropped only under folders. This can be achieved by using [`nodeDragStop`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodedragging) events of TreeView.

## Implementation approach

The events used here expose the following useful arguments:

| Event | Useful argument fields |
| --- | --- |
| `nodeDragging` | `args.draggedNode`, `args.dropTarget`, `args.dropIndicator` (`"e-drop-in"` child / `"e-drop-next"` sibling / `"e-drop-no"` restrict) |
| `nodeDragStop` | `args.draggedNode`, `args.dropTarget`, `args.dropIndicator`, `args.cancel` |

To restrict drag and drop operations:

1. **Enable drag and drop**: Set the `allowDragAndDrop` property to `true`.
2. **Handle the nodeDragging event**: Use this event to provide visual feedback by modifying drop indicators.
3. **Handle the nodeDragStop event**: Implement validation logic and set `args.cancel = true` to cancel an invalid drop.
4. **Identify node types**: Determine whether nodes are files or folders using a property on the node data record.
5. **Apply conditional validation**: Allow the drop only when the target node and drop indicator match the rules defined in your business logic.


{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/restrict-drag-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/restrict-drag-drop-cs1" %}