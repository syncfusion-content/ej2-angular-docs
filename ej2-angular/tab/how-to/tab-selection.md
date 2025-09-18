---
layout: post
title: Tab selection in Angular Tab component | Syncfusion
description: Learn here all about Tab selection in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Tab selection in Angular Tab component

You can determine whether tab selection occurs through user interaction or programmatic methods using the `isInteracted` field in the [`selecting`](https://ej2.syncfusion.com/angular/documentation/api/tab/#selecting) and [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/#selected) event arguments. When users change tabs through click actions, this property return `true` otherwise, it will return `false`. The following code example demonstrates how to identify the tab selection state in both selecting and selected events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/animation-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/animation-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/animation-cs2" %}