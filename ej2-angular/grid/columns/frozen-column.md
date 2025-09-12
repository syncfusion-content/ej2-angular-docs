---
layout: post
title: Column pinning (Frozen) in Angular Grid Component | Syncfusion
description: Learn here all about Column pinning (Frozen) in Syncfusion Angular Grid Component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column pinning (Frozen) 
documentation: ug
domainurl: ##DomainURL##
---

# Column Pinning (Frozen) in Angular Grid Component

The Syncfusion Angular Grid component enables pinning (freezing) columns to lock them in place on the left, right, or a fixed position, ensuring they remain visible during horizontal scrolling. This feature ensures that essential data, such as identifiers or action buttons, remains accessible while navigating large datasets.

> Frozen columns require careful configuration to avoid rendering issues. Ensure they are within the grid’s viewport and test rendering across different screen sizes for responsiveness.

## Freeze multiple columns

The Syncfusion Angular Grid allows freezing multiple columns using the [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) property, which specifies the number of columns to freeze on the left side. This ensures that the specified columns remain fixed while the remaining columns can be scrolled horizontally.

The following example sets the [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) property to **2**, freezing the first two columns on the left side of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs1" %}

> * Frozen columns must not be set outside the grid’s viewport.
> * The Grid supports column virtualization with frozen columns, improving performance for large datasets.
> * Frozen columns are supported only for columns visible in the current view.
> * Both [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) and [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozenrows) properties can be used together.
> * When column virtualization and frozen columns are enabled, horizontal scrolling via touchpad gestures (e.g., two-finger swipe) is not supported. Use the horizontal scrollbar instead.

## Freeze particular columns

The Syncfusion Angular Grid allows freezing specific columns using the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) property, enabling selected columns to remain fixed on the left side while others scroll horizontally. Unlike the [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) property, which freezes columns in their initial order, `isFrozen` provides flexibility to freeze columns at any index.

To freeze a particular column in the grid, you can utilize the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) property of the grid component as **true**.

The following example demonstrates freezing a specific column using the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) property, controlled via the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the DropDownList component. The [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnbyfield) method retrieves the column, and the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) method updates the grid. For large datasets, minimize frequent calls to `refreshColumns` to optimize performance.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs3" %}

## Freeze direction

In the Syncfusion Angular Grid, the "freeze direction" feature serves to reposition frozen columns either to the left, right, or in a fixed position, while still allowing the remaining columns to be horizontally movable. This feature is designed to optimize user experience by ensuring that critical information remains visible even during horizontal scrolling. By default, when you set the `frozenColumns` property of the grid or the `isFrozen` property of individual columns, it results in freezing those columns on the left side of the grid. This helps in keeping important data readily accessible as you navigate through your dataset.

To achieve this, you can utilize the [column.freeze](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) property. This property is used to specify the freeze direction for individual columns. The grid will adjust the column positions based on the `column.freeze` value.

The types of the `column.freeze` directions:

* **Left**: When you set the `column.freeze` property to **Left**, specific columns will be frozen on the left side of the grid. The remaining columns will be movable.

* **Right**: When you set the `column.freeze` property to **Right**, certain columns will be frozen on the right side of the grid, while the rest of the columns remain movable.

* **Fixed**: The Fixed direction locks a column at a fixed position within the grid. This ensures that the column is always visible during horizontal scroll.

In the following example, the **ShipCountry** column is frozen on the left side, the **CustomerID** column is frozen on the right side and the **Freight** column is frozen on the fixed of the content table. Additionally, you can modify the `column.freeze` property to **Left**, **Right** and **Fixed** based on the selected column by utilizing the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the `DropDownList` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs2" %}

> * Freeze Direction is not compatible with the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) properties.

## Change default frozen line color

You can customize the frozen line borders of frozen columns in the Syncfusion Grid component by applying custom CSS styles to the specific frozen column. This allows you to change the border color of the left frozen columns, right frozen columns, and fixed frozen columns to match your application's design and theme.

To change default frozen line color, use the following class name and apply the border color based on your requirement.

For left frozen columns: 

```css
.e-grid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(198, 30, 204);
}
```
For right frozen columns:

```css
.e-grid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(19, 228, 243);
}
```
For fixed frozen columns, you need to specify both left and right border as mentioned below

