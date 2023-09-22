---
layout: post
title: Gauge legend in Angular Circular gauge component | Syncfusion
description: Learn here all about Gauge legend in Syncfusion Angular Circular gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gauge legend 
documentation: ug
domainurl: ##DomainURL##
---


# Gauge legend in Angular Circular gauge component

Legend provides valuable information for interpreting what the circular gauge axis range displays, and they can be represented in various colors, shapes, and other identifiers based on the data. It gives a breakdown of what each symbol represents in the axis range of circular gauge.

You can add the legend for circular gauge ranges by setting the visible property of `legendSettings` to true.

<!-- markdownlint-disable MD036 -->

## Legend customization

Customization option is also provided for the legend shape, alignment, and position.

## Position and alignment

The position of the legend is used to place legend in various positions. You can use the `position` property in `legendSettings`. Based on the position, the legend item will be aligned. The following options are available to customize the legend position:

* Top
* Bottom
* Left
* Right
* Custom
* Auto

The legend alignment is used to align the legend items in specific location. You can use the alignment property in `legendSettings` to align the legend items. The following options are available to customize the legend alignment:

* Near
* Center
* Far

The legends can also be positioned to absolute position using the `location.x` and `location.y` properties available in legendSettings.

### Legend size

The legend size can be modified using the `height` and `width` properties in `legendSettings`.

### Legend opacity

To specify the transparency for legend shape, set the `opacity` property in `legendSettings`.

### Legend shape

To change the legend item shape, specify the desired `shape` in the shape property of the legend. By default, the shape of the legend is `circle`.

It also supports the following shapes:

* Circle
* Rectangle
* Diamond
* Triangle
* InvertedTriangle
* Image

You can customize a shape using the `shapeWidth` and `shapeHeight` properties.

### Legend padding

You can control the spacing between the legend items using the `padding` option of the legend. The default value of padding is 5.

### Legend border

You can customize the legend border using the `border` option in the legend. The legend border can be customized using the border `color` and `width` properties.

## Font of the legend text

The `font` of the legend item text can be customized using the following properties:

* fontFamily
* fontStyle
* fontWeight
* opacity
* color
* size

The following code example shows how to add legend in the gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-legend-cs1" %}
<!-- markdownlint-disable MD036 -->

## Toggle option in legend

The toggle option has been provided for legend. So, if you toggle the legend, the given color will be changed to the corresponding circular gauge range. You can enable the toggle option using `toggleVisibility` in the `legendSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-legend-cs2" %}
<!-- markdownlint-disable MD036 -->

## Paging support in legend

By default, paging will be enabled if the legend items exceed the legend bounds. You can view each legend item by navigating between the pages using navigation buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-legend-cs3" %}
<!-- markdownlint-disable MD036 -->

## Legend text customization

You can customize the legend text using `legendText` property in `ranges`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-legend-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-legend-cs4" %}
<!-- markdownlint-disable MD036 -->

`legendRendering` event will be triggered before rendering each legend item, using this event you can customize needed legend items using following arguments.

| **Argument Name** | **Description** |
| --- | --- |
|fill| Specifies the legend shape color |
|text| Specifies the current legend text |
|shape| Customize the shape of the legends |
|name| Specifies the name of the event |
|cancel| Set to true, to cancel the event status |