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

The Tooltip component supports HTML tags using the [content](https://ej2.syncfusion.com/angular/documentation/tooltip/content/) template.

The HTML tags such as `<div>`, `<span>`, `bold`, `italic`, `underline`, etc., can be used. Style attributes can also be applied to HTML tags.

Here, Bold, Italic, Underline, and Anchor tags are used.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/load-html-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/load-html-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/load-html-cs3" %}
