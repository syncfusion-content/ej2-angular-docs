---
layout: post
title: Axis in Angular Range navigator component | Syncfusion
description: Learn here all about Axis in Syncfusion Angular Range navigator component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Axis in Angular Range navigator component

## Numeric

The numeric scale is used to represent the numeric values of data in a Range Selector. By default, the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#valuetype) of a Range Selector is **Double**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/numeric-cs1" %}

### Range

The minimum and the maximum of the scale will be calculated automatically based on the provided data. It can be customized by using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#maximum), and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#interval) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/numeric-cs2" %}

### Label Format

The numeric labels can be formatted using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelformat) property and it supports all the globalized formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/numeric-cs3" %}

The following table describes the result of applying some commonly used label formats on numeric values.

<!-- markdownlint-disable MD033 -->
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

### Custom Label Format

The Range Selector also supports the Custom Label formats using the placeholders such as **{value}$**, in which the value represents the axis label, e.g. 20$.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/numeric-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/numeric-cs4" %}

## Logarithmic Axis

The Logarithmic supports the logarithmic scale, and it is used to visualize the data when the Range Selector has numerical values in both the lower (e.g.: 10-6) and the higher (e.g.: 106) orders of the magnitude.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/logarithmic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/logarithmic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/logarithmic-cs1" %}

>To use logarithmic scale,  inject the `LogarithmicService` into the `@NgModule.providers`, and then set the valueType to Logarithmic.

### Range

The minimum and the maximum of the Range Selector will be calculated automatically based on the provided data. It can be customized by using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#maximum), and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#interval) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/logarithmic-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/logarithmic-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/logarithmic-cs2" %}

### Logarithmic Base

The Logarithmic Base can be customized using the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#logbase) property. The default value of this property is **10**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/logarithmic-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/logarithmic-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/logarithmic-cs3" %}

## Date-time

The Range Selector supports the DateTime scale and displays the DateTime values as labels in the specified format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/datetime-cs1" %}

>Note: To use date-time scale,  inject the `DateTimeService` into the `@NgModule.providers`.

### Interval Customization

The DateTime intervals can be customized using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#interval) and the [`intervalType`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#intervaltype) properties of the Range Selector. For example, if the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#interval) is set to 2 and the [`intervalType`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#intervaltype) is set to years, the interval will be considered to be 2 years.

DateTime supports the following interval types:
* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/datetime-cs2" %}

### Label Format

The [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelformat) property is used to format and parse the date to all globalize format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rangenavigator/axis/datetime-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rangenavigator/axis/datetime-cs3" %}

The following table shows the results of applying some common DateTime formats to the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/range-navigator/#labelformat) property.

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
<td>The date is displayed in the day format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The date is displayed in the month/date/year format.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The shorthand month for the date is displayed.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>The time of the date value is displayed as label.</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The label is displayed in hours:minutes:seconds format.</td>
</tr>
</table>