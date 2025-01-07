---
layout: post
title: Creating dynamic HTML Angular Tooltip component | Syncfusion
description: Learn here all about Custom Tooltip with dynamic html in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip
documentation: ug
domainurl: ##DomainURL##
---

# Creating dynamic HTML Tooltips in Angular

Tooltip loads HTML pages via the HTML tags such as iframe, video, and map using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property, which supports both string and HTML tags.

To load an `iframe` element in Tooltip, set the required iframe in the `content` of Tooltip while initializing the Tooltip component. Here's an example of setting an iframe as the content of a Tooltip:

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
