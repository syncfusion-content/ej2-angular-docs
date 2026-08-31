---
layout: post
title: Template in Angular Tree View | Syncfusion
description: Customize Angular Tree View node content with the nodeTemplate property to render images, fields, or rich HTML for each node.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular Tree View

The TreeView component allows you to customize the appearance and content of TreeView nodes using the [nodeTemplate](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodetemplate) property. This property accepts either a template string or the ID of an HTML element defined in the component, enabling you to display rich content beyond simple text labels.

Node templates are particularly useful when you need to display structured data, images, icons, or multiple data fields within each tree node. Each rendered node gains access to the corresponding data record so the markup can react to dynamic data.

## Template-context syntax

When you supply a **template string**, bind values using the Syncfusion string-template syntax `${node.<field>}` — references resolve against the `node` context variable that contains the current node's data record:

| Syntax | Description |
| --- | --- |
| `${node.id}` | The node's unique identifier from the `id` field mapping. |
| `${node.name}` / `${node.<textField>}` | The display text mapped through the `text` field. |
| `${node.<imgField>}` | Resolved image URL when the `imageUrl` field mapping is configured. |

> The `${...}` placeholder is **not** Angular interpolation; it is the Syncfusion template engine that evaluates the expression against the `node` context for each rendered item.

In the following sample, employee information such as employee photo, name, and designation have been included using the `nodeTemplate` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/template-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/template-cs1" %}

## See Also

* [How to customize the expand and collapse icons](./how-to/customize-the-expand-and-collapse-icons)
* [How to customize the tree nodes based on levels](./how-to/customize-the-tree-nodes-based-on-levels)