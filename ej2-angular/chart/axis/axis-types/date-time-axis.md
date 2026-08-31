---
layout: post
title: DateTime Axis in Angular Chart | Syncfusion
description: Learn here all about Date time axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date time axis 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# DateTime Axis in Angular Chart

The DateTime axis uses a date-time scale and displays date-time values as axis labels based on the specified format. This axis type is ideal for visualizing time-based data such as trends, timelines, and time-series data. Use `DateTime` for continuous time-series data and `DateTimeCategory` (covered in a later section) when certain time ranges such as weekends or holidays need to be excluded.

## DateTime Axis

To know about the DateTime axis, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=AoxGQlE_WtE" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs10" %}

>**Note:** To use the DateTime axis, register `DateTimeService` in the standalone component's `providers` (legacy: inject `DateTimeService` into `@NgModule.providers`) and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#valuetype) property of the axis to `DateTime`.

## DateTimeCategory Axis

The DateTimeCategory axis is used to render date-time values with irregular intervals. This axis type is especially useful when certain time ranges, such as weekends or holidays, need to be excluded. The following example demonstrates a DateTimeCategory axis rendering only business days.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs11" %}

>**Note:** To use the DateTimeCategory axis, register `DateTimeCategoryService` in the standalone component's `providers` (legacy: inject `DateTimeCategoryService` into `@NgModule.providers`) and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#valuetype) of axis to `DateTimeCategory`.

## Range

The range for an axis is calculated automatically based on the provided data. You can also customize the range of the axis using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#interval) properties of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs12" %}

## Interval Customization

Date-time intervals can be customized using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#interval) and [`intervalType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#intervaltype) properties of the axis. For example, when `interval` is `2` and `intervalType` is `Years`, the axis displays labels every two years.

The DateTime axis supports the following interval types:
* Auto - Lets the chart choose the most appropriate interval based on data
* Years
* Months
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs13" %}

## Range Padding

Padding can be applied to the minimum and maximum values of the axis range using the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#rangepadding) property. The DateTime axis supports the following range padding types:

* None
* Round
* Additional

**DateTime - None**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#rangepadding) property is set to `None`, the minimum and maximum values of the axis are calculated directly from the data values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs14" %}

**DateTime - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#rangepadding) property is set to `Round`, the minimum and maximum values are rounded to the nearest interval boundary. For example, if the minimum value is January 15 and the interval type is set to `Months` with an interval of `1`, the axis minimum is adjusted to January 1.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs15" %}

**DateTime - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#rangepadding) property is set to `Additional`, an additional interval is added before the minimum and after the maximum values of the axis range to provide extra spacing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs16" %}

## Label Format

Date values displayed on the DateTime axis can be formatted using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#labelformat) property. This property supports globalized date and time formats for clear and localized label rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs17" %}

The following table illustrates the output produced by applying commonly used date-time format strings to the `labelFormat` property.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>Displays the date in day format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>Displays the date in month/day/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>Displays the shorthand month for the date</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Displays the time of the date value as the label</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>Displays the label in hours:minutes:seconds format</td>
</tr>
</table>

> **Note:** Time values shown in the result column depend on the application's locale and may render differently than the local time of `new Date(2000, 03, 10)`.

<!-- markdownlint-disable MD033 -->

## See Also

* [Numeric Axis](./numeric-axis)
* [Category Axis](./category-axis)
* [Logarithmic Axis](./logarithmic-axis)
* [API Reference - Axis](https://ej2.syncfusion.com/angular/documentation/api/chart/axis): Complete API documentation for axis properties and methods