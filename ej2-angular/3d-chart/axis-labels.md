---
layout: post
title: Axis labels in Angular 3D Chart control | Syncfusion
description: Learn here all about axis labels in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Axis labels in Angular 3D Chart control

Axis labels are the labels that are positioned adjacent to the y-axis and beneath the x-axis. It provides descriptive information about the axis.

## Smart axis labels

When the axis labels overlap with each other, [`labelIntersectAction`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#labelintersectaction) property in the axis can be used to place them smartly.

**Case 1:** When setting `labelIntersectAction` as `Hide`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-labels/axis-labels-cs1" %}

**Case 2:** When setting `labelIntersectAction` as `Rotate45`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-labels/axis-labels-cs2" %}

**Case 3:** When setting `labelIntersectAction` as `Rotate90`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-labels/axis-labels-cs3" %}

## Edge label placement

Labels with long text at the edges of an axis may appear partially in the 3D chart. To avoid this,
use the [`edgeLabelPlacement`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#edgelabelplacement) property in axis, which moves the label inside the chart area for better appearance or hides it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-labels/axis-labels-cs4" %}

## Maximum labels

The labels will be rendered based on the count in the [`maximumLabels`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#maximumlabels) property per 100 pixel. If the range (minimum, maximum, interval) and `maximumLabels` are set, then the priority goes to range. If the range is not set, then the priority goes to `maximumLabels` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/axis-labels/axis-labels-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/axis-labels/axis-labels-cs5" %}