---
layout: post
title: Logarithmic axis in Angular 3D Chart control | Syncfusion
description: Learn here all about logarithmic axis in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in Angular 3D Chart control

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/logarithmic-axis/logatithmic-axis-cs1" %}

>Note: To use logarithmic axis, we need to inject `Logarithmic3DService` module into the `@NgModule.providers` and set the [`valueType`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#valuetype) of the axis to **Logarithmic**.

## Range

The range of an axis will be calculated automatically based on the provided data and it can also be customized by using the [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#minimum), [`maximum`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#maximum) and [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#interval) properties of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/logarithmic-axis/logatithmic-axis-cs2" %}

## Logarithmic base

Logarithmic base can be customized by using the [`logBase`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#logbase) property of the axis. For example when the `logBase` is **5**, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup> etc.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/logarithmic-axis/logatithmic-axis-cs3" %}

## Logarithmic interval

The interval of the logarithmic axis can be customized by using the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#interval) property in the axis. When the logarithmic base is 10 and logarithmic **interval** is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the [`interval`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#interval) is **1**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/logarithmic-axis/logatithmic-axis-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/logarithmic-axis/logatithmic-axis-cs4" %}