---
layout: post
title: 100% Stacked Column Chart in Angular 3D Chart control | Syncfusion
description: Learn here all about 100% stacked column chart in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked column chart in Angular 3D Chart control

## 100% Stacked column chart

To render a 100% stacked column series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#type) as `StackingColumn100` and inject `StackingColumnSeries3DService` module into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stacked-column/stacked-colum-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stacked-column/stacked-colum-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stacked-column/stacked-colum-cs1" %}

## 100% Cylindrical stacked column chart

To render a 100% cylindrical stacked column chart, set the [`columnFacet`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stacked-column/stacked-colum-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stacked-column/stacked-colum-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stacked-column/stacked-colum-cs2" %}

## Series customization

The following properties can be used to customize the `100% stacked column` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](https://ej2.syncfusion.com/angular/documentation/api/chart3d/series3DModel/#fill) color.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/stacked-column/stacked-colum-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/stacked-column/stacked-colum-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/stacked-column/stacked-colum-cs3" %}