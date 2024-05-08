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

 Date time axis uses date time scale and displays the date time values as axis labels in the specified format.

To known about dateTime axis, you can check on this video:

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

>Note: To use datetime axis, we need to inject `DateTimeService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#valuetype) of axis to `DateTime`.

## DateTimeCategory Axis

Date-time category axis is used to display the date-time values with non-linear intervals. For example, the business days alone have been depicted in a week here.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs11" %}

>Note: To use datetime axis, we need to inject `DateTimeCategoryService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#valuetype) of axis to `DateTimeCategory`.

### Range

Range for an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#interval) property of the axis.

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

Date time intervals can be customized by using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#interval) and [`intervalType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#intervaltype) properties of the axis.
For example, when you set interval as 2 and intervalType as years, it considers 2 years as interval.
DateTime axis supports following interval types,

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

**Applying Padding to the Range**

Padding can be applied to the minimum and maximum extremes of the range by using the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) property. Date time axis supports the following types of padding,

* None
* Round
* Additional

**DateTime - None**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `None`, minimum and maximum of the axis is based on the data.

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

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Round`, minimum and maximum will be rounded to the nearest possible value divisible by interval. For example, when the minimum is 15th Jan, interval is 1 and the interval type is ‘month’, then the axis minimum will be Jan 1st.

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

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Additional`, interval of an axis will be padded to the minimum and maximum of the axis.

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

You can format and parse the date to all globalize format using [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelformat) property in an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs17" %}

The following table describes the result of applying some common date time formats to the labelFormat property

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
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
<td>The Date is displayed in month/date/year format</td>
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