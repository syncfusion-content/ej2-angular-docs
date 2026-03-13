---
layout: post
title: Add series in Angular Chart component | Syncfusion
description: Learn here all about Add series in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add series 
documentation: ug
domainurl: ##DomainURL##
---

# Add series in Angular Chart component

You can add or remove the chart series dynamically by using the [`addSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart/#addseries) or [`removeSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart/#removeseries) method.

To add or remove the series dynamically, follow the given steps:

**Step 1**: Add a new series

To add a new series to the chart dynamically, pass the series value to the [`addSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart/#addseries) method.

**Step 2**: Remove a series

To remove a series from the chart dynamically, pass the series index to the [`removeSeries`](https://ej2.syncfusion.com/angular/documentation/api/chart/#removeseries) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/add-series-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/add-series-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/add-series-cs2" %}