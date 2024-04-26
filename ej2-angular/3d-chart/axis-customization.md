---
layout: post
title: Axis customization in Angular 3D Chart control | Syncfusion
description: Learn here all about axis customization in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in Angular 3D Chart control

## Title

The title for the axis can be added by using the [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#title) property. It helps to provide quick information to the user about the data plotted in the axis. Title style can be customized using [`titleStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#titlestyle) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs1" %}

## Title rotation

The title can be rotated from 0 to 360 degree by using the [`titleRotation`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#titlerotation) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs2" %}

## Tick lines customization

The [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/minorTickModel/#width), [`color`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/minorTickModel/#color) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/minorTickModel/#height) of the minor and major tick lines can be customized by using the [`majorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#majorticklines) and [`minorTickLines`](../api/chart3d/axis3D/#https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#minorticklines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs3" %}

## Grid lines customization

The [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/majorGridModel/#width) and [`color`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/majorGridModel/#color) of the minor and major grid lines can be customized by using the [`majorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs4" %}

## Multiple axis

In addition to primary X and Y axis, n number of axis can be added to the chart. Series can be associated with this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs5" %}

## Inversed axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner, set the [`isInversed`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#isinversed) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs6" %}

## Opposed position

To place an axis opposite from its original position, set the [`opposedPosition`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#opposedposition) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-customization/axis-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-customization/axis-cs7" %}