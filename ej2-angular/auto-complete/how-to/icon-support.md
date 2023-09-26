---
layout: post
title: Icon support in Angular Auto complete component | Syncfusion
description: Learn here all about Icon support in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Icon support 
documentation: ug
domainurl: ##DomainURL##
---

# Icon support in Angular Auto complete component

You can render **icons** to the list items by mapping the [`iconCss`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#fields) field. This `iconCss` field create a span in the list item with mapped class name to allow styling as per your need.

In the following sample, the icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/icon-class-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/icon-class-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/icon-class-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/icon-class-cs1" %}