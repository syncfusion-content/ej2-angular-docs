---
layout: post
title: Axis customization in Angular Bullet chart component | Syncfusion
description: Learn here all about Axis customization in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis customization 
documentation: ug
domainurl: ##DomainURL##
---

# Axis customization in Angular Bullet chart component

## MajorTickLines and MinorTickLines Customization

The following properties can be used to customize [`majorTicklines`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#majorticklines) and [`minorTicklines`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#minorticklines).

* **width** - Specifies the width of ticklines.
* **height** - Specifies the height of ticklines.
* **color** - Specifies the color of ticklines.
* **useRangeColor** - Specifies the color of ticklines and represents the color from corresponding range colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs1" %}

## Tick Placement

The major and the minor ticks can be placed **inside** or **outside** the ranges using the [`tickPosition`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#tickposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs2" %}

## Label Format

Axis numeric labels can be formatted by using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#labelformat) property. Axis labels support all globalize formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs3" %}

The following table describes the result of applying some commonly used formats to numeric axis labels.

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
<td>$1000.0</td>
<td>The Currency symbol is appended to number and number is rounded to 1 decimal place</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The Currency symbol is appended to number and number is rounded to 2 decimal place</td>
</tr>
</table>

## GroupingSeparator

To separate the groups of thousands, set the [`enableGroupSeparator`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#enablegroupseparator) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs4" %}

## Custom Label Format

Using the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#labelformat) property, axis labels can be specified with a custom defined format in addition to the axis value. The label format uses a placeholder such as **${value}K**, which represents the axis label.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs5" %}

## Label Placement

Label can be placed **Inside** or **Outside** of the ranges using the [`labelPosition`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#labelposition) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs6" %}

## Opposed Position

To place an axis opposite to its original position, set the [`opposedPosition`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#opposedposition) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs7" %}

## Category Label

The Bullet Chart supports X-axis label by specifying the property from the data source to the [`categoryField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#categoryfield). It helps to understand the input data in a more efficient way.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs8" %}

## Category Label Customization

The label color, opacity, font size, font family, font weight, and font style can be customized by using the [`categoryLabelStyle`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#categorylabelstyle) setting for category and the [`labelStyle`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#labelstyle) setting for axis label. The [`useRangeColor`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/bulletLabelStyleModel/#userangecolor) property specifies the color of the axis label and represents the color from the corresponding range colors.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/bullet-chart/getting-started/range-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/bullet-chart/getting-started/range-cs9" %}