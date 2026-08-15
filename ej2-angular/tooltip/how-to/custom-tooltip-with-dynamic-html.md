---
layout: post
title: How to load dynamic HTML Tooltip in Angular Tooltip | Syncfusion
description: Load dynamic HTML pages inside the Syncfusion Angular Tooltip using the content property with iframe, video, and map elements.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# How to load dynamic HTML Tooltip in Angular Tooltip

The Tooltip component loads HTML pages using HTML tags such as `iframe`, `video`, and `map` through the [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property, which supports both string and HTML content.

To load an `iframe` element in the tooltip, set the required iframe in the tooltip's `content` property during initialization. The following example demonstrates setting an iframe as tooltip content:

```typescript

content= '<iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>

```

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tooltip/html-page-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/html-page-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/html-page-cs2" %}
