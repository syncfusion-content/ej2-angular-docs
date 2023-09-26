---
layout: post
title: Spline Range Area Chart in Angular Chart component | Syncfusion
description: Learn here all about Spline Range Area Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Spline Range Area Chart
documentation: ug
domainurl: ##DomainURL##
---
# Spline Range Area in Angular Chart component

## Spline Range Area

The Spline Range Area Chart is used to display continuous data points as a set of splines that vary between high and low values over intervals of time and across different categories.

To render a spline range area series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `SplineRangeArea` and inject `SplineRangeAreaSeriesService`  into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/area-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/area-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/area-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/area-cs3" %}

## Series customization

The following properties can be used to customize the `spline range area` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/) – Specifies the [color](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/splinerangearea-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/splinerangearea-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/splinerangearea-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/splinerangearea-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
