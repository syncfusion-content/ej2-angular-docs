---
layout: post
title: Populate menu items with data source in Angular Context Menu | Syncfusion
description: Populate Angular Context Menu items from a local data source by binding an array of objects to the items property.
platform: ej2-angular
control: Context Menu 
documentation: ug
domainurl: ##DomainURL##
---

# How to populate menu items with data source in Angular Context Menu

The ContextMenu component supports data binding through the [`items`](https://ej2.syncfusion.com/angular/documentation/api/context-menu/menuItemModel/#items) property, allowing you to populate menu items dynamically from local data sources. This approach is particularly useful when menu content needs to be generated from arrays, objects, or other structured data formats, providing flexibility for dynamic menu scenarios.

The following example demonstrates how to bind local data source to the ContextMenu:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/context-menu/data-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/context-menu/data-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/context-menu/data-binding-cs1" %}