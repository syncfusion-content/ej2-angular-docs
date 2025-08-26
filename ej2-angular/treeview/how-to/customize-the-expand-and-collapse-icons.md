---
layout: post
title: Apply custom icons in Angular TreeView component | Syncfusion
description: Learn here all about Customize the expand and collapse icons in Syncfusion Angular TreeView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: TreeView 
documentation: ug
domainurl: ##DomainURL##
---

# Customize the expand and collapse icons in Angular TreeView component

The TreeView component displays default expand and collapse icons for parent nodes. These icons can be customized to match application themes or design requirements by using the [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/treeview/#cssclass) property along with custom CSS styling.

The `cssClass` property allows you to apply custom CSS classes to the TreeView component, which can then be used to override the default expand and collapse icon styles. The TreeView uses specific CSS selectors for these icons that can be targeted through custom CSS rules.

To customize the expand and collapse icons, define custom CSS classes that target the TreeView's icon elements and apply these styles using the `cssClass` property. The custom CSS should override the default icon fonts or background images with the desired custom icons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tree-view/getting-started-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/tree-view/getting-started-cs9/src/styles.css %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tree-view/getting-started-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tree-view/getting-started-cs9" %}