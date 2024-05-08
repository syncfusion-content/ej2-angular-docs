---
layout: post
title: Appearance in Angular Linear gauge component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Linear gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

## Customizing the Linear Gauge area

The following properties are available in the [`ejs-lineargauge`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/) to customize the Linear Gauge area.

* [`background`](api/linear-gauge/#background) - Applies the background color for the Linear gauge.
* [`border`](api/linear-gauge/#border) - To customize the color and width of the border in Linear Gauge.
* [`margin`](api/linear-gauge/#margin) - To customize the margins of the Linear Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/appearance-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/appearance-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/appearance-cs1" %}

## Setting up the Linear Gauge title

The title for the Linear Gauge can be set using [`title`](api/linear-gauge/#title) property in [`ejs-lineargauge`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge). Its appearance can be customized using the [`titleStyle`](api/linear-gauge/#titlestyle) with the below properties.

* [`color`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/labelModel/#color) - Specifies the text color of the title.
* [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/font/#fontfamily) - Specifies the font family of the title.
* [`fontStyle`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/font/#fontstyle) - Specifies the font style of the title.
* [`fontWeight`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/font/#fontweight) - Specifies the font weight of the title.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/font/#opacity) - Specifies the opacity of the title.
* [`size`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/font/#size) - Specifies the font size of the title.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/appearance-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/appearance-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/appearance-cs2" %}

## Customizing the Linear Gauge container

The area used to render the ranges and pointers at the center position of the gauge is called container. The following types of container to be applicable for Linear Gauge.

* Normal
* Rounded Rectangle
* Thermometer

The  type of the container can be modified by using the [`type`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel/#type) property in [`container`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel). The container can be customized by using the following properties in [`container`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel).

* [`offset`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel/#offset) - To place the container with the specified distance from the axis of the Linear Gauge.
* [`width`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel/#width) - To set the thickness of the container.
* [`height`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel/#height) - To set the length of the container.
* [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel/#backgroundcolor) - To set the background color of the container.
* [`border`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/container/#border) - To set the color and width for the border of the container.

### Normal

The **Normal** type will render the container as a rectangle and this is the default container type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/appearance-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/appearance-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/appearance-cs3" %}

### Rounded Rectangle

The **RoundedRectangle** type will render the container as a rectangle with rounded corner radius. The rounded corner radius of the container can be customized using the [`roundedCornerRadius`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/container/#roundedcornerradius) property in [`container`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/containerModel).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/appearance-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/appearance-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/appearance-cs4" %}

### Thermometer

The **Thermometer** type will render the container similar to the appearance of thermometer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/appearance-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/appearance-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/appearance-cs5" %}

## Fitting the Linear Gauge to the control

The Linear Gauge component is rendered with margin by default. To remove the margin around the Linear Gauge, the [`allowMargin`](api/linear-gauge/#allowmargin) property in [`ejs-lineargauge`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge) is set as **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/appearance-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/appearance-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/appearance-cs6" %}

>To use this feature, set the [`allowMargin`](api/linear-gauge/#allowmargin) property to **false**, the [`width`](api/linear-gauge/#width) property to **100%** and the properties of [`margin`](api/linear-gauge/#margin) to **0**.
