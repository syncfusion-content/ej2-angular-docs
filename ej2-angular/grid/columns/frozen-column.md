---
layout: post
title: Angular Grid - Frozen Column | Syncfusion
description: Angular Grid frozen column keeps key fields visible while scrolling, offering flexible configuration to sync with scrollable content.
platform: ej2-angular
control: Column pinning (Frozen) 
documentation: ug
domainurl: ##DomainURL##
---

# Column Pinning (Frozen) in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component enables pinning (freezing) columns to lock them in place on the left, right, or a fixed position, ensuring they remain visible during horizontal scrolling. This feature ensures that essential data, such as identifiers or action buttons, remains accessible while navigating large datasets.

> Frozen columns require careful configuration to avoid rendering issues. Ensure they are within the grid’s viewport and test rendering across different screen sizes for responsiveness.

## Freeze multiple columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid allows freezing multiple columns using the [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#frozencolumns) property, which specifies the number of columns to freeze on the left side. This ensures that the specified columns remain fixed while the remaining columns can be scrolled horizontally.

The following example sets the [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#frozencolumns) property to "2", freezing the first two columns on the left side of the grid.

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
> * Both [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#frozencolumns) and [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/grid#frozenrows) properties can be used together.
> * When column virtualization and frozen columns are enabled, horizontal scrolling via touch pad gestures (e.g., two-finger swipe) is not supported. Use the horizontal scrollbar instead.

## Freeze particular columns

The Grid provides a straightforward way to freeze individual columns on the left side using the [`isFrozen`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isfrozen) property in the column definition. When this property is set to `true`, the chosen column is locked at the leftmost position of the Grid and remains visible while scrolling horizontally.


The following example demonstrates freezing a particular column using the `isFrozen` property. Initially, the "OrderID" column is frozen. The [`change`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event of the [`DropDownList`](https://ej2.syncfusion.com/angular/demos/#bootstrap5/drop-down-list/default) component allows dynamically changing which column is frozen. The selected column's `isFrozen` property is modified using the [`getColumnByField`](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnbyfield) method, and the [`refreshColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method updates the display.

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

The Grid supports different freeze directions, which determine where frozen columns appear. By setting the [`freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#freeze) property in a column definition, columns can be pinned to the left, right, or fixed in place. This makes it easy to keep important columns visible while scrolling and gives flexibility when designing grids with multiple frozen sections.

The Grid supports three freeze direction types:

| Direction | Description | Behavior |
|-----------|-------------|----------|
| `Left` | Freezes columns on the left side | Frozen columns remain fixed on the left while other columns scroll horizontally |
| `Right` | Freezes columns on the right side | Frozen columns remain fixed on the right while other columns scroll horizontally |
| `Fixed` | Locks columns at a specific position | Frozen columns stay fixed in their position, creating a locked section between scrollable areas

In the following example, the "ShipCountry" column is frozen on the left side, the "CustomerID" column is frozen on the right side and the "Freight" column is frozen on the fixed of the content table. Additionally, the `column.freeze` property to `Left`, `Right` and `Fixed` based on the selected column by utilizing the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event of the `DropDownList` component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs2" %}

> * Freeze Direction is not compatible with the [isFrozen](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#frozencolumns) properties.

## Customize frozen line color

The visual separator between frozen and scrollable columns (the "frozen line") can be customized to match application design requirements. Custom CSS styles can be applied to change the border color for left, right, and fixed frozen columns. The Grid applies specific CSS classes to frozen column borders based on their freeze direction. These classes can be targeted to customize the frozen line appearance.

**For left frozen columns:**

```css
.e-grid .e-leftfreeze.e-freezeleftborder {
    border-right-color: rgb(198, 30, 204);
}
```
**For right frozen columns:**

```css
.e-grid .e-rightfreeze.e-freezerightborder {
    border-left-color: rgb(19, 228, 243);
}
```
**For fixed frozen columns:**

Specify both left and right borders:


```css
.e-grid .e-fixedfreeze.e-freezeleftborder{
    border-left-color: rgb(9, 209, 9); 
}

.e-grid .e-fixedfreeze.e-freezerightborder{
    border-right-color: rgb(10, 224, 10);
}
```
The following example demonstrates changing the default frozen line color using CSS.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozencolumns-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozencolumns-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozencolumns-cs4" %}

## Render custom editors in frozen columns

Custom edit controls, such as a [DatePicker](https://ej2.syncfusion.com/angular/demos/#bootstrap5/datepicker/default), can be rendered inside frozen columns during editing. This is achieved using the [edit](https://ej2.syncfusion.com/angular/documentation/api/grid/column#edit) property of the column definition, which accepts an object with custom editor methods.

**Custom editor methods:**

| Method | Description | Purpose |
|--------|-------------|---------|
| `create` | Creates and returns the editor element | Initializes the custom editor control (e.g., DatePicker) |
| `read` | Retrieves the value from the editor | Extracts the current value from the editor when saving |
| `write` | Writes the value to the editor | Sets the initial or updated value in the editor |
| `destroy` | Destroys the editor instance | Cleans up resources when editing is complete |

The following example demonstrates rendering a DatePicker component in the frozen "OrderDate" column. The DatePicker allows date selection during edit mode and properly integrates with the grid's editing life cycle.
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

The Grid's frozen column implementation has evolved to use a unified table architecture instead of separate tables for different freeze sections. This change improves performance and simplifies the API. The following methods from the previous architecture are now deprecated in favor of new methods with CSS class-based selectors.

| Deprecated Method | Current Method | Explanation |
|-------------------|----------------|-------------|
| `getMovableRows()` | `getRows()` with CSS selector | **Previous:** `gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze')`<br>**Current:** `gridInstance.getRows()[0].querySelectorAll('.e-unfreeze')`<br><br>The previous architecture used separate tables for left, right, and movable contents, returning only movable rows. The current architecture combines them into one table, returning all rows. Use the `e-unfreeze` class to select movable (non-frozen) rows. |
| `getFrozenRightRows()` | `getRows()` with CSS selector | **Previous:** `gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze')`<br>**Current:** `gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze')`<br><br>The previous architecture returned only rows from the right freeze table. The current architecture returns all rows. Use the `e-rightfreeze` class to select right-frozen rows. |
| `getMovableRowByIndex()`<br>`getFrozenRowByIndex()`<br>`getFrozenRightRowByIndex()` | `getRowByIndex()` with CSS selector | **Previous:** Three separate methods for different table sections<br>**Current:** `gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze')`<br><br>The current architecture methods return the same table row based on the given index. Use CSS class selectors to target specific cell types:<br>• `e-leftfreeze` - Left-frozen cells<br>• `e-unfreeze` - Movable cells<br>• `e-rightfreeze` - Right-frozen cells |
| `getMovableCellFromIndex()`<br>`getFrozenRightCellFromIndex()` | `getCellFromIndex()` | **Previous:** Separate methods for movable and right-frozen cells<br>**Current:** `gridInstance.getCellFromIndex(1, 1)`<br><br>The current architecture allows selecting any cell using a single method, simplifying cell selection and retrieval regardless of freeze status. |
| `getMovableDataRows()`<br>`getFrozenRightDataRows()`<br>`getFrozenDataRows()` | `getDataRows()` with CSS selector | **Previous:** Separate methods for each table section<br>**Current:** `gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze')`<br><br>The current approach returns entire viewport data rows for all sections together. Extract specific cells using:<br>• `e-leftfreeze` - Left-frozen cells<br>• `e-unfreeze` - Movable cells<br>• `e-rightfreeze` - Right-frozen cells |
| `getMovableColumnHeaderByIndex()`<br>`getFrozenRightColumnHeaderByIndex()`<br>`getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` | **Previous:** Separate methods for each header section<br>**Current:** `gridInstance.getColumnHeaderByIndex(1)`<br><br>The current approach returns the same results but through a unified method that works across all freeze sections. |

> When a validation message is displayed in the frozen part (Left, Right, Fixed) of the table, scrolling is prevented until the validation message is cleared.

## Limitations

The following features are not supported when using frozen columns:

* Detail Template
* Hierarchy Grid
* Autofill