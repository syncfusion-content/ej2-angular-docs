---
layout: post
title: 100% Stacked Line Chart in Angular Chart component | Syncfusion
description: Learn here all about 100% Stacked Line Chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 100% Stacked Line Chart
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Line Chart in Angular Chart component

## 100% Stacked Line

To render a 100% stacked line series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#type-string) as `StackingLine100` and inject `StackingLineSeriesService`  into the `@NgModule.providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/line-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/line-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/line-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/line-cs4" %}

## Series customization

The following properties can be used to customize the `100% stacked line` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill-string).
* [dashArray](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/100-stackedline-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/100-stackedline-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/100-stackedline-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/100-stackedline-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)