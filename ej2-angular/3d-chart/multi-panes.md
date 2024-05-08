---
layout: post
title: Multiple panes in Angular 3D Chart control | Syncfusion
description: Learn here all about multiple panes in Syncfusion Angular 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: 3D Chart
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in Angular 3D Chart control

The chart area can be divided into multiple panes using [`rows`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#rows) and [`columns`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#columns).

## Rows

To split the chart area vertically into number of rows, use [`rows`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#rows) property of the 3D chart.

* The space for each row can be allocated by using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionRowModel/#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#rowindex) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/multi-pane/multi-pane-cs1" %}

For spanning the vertical axis along multiple rows, use [`span`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#span)  property of an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/multi-pane/multi-pane-cs2" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/chart3DModel/#columns) property of the 3D chart.

* The space for each column can be allocated by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/threeDimensionColumnModel/#width) property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#columnindex) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/multi-pane/multi-pane-cs3" %}

For spanning the vertical axis along multiple column, you can use [`span`](https://ej2.syncfusion.com/angular/documentation/api/chart3d/axis3DModel/#span) property of an axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/3d-chart/multi-pane/multi-pane-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/3d-chart/multi-pane/multi-pane-cs4" %}