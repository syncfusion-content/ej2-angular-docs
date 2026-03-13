---
layout: post
title: Chart series in Angular Chart component | Syncfusion
description: Learn here all about Chart series in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart series 
documentation: ug
domainurl: ##DomainURL##
---

# Chart series in Angular Chart component

## Multiple Series

You can add multiple series to the chart by using [`series`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective) property.
The series are rendered in the order as it is added to the series array.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs37/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs37/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs37" %}

## Combination Series

Combinations of different types like Line, Column, etc., can be rendered in a chart.

>Bar series cannot be combined with any other series as the axis orientation is different from other series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/combination-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/combination-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/combination-cs1" %}

## Enable Complex Property in Series

By setting the [`enableComplexProperty`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#enablecomplexproperty) value as `true` in series, you can bind complex data to the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/combination-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/combination-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/combination-cs2" %}