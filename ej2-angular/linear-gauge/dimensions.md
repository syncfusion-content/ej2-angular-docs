---
layout: post
title: Dimensions in Angular Linear gauge component | Syncfusion
description: Learn here all about Dimensions in Syncfusion Angular Linear gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dimensions 
documentation: ug
domainurl: ##DomainURL##
---

# Dimensions in Angular Linear gauge component

<!-- markdownlint-disable MD013 -->

## Size for Linear Gauge

The height and width of the Linear Gauge can be set using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/#height) properties in [`ejs-lineargauge`](https://ej2.syncfusion.com/angular/documentation/api/linear-gauge/).

### In Pixel

<!-- markdownlint-disable MD036 -->

The size of the Linear Gauge can be set in pixel as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/dimensions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/dimensions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/dimensions-cs1" %}

### In Percentage

By setting value in percentage, Linear Gauge receives its dimension matching to its parent. For example, when the height is set as **50%**, Linear Gauge renders to half of the parent height. The Linear Gauge will be responsive when the width is set as **100%**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/linear-gauge/dimensions-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/linear-gauge/dimensions-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/linear-gauge/dimensions-cs2" %}

> Note: When the component's size is not specified, the height will be **450px** and the width will be the same as the parent element's width.
