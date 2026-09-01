---
layout: post
title: Axis Customization in Angular Chart | Syncfusion
description: Learn here all about Axis customization in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis customization 
documentation: ug
domainurl: ##DomainURL##
---

# Axis Customization in Angular Chart

To know about axis customization, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=6e5YbVZw-nI" %}

## Axis Crossing

An axis can be positioned in the chart area using [`crossesAt`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#crossesat) and [`crossesInAxis`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#crossesinaxis) properties. The [`crossesAt`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#crossesat) property specifies the values (datetime, numeric, or logarithmic) at which the axis line has to be intersected with the other axis (vertical for a horizontal axis or vice versa), and the [`crossesInAxis`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#crossesinaxis) property specifies the axis name with which the axis line has to be crossed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs2" %}

## Title

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#title) property to provide quick information to the user about the data plotted along the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs3" %}

## Title Rotation

After setting a title as shown in the previous section, you can use the [`titleRotation`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#titlerotation) property to rotate the axis title from 0 to 360 degrees.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs3.1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs3.1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs3.1" %}

## Tick Lines Customization

You can customize the `width` and `color` of the major and minor tick lines using [`majorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#majorticklines) and [`minorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#minorticklines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs4" %}

## Grid Lines Customization

You can customize the `width`, `color` and `dashArray` of the minor and major grid lines, using [`majorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#minorgridlines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs5" %}

## Multiple Axis

In addition to the primary X and Y axes, you can add any number of axes to the chart. Additional axes are declared inside an `<e-axes>` collection using the `<e-axis>` element. Each additional axis must have a unique `name`, and a series is associated with that axis by setting its `yAxisName` (or `xAxisName`) to the same value. The `rowIndex` property controls the row placement of the axis in the chart.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs6" %}

## Inversed Axis

When an axis is inverted, the highest value of the axis comes closer to the origin and vice versa. To place an axis in inverted manner, set the [`isInversed`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#isinversed) property to true. The example below inverts the primary Y axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs7" %}

## Opposed Position

To place an axis opposite from its original position, set the [`opposedPosition`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisModel#opposedposition) property of the axis to true. Both the primary X axis and the primary Y axis support this property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs8" %}


