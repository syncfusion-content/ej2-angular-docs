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

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numeric values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

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

>Note: To use log axis, we need to inject `LogarithmicService` into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#valuetype) of axis to `Logarithmic`.

## Range

Range of an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#interval) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs6" %}

## Logarithmic Base

Logarithmic base can be customized by using the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#logbase) property of the axis.
For example when the logBase is 5, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>,
5<sup>1</sup>, 5<sup>2</sup> etc.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs7" %}

## Logarithmic Interval

Logarithmic axis interval can be customized by using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart/axisDirective#interval) property of the axis. When the logarithmic base is 10 and logarithmic interval is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the interval is 1.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/log-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/log-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/log-cs8" %}