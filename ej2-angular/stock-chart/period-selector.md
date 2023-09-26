---
layout: post
title: Period selector in Angular Stock chart component | Syncfusion
description: Learn here all about Period selector in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Period selector 
documentation: ug
domainurl: ##DomainURL##
---

# Period selector in Angular Stock chart component

The period selector allows to select a range with specified periods. By default the period selector is enabled in stock chart.

## Periods

Periods is an array of objects that allows users to specify the range of [`periods`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartModel/#periods). The `interval` property specifies the count value of the button, and the `text` property specifies the text to be displayed on button. The `intervalType` property allows users to customize the intervals of the buttons. The `intervalType` property supports the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/period-selector-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/period-selector-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/period-selector-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/period-selector-cs1" %}

## Visibility of period selector

The [`enablePeriodSelector`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartModel/#enableperiodselector) property allows users to toggle the visibility of period selector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/period-selector-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/stock-chart/period-selector-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/period-selector-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/period-selector-cs2" %}