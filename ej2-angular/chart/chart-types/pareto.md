---
layout: post
title: Pareto in Angular Chart component | Syncfusion
description: Learn here all about Pareto in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pareto
documentation: ug
domainurl: ##DomainURL##
---

# Pareto in Angular Chart component

## Pareto

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of Column and Line series.
The initial values are represented by column chart and the cumulative values are represented by Line chart.
To render a pareto chart, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#type) as `Pareto` and inject `ParetoSeries` `ColumnSeries` and  `LineSeries` module.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/line-cs10" %}

## Pareto customization

The pareto line series can be customized by using the [`marker`](https://ej2.syncfusion.com/angular/documentation/api/chart/paretoOptionsModel/#marker), [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/paretoOptionsModel/#width), [`dashArray`](https://ej2.syncfusion.com/angular/documentation/api/chart/paretoOptionsModel/#dasharray), and [`fill`](https://ej2.syncfusion.com/angular/documentation/api/chart/paretoOptionsModel/#fill) properties in the [`paretoOptions`](https://ej2.syncfusion.com/angular/documentation/api/chart/paretoOptionsModel/). The secondary axis for the pareto series can be shown or hidden using the [`showAxis`](https://ej2.syncfusion.com/angular/documentation/api/chart/paretoOptionsModel/#showaxis) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/line-cs11" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
