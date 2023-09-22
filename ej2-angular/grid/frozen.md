---
layout: post
title: Frozen in Angular Grid component | Syncfusion
description: Learn here all about Frozen in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Frozen 
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in Angular Grid component

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the grid while scrolling.

In this demo, the [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) is set as **2** and the [`frozenRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozenrows) is set as **3**. Hence, the left two columns and top three rows are frozen.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/frozenrows-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozenrows-cs1" %}

> * Frozen rows and columns should not be set outside the grid view port.
> * Frozen Grid will support row and column virtualization feature, which helps to improve the Grid performance while loading a large dataset.

## Limitations of Frozen Grid

The following features are not supported in frozen rows and columns:

* Detail Template
* Hierarchy Grid

## Freeze Direction

You can freeze the Grid columns on the left or right side by using the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) value.

Types of the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.
* **`Fixed`**: Allows you to lock the column at a fixed position by ensuring its visibility during horizontal scroll.

In this demo, the **ShipCountry** column is frozen at the left and the **CustomerID** column is frozen at the right side of the content table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/frozenrows-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozenrows-cs2" %}

> * Freeze Direction is not compatible with the [`isFrozen`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) and [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) properties.

## Deprecated Methods

Deprecated Methods | Previous | Current | Suggested Alternative Methods | Example for achieving the same results
 ---  | --- | --- | ---  | --- 
`getMovableRows()` | In the previous architecture of frozen grid, three separate tables were created for the left, right, and movable contents. When calling this method, it would return only the movable table rows (tr's). | In the current architecture, the frozen left, right, and movable sections are applied within a single table. When calling this method, it will return all table rows (tr's) of the entire table. However, in this approach, we have introduced the `e-unfreeze` class for movable cells. This allows us to selectively retrieve the movable rows using the `e-unfreeze` class selector. | `getRows()` | gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze')  // Deprecated <br><br> (or) <br><br> gridInstance.getRows()[0].querySelectorAll('.e-unfreeze')  // Alternative method
`getFrozenRightRows()` | In the previous architecture, this method would return only the table rows (tr's) from the freeze right table. | In the current architecture, the frozen left, right, and movable sections are applied within a single table. When calling this method, it will return all the rows (tr’s) of the entire table. In this new approach, we have introduced the `e-rightfreeze` class for right freeze cells. As a result, you can now selectively retrieve the right freeze rows using the `e-rightfreeze` class selector. | `getRows()` | gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze')  // Deprecated <br><br> (or) <br><br> gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze')  // Alternative method
`getMovableRowByIndex()` <br> `getFrozenRowByIndex()` <br> `getFrozenRightRowByIndex()` | In the previous architecture, you could select rows by using separate methods for each table section. Like, <br> * `getMovableRowByIndex` - select a movable row <br> * `getFrozenRowByIndex` - select a freeze row  <br> * `getFrozenRightRowByIndex` - select a right freeze row. | In the current architecture, the `getMovableRowByIndex`, `getFrozenRightRowByIndex` and `getFrozenRowByIndex` methods all return the same table row (tr) based on the given index. Additionally, class names for table cells (td's) have been separated as follows: <br> * Left-Freeze : `e-leftfreeze` <br> * Movable : `e-unfreeze` <br> * Right-Freeze : `e-rightfreeze`.<br>This separation of class names makes it easier to target and customize the cells within the particular row.   | `getRowByIndex()` | **To get the left freeze cells:** <br> gridInstance.getRowByIndex(1).querySelectorAll('.e-leftfreeze') <br><br> **To get the movable cells:** <br> gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze') <br><br> **To get the right freeze cells:** <br> gridInstance.getRowByIndex(1).querySelectorAll('.e-rightfreeze')
`getMovableCellFromIndex()` <br> `getFrozenRightCellFromIndex()` |  * `getMovableCellFromIndex()` - select a particular cell in the movable table. <br> * `getFrozenRightCellFromIndex()` - select a particular cell in the right freeze table.| In the new approach, you can select a particular cell by using both the `getFrozenRightCellFromIndex` and `getMovableCellFromIndex` methods.| `getCellFromIndex()` |gridInstance.getCellFromIndex(1,1)
`getMovableDataRows()` <br> `getFrozenRightDataRows()` <br> `getFrozenDataRows()` | These methods returns the viewport data rows for the freeze, movable, and right tables separately. | In the new approach, when calling the `getMovableDataRows`, `getFrozenRightDataRows`, and `getFrozenDataRows` methods, returns the entire viewport data rows. You can then select specific cells within these rows using the following selectors <br> * Left-Freeze : `e-leftfreeze` <br> * Movable : `e-unfreeze` <br> * Right-Freeze : `e-rightfreeze`.| `getDataRows()` | **To get the movable data cells:** <br> gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze') <br><br> **To get the right freeze data cells:** <br> gridInstance.getDataRows()[0].querySelectorAll('.e-rightfreeze') <br><br> **To get the left freeze data cells:** <br> gridInstance.getDataRows()[0].querySelectorAll('.e-leftfreeze')
`getMovableColumnHeaderByIndex()` <br> `getFrozenRightColumnHeaderByIndex()` <br> `getFrozenLeftColumnHeaderByIndex()` | In the previous architecture, these methods selects the movable, right freeze, and left freeze headers from the table separately. | In the new approach, when calling the `getMovableColumnHeaderByIndex`, `getFrozenRightColumnHeaderByIndex`, and `getFrozenLeftColumnHeaderByIndex` methods, you will still receive the same results as before. | `getColumnHeaderByIndex`() | gridInstance.getColumnHeaderByIndex(1)

> When a validation message is displayed in the frozen part (Left, Right, Fixed) of the table, scrolling is prevented until the validation message is cleared.