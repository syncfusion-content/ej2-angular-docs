---
layout: post
title: Hover multi line tree node in Angular TreeView component | Syncfusion
description: Learn here all about Hover multi line tree node in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# Hover multi line tree node in Angular TreeView component

When working with TreeView nodes that contain multi-line content, the default hover and selection behaviors may not align properly with the actual content height. This guide demonstrates how to create consistent hover and selection effects that cover the entire multi-line node content area.

## Overview

Multi-line TreeView nodes present a unique challenge where the hover area (`e-fullrow` element) needs to match the actual content height (`e-text-content` element). Without proper height synchronization, users may experience inconsistent hover effects or selection areas that don't cover the complete node content.

This implementation uses the TreeView component's [`created`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#created) and [`nodeSelecting`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeselecting) events to dynamically adjust row heights and ensure proper hover behavior across all multi-line nodes.

## Implementation

The solution involves two key components:
1. **Event handlers** that calculate and apply proper heights to hover elements
2. **CSS styling** that accommodates multi-line content layout

### Component Setup

Configure the TreeView component with the necessary event handlers and styling:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/multi-line-tree-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/tree-view/multi-line-tree-cs1" %}
