---
layout: post
title: How to render TreeView as accordion in Angular Tree View | Syncfusion
description: Build an Angular Tree View accordion by collapsing all but the selected node in the nodeSelected event with cssClass styling.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# How to render TreeView as accordion in Angular Tree View

An accordion interface allows users to expand and collapse hierarchical content, with the key constraint that only one node can be expanded at any given time. The TreeView component can be customized to implement accordion behavior by utilizing the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#cssclass) property for styling and the [`nodeSelected`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselected) event to control expansion logic.

## Implementation overview

The accordion TreeView behavior allows only one expanded node at a time and requires the following pieces:

1. **CSS class**: Apply a custom `cssClass` value (for example `accordion-tree`) on the TreeView so you can scope styling.
2. **Event handling**: Listen to the `nodeSelected` event to detect when the user picks a new node.
3. **Programmatic control**: Inside the handler, retrieve all currently expanded nodes from `tree.expandedNodes`, remove the newly selected node ID from that list (if present), and then call `tree.collapseAll(remainingExpanded)` so only the selected branch stays open.
4. **Data structure**: Use hierarchical data so `collapseAll` only walks valid ancestors.

The following example demonstrates how to configure a TreeView component with accordion functionality:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/accordion-tree-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/accordion-tree-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/accordion-tree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/accordion-tree-cs1" %}
