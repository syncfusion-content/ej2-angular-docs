---
layout: post
title: Bar Chart in Angular 3D Chart control | Syncfusion
description: Learn here all about bar chart in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Bar Chart in Angular 3D Chart control

## Bar chart

To render a bar series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#type) as `Bar` and inject `BarSeries3DService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/bar/bar-cs1" %}

## Bar space and width

The [`columnSpacing`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#columnspacing) and [`columnWidth`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#columnwidth) properties are used to customize the space between bars.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/bar/bar-cs2" %}

## Grouped bar

The data points can be grouped in the bar type charts by using the [`groupName`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#groupname) property. Data points with same group name are grouped together.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/bar/bar-cs3" %}

## Cylindrical bar chart

To render a cylindrical bar chart, set the [`columnFacet`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/bar/bar-cs4" %}

## Series customization

The following properties can be used to customize the `bar` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/bar/bar-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/bar/bar-cs5" %}