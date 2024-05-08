---
layout: post
title: Axis types in Angular Stock chart component | Syncfusion
description: Learn here all about Axis types in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Axis types 
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Axis types in Angular Stock chart component

## DateTime axis

DateTime axis uses date time scale and displays the date time values as axis labels in the specified format. To use DateTime axis, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTime`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs7" %}

## DateTimeCategory axis

DateTimeCategory axis in the stock chart is used to display only business days. To use DateTimeCategory axis, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTimeCategory`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs9" %}

## Logarithmic axis

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>). To use Logarithmic axis, set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Logarithmic`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/axis-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/axis-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/axis-cs8" %}

## See also

* [Axis Customization](./axis-customization/)
