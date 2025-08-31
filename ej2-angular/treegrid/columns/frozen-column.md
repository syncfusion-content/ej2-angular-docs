---
layout: post
title: Column pinning (Frozen) in Angular TreeGrid component | Syncfusion
description: Learn here all about Column pinning (Frozen) in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column pinning (Frozen) 
documentation: ug
domainurl: ##DomainURL##
---

# Column pinning (Frozen) in Angular TreeGrid component

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid component, columns can be **frozen**, ensuring they remain visible while scrolling through extensive datasets. This functionality significantly improves user experience by keeping critical information constantly within view, even when navigating through large volumes of data. Important columns remain fixed in their positions, making it easier to access and reference key data points while working with the TreeGrid.

In the following example, the [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#frozencolumns) property is set to **2**. This configuration freezes the left two columns of the TreeGrid, and they will remain fixed in their positions while the rest of the TreeGrid columns can be scrolled horizontally.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/frozencolumns-cs1" %}

> * Frozen columns should not be set outside the TreeGrid viewport.
> * Frozen TreeGrid supports column virtualization feature, which helps to improve the TreeGrid performance while loading a large dataset.
> * The frozen feature is supported only for the columns that are visible in the current view.
> * Both `frozenColumns` property and [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#frozenrows) property can be used in the same application.

## Freeze particular columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid provides a feature that enables freezing specific columns, significantly enhancing data visibility and improving user experience. This functionality allows selecting particular columns and freezing them by positioning them at the leftmost side of the TreeGrid, ensuring they remain fixed in place while the remaining TreeGrid columns can still be scrolled horizontally. While the `frozenColumns` property freezes columns in the order they are initialized in the TreeGrid, the `isFrozen` property can also be used at the column level to freeze a specific column at any desired index on the left side, offering flexibility in managing which columns are frozen.

To freeze a particular column in the TreeGrid, the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isfrozen) property of the TreeGrid component can be set to **true**.

The following example demonstrates how to freeze particular column in TreeGrid using `isFrozen` property. This is achieved by the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the `DropDownList` component. Within the change event, the `isFrozen` property of the selected column can be modified using the [getColumnByField](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#getcolumnbyfield) method. Afterward, the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#refreshcolumns) method can be used to update the displayed columns based on the interaction.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/frozencolumns-cs2" %}

## Freeze direction

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid, the "freeze direction" feature serves to reposition frozen columns either to the left, right, or in a fixed position, while still allowing the remaining columns to be horizontally movable. This feature is designed to optimize user experience by ensuring that critical information remains visible even during horizontal scrolling. By default, when the `frozenColumns` property of the TreeGrid or the `isFrozen` property of individual columns is set, it results in freezing those columns on the left side of the TreeGrid. This helps in keeping important data readily accessible while navigating through the dataset.

To achieve this, the [column.freeze](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#freeze) property can be utilized. This property is used to specify the freeze direction for individual columns. The TreeGrid will adjust the column positions based on the `column.freeze` value.

The types of the `column.freeze` directions:

* **Left**: When the `column.freeze` property is set to **Left**, specific columns will be frozen on the left side of the TreeGrid. The remaining columns will be movable.

* **Right**: When the `column.freeze` property is set to **Right**, certain columns will be frozen on the right side of the TreeGrid, while the rest of the columns remain movable.

* **Fixed**: The Fixed direction locks a column at a fixed position within the TreeGrid. This ensures that the column is always visible during horizontal scroll.

In the following example, the **taskName** column is frozen on the left side, the **progress** column is frozen on the right side and the **priority** column is frozen on the fixed of the content table. Additionally, the `column.freeze` property can be modified to **Left**, **Right** and **Fixed** based on the selected column by utilizing the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of the `DropDownList` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/frozencolumns-cs3" %}

> * Freeze Direction is not compatible with the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#frozencolumns) properties.

## Change default frozen line color

The frozen line borders of frozen columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid component can be customized by applying custom CSS styles to the specific frozen column. This allows changing the border color of the left frozen columns, right frozen columns, and fixed frozen columns to match the application's design and theme.

To change default frozen line color, use the following class name and apply the border color based on requirements.

For left frozen columns: 

```css
.e-treegrid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(0, 255, 0);
}
```
For right frozen columns:

```css
.e-treegrid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(0, 0, 255) !important;
}
```
For fixed frozen columns, both left and right borders need to be specified as mentioned below:

```css
.e-treegrid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(0, 255, 0);
}

.e-treegrid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(0, 0, 255) !important;
}
```
The following example demonstrates how to change the default frozen line color using CSS:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/frozencolumns-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/frozencolumns-cs4" %}

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

While freezing columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular TreeGrid provides enhanced visibility and scrolling capabilities, there are certain limitations to consider. The following features are not supported when using frozen rows and columns:

* Detail Template
* Row Template
* Cell Editing