---
layout: post
title: Column reorder in Angular Gantt component | Syncfusion
description: Learn here all about Column reorder in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column reorder
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in Angular Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component allows to reorder columns by drag and drop of a particular column header from one index to another index within the gantt chart. This feature can be enabled by injecting the **ReorderService** in the provider section of your **AppModule**.

To reorder the columns, set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowreordering) property to **true** in the gantt chart.

Here's an example for column reordering in your Gantt chart component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs1" %}

>* You can customize the appearance of the column headers during drag and drop by using the [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrag) and [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrop) events.
>* When columns are reordered, the position of the corresponding column data will also be changed. As a result, you should ensure that any additional code or logic that relies on the order of the column data is updated accordingly.

## Prevent reordering for particular column

By default, all columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart can be reordered by dragging and dropping their headers to another location within the gantt. However, there may be certain columns that you do not want to be reordered. In such cases, you can set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowreordering) property of that particular column to **false**. Here is an example that demonstrates how to prevent reordering for a specific column:

In this example, the **TaskName** column is prevented from being reordered by setting the `allowReordering` property to **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs2" %}

## Reorder columns externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart allows you to reorder columns externally, which means that using methods you can programmatically move columns around within the gantt chart, based on their index or target index, or by using their field name.

> When reordering columns externally, you must set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowreordering) property of the gantt column to **true**.

### Reorder column based on field names

The [reorderColumns](https://helpej2.syncfusion.com/angular/documentation/api/gantt/#reordercolumns) method of the Gantt chart allows you to reorder single column or list of columns based on their field names. This method takes two arguments: 

* **fromFName**: The field name of the column you want to move.
* **toFName**: The field name of the column you want to move the column to.

Here is an example of how to use the `reorderColumns` method to reorder single column and multiple columns based on field names:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs3" %}

### Reorder column based on index

You can use the [reorderColumnByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#reordercolumnbyindex) method of grid object in gantt instance to reorder columns based on their current index. This method takes two arguments:

* **fromIndex** : Current index of the column to be reordered
* **toIndex** : New index of the column after the reordering

Here is an example of how to use the `reorderColumnByIndex` method:

In this example, we are moving the column at index **1** to index **3**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs5" %}

### Reorder column based on target index

You can also use the [reorderColumnByTargetIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#reordercolumnbytargetindex) method of grid object in gantt instance to reorder single column or multiple columns based on the target index. This method takes two arguments:

* **fieldName**: Field name of the column to be reordered
* **toIndex**: New index of the column after the reordering

Here is an example of how to use the `reorderColumnByTargetIndex` method to reorder single column and multiple columns based on target index:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs6" %}

## Reorder events

When reordering columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component, you may want to take some specific action in response to the drag and drop events. To handle these events, you can define event handlers for the following events:

1.The [columnDragStart](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndragstart) event triggers when column header element drag (move) starts.

2.The [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrag) event triggers when column header element is dragged (moved) continuously.

3.The [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrop) event triggers when a column header element is dropped on the target column.

In the following example, we have implemented the `columnDragStart`, `columnDrag`, and `columnDrop` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> Gantt chart component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs4" %}