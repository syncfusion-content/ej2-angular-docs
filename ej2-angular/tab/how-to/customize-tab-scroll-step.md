---
layout: post
title: How to customize tab scroll step in Angular Tab | Syncfusion
description: Set the Angular Tab scrollStep property to control how far header items scroll when clicking the left or right navigation icons.
platform: ej2-angular
control: Tab
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tab scroll step in Angular Tab

The Tab component supports customizing the scrolling distance when you click the left and right side navigation icons. You can customize the [`scrollStep`](https://ej2.syncfusion.com/angular/documentation/api/tab/#scrollstep) property for scrolling distance. Refer to the following code example.

* By using the Tab scrollStep property, pass a required value to customize tab scrollStep.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/tab/scrollstep-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/tab/scrollstep-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/tab/scrollstep-cs1" %}