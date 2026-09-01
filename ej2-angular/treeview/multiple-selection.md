---
layout: post
title: Multi Selection in Angular Tree View | Syncfusion
description: Enable Angular Tree View multi-selection with allowMultiSelection, supporting Ctrl and Shift click for individual or range picks.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Multi Selection in Angular Tree View

The TreeView component supports selecting multiple nodes simultaneously, enabling users to perform batch operations on several items. Visual indicators highlight the chosen nodes and confirm the selection state.

The TreeView supports multiple node selection by setting the [allowMultiSelection](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowmultiselection) property to **true**.

## Enabling multiple selection

To select multiple nodes, use these keyboard combinations:

* Hold the **CTRL** key and click the desired nodes to add or remove them from the selection.
* Hold the **SHIFT** key and click a node to select a continuous range from the last selected node to the clicked node.

In the following example, the `allowMultiSelection` property is enabled to demonstrate multiple node selection.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs10/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs10" %}

> Multiple selection is not supported through touch interactions on mobile devices.

## Managing selected nodes

Control and retrieve selected nodes using the [selectedNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#selectednodes) property. This property accepts and returns an array of selected node IDs (`string[]`), allowing both initial configuration and dynamic updates.

### Setting selected nodes programmatically

Bind `selectedNodes` from the component class to seed the initial selection, or assign to the property to update the selection at runtime:

```typescript
@Component({
  selector: 'app-container',
  template: `<ejs-treeview id='tree' [fields]='field' [selectedNodes]='selectedNodeIds'></ejs-treeview>`
})
export class AppComponent {
  public field: Object = { dataSource: this.localData, id: 'id', text: 'name', parentID: 'pid' };
  public selectedNodeIds: string[] = ['1', '3'];

  // To update at runtime:
  // this.selectedNodeIds = ['2', '4'];
}
```

### Selection events

The TreeView provides events to handle selection changes:

* The [`nodeSelecting`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselecting) event triggers before a node selection occurs. Set `args.cancel = true` in the event handler to cancel the selection.
* The [`nodeSelected`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselected) event triggers after a node selection is completed successfully. Inspect `args.action` to determine whether the change was a `select` or `un-select`, and `args.nodeData` for the selected node record.

In the following example, **New South Wales** and **Western Australia** nodes are pre-selected at initialization. The selection events display alerts showing the selected node information.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs11/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs11" %}

## See Also

* [How to hover and select the multiple line tree nodes](./how-to/hover-multi-line-tree-node)

* [How to select only one child at a time, out of one specific parent](./how-to/select-one-child)