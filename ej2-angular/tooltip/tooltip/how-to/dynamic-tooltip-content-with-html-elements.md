---
layout: post
title: Dynamic tooltip content with html elements in Angular Tooltip component | Syncfusion
description: Learn here all about Dynamic tooltip content with html elements in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dynamic tooltip content with html elements 
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic tooltip content with html elements in Angular Tooltip component

Load HTML tags into the tooltip using the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content/) template.

You can use HTML tags such as `<div>`, `<span>`, `<b>`, `<i>`, `<u>`, and more. You can also apply style attributes to HTML tags.

This example uses Bold, Italic, Underline, and Anchor tags.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/load-html-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs5" %}
