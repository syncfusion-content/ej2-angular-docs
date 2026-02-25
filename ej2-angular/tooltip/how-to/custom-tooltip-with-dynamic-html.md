---
layout: post
title: Creating dynamic HTML Angular Tooltip component | Syncfusion
description: Learn here all about Custom Tooltip with dynamic html in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Creating dynamic HTML tooltips in Angular

The Tooltip component loads HTML pages using HTML tags such as `iframe`, `video`, and `map` through the [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property, which supports both string and HTML content.

To load an `iframe` element in the tooltip, set the required iframe in the tooltip's `content` property during initialization. The following example demonstrates setting an iframe as tooltip content:

```typescript

content= '<iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>

```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/html-page-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/html-page-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/html-page-cs2" %}
