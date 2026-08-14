---
layout: post
title: How to show list items with icons in Angular ComboBox | Syncfusion®
description: Add icons to Angular ComboBox list items by mapping the iconCss field to a CSS class for visual representation in the suggestion popup.
platform: ej2-angular
control: Icons support 
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in Angular ComboBox

You can render **icons** to the list items by mapping the [iconCss](https://ej2.syncfusion.com/angular/documentation/api/combo-box/index-default#fields) &nbsp;fields. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/combobox/iconClass-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/combobox/iconClass-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/combobox/iconClass-cs1" %}
