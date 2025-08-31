---
layout: post
title: Column reorder in Angular TreeGrid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column reorder 
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in Angular TreeGrid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component allows reordering columns by drag and drop of a particular column header from one index to another index within the TreeGrid. This feature can be enabled by injecting the **ReorderService** in the provider section of **AppModule**.

To reorder the columns, set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowreordering) property to **true** in the TreeGrid.

The following example demonstrates column reordering in the TreeGrid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/reorder-cs1" %}

>* The appearance of the column headers during drag and drop can be customized using the [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndrag) and [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndrop) events.
>* When columns are reordered, the position of the corresponding column data will also be changed. Ensure that any additional code or logic that relies on the order of the column data is updated accordingly.

## Prevent reordering for particular column

By default, all columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid can be reordered by dragging and dropping their headers to another location within the TreeGrid. However, certain columns may need to be prevented from reordering. In such cases, set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowreordering) property of that particular column to **false**.

The following example demonstrates how to prevent reordering for a specific column:

In this example, the **startDate** column is prevented from being reordered by setting the `allowReordering` property to **false**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/reorder-cs2" %}

## Reorder columns externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid allows external column reordering, which means columns can be programmatically moved within the TreeGrid based on their index, target index, or field name using methods.

> When reordering columns externally, the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowreordering) property of the TreeGrid must be set to **true**.

### Reorder column based on index

The [reorderColumnByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#reordercolumnbyindex) method of the grid object via the TreeGrid instance can be used to reorder columns according to their current index. This method takes two arguments:

* **fromIndex** : Current index of the column to be reordered
* **toIndex** : New index of the column after the reordering

The following example demonstrates how to use the `reorderColumnByIndex` method:

In this example, the column at index **1** is moved to index **3**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/reorder-cs3" %}

### Reorder column based on field names

The [reorderColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#reordercolumns) method of the TreeGrid allows reordering single column or list of columns based on their field names. This method takes two arguments: 

* **fromFName**: The field name of the column to be moved.
* **toFName**: The field name of the column to which the column should be moved.

The following example demonstrates how to use the `reorderColumns` method to reorder single column and multiple columns based on field names:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/reorder-cs5" %}

### Reorder column based on target index

The [reorderColumnByTargetIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#reordercolumnbytargetindex) method can be used to reorder single column or multiple columns based on the target index. This method takes two arguments:

* **fieldName**: Field name of the column to be reordered
* **toIndex**: New index of the column after the reordering

The following example demonstrates how to use the `reorderColumnByTargetIndex` method to reorder single column and multiple columns based on target index:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/reorder-cs4" %}

## Reorder events

When reordering columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component, specific actions can be taken in response to the drag and drop events. To handle these events, event handlers can be defined for the following events:

1. The [columnDragStart](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndragstart) event triggers when column header element drag (move) starts.

2. The [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndrag) event triggers when column header element is dragged (moved) continuously.

3. The [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndrop) event triggers when a column header element is dropped on the target column.

The following example demonstrates the implementation of `columnDragStart`, `columnDrag`, and `columnDrop` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs6/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/treegrid/reorder-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/treegrid/reorder-cs6" %}