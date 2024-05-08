---
layout: post
title: Chart axis in Angular Chart component | Syncfusion
description: Learn here all about Chart axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart axis 
documentation: ug
domainurl: ##DomainURL##
---

﻿
# Chart axis in Angular Chart component

Chart typically has two axis, which are used to measure and categorize data: a horizontal or primary x axis and a vertical or primary y axis.

Vertical axis supports numerical and logarithmic scale. Horizontal axis supports the following types of scale.

* Category
* Numeric
* DateTime
* Logarithmic

In addition to this, both the vertical and horizontal axis support inversed axis.

## Category Axis

Category axis are used to represent, the string values instead of numbers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs28/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs28/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs28" %}

<!-- markdownlint-disable MD036 -->
**Positioning Axis Labels**
<!-- markdownlint-disable MD036 -->

By default, category labels are placed between the ticks in an axis, this can also be placed on ticks
using [`labelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelplacement) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs29" %}

>Note: To use category axis, we need to inject `CategoryService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#valuetype) of axis to `Category`.

<!-- markdownlint-disable MD013 -->

## Numeric Axis

<!-- markdownlint-disable MD013 -->

You can use the numeric axis to represent numeric values of data in chart. By default, the `valueType` of an axis is `Double`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs1" %}

**Customize Numeric Range**

Range for an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#interval) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs2" %}

**Apply Padding to the Range**

Padding can be applied to the minimum and maximum extremes of the axis range by using the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) property. Numeric axis supports following types of padding.

* None
* Round
* Additional
* Normal
* Auto

**Numeric - None**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `None`, minimum and maximum of an axis is based on the data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs3" %}

**Numeric - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Round`, minimum and maximum will be rounded to the nearest possible value divisible by interval. For example, when the minimum is 3.5 and the interval is 1, then the minimum will be rounded to 3.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs4" %}

**Numeric - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Additional`, interval of an axis will be padded to the minimum and maximum of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs5" %}

**Numeric - Normal**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Normal`, padding is applied to the axis based on default range calculation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs6" %}

**Numeric - Auto**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Auto`,horizontal numeric axis takes None as padding calculation, while the vertical numeric axis takes Normal as padding calculation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs7" %}

## DateTime Axis

 Date time axis uses date time scale and displays the date time values as axis labels in the specified format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs2" %}

**Customizing Date Time Range**

Range for an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#interval) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs3" %}

**Date Time Intervals**

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
{% include code-snippet/chart/axis/datetime-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs4" %}

**Applying Padding to the Range**

Padding can be applied to the minimum and maximum extremes of the range by using the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) property. Date time axis supports the following types of padding,

* None
* Round
* Additional

**DateTime - None**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `None`, minimum and maximum of the axis is based on the data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs5" %}

**DateTime - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Round`, minimum and maximum will be rounded to the nearest possible value divisible by interval. For example, when the minimum is 15th Jan, interval is 1 and the interval type is ‘month’, then the axis minimum will be Jan 1st.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs6" %}

**DateTime - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#rangepadding) is set to `Additional`, interval of an axis will be padded to the minimum and maximum of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs7" %}

>Note: To use datetime axis, we need to inject `DateTimeService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#valuetype) of axis to `DateTime`.

<!-- markdownlint-disable MD033 -->

## Logarithmic Axis

<!-- markdownlint-disable MD033 -->
Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numeric values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs1" %}

**Customize Logarithmic Range**

Range of an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#interval) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs2" %}

**Logarithmic Base**

Logarithmic base can be customized by using the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#logbase) property of the axis. For example when the logBase is 5, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup> etc.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs3" %}

**Logarithmic Interval**

Logarithmic axis interval can be customized by using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#interval) property of the axis. When the logarithmic base is 10 and logarithmic interval is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the interval is 1.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs4" %}

