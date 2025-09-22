---
layout: post
title: Add nested tabs in Angular Tab component | Syncfusion
description: Learn here all about Add nested tabs in Syncfusion Angular Tab component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# Add nested tabs in Angular Tab component

The Tab component supports rendering nested levels of tabs by utilizing the [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#content) property.
You can add nested Tab elements inside the parent Tab's [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#content) property.
To render nested tabs, initialize the component using the tab element's id from the [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/#selected) event handler.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/basic-cs6/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/tab/basic-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs6" %}