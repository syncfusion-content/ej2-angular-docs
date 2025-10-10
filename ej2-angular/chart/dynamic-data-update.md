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

The `addPoint` method is used to dynamically add a new data point to the chart series. This method is particularly useful when you want to update the chart with a new data point without having to refresh the entire chart. This method takes two parameters:
 
* The first parameter is the new data point to add to your existing data source.
* The optional second parameter specifies the animation duration for adding the new data point.

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

The `removePoint` method is used to dynamically remove a data point from the chart series. This method is particularly useful when you want to update the chart by removing an existing data point without having to refresh the entire chart. This method takes two parameters:
 
* The first parameter is the index of the data point that needs to be removed from the existing data source.
* The optional second parameter specifies the animation duration for removing the data point.

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

To replace the existing data source in the chart with a new data source, you can simply use the `setData` method. This method allows you to replace the existing data points in the chart series with a new set of data points, enabling you to easily update the chart with new information. This method takes two parameters:
 
* The first parameter is the new set of data points to be updated.
* The optional second parameter specifies the animation duration for updating the new data source.

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

You can use mouse or touch events to dynamically add or remove data points from an existing data source by clicking on the appropriate position within the chart area. To add a new data point to the existing data source, click anywhere in the chart area, retrieve the x-axis and y-axis information of the clicked location from the `chartMouseClick` event arguments. Then, utilize the `addPoint` method to add a new data point to the existing data source.

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