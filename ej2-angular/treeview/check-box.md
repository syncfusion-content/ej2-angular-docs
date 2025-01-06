---
layout: post
title: Check box in Angular TreeView component | Syncfusion
description: Learn here all about Check box in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Check box in Angular TreeView component

The TreeView component allows you to check more than one node without affecting the UI's appearance. This can be achieved by enabling the [showCheckBox](https://ej2.syncfusion.com/angular/documentation/api/treeview/#showcheckbox) property. When this property is enabled, checkbox appears before each TreeView node text.

* If one of the child nodes is not in checked state, then the parent node will be in an intermediate state

* If all the child nodes are in checked state, then the parent node's state will also be checked.

* If a parent node is checked, then all the child node's state will also be checked.

By default, the checkbox state of parent and child nodes are dependent on each other. If you need the checked state of parent and child nodes to be independent, you can achieve it using the [`autoCheck`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#autocheck) property.

Using the [`checkedNodes`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#checkednodes) property, you can set the nodes that need to be checked or get the ID of nodes that are currently checked in the TreeView component.

If you need to prevent the node check action for a particular node, the [`nodeChecking`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodechecking) event can be used which is triggered before the TreeView node is checked/unchecked. The [`nodeChecked`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodechecked) event will be triggered when the TreeView node is checked/unchecked successfully.

In the following example, the `showCheckBox` property is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs1" %}

## Checked nodes

You can get or set the checked nodes in TreeView at initial rendering and dynamically by using the [checkedNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#checkednodes) property. It returns the checked nodes' IDs as an array.

In the following example, the **New South Wales** and **Western Australia** nodes are checked at initial rendering.
If any more nodes are checked, the checked nodes' IDs will be displayed in alert.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs2/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs2" %}

## See Also

* [How to check/uncheck the checkbox on clicking the tree node text](./how-to/check-uncheck-the-checkbox-on-clicking-the-tree-node-text)

* [How to disable the checkboxes alone in the tree nodes](./how-to/disable-checkbox-of-the-tree-node)

* [How to remove the checkbox of the parent node in treeview](./how-to/remove-parent-checkbox)
