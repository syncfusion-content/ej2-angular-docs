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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt chart component supports column reordering by dragging a column header to a new position. 

To enable this feature, inject `ReorderService` in the provider section and set [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowreordering)  to **true** in the Gantt configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs1" %}

> You can modify the appearance of column headers during drag-and-drop using the [columnDrag](https://ej2.syncfusion.com/angular/documentation/gantt/events#columndrag) and [columnDrop](https://ej2.syncfusion.com/angular/documentation/gantt/events#columndrop) events.
> After columns are reordered, their data positions also change. Ensure any dependent logic is updated to reflect the new column order.

## Prevent reordering for particular column

In Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt, columns are reorderable by default. To restrict reordering for a specific column, set its [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowreordering) property to **false**.  

The following example demonstrates how reordering is restricted for the **TaskName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs2" %}

## Reorder columns externally

You can programmatically reorder columns in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt using available methods based on field names, index, or target index.  

> To perform external column reordering, the column's [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowreordering) property must be enabled.

### Reorder column based on field names

You can reorder columns in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt using the [reorderColumns](https://helpej2.syncfusion.com/angular/documentation/api/gantt/#reordercolumns) method.  This method reorders one or more columns based on their field names by specifying:  

- **fromFName**: The field name of the column to move.  
- **toFName**: The field name of the target column position.

The following demonstrates how to reorder columns by placing **TaskName** to position before **TaskID**, or moving **TaskName**, **StartDate**, **Duration** to position before **TaskID**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs3/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs3" %}

### Reorder column based on index

You can reorder columns in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt using the [reorderColumnByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#reordercolumnbyindex) method of the grid object. This method repositions a column based on its current index and takes two parameters:

- **fromIndex**: Index of the column to move.  
- **toIndex**: Target index to place the column.

The following demonstrates how to reorder the column at index **1** to position **3**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs5/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs5" %}

### Reorder column based on target index

You can reorder single or multiple columns in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt using the [reorderColumnByTargetIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#reordercolumnbytargetindex) method of the grid object.  This method reorders columns based on their field names and the target index. It takes two parameters:  
  
- **fieldName**: The field name of the column to move. 
- **toIndex**: The index where the column should be placed.

The following demonstrates how to reorder a single column `'TaskID'` to index **3**, or move multiple columns `'TaskID', 'TaskName'` to index **3**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs6/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs6" %}

## Customize reorder action

You can customize the column reorder behavior in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt using the [columnDragStart](https://ej2.syncfusion.com/angular/documentation/gantt/events#columndragstart), [columnDrag](https://ej2.syncfusion.com/angular/documentation/gantt/events#columndrag), and [columnDrop](https://ej2.syncfusion.com/angular/documentation/gantt/events#columndrop) events.  These events provide control over each stage of the column drag-and-drop process, allowing for custom logic or restrictions.

The following demonstrates how to handle specific fields during column reordering:  
- Cancel `columnDrop` for the **TaskID** field.  
- Cancel `columnDrag` for the **Duration** field.  
- Change header text for the **TaskName** field during the `columnDragStart` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnreorder-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnreorder-cs4" %}