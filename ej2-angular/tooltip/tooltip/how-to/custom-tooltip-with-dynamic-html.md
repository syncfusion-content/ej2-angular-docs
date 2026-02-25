---
layout: post
title: Custom tooltip with dynamic html in Angular Tooltip component | Syncfusion
description: Learn here all about Custom tooltip with dynamic html in Syncfusion Angular Tooltip component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom tooltip with dynamic html 
documentation: ug
domainurl: ##DomainURL##
---

# Custom tooltip with dynamic html in Angular Tooltip component

Load HTML pages into the tooltip using HTML tags such as iframe, video, and map. The [`content`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#content) property accepts both string and HTML tags.

To load an `iframe` element in the tooltip, set the required iframe in the `content` property when initializing the tooltip component. Refer to the following code:

```typescript
content= '<iframe src="https://www.syncfusion.com/products/essential-js2"></iframe>'
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tooltip/html-page-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tooltip/html-page-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tooltip/html-page-cs3" %}
