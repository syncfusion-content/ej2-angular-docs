---
layout: post
title: Numeric axis label format in Angular Chart component | Syncfusion
description: Learn here all about Numeric axis label format in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Numeric axis label format
documentation: ug
domainurl: ##DomainURL##
---

# Numeric axis label format in Angular Chart control

## Formatting numeric axis labels

You can use the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelformat) property in an axis to set the format of numeric axis labels. Numeric labels support all Globalize formats.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/numeric-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/numeric-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/numeric-cs1" %}

The following table describes the results of applying some commonly used label formats to numeric values.

<table>
<tr>
<td><b>Label value</b></td>
<td><b>Label Format property value</b></td>
<td><b>Result</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>1000</td>
<td>n1</td>
<td>1000.0</td>
<td>The number is rounded to one decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>n2</td>
<td>1000.00</td>
<td>The number is rounded to two decimal places.</td>
</tr>
<tr>
<td>1000</td>
<td>n3</td>
<td>1000.000</td>
<td>The number is rounded to three decimal places.</td>
</tr>
<tr>
<td>0.01</td>
<td>p</td>
<td>1%</td>
<td>The number is converted to a percentage.</td>
</tr>
<tr>
<td>0.01</td>
<td>p1</td>
<td>1.0%</td>
<td>The number is converted to a percentage with one decimal place.</td>
</tr>
<tr>
<td>0.01</td>
<td>p2</td>
<td>1.00%</td>
<td>The number is converted to a percentage with two decimal places.</td>
</tr>
<tr>
<td>0.01</td>
<td>p3</td>
<td>1.000%</td>
<td>The number is converted to a percentage with three decimal places.</td>
</tr>
<tr>
<td>1000</td>
<td>c1</td>
<td>$1000.0</td>
<td>The currency symbol is appended to the number, and the number is rounded to one decimal place.</td>
</tr>
<tr>
<td>1000</td>
<td>c2</td>
<td>$1000.00</td>
<td>The currency symbol is appended to the number, and the number is rounded to two decimal places.</td>
</tr>
</table>

## Custom label format

The numeric axis also supports a custom label format using placeholders such as `{value}°C`, where the value represents the axis label (e.g., 20°C).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/numeric-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/numeric-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/numeric-cs" %}