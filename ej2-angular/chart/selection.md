---
layout: post
title: Selection in Angular Chart component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Selection in Angular Chart component

The chart provides selection support for both series and individual data points when users interact with the chart using mouse clicks.

> When a data point is clicked, the corresponding series legend item is also selected.

Multiple selection modes are available to help select and analyze chart data effectively. The supported selection modes are:

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

## Point

A single data point can be selected by setting the `selectionMode` property to `Point`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs1" %}

>Note: To use select feature, we need to Inject `SelectionService` into the `NgModule.providers`.

## Series

An entire series can be selected by setting the `selectionMode` property to `Series`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs2" %}

## Cluster

Cluster selection allows selection of data points that share the same index across all series. This can be enabled by setting the `selectionMode` property to `Cluster`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs3" %}

## Rectangular selection

**DragXY, DragX, and DragY**

Rectangular selection enables users to select a group of data points within a defined region by setting the `selectionMode` property accordingly.

* **DragXY** – Selects data points along both the horizontal and vertical axes.
* **DragX** – Selects data points along the horizontal axis.
* **DragY** – Selects data points along the vertical axis.

The selected data points are returned as an array collection through the [`dragComplete`](https://ej2.syncfusion.com/angular/documentation/api/chart/iDragCompleteEventArgs) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/drag-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/drag-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/drag-cs1" %}

## Lasso selection

Lasso selection allows users to draw a freehand shape on the chart to select data points within that region. Set the `selectionMode` property to `Lasso` to enable this feature. Multiple regions can be selected on the same chart using this mode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/drag-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/drag-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/drag-cs2" %}

## Multi-region selection

Multiple regions can be selected on the chart by setting the `allowMultiSelection` property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/drag-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/drag-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/drag-cs3" %}

## Selection type

Multiple data points or series can be selected simultaneously by enabling the [`isMultiSelect`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#ismultiselect) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs4/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs4" %}

## Selection on load

Data points or series can be selected programmatically when the chart is loaded by using the [`selectedDataIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartModel#selecteddataindexes) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs5/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs5" %}

## Selection through legend

Points or series can also be selected through the legend by enabling the [`toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel#toggleVisibility) property.  
To visually emphasize the selected series, use the [`enableHighlight`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#enableHighlight) property.

> When [`highlightMode`](https://ej2.syncfusion.com/angular/documentation/api/stock-chart/highlightmode) is set to `Series`, `Cluster`, or `Point`, legend highlighting occurs even if [`enableHighlight`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings#enableHighlight) is set to **false**. In this case, `highlightMode` takes precedence, and hovering over legend items highlights the corresponding series.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs6/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs6" %}

## Customization for selection

Custom styles can be applied to selected points or series by using the [`selectionStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/series#selectionstyle) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs7/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs7" %}

## See Also

* [Display selected data for range selection](./how-to/selected-data-grid#display-selected-data-for-range-selection)