---
layout: post
title: Numeric axis in Angular Chart component | Syncfusion
description: Learn here all about Numeric axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Numeric axis 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Numeric axis in Angular Chart component

The numeric axis displays numerical values along the chart's x-axis or y-axis. By default, the `valueType` of an axis is set to `Double`, which is suitable for displaying continuous numerical data such as temperatures, measurements, sales figures, or any decimal values.

To learn more about numeric axes, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=OWDrA0M8j7Q" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs9" %}

## Automatic Axis Calculation

By default, the chart automatically calculates optimal axis ranges and tick positions to ensure data is displayed clearly and the axis labels use "nice" round numbers. The automatic calculation follows these principles:

* **Range Calculation**: The axis extends slightly beyond your data's minimum and maximum values to prevent data points from appearing at the edges
* **Tick Positioning**: Tick marks are placed at round values (such as 0, 5, 10, 20, 50, 100) rather than arbitrary numbers, making the chart easier to read
* **Interval Selection**: The interval between ticks is chosen to provide clear spacing while showing enough detail

For example, if your data values range from 12 to 87, the axis might automatically display from 0 to 100 with tick marks at 0, 20, 40, 60, 80, and 100. This behavior can be overridden using the properties described in the following sections.

## Range

The range of the axis is calculated automatically based on the provided data, with the chart determining optimal minimum and maximum values to display all data points clearly. For example, if your data ranges from 15 to 95, the axis might automatically display from 0 to 100 with appropriate intervals for better readability.

You can customize the visible range by using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#interval) properties of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs10" %}

## Range Padding

Padding can be applied to the minimum and maximum values of the axis range by using the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property. The numeric axis supports the following padding options:

* None
* Round
* Additional
* Normal
* Auto

**Numeric - None**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property is set to `None`, the minimum and maximum values of the axis are derived directly from the data without any additional padding. This displays exactly the data range, which is useful when you want to maximize the data display area or when your data naturally fits within clean boundaries.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs11" %}

**Numeric - Round**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property is set to `Round`, the minimum and maximum values are rounded to the nearest values divisible by the interval, creating cleaner axis boundaries. For example, if the minimum value is 3.5 and the interval is 1, the minimum value is rounded down to 3. Similarly, if the maximum is 48.7, it would be rounded up to 49.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs12" %}

**Numeric - Additional**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property is set to `Additional`, one interval is added to both the minimum and maximum values of the axis range. This ensures extra space around your data, preventing data points from appearing too close to the axis edges, which improves visual clarity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs13" %}

**Numeric - Normal**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property is set to `Normal`, padding is applied to the axis based on the default range calculation. This provides a balanced amount of padding suitable for most chart scenarios, ensuring data points are clearly visible without excessive white space.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs14" %}

**Numeric - Auto**

When the [`rangePadding`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rangepadding) property is set to `Auto`, the chart applies different padding strategies based on axis orientation for optimal visualization:

* **Horizontal axis (X-axis)**: Uses `None` padding to maximize data display width
* **Vertical axis (Y-axis)**: Uses `Normal` padding to prevent data points from touching chart edges

This is the recommended default setting for most scenarios as it provides optimal spacing for each axis type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs15" %}

## Label Format

**Numeric label format**

Numeric axis labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#labelformat) property. This property supports all Globalize numeric formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs16" %}

The following table shows examples of commonly used numeric label formats and their corresponding outputs.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>Rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>Rounded to 2 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>Rounded to 3 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>Converted to percentage with 1 decimal place</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>Converted to percentage with 2 decimal places</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>Converted to percentage with 3 decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>Currency format with 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>Currency format with 2 decimal places</td>
</tr>
<tr>
<td>0.5</td>
<td>p0</td>
<td>50%</td>
<td>Percentage without decimal places</td>
</tr>
<tr>
<td>1000</td>
<td>n0</td>
<td>1000</td>
<td>Number without decimal places</td>
</tr>
</table>

> **Note**: The currency symbol and thousand separator format vary based on the application's culture settings. For example, `c2` displays as `$1,000.00` in en-US culture and `1.000,00 €` in de-DE culture.

## Grouping Separator

To improve readability of large numbers, you can enable thousand separators by setting the [`useGroupingSeparator`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#usegroupingseparator) property to `true` in the chart. This formats numbers like `1000000` as `1,000,000`, making them easier to read. The separator character automatically adjusts based on the application's culture settings (e.g., comma for en-US, period for de-DE).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs17/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs17/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs17" %}

## Custom Label Format

The numeric axis also supports custom label formats by using placeholders such as `{value}°C`, where `{value}` represents the numeric axis label. For example, the value `20` is displayed as `20°C`. This is useful for adding units of measurement or other custom text to your axis labels.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/double-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/double-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/double-cs18" %}

## See Also

* [Axis Customization](../axis-customization): Learn about additional axis customization options such as title, label style, and positioning
* [Category Axis](./category-axis): Use category axis for discrete text-based categories
* [DateTime Axis](./datetime-axis): Use datetime axis for time-series data
* [Logarithmic Axis](./logarithmic-axis): Use logarithmic axis for data that spans multiple orders of magnitude
* [Multiple Axes](../multiple-axes): Learn how to add and configure multiple axes in a single chart
* [API Reference - Axis](https://ej2.syncfusion.com/angular/documentation/api/chart/axis): Complete API documentation for axis properties and methods