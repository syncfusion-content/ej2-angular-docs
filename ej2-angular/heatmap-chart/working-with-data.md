---
layout: post
title: Working with data in Angular Heatmap chart component | Syncfusion
description: Learn here all about Working with data in Syncfusion Angular Heatmap chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Working with data 
documentation: ug
domainurl: ##DomainURL##
---

# Working with data in Angular Heatmap chart component

This section shows how to bind data to the HeatMap component. The below video demonstrates the same.

{% youtube "https://www.youtube.com/watch?v=oK23v5DbbLg" %}

Heat map visualizes the JSON data and two-dimensional array data. Using the data adaptor support, data can be bound to the heat map.

## Data adaptor

Heat map supports the following types of data binding with the adaptor support.

* Array
    * Table Binding
    * Cell Binding
* JSON data
    * Table Binding
    * Cell Binding

### Array - table binding

This data type is a collection of one dimensional array objects, at which each inner array contains data points for an X-axis data label. This is the default data binding type for heat map. You can also directly bind the array object to the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#datasource) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/working-with-data/arraytable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/working-with-data/arraytable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/working-with-data/arraytable-cs1" %}

### Array - cell binding

This data type is a collection of array objects that contain information about the row index, column index, and data value for each cell. You can bind the data to heat map by using the [data](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#data) property in the [dataSource](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#datasource) and setting the [adaptorType](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#adaptortype) property to `Cell`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/working-with-data/arraycell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/working-with-data/arraycell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/working-with-data/arraycell-cs1" %}

### JSON data - table binding

In JSON table data binding, each JSON object contains an X-axis data point as row header and all the corresponding Y-axis data values. You can bind the JSON table data to the heat map using the [data](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#data) property in [dataSource](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#datasource). To achieve this, you should enable the [isJsonData](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#isjsondata) property and  define the [adaptorType](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#adaptortype) property as `Table`. The [xDataMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#xdatamapping) property is used to map the row header in JSON data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/working-with-data/jsontable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/working-with-data/jsontable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/working-with-data/jsontable-cs1" %}

### JSON data - Cell binding

In JSON cell data binding, each JSON object consists a value for each cell along with a mapping value for row and column. You can bind the JSON cell data having information for each cell to the heat map using the [data](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#data) property in [dataSource](https://ej2.syncfusion.com/angular/documentation/api/heatmap/#datasource). To achieve this, you should define the [adaptorType](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#adaptortype) property as `Cell` and enable the [isJsonData](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#isjsondata) property. Now, map the fields of data by using the [valueMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#valuemapping), [xDataMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#xdatamapping) and [yDataMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#ydatamapping) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/working-with-data/jsoncell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/working-with-data/jsoncell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/working-with-data/jsoncell-cs1" %}

## Empty points

The data points that use the `null` or `""` or `undefined` as value are considered as empty points. Empty data points are ignored and not displayed in the heat map, and these points are rendered with default palette. You can customize the empty data point color value using the [emptyPointColor](https://ej2.syncfusion.com/angular/documentation/api/heatmap/paletteSettings/#emptypointcolor) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/working-with-data/emptypoint-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/working-with-data/emptypoint-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/working-with-data/emptypoint-cs1" %}

## Binding nested JSON data

In complex data binding, you can bind the nested JSON data to the data points in the heat map. The nested data can be mapped using the [xDataMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#xdatamapping), [yDataMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#ydatamapping), [valueMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#valuemapping) and [bubbleDataMapping](https://ej2.syncfusion.com/angular/documentation/api/heatmap/data/#bubbledatamapping) properties as string value concatenated by a dot.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/heatmap/working-with-data/nestedJsonCell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/heatmap/working-with-data/nestedJsonCell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/heatmap/working-with-data/nestedJsonCell-cs1" %}

## See Also

* [To bind data for bubble heat map with size and color attributes](./bubble-heatmap/#binding-data-for-bubble-heat-map-with-size-and-color-attributes)
