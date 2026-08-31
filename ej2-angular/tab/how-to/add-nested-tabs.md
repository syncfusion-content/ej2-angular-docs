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

The Tab component supports nested tabs via the [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective#content) property. Add nested Tab elements inside the parent Tab's [`content`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabItemDirective#content) property, then initialize the inner Tab from the parent Tab's [`selected`](https://ej2.syncfusion.com/angular/documentation/api/tab/tabModel#selected) event handler using the inner Tab's element id.

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

## See Also

* [Render other components in Tab using Angular template](./render-other-components-in-tab-using-angular-template)