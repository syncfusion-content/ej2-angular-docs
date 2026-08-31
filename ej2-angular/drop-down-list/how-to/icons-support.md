---
layout: post
title: How to show items with icons in Angular Dropdown List | Syncfusion®
description: Add icons to Angular Dropdown List items by mapping the iconCss field to a CSS class for visual representation in the popup list.
platform: ej2-angular
control: Icons support 
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in Angular Dropdown List

You can render **icons** to the list items by mapping the [iconCss](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#fields) &nbsp;field. This `iconCss` field creates a span in the list item with mapped class name to allow styling as per your need.

In the following sample, the icon classes are mapped to the `iconCss` field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/dropdownlist/iconClass-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/iconClass-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="index.css" %}
{% include code-snippet/dropdownlist/iconClass-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/iconClass-cs1" %}
