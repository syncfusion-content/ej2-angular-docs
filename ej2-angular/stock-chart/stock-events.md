---
layout: post
title: Stock events in Angular Stock chart component | Syncfusion
description: Learn here all about Stock events in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Stock events 
documentation: ug
domainurl: ##DomainURL##
---

# Stock events in Angular Stock chart component

<!-- markdownlint-disable MD036 -->

Stock Events visualizes stock events in stock chart. 'SplineSeries' is used to represent selected data value. You can customize the specific data value using `stockEvents` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/stock-events-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/stock-events-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/stock-events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/stock-events-cs1" %}

**Stock Events for individual series**

<!-- markdownlint-disable MD036 -->

By default, stock events will be showed for all series. Now, you can set the stock events for particular series using `seriesIndexes` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/stock-events-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/stock-events-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/stock-events-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/stock-events-cs2" %}
