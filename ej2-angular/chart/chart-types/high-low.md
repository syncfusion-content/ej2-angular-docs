---
layout: post
title: Hilo in Angular Chart component | Syncfusion
description: Learn here all about Hilo in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hilo
documentation: ug
domainurl: ##DomainURL##
---

# Hilo in Angular Chart component

## Hilo

Hilo Series illustrates the price movements in stock using the high and low values.
To render a Hilo series, use series [`type`](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesDirective/#type) as `Hilo` and inject `HiloSeriesService` into the `@NgModule.providers`.

Hilo series requires 3 fields (x, high and low) to show the high and low price in the stock.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/hilo-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/hilo-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/hilo-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/hilo-cs1" %}

## Series customization

The following properties can be used to customize the `hilo` series.

* [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/angular/documentation/api/chart/seriesModel/#fill).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/hilo-cs/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/chart/series/hilo-cs/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/hilo-cs/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/hilo-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)