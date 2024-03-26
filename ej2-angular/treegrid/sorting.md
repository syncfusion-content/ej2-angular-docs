---
layout: post
title: Sorting in Angular TreeGrid component | Syncfusion
description: Learn here all about Sorting in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular TreeGrid component

The TreeGrid component provides built-in support for sorting data-bound columns in ascending or descending order. To enable sorting in the tree grid, set the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowsorting) property to **true**.

In the TreeGrid component, sorting follows a specific order to maintain the hierarchical structure of the data. When sorting is performed, the parent records from all rows are sorted initially. Following this, the child records within each parent are sorted internally based on the specified sorting order. This sorting process occurs within the hierarchy order once the parent records are sorted.

This behavior ensures that the hierarchical relationship between parent and child records is preserved, and child records are sorted relative to their respective parent records. 

To sort a particular column in the tree grid, click on its column header. Each time you click the header, the order of the column will switch between **Ascending** and **Descending**.

To use the sorting feature, you need to inject the **SortService** in the provider section of **AppModule**.

The following demo illustrates how to enable sorting in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs1" %}

## Initial sorting

By default, the TreeGrid component does not apply any sorting to its records at initial rendering. However, you can apply initial sorting by setting the [sortSettings.columns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/sortSettings/#columns) property to the desired [field](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#field) and sort [direction](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#direction). This feature is helpful when you want to display your data in a specific order when the tree grid is first loaded.

The following example demonstrates how to set `sortSettings.columns` for **Category** and **orderName** columns with a specified `direction`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs2" %}

> The initial sorting defined in `sortSettings.columns` will override any sorting applied through interaction.

## Multi-column sorting

The TreeGrid component allows to sort more than one column at a time using multi-column sorting. To enable multi-column sorting in the tree grid, set the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowsorting) property to **true**, and set the [allowMultiSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowmultisorting) property to **true** which enable to sort multiple columns by hold the **CTRL** key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

To clear multi-column sorting for a particular column, press the "Shift + mouse left click".

> * The `allowSorting` must be true while enabling multi-column sort.
> * Set `allowMultiSorting` property as **false** to disable multi-column sorting.

The following demo illustrates how to enable multi-column sorting in the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs3/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs3" %}

### Sort multiple columns without holding the CTRL key

You can perform multiple columns sorting without holding the CTRL key in the tree grid. This action can be achieved by enabling the `enableSortMultiTouch` property of the Sort module of the grid object, which can be accessed using the tree grid instance. This `enableSortMultiTouch` property can be enabled within the [created](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#created) event of the tree grid. 

The following example demonstrates how to enable the `enableSortMultiTouch` property inside the tree grid's `created` event:

{% tabs %}   
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs4/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs4" %}

## Prevent sorting for particular column

The TreeGrid component provides the ability to prevent sorting for a particular column. This can be useful when you have certain columns that you do not want to be included in the sorting process. 

It can be achieved by setting the [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowsorting) property of the particular column to **false**.  

The following example demonstrates, how to disable sorting for **orderName** column.

{% tabs %}   
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs6/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs6/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs6" %}

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

## Custom sorting 

The TreeGrid component provides a way to customize the default sort action for a column by defining the [column.sortComparer](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#sortcomparer) property. The sort comparer function works similar to the [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) comparer function, and allows to define custom sorting logic for a specific column.

In the following example, the custom sort comparer function was defined in the **orderName** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs7/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs7/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs7" %}

> The customSortComparer function takes two parameters: a and b. The a and b parameters are the values to be compared. The function returns -1, 0, or 1, depending on the comparison result.

## Touch interaction

When you tap tree grid header on touch screen devices, then the selected column header is sorted and display a popup ![Sorting](images/sorting.jpg) for multi-column sorting, tap on the popup to sort multiple columns ![Multi Sorting](images/msorting.jpg) and then tap the desired tree grid headers.

> The [allowMultiSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowmultisorting) and [allowSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowsorting) should be **true** then only the popup will be shown.

The following screenshot represents a tree grid touch sorting in the device.

<!-- markdownlint-disable MD033 -->
<img src="images/touch-sorting.jpg" alt="Touch interaction image" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

## Perform sorting based on its culture

Sorting based on culture in the tree grid can be achieved by utilizing the [locale](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#locale) property. By setting the `locale` property to the desired culture code, you enable sorting based on that specific culture. This allows you to apply locale-specific sorting rules and ensure accurate ordering for different languages and regions.

In the following example, sorting is performed based on the **"ar"** locale using the [column.sortComparer](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#sortcomparer) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs8/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs8/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs8" %}

## Customize sort icon

To customize the sort icon in the tree grid, you can override the default tree grid classes **.e-icon-ascending** and **.e-icon-descending** with custom content using CSS. Simply specify the desired icons or symbols using the **content** property as mentioned below

```css
.e-treegrid .e-icon-ascending::before {
  content: '\e306';
}
	
.e-treegrid .e-icon-descending::before {
  content: '\e304';
}
```
In the below sample, tree grid is rendered with a customized sort icon.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs9/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="sorting_style.css" %}
{% include code-snippet/treegrid/sorting-cs9/sorting_style.css %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs9/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs9" %}

## Sort columns externally

The TreeGrid component in Syncfusion's Angular suite allows you to customize the sorting of columns and provides flexibility in sorting based on external interactions. You can sort columns, remove a sort column, and clear sorting using an external button click.

### Add sort columns

To sort a column externally, you can utilize the [sortByColumn](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#sortbycolumn) method with parameters **columnName**, **direction** and **isMultiSort** provided by the TreeGrid component. This method allows you to programmatically sort a specific column based on your requirements.

The following example demonstrates how to add sort columns to a tree grid. It utilizes the **DropDownList** component to select the column and sort direction. When an external button is clicked, the `sortByColumn` method is called with the specified **columnName**, **direction**, and **isMultiSort** parameters. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs10" %}

### Remove sort columns

To remove a sort column externally, you can use the `removeSortColumn` method provided by the TreeGrid component. This method allows you to remove the sorting applied to a specific column.

The following example demonstrates how to remove sort columns. It utilizes the **DropDownList** component to select the column. When an external button is clicked, the `removeSortColumn` method is called to remove the selected sort column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs11" %}

### Clear sorting 

To clear the sorting on an external button click, you can use the [clearSorting](https://ej2.syncfusion.com/angular/documentation/api/treegrid#clearsorting) method provided by the TreeGrid component. This method clears the sorting applied to all columns in the tree grid. 

The following example demonstrates how to clear the sorting using `clearSorting` method in the external button click.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
	  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs12" %}

## Sorting events

The TreeGrid component provides two events that are triggered during the sorting action such as [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#actioncomplete). These events can be used to perform any custom actions before and after the sorting action is completed.

1. **actionBegin**: `actionBegin` event is triggered before the sorting action begins. It provides a way to perform any necessary operations before the sorting action takes place. This event provides a parameter that contains the current tree grid state, including the current sorting column, direction, and data.

2. **actionComplete**: `actionComplete` event is triggered after the sorting action is completed. It provides a way to perform any necessary operations after the sorting action has taken place. This event provides a parameter that contains the current tree grid state, including the sorted data and column information.

The following example demonstrates how the `actionBegin` and `actionComplete` events work when sorting is performed. The `actionBegin` event is used to cancel the sorting of the Category column. The `actionComplete` event is used to display a message.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/sorting-cs13/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/sorting-cs13/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/sorting-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/sorting-cs13" %}

> [args.requestType](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) refers to the current action being performed. For example in sorting, the `args.requestType` value is **sorting**.