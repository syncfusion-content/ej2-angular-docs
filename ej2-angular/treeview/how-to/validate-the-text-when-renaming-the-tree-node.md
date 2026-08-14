---
layout: post
title: How to validate text when editing tree nodes in Angular Tree View | Syncfusion
description: Validate Angular Tree View node text on rename via the nodeEdited event using newText, oldText, and cancel.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# How to validate text when editing tree nodes in Angular Tree View

You can validate the tree node text while editing using the [`nodeEdited`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeedited) event of the TreeView.

## Prerequisites

To enable text validation functionality, ensure the TreeView component has the [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#allowediting) property set to `true`. This property enables the built-in editing capability that allows users to modify node text by double-clicking or using keyboard shortcuts.

## Validation process

The [`nodeEdited`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodeedited) event provides a [`NodeEditEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/treeview/nodeEditEventArgs/) object containing essential properties for validation:

- `newText`: The updated text entered by the user
- `oldText`: The original text before editing
- `cancel`: Boolean property to prevent the edit operation when set to `true`
- `node`: Reference to the edited DOM element
- `nodeData`: The data object associated with the edited node

The following example demonstrates how to validate and prevent empty values in a tree node:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/validation-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/validation-cs1" %}