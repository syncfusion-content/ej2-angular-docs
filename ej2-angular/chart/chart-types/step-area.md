---
layout: post
title: Step Area Area Chart in Angular Chart component | Syncfusion
description: Learn here all about Step Area Area Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Step Area Area Chart
documentation: ug
domainurl: ##DomainURL##
---
# Step Area Area in Angular Chart component

## Step Area

To render a step area series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `StepArea` and inject `StepAreaSeriesService` into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/area-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/area-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/area-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/area-cs6" %}

## Series customization

The following properties can be used to customize the `step area` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/) – Specifies the [color](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/angular/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/steparea-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/steparea-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/steparea-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/series/steparea-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
