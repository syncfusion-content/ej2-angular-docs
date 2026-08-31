---
layout: post
title: Customize highlight search in Angular AutoComplete | Syncfusion®
description: Highlight matched characters in the Angular AutoComplete suggestion list using the highlight property or by customizing with the e-highlight class.
platform: ej2-angular
control: Custom search 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize highlight search in Angular AutoComplete

The AutoComplete component has built-in support to highlight the searched characters in the suggested list items when the [`highlight`](https://ej2.syncfusion.com/angular/documentation/api/auto-complete/index-default#highlight) property is enabled.

In the following sample, the matched character in the suggestion list is customized using the `e-highlight` class.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/highlight-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/highlight-cs1" %}
