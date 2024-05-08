---
layout: post
title: Appearance in Angular Stock chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Appearance 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Angular Stock chart component

## Stock Chart Title

StockChart can be given a title using [`title`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/#title-string) property, to show the information about the data plotted.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-title-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-title-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/chart-title-cs1" %}

<!-- markdownlint-disable MD036 -->

**Title Customization**

The `textStyle` property of stockchart title provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-title-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-title-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/chart-title-cs2" %}

## Stock Chart Theme

Changing Stock Chart theme will affect background color, grid lines, tooltip colors and appearance.

[`theme`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/stockChartModel/#theme) property of Stock chart is shipped with several built-in themes such as `Material`, `Fabric`, `Bootstrap` , `HighContrastLight`, `MaterialDark`, `FabricDark`, `FabricDark`, `HighContrast` and `BootstrapDark`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-title-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-title-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/chart-title-cs3" %}

## See Also

* [Axis Customization](./axis-customization/)
