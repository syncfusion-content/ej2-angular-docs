---
layout: post
title: Custom search in Angular Auto complete component | Syncfusion
description: Learn here all about Custom search in Syncfusion Angular Auto complete component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom search 
documentation: ug
domainurl: ##DomainURL##
---

# Custom search in Angular Auto complete component

The AutoComplete has built-in support to highlight the searched characters on suggested list items when enabled the [`highlight`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/#highlight) property.

In the below sample, to customize the matched character in suggestion list by `e-highlight` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/highlight-cs1" %}
