---
layout: post
title: Node editing in Angular TreeView component | Syncfusion
description: Learn here all about Node editing in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Node editing in Angular TreeView component

The TreeView component provides in-place node editing functionality by setting the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowediting) property to **true**. To directly edit nodes in place, **double-click** the TreeView node or **select** the node and press the **F2** key.

When editing is completed by losing focus or pressing the **Enter** key, the modified node's text is saved automatically. To cancel editing without saving changes, press the **Escape** key. This discards the edited text and retains the original TreeView node text.

* Node editing can also be performed programmatically using the [`beginEdit`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#beginedit) method. When passing the node ID or element through this method, an inline edit textbox is created for the specified node, enabling immediate editing.

* For validation or prevention of editing operations, use the [`nodeEditing`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeediting) event. This event triggers before the TreeView node is renamed and provides access to cancel the operation, original text, new text, and node data. Upon successful node renaming, the [`nodeEdited`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeedited) event triggers with the updated node information.

In the following example, the first level node's text cannot be changed, but all other level nodes' text can be modified.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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