---
layout: post
title: Radar in Angular Chart component | Syncfusion
description: Learn here all about Radar in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Radar
documentation: ug
domainurl: ##DomainURL##
---

# Radar in Angular Chart component

## Radar

To render a radar series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#type) as `Radar` and inject `RadarSeriesService` into the `@NgModule.providers`.

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#drawtype) as `Line` and inject `LineSeriesService` inject `LineSeriesService`  into the `@NgModule.providers`. [`isClosed`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel#isclosed) property specifies whether to join start and end point of a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs11" %}

## Series customization

### Start Angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs12" %}

### Radius

You can customize the radius of the polar series and radar series using [`coefficient`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/polar-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs13" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)