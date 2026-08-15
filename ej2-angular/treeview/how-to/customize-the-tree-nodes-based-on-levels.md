---
layout: post
title: How to customize tree node levels in Angular Tree View | Syncfusion
description: Apply level-based styles to Angular Tree View nodes by combining the cssClass property with level-specific CSS selectors.
platform: ej2-angular
control: TreeView
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tree node levels in Angular Tree View

The TreeView component allows you to apply different visual styles to nodes based on their hierarchical level within the tree structure. This level-based customization enables you to create visually distinct representations for parent nodes, child nodes, and deeply nested items, enhancing the user interface and improving content organization.

Level-based customization works by adding a custom CSS class to the TreeView component through the `cssClass` property, then targeting specific tree levels using CSS selectors. The TreeView automatically assigns level-specific classes to nodes, which you can leverage to apply targeted styling based on the node's position in the hierarchy.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tree-view/customize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/customize-cs1/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/customize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/customize-cs1" %}