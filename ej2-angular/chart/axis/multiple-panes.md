---
layout: post
title: Multiple panes in Angular Chart component | Syncfusion
description: Learn here all about Multiple panes in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Multiple panes 
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in Angular Chart component

The chart area can be divided into multiple panes by defining rows and columns using the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/chart/row) and [`columns`](https://ej2.syncfusion.com/angular/documentation/api/chart/column) collections. This feature is useful for displaying multiple related datasets within the same chart container while maintaining clear visual separation.

## Rows

To split the chart area vertically into multiple rows, use the [`rows`](https://ej2.syncfusion.com/angular/documentation/api/chart/row) property of the chart.

- Space for each row can be allocated by using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/chart/row#height) property. The value can be specified either in pixels or as a percentage.
- To associate a vertical axis with a specific row, assign the corresponding index using the [`rowIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#rowindex) property of the axis.
- To customize the bottom line of each row, use the [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/row#border) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs2" %}

To span a vertical axis across multiple rows, use the [`span`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#span) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs3" %}

## Columns

To split the chart area horizontally into multiple columns, use the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/chart/column) property of the chart.

- Space for each column can be allocated using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/chart/column#width) property. The width can be specified either in pixels or as a percentage.
- To associate a horizontal axis with a specific column, assign the corresponding index using the [`columnIndex`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#columnindex) property of the axis.
- To customize the bottom line of each column, use the [`border`](https://ej2.syncfusion.com/angular/documentation/api/chart/column#border) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs4" %}

To span a horizontal axis across multiple columns, use the [`span`](https://ej2.syncfusion.com/angular/documentation/api/chart/axis#span) property of the axis.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/axis/multiple-panes-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/axis/multiple-panes-cs5" %}
