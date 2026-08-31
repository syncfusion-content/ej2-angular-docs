---
layout: post
title: Node Editing in Angular Tree View | Syncfusion
description: Edit Angular Tree View node text in place by enabling allowEditing and using double-click, F2, or the beginEdit method.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Node Editing in Angular Tree View

The TreeView component provides in-place node editing functionality by setting the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowediting) property to **true**. To directly edit nodes in place, **double-click** the TreeView node or **select** the node and press the **F2** key.

When editing is completed by losing focus or pressing the **Enter** key, the modified node's text is saved automatically. To cancel editing without saving changes, press the **Escape** key. This discards the edited text and retains the original TreeView node text.

## Programmatic editing

Node editing can also be performed programmatically. Pass a node ID to the [`beginEdit`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#beginedit) method to create an inline edit textbox for that node.

```typescript
@ViewChild('tree') tree: TreeViewComponent;

public editNode(nodeId: string): void {
  this.tree.beginEdit(nodeId); // Opens an inline edit textbox for the specified node
}
```

You can also wire `beginEdit` to a button click handler so the user can trigger edit mode from the page instead of a double-click or F2.

## Editing events

The component exposes events to validate editing, react to changes, and prevent saves:

| Event | When it fires | Useful event arguments |
| --- | --- | --- |
| [`nodeEditing`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeediting) | Before a node enters edit mode (typically on F2 or double-click). Use this event to decide whether editing is allowed. | `args.node`, `args.nodeData` |
| [`nodeEdited`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeedited) | Before the edited text is saved (Enter or focus loss). Cancel the save by setting `args.cancel = true`. Use this event for validation such as disallowing empty text. | `args.oldText`, `args.newText`, `args.node`, `args.nodeData`, `args.cancel` |

The following example shows how to cancel editing in the `nodeEdited` event when the user enters only whitespace:

```typescript
public onNodeEdited(args: NodeEditEventArgs): void {
  if (!args.newText || args.newText.trim() === '') {
    args.cancel = true; // Prevent the empty or whitespace text from being saved
  }
}
```

> If the user presses **Escape**, the editor closes without firing the `nodeEdited` event.

In the following example, the first level node's text cannot be changed, but all other level nodes' text can be modified.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs12/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs12" %}

## See Also

* [How to validate the text when renaming the tree node](./how-to/validate-the-text-when-renaming-the-tree-node)
* [How to process the tree node operations using context menu](./how-to/process-the-tree-node-operations-using-context-menu)