>Note: To use log axis, we need to inject `LogarithmicService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#valuetype) of axis to `Logarithmic`.

## Inversed Axis

<!-- markdownlint-disable MD033 -->

When an axis is inversed, highest value of the axis comes closer to origin and vice versa. To place an axis in inversed manner set this property [`isInversed`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#isInversed) to true.

 {% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs30/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs30/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs30" %}

## Label Format

**Numeric Label Format**

Numeric labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelformat) property. Numeric labels supports all globalize format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs8" %}

The following table describes the result of applying some commonly used label formats on numeric values.

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The Number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The Number is rounded to 2 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The Number is rounded to 3 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The Number is converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The Number is converted to percentage with 2 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The Number is converted to percentage with 3 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1,000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1,000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

**Datetime Label Format**

You can format and parse the date to all globalize format using [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelformat) property in an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs8" %}

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

**Custom Label Format**

Axis also supports custom label format using placeholder like {value}°C, in which the value represents the axis label. e.g 20°C.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs31/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs31/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs31" %}

## Common Axis Features

**Axis Title**

You can add a title to the axis using [`title`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#title) property to provide quick information to the user about the data plotted in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs32/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs32/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs32" %}

**Label Customization**

The [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelstyle) property of an axis provides options to customize the `color`, `font-family`, `font-size` and `font-weight` of the axis labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs33" %}

**Edge Label Placement**

Labels with long text at the edges of an axis may appear partially in the chart. To avoid this, use [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#edgelabelplacement) property in axis, which moves the label inside the chart area for better appearance or hides it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/datetime-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/datetime-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/datetime-cs9" %}

**Grid Lines Customization**

You can customize the `width`, `color` and `dashArray` of the minor and major grid lines, using [`majorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#majorgridlines) and [`minorGridLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs34/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs34" %}

**Tick Lines Customization**

You can customize the  `width`, `color` and `size` of the minor and major tick lines, using [`majorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#majorgridlines) and [`minorTickLines`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#minorgridlines) properties in the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs35/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs35/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs35" %}

**Place Axes at the Opposite Side**

<!-- markdownlint-disable MD012 -->
To place an axis opposite from its original position, set [`opposedPosition`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#opposedposition) property of the axis to true.
<!-- markdownlint-disable MD012 -->

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/category-cs36/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/category-cs36/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/category-cs36" %}

## Multiple Axis

In addition to primary X and Y axis, we can add n number of axis to the chart. Series can be associated with this axis, by mapping with axis's unique name.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs1" %}

## Smart Axis Labels

When the axis labels overlap with each other, you can use [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelintersectaction) property in the axis, to place them smartly.

When setting `labelIntersectAction` as `Hide`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs4" %}

When setting `labelIntersectAction` as `Rotate45`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs5" %}

When setting `labelIntersectAction` as `Rotate90`

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-cs6" %}

## Strip Lines

EJ2 chart supports horizontal and vertical strip lines and customization of stripline in both orientation.
To use Stripline in axis, we need to inject `StriplineService` into the `@NgModule.providers`

**Horizontal Strip lines**

You can create horizontal stripline by adding the <code>stripline</code> in the vertical axis and set <code>visible</code> option to true.
Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs1" %}

**Vertical Striplines**

You can create vertical stripline by adding the <code>stripline</code> in the horizontal axis and set <code>visible</code> option to true.
Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs2" %}

**Customize the strip line**

Starting value in specific strip line can be customized by <code>start</code> property in strip line. Similarly, ending value is customized by <code>end</code>. It can be also set for starting from the corresponding origin of the axis by <code>startFromOrigin</code>. Size of the strip line is customized by <code>size</code>. Border for the stripline is customized by <code>border</code>. Order of the strip line such that whether it should be rendered in behind or over the series elements is customized by <code>zIndex</code>.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs3" %}

**Customize the stripline text**

You can customize the text rendered in stripline by <code>textStyle</code> property. Rotation of the strip line text can be changed by <code>rotation</code> property.
Horizontal and vertical alignment of stripline text can be changed by `horizontalAlignment`and `verticalAlignment` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/strip-line-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/strip-line-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/strip-line-cs4" %}