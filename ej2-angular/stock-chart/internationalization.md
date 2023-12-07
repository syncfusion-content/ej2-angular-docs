---
layout: post
title: Internationalization in Angular Stock chart component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Internationalization 
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Angular Stock chart component

Chart provide supports for internationalization for below chart elements.

* Axis label.
* Tooltip.
* Crosshair

For more information about number and date formatter you can refer [`internationalization`](https://ej2.syncfusion.com/angular/documentation/stock-chart/internationalization?no-cache=1).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing an component that works in different cultures/locales.  Internationalization  library is used to globalize number, date, time values in Chart component using  `labelFormat` property in axis.

**Numeric Format**

In the below example axis labels, tooltip and crosshair labels are globalized to EUR.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/internationalization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/internationalization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/internationalization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/internationalization-cs1" %}