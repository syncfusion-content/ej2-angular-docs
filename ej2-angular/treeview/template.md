---
layout: post
title: Template in Angular TreeView component | Syncfusion
description: Learn here all about Template in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Template in Angular TreeView component

The TreeView component allows you to customize the appearance and content of TreeView nodes using the [nodeTemplate](https://ej2.syncfusion.com/angular/documentation/api/treeview/#nodetemplate) property. This property accepts either a template string or HTML element ID, enabling you to display rich content beyond simple text labels.

Node templates are particularly useful when you need to display structured data, images, icons, or multiple data fields within each tree node. The template system provides access to the complete node data object, allowing dynamic content rendering based on your data source.

In the following sample, employee information such as employee photo, name, and designation has been included using the `nodeTemplate` property.

The template content uses Angular template interpolation syntax with `${...}` expressions to bind data properties from your TreeView data source.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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