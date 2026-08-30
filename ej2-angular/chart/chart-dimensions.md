---
layout: post
title: Chart Dimensions in Angular Chart | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart dimensions 
documentation: ug
domainurl: ##DomainURL##
---

# Chart Dimensions in Angular Chart

## Size for Container

The Chart renders to the size of its parent container. You can set the container size inline or via CSS as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs1" %}

> **Note:** When using percentage-based sizes for the chart, ensure the parent container has an explicit size; otherwise the chart may not render with the expected dimensions.

## Size for Chart

You can also set the size of the chart directly through the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/index-default#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/index-default#height) properties. These accept numeric (in pixels) or string (e.g., `'650'`, `'650px'`, `'50%'`) values.

### Pixel

The size of the chart can be set in pixels as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs2" %}

### Percentage

By setting a value in percentage, the chart gets its dimensions with respect to its container. For example, when the height is **50%**, the chart renders to half of the container's height. Percentage values require the parent container to have an explicit size.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/getting-started/datasource-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/getting-started/datasource-cs3" %}

## Default Size

> If the size is not specified, the Chart will be rendered with a height of **450px** and a width equal to the size of the window. When only one dimension is specified, the other dimension is computed automatically.
