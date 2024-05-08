---
layout: post
title: Customization in Angular Accumulation chart component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Customization in Angular Accumulation chart component

**Radius customization**

By default, radius of the pie series will be 80 % of the size (minimum of height and width of the chart).
You can customize this, by using [`radius`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#radius) property of the series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/radius-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/radius-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/radius-cs4" %}

**Doughnut Series**

In order, to achieve a doughnut in pie, you need to customize the [`innerRadius`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#innerradius) property of the series. By default, the value is 0%. By setting value greater than 0%, a doughnut will appear. `innerRadius` property takes value from 0% to 100% of the pie radius.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/doughnut-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/doughnut-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/doughnut-cs1" %}

**Smart Labels**

As like in chart, you can also enable labels for the points in accumulation chart using [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#datalabel) property in series. This label will arrange smartly
without overlapping with each other. You can enable or disable this feature using [`enableSmartLabels`]../api/accumulation-chart/accumulationChartModel/#enablesmartlabels)property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/smartlabel-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/smartlabel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/smartlabel-cs1" %}

## Datalabel template

As like in chart, you can use datalabel template for the points in accumulation chart using [`dataLabel`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#datalabel) property in series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/smartlabel-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/smartlabel-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/smartlabel-cs2" %}

## Grouping

You can club/group few points of the series based on [`groupTo`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#groupto) property. For example, if the club value is 11, then the points with value less than 11 is grouped together and will be showed as a single point with label `others`. You can customize the label for that point using [`textRender`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationChartModel/#textrender) event. The property also takes value in percentage (percentage of total data points value).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/clubpoint-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/clubpoint-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/clubpoint-cs1" %}

**Start and End angles**

You can customize the start and end angle of the pie series using [`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#startangle) and [`endAngle`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#endangle) properties. By default, `startAngle` is 0 degree and `endAngle` is 360 degree. By customizing this, we can achieve a semi pie series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/startangle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/startangle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/startangle-cs1" %}

**Explode**

By setting [`explode`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#explode) property to true, you can explode a point in series on mouse click.
Points can also be exploded on load, by using [`explodeIndex`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#explodeindex),[`explodeOffset`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#explodeoffset) and [`explodeAll`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#explodeall) property.
`explodeIndex` takes the value of the point index to be exploded, while `explodeAll` property takes the value in boolean, when it’s true, all the points will be exploded on initial render itself. `explodeOffset` property specifies the distance about which the slice has to be moved, when it is exploded.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/explode-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/explode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/explode-cs1" %}

**Legend**

  As like chart, legend is also available for accumulation, which gives information about the points. But
  by default, the legend will be placed on right hand side, if the width of the chart is high or will be
  placed on the bottom, if the height of the chart is high. Other customization regarding the legend
  element are same as [`chart legend`](http://ej2.syncfusion.com/documentation/chart/legend.html#position-and-alignment).
  Here legend for a point can be collapsed by giving empty string to the x value of the point.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/legend-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/legend-cs1" %}

## Annotation

Annotations are used to mark the specific area of interest in the chart area with texts, shapes or images.

<!-- markdownlint-disable MD033 -->

You can add annotations to the chart by using the <code>annotations</code> option.
By using the <code>content</code> option of annotation object, you can specify the id of the element that needs to be displayed in the chart area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/accumulationAnnotation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/accumulationAnnotation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/accumulationAnnotation-cs1" %}

>Note: To use annotation feature in accumulation chart, we need to inject `AccumulationAnnotationService` into the `@NgModule.providers`.

## Empty Points

The Data points that uses the null or undefined as value are considered as empty points.
Empty data points are ignored and not plotted in the Chart. You can customize those points, using `emptyPointSettings` property in series.
Default mode of the empty point is Gap. Others mode supported here are 'Average' and 'Zero'.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/radius-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/radius-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/radius-cs5" %}

**Customizing empty point**

Specific color for empty point can be set by `fill` property in `emptyPointSettings`. Border for a empty point can be set by `border` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/radius-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/radius-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/radius-cs6" %}