---
layout: post
title: How to add dynamic HTML content in Angular Tooltip | Syncfusion
description: Render rich HTML inside the Syncfusion Angular Tooltip using tags like div, span, b, i, u, and a with inline styles applied to the content.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# How to add dynamic HTML content in Angular Tooltip

The Tooltip component supports HTML tags through the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content/) property.

HTML tags such as `<div>`, `<span>`, `<b>`, `<i>`, `<u>`, and others can be used. Style attributes can also be applied to HTML tags.

The following sample uses bold, italic, underline, and anchor tags.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tooltip/load-html-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs3" %}
