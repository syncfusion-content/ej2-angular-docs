---
layout: post
title: Logarithmic axis in Angular Chart component | Syncfusion
description: Learn here all about Logarithmic axis in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Logarithmic axis 
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in Angular Chart component

<!-- markdownlint-disable MD033 -->

The logarithmic axis uses a logarithmic scale and is particularly useful for visualizing data that spans a wide range of values. It effectively represents datasets that include both very small values (for example, 10<sup>-6</sup>) and very large values (for example, 10<sup>6</sup>) within the same chart, improving readability and comparison.

To known about logarithmic axis, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=t8HoJ8yxIdc" %}

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs5" %}

> Note: To use the logarithmic axis, inject `LogarithmicService`into the`@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#valuetype) property of the axis to `Logarithmic`.

## Range

The range of the logarithmic axis is calculated automatically based on the provided data. This automatic calculation ensures that all data points are visible within the chart area. The axis range can also be customized explicitly using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#maximum), and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#interval) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs6" %}

## Logarithmic base

The logarithmic base of the axis can be customized using the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#logbase) property. This property determines how the axis values are distributed along the scale.  
For example, when the logarithmic base is set to `5`, the axis values follow the sequence 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, and so on.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs7" %}

## Logarithmic interval

The spacing between logarithmic axis labels can be controlled using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#interval) property. This property defines the step size between consecutive logarithmic values.  
For example, when the logarithmic base is `10` and the interval is set to `2`, the axis labels are placed at values such as 10<sup>2</sup>, 10<sup>4</sup>, and 10<sup>6</sup>. The default value of the interval is `1`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs8" %}