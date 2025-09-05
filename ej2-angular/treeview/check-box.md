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

The TreeView component allows you to check multiple nodes without affecting the UI's appearance by enabling the [showCheckBox](https://ej2.syncfusion.com/angular/documentation/api/treeview/#showcheckbox) property. When this property is enabled, a checkbox appears before each TreeView node text, providing users with an intuitive selection mechanism.

The checkbox functionality follows a hierarchical relationship pattern:

* When one or more child nodes remain unchecked, the parent node displays an intermediate state (typically shown as a partially filled or indeterminate checkbox)

* When all child nodes are checked, the parent node automatically transitions to a fully checked state

* When a parent node is checked, all its child nodes automatically become checked as well

By default, the checkbox state of parent and child nodes maintain dependency on each other. To make the checked state of parent and child nodes independent, disable the [`autoCheck`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#autocheck) property. When `autoCheck` is set to false, checking or unchecking parent nodes will not affect their children, and vice versa.

The [`checkedNodes`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#checkednodes) property allows you to programmatically set nodes that should be checked during initialization or retrieve the IDs of currently checked nodes in the TreeView component.

For event-driven checkbox control, use the [`nodeChecking`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodechecking) event to prevent node check actions for specific nodes. This event triggers before a TreeView node is checked or unchecked, allowing for custom validation. The [`nodeChecked`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodechecked) event fires after a TreeView node has been successfully checked or unchecked.

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

## Initial and dynamic checkbox selection

The [checkedNodes](https://ej2.syncfusion.com/angular/documentation/api/treeview/#checkednodes) property enables you to specify which nodes should be checked during initial rendering or to dynamically manage checked nodes programmatically. This property returns an array containing the IDs of all currently checked nodes.

In the following example, the **New South Wales** and **Western Australia** nodes are pre-checked during initial rendering. When additional nodes are checked through user interaction, the system displays an alert showing all currently checked node IDs.

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