```css
.e-grid .e-fixedfreeze.e-freezeleftborder{
    border-left-color: rgb(9, 209, 9); 
}

.e-grid .e-fixedfreeze.e-freezerightborder{
    border-right-color: rgb(10, 224, 10);
}
```
The following example demonstrates how to change the default frozen line color using CSS.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs4" %}

## Render DatePicker in frozen columns

The Syncfusion Angular Grid supports rendering a [DatePicker](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/datepicker/default) component within frozen columns during editing. This is achieved using the [edit](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#edit) property, which defines custom `create`, `write`, `read`, and `destroy` methods to manage the DatePicker’s lifecycle. These methods handle initialization, value setting, value retrieval, and cleanup, respectively.

To enable editing, configure the [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/#editsettings) property (e.g., `{ allowEditing: true, mode: 'Normal' }`). Refer to the [editSettings documentation](https://ej2.syncfusion.com/angular/documentation/api/grid/#editsettings) for details.

The following example renders a DatePicker in the **OrderDate** column, which is frozen, by appending the DatePicker to the input element in the editing row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs5" %}

## Deprecated methods

Previous | Current | Explanation 
 ---  | --- | --- 
`getMovableRows()` gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-unfreeze') | The previous architecture used separate tables for left, right, and movable contents, returning only movable rows when calling the method, whereas the current architecture combines them into one table, returning all rows and introduces the `e-unfreeze` class for selecting movable rows
`getFrozenRightRows()` gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze') | In the previous architecture, it returned only the table rows from the right freeze table, but in the current architecture, all rows of the entire table are returned, introducing the `e-rightfreeze` class for selecting right freeze rows. 
`getMovableRowByIndex()` <br> `getFrozenRowByIndex()` <br> `getFrozenRightRowByIndex()` | `getRowByIndex()` gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze') | In the previous architecture, separate methods were used to select rows from different table sections, while in the current architecture, the `getMovableRowByIndex()`, `getFrozenRightRowByIndex()`, and `getFrozenRowByIndex()` methods now return the same table row based on the given index. Additionally, class names for table cells (td's) have been separated into `e-leftfreeze`, `e-unfreeze`, and `e-rightfreeze`, making it easier to customize cells within a row.
`getMovableCellFromIndex()` <br> `getFrozenRightCellFromIndex()` | `getCellFromIndex()` gridInstance.getCellFromIndex(1,1) | In the previous approach, the `getMovableCellFromIndex()` method was used to choose a specific cell within the movable table, and the `getFrozenRightCellFromIndex()` method was utilized to target a particular cell within the right freeze table. However, in the current architecture, you have the flexibility to select a specific cell in either the movable or right freeze table by using both the `getFrozenRightCellFromIndex()` and `getMovableCellFromIndex()` methods. This new method simplifies the process of selecting and retrieving specific cells within these tables, offering more versatility and convenience.
`getMovableDataRows()` <br> `getFrozenRightDataRows()` <br> `getFrozenDataRows()` | `getDataRows()` gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze') | In the previous approach, there were separate methods (`getMovableDataRows()`, `getFrozenRightDataRows()`, and `getFrozenDataRows()`) for obtaining viewport data rows from the freeze, movable, and right tables individually. However, in the new approach, these methods have been enhanced to return the entire viewport data rows for all sections together, simplifying data retrieval. You can now extract specific cells within these rows using selectors such as `e-leftfreeze` for the **left freeze**, `e-unfreeze` for the **movable**, and `e-rightfreeze` for the **right freeze** tables, providing greater flexibility in working with the data.
`getMovableColumnHeaderByIndex()` <br> `getFrozenRightColumnHeaderByIndex()` <br> `getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` gridInstance.getColumnHeaderByIndex(1) | In the previous architecture, the methods selected movable, right freeze, and left freeze headers separately. However, in the new approach, when using the `getMovableColumnHeaderByIndex()`, `getFrozenRightColumnHeaderByIndex()`, and `getFrozenLeftColumnHeaderByIndex()` methods, you will still obtain the same results as in the previous architecture.

> When a validation message is displayed in the frozen part (Left, Right, Fixed) of the table, scrolling is prevented until the validation message is cleared.

## Limitations

While freezing columns in the Syncfusion Angular Grid provides enhanced visibility and scrolling capabilities, there are certain limitations to consider. The following features are not supported when using frozen columns:

* Detail Template
* Hierarchy Grid
* Autofill