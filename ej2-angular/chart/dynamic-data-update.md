---
layout: post
title: Dynamic data update in Angular Chart component | Syncfusion
description: Learn here all about dynamic data update in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dynamic Data Update
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic data update in Angular Chart component

## Adding a new data point

Use the `addPoint` method to dynamically append a new data point to a series. This is useful for real-time data streams, user interactions, or incremental data loading. The method accepts the following parameters:
 
* **Data point** (required): The new data object to append to the series (must match the datasource structure)
* **Animation duration** (optional): Duration in milliseconds for the entry animation
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/add-point/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/add-point/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/add-point" %}

## Removing an existing data point

Use the `removePoint` method to dynamically delete a data point from a series by its index. This is useful for filtering data, removing outliers, or responding to user actions. The method accepts the following parameters:
 
* **Point index** (required): The zero-based index of the data point to remove
* **Animation duration** (optional): Duration in milliseconds for the exit animation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/remove-point/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/remove-point/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/remove-point" %}

## Replacing entire data points

Use the `setData` method to replace all data points in a series with a new dataset. This is useful for category switching, time range changes, or complete data refreshes. The method accepts the following parameters:
 
* **New data source** (required): The complete new dataset array to display
* **Animation duration** (optional): Duration in milliseconds for the transition animation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/set-data/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/set-data/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/set-data" %}

## Click to add or remove a data point

Enable users to add or remove data points by clicking on the chart. Listen to the `chartMouseClick` event to capture click coordinates and point information. When a user clicks within the chart area, extract the x and y axis values from the event arguments. If the location is empty, use `addPoint` to add a new data point at those coordinates. If a user clicks on an existing data point, identify its index and use `removePoint` to delete it. This creates an intuitive interface for data exploration and editing.

To remove a data point from the existing data source, simply click on the desired data point. To achieve this, first, verify whether the clicked data point obtained from `chartMouseClick` already exists in the data source. If it does, remove it by utilizing the `removePoint` method based on its index.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/dynamic-update/click-add-point/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/dynamic-update/click-add-point/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/dynamic-update/click-add-point" %}

## See Also

* [Change a Specific Series Data When Clicking Another Chart Legend](https://support.syncfusion.com/kb/article/21512/how-to-change-a-particular-series-data-when-clicking-another-chart-legend)