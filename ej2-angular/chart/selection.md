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

Chart provides selection support for the series and its data points on mouse click.

>When Mouse is clicked on the data points, the corresponding series legend will also be selected.

We have different type of selection mode for selecting the data. They are,

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

## Point

 You can select a point, by setting `selectionMode` to point.

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

 You can select a series, by setting `selectionMode` to series.

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

You can select the points that corresponds to the same index in all the series, by setting `selectionMode` to cluster.

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

**DragXY, DragX and DragY**

To fetch the collection of data under a particular region, you have to set `selectionMode` as `DragXY`.

* DragXY - Allows us to select data with respect to horizontal and vertical axis.
* DragX - Allows us to select data with respect to horizontal axis.
* DragY - Allows us to select data with respect to vertical axis.

The selected data’s are returned as an array collection in the [`dragComplete`]
(https://ej2.syncfusion.com/angular/documentation/api/chart/iDragCompleteEventArgs/) event.

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

To select a region by drawing freehand shapes to fetch a collection of data use `selectionMode` as `Lasso`. You can also select multiple regions on the chart through this mode.

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

To select multiple region on the chart, set the `allowMultiSelection` property to true.

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

You can select multiple points or series, by enabling the [`isMultiSelect`](https://ej2.syncfusion.com/angular/documentation/api/chart/#ismultiselect) property.

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

You can able to select a point or series programmatically on a chart using [`selectedDataIndexes`](https://ej2.syncfusion.com/angular/documentation/api/chart/#selecteddataindexes) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/user-interaction/selection-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="app.component.css" %}
{% include code-snippet/chart/user-interaction/selection-cs5/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/user-interaction/selection-cs5" %}

## Selection through on legend

You can able to select a point or series through on legend using [`toggleVisibility`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettingsModel/#toggleVisibility) property. Also, use [`enableHighlight`](https://ej2.syncfusion.com/angular/documentation/api/chart/legendSettings/#enableHighlight) property for highlighting the series through legend.
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

You can apply custom style to selected points or series with [`selectionStyle`](https://ej2.syncfusion.com/angular/documentation/api/chart/series/#selectionstyle) property.

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

* [Display selected data for range selection](./how-to/selected-data-grid/#display-selected-data-for-range-selection)