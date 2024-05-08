---
layout: post
title: Stacked Column Chart in Angular 3D Chart control | Syncfusion
description: Learn here all about stacked column chart in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Stacked column chart in Angular 3D Chart control

## Stacked column chart

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#type) as `StackingColumn` and inject `StackingColumnSeries3DService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stack-column/stack-column-cs1" %}

## Stacking group

To group the stacked column, the [`stackingGroup`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#stackinggroup) property can be used. The columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stack-column/stack-column-cs2" %}

## Cylindrical stacked column chart

To render a cylindrical stacked column chart, set the [`columnFacet`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stack-column/stack-column-cs3" %}

## Series customization

The following properties can be used to customize the `stacked column` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stack-column/stack-column-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stack-column/stack-column-cs4" %}
