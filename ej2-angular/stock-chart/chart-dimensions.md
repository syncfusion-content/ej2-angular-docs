---
layout: post
title: Chart dimensions in Angular Stock chart component | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion Angular Stock chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart dimensions 
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in Angular Stock chart component

## Size for Container

Stock Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/chart-dimensions-cs1" %}

## Size for Stock Chart

<!-- markdownlint-disable MD036 -->

You can also set size for chart directly through [`width`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/#width-string) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/#height-string) properties.

**In Pixel**

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/chart-dimensions-cs2" %}

**In Percentage**

By setting value in percentage, Stock Chart gets its dimension with respect to its container. For example, when the height is ‘50%’, Stock Chart renders to half of the container height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/stock-chart/chart-dimensions-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.