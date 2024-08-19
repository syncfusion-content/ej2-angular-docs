---
layout: post
title: Date time axis label format in Angular Chart component | Syncfusion
description: Learn here all about Date time axis label format in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Date time axis label format
documentation: ug
domainurl: ##DomainURL##
---

# Date time axis label format in Angular Chart control

## Formatting date time axis labels

You can use the [`labelFormat`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective/#labelformat) property in an axis to set the format of date-time axis labels.

For the given date **new Date(2000, 03, 10, 08, 30, 45)**, which is **10 April 2000, 08:30:45 AM**, below are some format strings and their corresponding results.

<table>
<tr>
<td><b>Label Format property value</b></td>
<td><b>Result</b></td>
</tr>
<tr>
<td>hh:mm</td>
<td>08:30</td>
</tr>
<tr>
<td>hh:mm:ss</td>
<td>08:30:45</td>
</tr>
<tr>
<td>hh:mm:ss a</td>
<td>08:30:45 AM</td>
</tr>
<tr>
<td>y</td>
<td>2000</td>
</tr>
<tr>
<td>MMMM</td>
<td>April</td>
</tr>
<tr>
<td>d</td>
<td>10</td>
</tr>
<tr>
<td>d MMM</td>
<td>10 Apr</td>
</tr>
<tr>
<td>d MMMM y</td>
<td>10 April 2000</td>
</tr>
<tr>
<td>dd-MM-y</td>
<td>10-03-2000</td>
</tr>
<tr>
<td>dd/MM/y</td>
<td>10/03/2000</td>
</tr>
<tr>
<td>y/M/d</td>
<td>2000/3/10</td>
</tr>
<tr>
<td>E hh:mm</td>
<td>Mon 08:30</td>
</tr>
<tr>
<td>d MMMM y hh:mm:ss a</td>
<td>10 April 2000 08:30:45 AM</td>
</tr>
</table>


The following table describes the custom date-time specifiers and their descriptions.

<table>
<tr>
<td><b>Format string</b></td>
<td><b>Description</b></td>
<td><b>Examples</b></td>
</tr>
<tr>
<td>d</td>
<td>The day of the month ranges from 1 to 31.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 4 <br>
Wed Sep 18 2024 17:30:45 -> 18
</td>
</tr>
<tr>
<td>dd</td>
<td>The day of the month ranges from 01 to 31.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 04 <br>
Wed Sep 18 2024 17:30:45 -> 18
</td>
</tr>
<tr>
<td>E</td>
<td>The abbreviated name of the day of the week.</td>
<td>Wed Sep 04 2024 17:30:45 -> Wed</td>
</tr>
<tr>
<td>EEEE</td>
<td>The full name of the day of the week.</td>
<td>Wed Sep 04 2024 17:30:45 -> Wednesday</td>
</tr>
<tr>
<td>M</td>
<td>The month ranges from 1 to 12.</td>
<td>Wed Sep 04 2024 17:30:45 -> 9</td>
</tr>
<tr>
<td>MM</td>
<td>The month ranges from 01 to 12.</td>
<td>Wed Sep 04 2024 17:30:45 -> 09</td>
</tr>
<tr>
<td>MMM</td>
<td>The abbreviated name of the month.</td>
<td>Wed Sep 04 2024 17:30:45 -> Sep</td>
</tr>
<tr>
<td>MMMM</td>
<td>The full name of the month.</td>
<td>Wed Sep 04 2024 17:30:45 -> September</td>
</tr>
<tr>
<td>y</td>
<td>The year is represented with four digits.</td>
<td>Wed Sep 04 2024 17:30:45 -> 2024</td>
</tr>
<tr>
<td>h</td>
<td>The hour is indicated using a 12-hour clock that ranges from 1 to 12.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 1 <br>
Wed Sep 18 2024 17:30:45 -> 5
</td>
</tr>
<tr>
<td>hh</td>
<td>The hour is indicated using a 12-hour clock that ranges from 01 to 12.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 01 <br>
Wed Sep 18 2024 17:30:45 -> 05
</td>
</tr>
<tr>
<td>H</td>
<td>The hour is indicated using a 24-hour clock that ranges from 0 to 23.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 1 <br>
Wed Sep 18 2024 17:30:45 -> 17
</td>
</tr>
<tr>
<td>HH</td>
<td>The hour is indicated using a 24-hour clock that ranges from 00 to 23.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 01 <br>
Wed Sep 18 2024 17:30:45 -> 17
</td>
</tr>
<tr>
<td>m</td>
<td>The minute ranges from 0 to 59.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 3 <br>
Wed Sep 18 2024 17:30:45 -> 30
</td>
</tr>
<tr>
<td>mm</td>
<td>The minute ranges from 00 to 59.</td>
<td>
Wed Sep 04 2024 01:03:45 -> 03 <br>
Wed Sep 18 2024 17:30:45 -> 30
</td>
</tr>
<tr>
<td>s</td>
<td>The second ranges from 0 to 59.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 5 <br>
Wed Sep 18 2024 17:30:45 -> 45
</td>
</tr>
<tr>
<td>ss</td>
<td>The second ranges from 00 to 59.</td>
<td>
Wed Sep 04 2024 01:03:05 -> 05 <br>
Wed Sep 18 2024 17:30:45 -> 45
</td>
</tr>
<tr>
<td>a</td>
<td>The AM/PM designator (displayed in uppercase).</td>
<td>
Wed Sep 04 2024 01:03:05 -> AM <br>
Wed Sep 18 2024 17:30:45 -> PM
</td>
</tr>
<tr>
<td>Any other character</td>
<td>The character is copied to the result string without any changes.</td>
<td>Wed Sep 18 2024 17:30:45 ("In hh:mm") -> In 05:30</td>
</tr>
</table>

## Custom label format

The date-time axis also supports a custom label format using placeholders such as `{value}°C`, where the value represents the axis label (e.g., 20°C).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dateformat-cs/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dateformat-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dateformat-cs" %}