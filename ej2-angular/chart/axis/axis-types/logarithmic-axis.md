---
layout: post
title: Logarithmic Axis in Angular Chart | Syncfusion
description: Learn here all about Logarithmic axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Logarithmic axis 
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic Axis in Angular Chart

<!-- markdownlint-disable MD033 -->

The logarithmic axis uses a logarithmic scale and is particularly useful for visualizing data that spans a wide range of values. It effectively represents datasets that include both very small values (for example, 10<sup>-6</sup>) and very large values (for example, 10<sup>6</sup>) within the same chart, improving readability and comparison.

To know about logarithmic axis, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=t8HoJ8yxIdc" %}

To use a logarithmic axis, inject the `LogarithmicService` into your component and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) property of the axis to `Logarithmic`. The following example shows a line chart with a logarithmic y-axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs5" %}

> **Note:** To use the logarithmic axis, register `LogarithmicService` in the standalone component's `providers` (legacy: inject `LogarithmicService` into `@NgModule.providers`) and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) property of the axis to `Logarithmic`.

## Range

The range of the logarithmic axis is calculated automatically based on the provided data, ensuring that all data points are visible within the chart area. The axis range can also be customized explicitly using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#interval) properties.

> **Note:** The `minimum` value for a logarithmic axis must be greater than zero and should be a power of the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#logbase). Setting `minimum` to zero or a negative value results in an empty chart because the logarithm of non-positive numbers is undefined.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs6" %}

## Logarithmic base

The logarithmic base of the axis can be customized using the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#logbase) property. This property determines how the axis values are distributed along the scale.  
For example, when the logarithmic base is set to `5`, the axis values follow the sequence 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, and so on.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs7" %}

## Logarithmic interval

The spacing between logarithmic axis labels can be controlled using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#interval) property. This property defines the step size between consecutive logarithmic values.  
For example, when the logarithmic base is `10` and the interval is set to `2`, the axis labels are placed at values such as 10<sup>2</sup>, 10<sup>4</sup>, and 10<sup>6</sup>. The default value of the interval is `1`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs8" %}

## Edge Label Placement

When the first or last label on a logarithmic axis is partially hidden by the chart edge, you can use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#edgelabelplacement) property to control its position. The supported values are `None`, `Shift`, and `Hide`. The default value is `None`.

## Label Format

Numeric labels on the logarithmic axis can be customized using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelformat) property. This property supports all Globalize numeric formats as well as placeholders such as `{value}K` to append custom units.

For example, with `labelFormat` set to `{value}K`, the axis label `2000` is rendered as `2000K`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs9" %}

## Range Padding

Padding can be applied to the minimum and maximum values of the logarithmic axis range using the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property. The logarithmic axis supports the following options: `None`, `Round`, `Additional`, `Normal`, and `Auto`.

For example, when `rangePadding` is set to `Round`, the axis minimum and maximum are rounded to the nearest power of the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#logbase), producing clean axis boundaries.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs10" %}

## See Also

* [Numeric Axis](./numeric-axis): Use numeric axis for continuous numerical data such as measurements or sales figures.
* [Category Axis](./category-axis): Use category axis for discrete text-based categories.
* [DateTime Axis](./date-time-axis): Use datetime axis for time-series data.
* [API Reference - Axis](https://ej2.syncfusion.com/angular/documentation/api/chart/axis): Complete API documentation for axis properties and methods.