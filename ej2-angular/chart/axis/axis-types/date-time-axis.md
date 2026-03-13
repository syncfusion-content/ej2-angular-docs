---
layout: post
title: Date time axis in Angular Chart component | Syncfusion
description: Learn here all about Date time axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date time axis 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Date time axis in Angular Chart component

## DateTime Axis

The DateTime axis uses a date-time scale and displays date-time values as axis labels based on the specified format. This axis type is ideal for visualizing time-based data such as trends, timelines, and time-series data.

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

>Note: To use the DateTime axis, inject `DateTimeService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#valuetype) property of the axis to `DateTime`.

## DateTimeCategory Axis

The DateTimeCategory axis is used to render date-time values with non-linear intervals. This axis type is especially useful when certain time ranges, such as weekends or holidays, need to be excluded. In the following example, only business days are displayed within a week.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs11" %}

>Note: To use the DateTimeCategory axis, inject `DateTimeCategoryService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#valuetype) of axis to `DateTimeCategory`.

### Range

Range for an axis will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#interval) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs12" %}

### Interval Customization

Date-time intervals can be customized using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#interval) and [`intervalType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#intervaltype) properties of the axis. For example, when the interval is set to `2` and the interval type is set to `Years`, the axis displays labels at two-year intervals.

The DateTime axis supports the following interval types:
* Auto
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

**Applying padding to the range**

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
<td>The Date is displayed in day format</td>
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
<td>The Shorthand month for the date is displayed</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format</td>
</tr>
</table>

<!-- markdownlint-disable MD033 -->