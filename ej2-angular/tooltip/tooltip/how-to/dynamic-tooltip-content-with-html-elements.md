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

The Tooltip component loads HTML tags using the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content/) template.

The HTML tags such as `<div>`, `<span>`, `bold`, `italic`, `underline`, etc., can be used. Style attributes can also be applied with HTML tags.

Here, Bold, Italic, Underline, and Anchor tags are used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/load-html-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/tooltip/load-html-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs5" %}
