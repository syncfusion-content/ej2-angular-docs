---
layout: post
title: Bind data source to Angular Context Menu items | Syncfusion
description: Learn here all about Populate menu items with data source in Syncfusion Angular Context menu component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# Populate menu items with data source in Angular Context menu component

The ContextMenu component supports data binding through the [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel/#items) property, allowing you to populate menu items dynamically from local data sources. This approach is particularly useful when menu content needs to be generated from arrays, objects, or other structured data formats, providing flexibility for dynamic menu scenarios.

The following example demonstrates how to bind local data source to the ContextMenu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/context-menu/data-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/data-binding-cs1" %}