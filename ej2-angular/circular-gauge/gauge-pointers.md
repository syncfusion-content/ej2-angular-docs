---
layout: post
title: Gauge pointers in Angular Circular Gauge Component | Syncfusion
description: Learn here all about Gauge pointers in Syncfusion Angular Circular Gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gauge pointers 
documentation: ug
domainurl: ##DomainURL##
---


# Gauge pointers in Angular Circular Gauge Component

Pointers are used to indicate values on the axis. Value of the pointer can be modified using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#value-number) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs1" %}

Gauge supports 3 types of pointers such as `Needle`, `RangeBar` and `Marker`.
You can choose any one of the pointer by using [`type`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#type-string) property.

## Needle Pointers

A needle pointer contains three parts, a needle, a cap / knob and a tail.
The length of the needle can be customized by using [`radius`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#radius-string) property.
The length of the tail can be customized by using [`length`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/needleTailModel/#length-string) property.
The radius of the cap can be customized by using [`radius`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/capModel/#radius-number) in cap object.
The needle and tail length takes value either in `percentage` or `pixel`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs2" %}

<!-- markdownlint-disable MD036 -->

**Customization**

Needle color and width can be customized by using [`color`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#color-string) and [`pointerWidth`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#pointerwidth-number) property.
Cap and tails can be customized by using [`cap`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#cap-capmodel) and [`needleTail`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#needletail-needletailmodel) object.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs3" %}

<!-- markdownlint-disable MD010 -->

The appearance of the needle pointer can be customized by using [`needleStartWidth`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#needlestartwidth) and [`needleEndWidth`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#needleendwidth).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs4" %}

## RangeBar Pointer

RangeBar pointer is like ranges in an axis, that can be placed on gauge to mark the pointer value.
RangeBar starts from the beginning of the gauge and ends at the pointer value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs5" %}

**Customization**

RangeBar can be customized in terms of color, border and thickness by using [`color`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#color-string), [`border`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#border-bordermodel) and [`pointerWidth`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#pointerwidth-number) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs6" %}

<!-- markdownlint-disable MD010 -->

## Rounded corner for range bar pointer

The start and end pointers of range bar in the circular gauge are rounded to form arc gauges.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs7" %}

## Marker Pointer

Different type of marker shape can be used to mark the pointer value in axis. You can change the marker shape using [`markerShape`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#markershape-string)
property in pointer.
Gauge supports the below marker shape.
* Circle
* Rectangle
* Triangle
* InvertedTriangle
* Diamond

We can use image instead of rendering marker shape to denote the pointer value. It can be achieved by setting [`markerShape`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#markershape-string) to Image and assigning  image path to [`imageUrl`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#imageurl-string)in pointer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs8" %}

**Customization**

The marker can be customized in terms of color, border, width and height by using [`color`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#color-string), [`border`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#border-bordermodel), [`markerWidth`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#markerwidth-number) and [`markerHeight`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#markerheight-number) property in [`pointer`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs9" %}

<!-- markdownlint-disable MD010 -->

## Dragging Pointer

The pointers can be dragged over the axis line by clicking and dragging the same. To enable or disable the pointer drag, use the [`enablePointerDrag`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/circularGaugeModel/#enablepointerdrag) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs10" %}

## Multiple Pointers

In addition to the default pointer, you can add n number of pointer to an axis by using `pointers` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs11" %}

## Animation

Pointer will get animate on loading the gauge, this can be handled by using [`animation`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/pointer/#animation-animationmodel) property in pointer.
The [`enable`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/animationModel/#enable-boolean) property in animation allows you to enable or disable the animation.
The [`duration`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/animationModel/#duration-number) property specify the duration of the animation in milliseconds.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs12" %}

## Gradient Color

Gradient support allows to add multiple colors in the ranges and pointers of the circular gauge. The following gradient types are supported in the circular gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient will be set using the [`startValue`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/linearGradient/#endvalue) property. The color stop values such as color, opacity and offset are set using [`colorStop`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/linearGradient/#colorstop) property.

The linear gradient can be applied to all pointer types like marker, range bar and needle. To do so, follow the below code sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs13" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/radialGradient/#outerposition) property. The color stop values such as color, opacity and offset are set using [`colorStop`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/radialGradient/#colorstop) property.

The radial gradient can be applied to all pointer types like marker, range bar and needle. To do so, follow the below code sample.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-pointers-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-pointers-cs14" %}