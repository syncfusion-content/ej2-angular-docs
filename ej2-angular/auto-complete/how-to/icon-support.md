---
layout: post
title: Show list items with icons in Angular AutoComplete | Syncfusion®
description: Add icons to Angular AutoComplete list items by mapping the iconCss field to a CSS class for visual representation in the suggestion popup.
platform: ej2-angular
control: Icon support 
documentation: ug
domainurl: ##DomainURL##
---

# How to show list items with icons in Angular AutoComplete

You can render **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#fields) field. This `iconCss` field creates a `span` element in the list item with the mapped class name, allowing you to style the icon as needed.

In the following sample, the icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/icon-class-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/icon-class-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/icon-class-cs1" %}