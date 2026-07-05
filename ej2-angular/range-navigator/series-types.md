---
layout: post
title: Series types in Angular Range navigator component | Syncfusion
description: Learn here all about Series types in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Series types 
documentation: ug
domainurl: ##DomainURL##
---

# Series types in Angular Range navigator component

To render the data, the Range Selector supports six types of series.

<!-- markdownlint-disable MD036 -->

## Line

<!-- markdownlint-disable MD036 -->

To render a line series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Line** and inject the `LineSeriesService` into the `@NgModule.providers`. By default, the line series is rendered in the Range Selector .

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/line-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/line-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/line-cs1" %}

## Area

To render an area series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Area** and inject `AreaSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/area-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/area-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/area-cs1" %}

## StepLine

To render a Step line series, use series [Type](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **StepLine** and inject `StepLineSeries` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/stepline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/stepline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/stepline-cs1" %}

## Spline

To render a Spline series, use series [Type](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Spline** and inject `SplineSeries` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/spline-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/spline-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/spline-cs1" %}

## Spline Area

To render a Spline Area series, use series [Type](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **SplineArea** and inject `SplineAreaSeries` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/splinearea-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/splinearea-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/splinearea-cs1" %}

## Column

To render a Column series, use series [Type](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/rangeNavigatorSeriesModel#type) as **Column** and inject `ColumnSeries` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/series-types/column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/series-types/column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/series-types/column-cs1" %}