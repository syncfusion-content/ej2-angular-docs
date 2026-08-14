---
layout: post
title: How to add nested Tabs in Angular Tab | Syncfusion
description: Add nested Tabs inside an Angular Tab item content area and initialize the inner Tab from the parent selected event handler.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to add nested Tabs in Angular Tab

The Tab component supports rendering nested levels of tabs by utilizing the [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#content) property.
You can add nested Tab elements inside the parent Tab's [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective/#content) property.
To render nested tabs, initialize the component using the tab element's id from the [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/#selected) event handler.

{% tabs %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/tab/basic-cs6/src/app.component.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/basic-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/basic-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/basic-cs6" %}