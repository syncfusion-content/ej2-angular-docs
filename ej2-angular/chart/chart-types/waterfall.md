---
layout: post
title: Waterfall in Angular Chart component | Syncfusion
description: Learn here all about Waterfall in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Waterfall
documentation: ug
domainurl: ##DomainURL##
---

# Waterfall in Angular Chart component

## Waterfall Chart

Waterfall chart helps to understand the cumulative effect of the sequentially introduced positive and negative values. To render a Waterfall series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as
`Waterfall` and inject `WaterfallSeriesService` into the `@NgModule.providers`. [`intermediateSumIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#intermediateSumIndexes) property of waterfall is used to represent the in between the sum values and [`sumIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#sumIndexes) is used to represent the cumulative sum values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs1" %}

## Series customization

The negative changes of waterfall charts is represented by using [`negativeFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#negativeFillColor) and the summary changes are represented by using [`summaryFillColor`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#summaryFillColor) properties.

By default, the negativeFillColor as ‘#E94649’ and the summaryFillColor as ‘#4E81BC’.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/waterfall-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/waterfall-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/waterfall-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/waterfall-cs2" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)