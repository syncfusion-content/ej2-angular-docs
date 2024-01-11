---
layout: post
title: Selection in Angular 3D Chart control | Syncfusion
description: Learn here all about selection in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Selection in Angular 3D Chart control

The 3D chart provides selection support for the series and its data points on mouse click.

>When mouse is clicked on the data points, the corresponding series legend will also be selected.

We have different types of selection mode for selecting a data.

* None
* Point
* Series
* Cluster

## Point

To select a point, set the [`selectionMode`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Point**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/selection/selection-cs1" %}

## Series

To select a series, set the [`selectionMode`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Series**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/selection/selection-cs2" %}

## Cluster

To select the points that corresponds to the same index in all the series, set the [`selectionMode`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#selectionmode) property to **Cluster**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/selection/selection-cs3" %}

## Selection type

To select multiple points or series, enable the [`isMultiSelect`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#ismultiselect) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/selection/selection-cs4" %}

## Selection during initial loading

In a 3D chart, selecting a point or series during initial loading can only be done programmatically. The [`selectedDataIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#selecteddataindexes) property can be used for this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/selection/selection-cs5" %}

## Selection through legend

To select a point or series through legend use the [`toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#togglevisibility) property. Also, use [`enableHighlight`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionalLegendSettingsModel/#enablehighlight) property for highlighting the series through legend.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/selection/selection-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/selection/selection-cs6" %}