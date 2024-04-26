---
layout: post
title: Gauge dimensions in Angular Circular gauge component | Syncfusion
description: Learn here all about Gauge dimensions in Syncfusion Angular Circular gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Gauge dimensions 
documentation: ug
domainurl: ##DomainURL##
---


# Gauge dimensions in Angular Circular gauge component

## Size for Container

You can set width and height to the element of the container. It determines the gauge size. Also, you can set the size via inline or CSS as demonstrated below.

```
    <div id='container'>
        <div id='circular-container' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-dimensions-cs1" %}
<!-- markdownlint-disable MD036 -->

## Size for Circular Gauge

<!-- markdownlint-disable MD036 -->

You can also set size for the gauge directly through [`width`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#width-string) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/#height-string) properties.

**In Pixel**

You can set the size of the gauge in pixel as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-dimensions-cs2" %}

**In Percentage**

By setting value in percentage, gauge gets its dimension with respect to its container. For example, when the height is ‘50%’, gauge renders to half of the container height.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-dimensions-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-dimensions-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.