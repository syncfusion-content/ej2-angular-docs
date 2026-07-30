---
layout: post
title: Pointers in Angular Linear gauge component | Syncfusion
description: Learn here all about Pointers in Syncfusion Angular Linear gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Pointers 
documentation: ug
domainurl: ##DomainURL##
---

# Pointers in Angular Linear gauge component

## Set the pointer value

To change the pointer value from the default, set the [`value`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer#value-number) property of the corresponding entry in the [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel) collection of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs4" %}

## Types of pointer

The Linear Gauge supports the following types of pointers.

* Bar
* Marker

The type of pointer can be modified by using the [type](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#type) property in [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel).

### Marker pointer

A marker pointer is a shape that can be used to mark the pointer value in the Linear Gauge.

<b>Types of marker shapes</b>

By default, the marker shape for the pointer is **InvertedTriangle**. To change the shape of the pointer, use the [markerType](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#markertype) property in [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel). The following marker types are available in Linear Gauge.

* Circle
* Rectangle
* Triangle
* InvertedTriangle
* Diamond
* Image
* Text

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs2" %}

Image can be rendered instead of rendering a shape as a pointer. It can be achieved by setting the [markerType](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#markertype) property to **Image** and setting the source URL of image to [imageUrl](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#imageurl) property in [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs10" %}

Text can be added instead of rendering a shape as a pointer. It can be achieved by setting the [markerType](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#markertype) property to **Text**, and the text content can be set using the [text](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#text)  property in [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel).

The following properties in the [textStyle](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#textstyle) property can be used to set the text style for the text pointer.

* [fontFamily](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/textstylemodel#fontfamily) - It is used to set the font family for the text pointer.
* [fontStyle](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/textstylemodel#fontstyle) - It is used to set the font style for the text pointer.
* [fontWeight](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/textstylemodel#fontweight) - It is used to set the font weight for the text pointer.
* [size](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/textstylemodel#size) - It is used to set the font size for the text pointer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs11" %}


<!-- markdownlint-disable MD036 -->

**Marker Pointer Customization**

The marker pointer can be customized using the following properties.

* [height](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#height) - To set the height of the pointer.
* [position](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#position) - The position of the pointer can be changed by setting the value as **Inside**, **Outside**, **Cross**, or **Auto**.
* [width](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#width) - To set the width of the pointer.
* [color](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#color) - To set the color of the pointer.
* [placement](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#placement) - To place the pointer in the specified position. By default, the pointer is placed **Far** from the axis. To change the placement, set the [placement](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel#placement) property as **Near**, **Center**, or **None**.
* [offset](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer#offset) - To place the pointer with specified distance from the axis.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#opacity) - To set the opacity of the pointer.
* [animationDuration](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#animationduration) - To specify the duration of the animation in pointer.
* [border](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#border) - To set the color and width for the border of the pointer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs3" %}

### Bar Pointer

The bar pointer is used to track the axis value. The bar pointer starts from the beginning of the gauge and ends at the pointer value. To enable bar pointer set the [type](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#type) property in [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel) as **Bar**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs4" %}

<!-- markdownlint-disable MD013 -->

**Bar pointer customization**

The bar pointer can be customized using following properties.

* [width](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#width) - To set the thickness of the bar pointer.
* [color](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#color) - To set the color of the bar pointer.
* [offset](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#offset) - To place the bar pointer with the specified distance from it's default position.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#opacity) - To set the opacity of the bar pointer.
* [roundedCornerRadius](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#roundedcornerradius) - To set the corner radius for the bar pointer.
* [border](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#border) - To set the color and width for the border of the pointer.
* [animationDuration](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#animationduration) - To set the duration of the animation in bar pointer.

>The placement property is not applicable for the bar pointer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs5" %}

## Update the pointer value dynamically

The pointer value is updated in the following sample using the [`value`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointer#value-number) property of the entry in the [`pointers`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel) collection of the axis. This example changes the value at runtime through a button click, which is useful for scenarios such as live data monitoring.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/getting-started-cs5" %}

## Multiple pointers

Multiple pointers can be added to the Linear Gauge by adding multiple [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel) in the [e-pointers](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/axisModel#pointers) and customization for the pointers can be done with [e-pointer](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointerModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs6" %}

## Pointer animation

Pointer is animated on loading the gauge. This can be handled by using the [animationDuration](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/pointermodel#animationduration) property. The duration of the animation can be specified in milliseconds.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs7" %}

## Gradient Color

Gradient support allows the addition of multiple colors in the pointers of the Linear Gauge. The following gradient types are supported in the Linear Gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient can be set using the [startValue](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGradient#startvalue) property. The end value of the linear gradient will be set using the [endValue](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGradient#endvalue) property. The color stop values such as [color](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/colorStopModel#color), [opacity](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/colorstopmodel#opacity) and [offset](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/colorStopModel#offset) are set using [colorStop](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGradient#colorstop) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs8" %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [innerPosition](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/radialGradient#innerposition) property. The outer circle position of the radial gradient can be set using the [outerPosition](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/radialGradient#outerposition) property. The color stop values such as [color](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/colorstopmodel#color), [opacity](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/colorstopmodel#opacity), and [offset](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/colorstopmodel#offset) are set using [colorStop](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/radialGradient#colorstop) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/pointers-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/pointers-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/pointers-cs9" %}

> If we set both gradients, only the linear gradient gets rendered. If we set the [startValue](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGradient#startvalue) and [endValue](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGradient#endvalue) property of the [linearGradient](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/linearGradient) as empty strings, then the radial gradient gets rendered in the pointer of the Linear Gauge.
