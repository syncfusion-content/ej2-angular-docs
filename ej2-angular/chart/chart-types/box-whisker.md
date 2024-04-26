---
layout: post
title: Box and Whisker in Angular Chart component | Syncfusion
description: Learn here all about Box and Whisker in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Box and Whisker
documentation: ug
domainurl: ##DomainURL##
---

# Box and Whisker in Angular Chart component

## Box and Whisker

To render a box and whisker chart, use series[`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#type) as `BoxAndWhisker` and inject `BoxAndWhiskerSeriesService` into the `@NgModule.providers`. The field y requires n number of data or it should contains minimum of five values to plot a segment.
>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/box-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/box-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/box-cs1" %}


## Box plot

You can change the rendering mode of the Box and Whisker series using the `boxPlotMode` property.
The default boxPlotMode is `exclusive`.The other boxPlotMode available are `inclusive` and `normal`.

To render a box and whisker chart, use series[`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#type) as `BoxAndWhisker` and inject `BoxAndWhiskerSeriesService` into the `@NgModule.providers`. The field y requires n number of data or it should contains minimum of five values to plot a segment.
>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/box-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/box-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/box-cs2" %}

## Show mean

In Box and Whisker series `showMean` property is used to show the box and whisker average value. The default value of `showMean` is false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/box-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/box-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/box-cs3" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)