---
layout: post
title: Dynamic HTML Content in Angular Tooltip Component | Syncfusion
description: Learn here all about Dynamic Tooltip content with html elements in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic HTML content in Angular Tooltip component

The Tooltip component supports HTML tags through the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content/) property.

HTML tags such as `<div>`, `<span>`, `<b>`, `<i>`, `<u>`, and others can be used. Style attributes can also be applied to HTML tags.

The following sample uses bold, italic, underline, and anchor tags.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/load-html-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs3" %}
