---
layout: post
title: Empty points in Angular 3D Circular Chart component | Syncfusion
description: Learn here all about empty points in Syncfusion Angular 3D Circular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Empty points 
documentation: ug
domainurl: ##DomainURL##
---

# Empty points in Angular 3D Circular Chart component

Data points containing `null` or `undefined` values are considered empty points. These empty data points are ignored and not plotted in the 3D Circular Chart. You can customize the handling of empty points using the `emptyPointSettings` property in the series. The default mode for empty points is `Gap`. Other supported modes include `Average`, `Drop`, and `Zero`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/pie-donut/empty-points" %}

## Customization

A specific color for an empty point can be set by using the `fill` property in `emptyPointSettings`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/circular-chart/pie-donut/empty-point-custom" %}