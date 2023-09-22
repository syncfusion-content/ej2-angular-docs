---
layout: post
title: Internationalization in Angular Circular Gauge component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Angular Circular Gauge component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Internationalization 
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Angular Circular Gauge component

Circular Gauge provides internationalization support for below elements.

* Axis Labels
* Tooltip

For more information about number formatter, you can refer [internationalization](https://ej2.syncfusion.com/documentation/common/internationalization/).

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales.
Internationalization library is used to globalize number in Circular Gauge using [format](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/label/#format-string) property in [labelStyle](https://ej2.syncfusion.com/angular/documentation/api/circular-gauge/label).

<!-- markdownlint-disable MD036 -->
**Numeric Format**

In the below example, axis labels are globalized to **EUR**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-internationalization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-internationalization-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-internationalization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-internationalization-cs1" %}

## Right-to-left

Circular Gauge can render its elements from right to left, which improves the user experience for certain language users. To do so, set the [enableRtl](https://helpej2.syncfusion.com/angular/documentation/api/circular-gauge/#enablertl) property to **true**. When this property is enabled, elements such as the tooltip and legend will be rendered from right to left. Meanwhile, the axis can be rendered from right to left by setting the [direction](https://helpej2.syncfusion.com/angular/documentation/api/circular-gauge/axisModel/#direction) property to **AntiClockWise**. For more information on axis, click [here](https://ej2.syncfusion.com/angular/documentation/circular-gauge/gauge-axes#angles-and-direction).

The following example illustrates the right to left rendering of the Circular Gauge.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circulargauge/gauge-rtl-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circulargauge/gauge-rtl-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circulargauge/gauge-rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circulargauge/gauge-rtl-cs1" %}