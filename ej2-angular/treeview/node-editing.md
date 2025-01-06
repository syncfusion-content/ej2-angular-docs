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

The TreeView allows you to edit nodes by setting the [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/treeview#allowediting) property to **true**. To directly edit the nodes in place, **double click** the TreeView node or **select** the node and press the **F2** key.

When editing is completed by losing focus or by pressing the **Enter** key, the modified node's text saves automatically. If you do not want to save the modified node’s text in TreeView node, press **Escape** key. It does not save the edited text to the TreeView node.

* Node editing can also be performed programmatically by using the [`beginEdit`](https://ej2.syncfusion.com/angular/documentation/api/treeview#beginedit) method. When passing the node ID or element through this method, an edit textbox will be created for the particular node, allowing it to be edited.

* If you need to validate or prevent editing, you can use the [`nodeEditing`](https://ej2.syncfusion.com/angular/documentation/api/treeview#nodeediting) event. This event is triggered before the TreeView node is renamed. On successfully renaming a node the [`nodeEdited`](https://ej2.syncfusion.com/angular/documentation/api/treeview#nodeedited) event will be triggered.

In the following example, the first level node’s text cannot be changed, but all other level nodes' text can be changed.

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
