---
layout: post
title: Accordion tree in Angular TreeView component | Syncfusion
description: Learn here all about Accordion tree in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Accordion tree in Angular TreeView component

An accordion interface allows users to expand and collapse hierarchical content, with the key constraint that only one node can be expanded at any given time. The TreeView component can be customized to implement accordion behavior by utilizing the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#cssclass) property for styling and the [`nodeSelected`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselected) event to control expansion logic.

## Implementation Overview

The accordion TreeView behavior requires:

1. **Event Handling**: Use the `nodeSelected` event to detect when a user interacts with tree nodes
2. **Programmatic Control**: Implement logic to collapse all nodes except the currently selected one
3. **Custom Styling**: Apply CSS classes via `cssClass` property to enhance the accordion appearance
4. **Data Structure**: Ensure your hierarchical data supports the expand/collapse operations

The following example demonstrates how to configure a TreeView component with accordion functionality:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
