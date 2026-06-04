---
layout: post
title: Angular Grid - Row | Syncfusion
description: Angular Grid row covers row-level configuration, events, selection, and behaviors to control presentation, styling, interaction, and customization of grid rows.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Grid Component

Each row typically represents a single record or item from a data source. Rows in a grid are used to present data in a tabular format. Each row displays a set of values representing the fields of an individual data record. Rows allow interaction with the data in the grid. Rows can be selected, edited, sorted, filtered, and configured to trigger events based on actions.

**Key row management features:**
- Dynamic row styling based on data conditions.
- Customizable row heights for optimal content display.
- Interactive hover effects and visual feedback.
- Frozen rows for persistent header information.
- Programmatic row addition, modification, and visibility control.
- Comprehensive row data access and manipulation methods.

## Styling rows 

Customizing the styles of rows in a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid allows modification of row appearance to meet specific design requirements. This feature is useful when highlighting certain rows or changing the font style, background color, and other properties of the row to enhance the visual appeal of the grid. To customize the row styles in the grid, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component provides CSS, properties, methods, and event support.

### Using event

The [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdatabound) event provides the most flexible approach for row styling, triggering for every row during data binding. This event handler receives [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/) containing row details, enabling conditional styling based on data values.

Here's an example of customizing the rows styles based on the value of the "Freight" column using the `rowDataBound` event. This example involves checking the value of the "Freight" column for each row and adding a CSS class to the row based on the value. The CSS classes "below-30", "below-80", and "above-80" can be defined in the stylesheet to apply the desired styles to the rows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-css-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-css-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-css-cs11" %}

> The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#querycellinfo) event provides similar functionality for individual cell customization and can be combined with row-level styling for comprehensive appearance control.

### Using CSS

Row styles can be applied using CSS selectors. The Grid provides a class name for each row element, which can be used to apply styles to that specific row.

**Customize alternate rows**

The appearance of alternate rows can be customized using CSS. This can be useful for improving the readability of the data and making it easier to distinguish between rows. By default, The Grid provides the CSS class `.e-altrow` to style the alternate rows. This default style can be customized by overriding the `.e-altrow` class with custom CSS styles. 

To change the background color of the alternate rows, add the following CSS code to the application's stylesheet:

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

The following example demonstrates using the `.e-altrow` class to style alternate rows:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-style-alt-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-style-alt-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-style-alt-cs1" %}

**Customize selected row**

The appearance of the selected row can be customized using CSS. This is useful when highlighting the currently selected row to improve the visual appeal of the Grid. By default, the Grid provides the CSS class `.e-selectionbackground` to style the selected row. This default style can be customized by overriding the `.e-selectionbackground` class with custom CSS styles.


```css
.e-grid .e-selectionbackground {
    background-color: #f9920b;
}
```

Here's an example of styling the selected row using the `.e-selectionbackground` class:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-style-selected-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-style-selected-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-style-selected-cs1" %}

### Using methods

The Grid provides comprehensive methods for programmatic row styling and manipulation:


| Method | Description |
|--------|-------------|
| [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowbyindex) | Returns the HTML element of a row at the specified index. This method applies custom styles to a specific row. |
| [getRowIndexByPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowindexbyprimarykey) | Returns the index of the row with the specified primary key. This method gets the index of a specific row and applies custom styles to it. |
| [getRows](https://ej2.syncfusion.com/angular/documentation/api/grid#getrows) | Returns an array of all the row elements in the Grid. This method applies custom styles to all rows or to a specific set of rows based on conditions. |
| [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowinfo) | Returns the data object and index of the row corresponding to the specified row element. This method applies custom styles based on the data in a row. |
| [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrowindexes) | Returns an array of the indexes of the selected rows in the Grid. This method applies custom styles to the selected rows. |
| [getSelectedRows](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrows) | Returns an array of the HTML elements representing the selected rows in the grid. This method directly loops through the selected rows and customizes their styles. |

The following example demonstrates customizing the appearance of the row using the [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getcolumnheaderbyindex) method inside the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event of the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-event-cs1" %}

## Row height

The Grid allows customization of the height of rows based on needs. This feature is useful when displaying more content in a row or when reducing the height of rows to fit content. This can be achieved by using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/grid#rowheight) property of the Grid component. This property allows changing the height of the entire grid row to a desired value.

The following example demonstrates dynamically changing the height of the rows using the `rowHeight` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-height-cs1" %}

> * The `rowHeight` property can only be used to set the height of the entire grid row, not individual cells within a row.
> * The `rowHeight` property applies the height to all rows in the grid, including the header and footer rows.
> *	Row-specific height customization requires the `rowDataBound` event approach.

### Customize row height for a specific row

The row height for a particular row can be customized when displaying more content in a particular row, reducing the height of a row to fit content, or making a specific row stand out from the other rows in the grid. This can be achieved by using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/grid#rowheight) property of the Grid component along with the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdatabound) event. This event triggers every time a request is made to access row information, element, or data, and before the row element is appended to the Grid element.

In the following example, the row height for the row with "OrderID" as "10249" is set as '90px' using the `rowDataBound` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-height-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-height-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-height-cs8" %}

> * In virtual scrolling mode, it is not applicable to set different row heights.
> * The row height of multiple rows can be customized by checking the relevant criteria in the `rowDataBound` event and setting the `rowHeight` property accordingly.
> * In the `rowDataBound` event handler, the current row can be accessed using the [args.row](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs#row) property and the `rowHeight` property can be set for that row using the `setAttribute` method.

## Row hover

Row hover functionality provides visual feedback during mouse interaction, enhancing data readability and user experience. The [enableHover](https://ej2.syncfusion.com/documentation/api/grid#enablehover) property controls hover effect availability across the entire Grid.

The following example demonstrates hover effect control through a Switch component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-hover-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-hover-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-hover-cs1" %}

> The `enableHover` property affects the entire Grid and cannot be applied to individual rows or columns.

### Retrieve row information when hovering over a cell

Row information can be retrieved when hovering over a specific cell. This can be useful when displaying additional details or performing some action based on the data in the row. This can be achieved by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdatabound) event and the [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowinfo) method of the Grid.

* The `rowDataBound` event triggers every time a request is made to access row information, element, or data, before the row element is appended to the Grid element.
* The `getRowInfo` method retrieves the row information when hovering over a specific cell. This method takes a single parameter, which is the target element that is being hovered over.

Here's an example that demonstrates retrieving the row information when hovering over a cell using the `rowDataBound` event and `getRowInfo` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-hover-info-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-hover-info-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-hover-info-cs1" %}

>The `getRowInfo` method requires execution within the `rowDataBound` event context for proper functionality.

## Row pinning (Frozen)

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid allows freezing rows to keep them visible while scrolling vertically through large datasets. This feature enhances the experience by maintaining important information within view at all times.

The [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/grid#frozenrows) property in the Angular Grid is used to freeze a specified number of rows at the top of the grid, keeping them fixed while the rest of the content scrolls vertically. 

In the following example, the `frozenRows` property is set to "3". This configuration freezes the top three rows of the grid, and they will remain fixed in their positions while the rest of the grid can be scrolled vertically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozenrows-cs1" %}

> * Frozen rows must remain within the visible viewport area.
> * Row virtualization is supported with frozen rows for enhanced performance.
> * Frozen rows functionality can be combined with frozen columns for complete grid section freezing.

### Frozen row line color customization

Frozen row visual appearance can be customized through CSS styling to match application design requirements. The `.e-frozenrow-border` class provides the styling target for frozen row borders.

```css
.e-grid .e-frozenrow-border {
    background-color: rgb(5, 114, 47);
}
```

The following example demonstrates frozen row border customization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/frozenrows-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/frozenrows-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/frozenrows-cs2" %}

### Deprecated methods

| Previous | Current | Explanation |
 ---  | --- | --- 
`getMovableRows()` gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-unfreeze') | The previous architecture used separate tables for left, right, and movable contents, returning only movable rows when calling the method, whereas the current architecture combines them into one table, returning all rows and introduces the `e-unfreeze` class for selecting movable rows
`getFrozenRightRows()` gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze') | In the previous architecture, it returned only the table rows from the right freeze table, but in the current architecture, all rows of the entire table are returned, introducing the `e-rightfreeze` class for selecting right freeze rows. 
`getMovableRowByIndex()` <br> `getFrozenRowByIndex()` <br> `getFrozenRightRowByIndex()` | `getRowByIndex()` gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze') | In the previous architecture, separate methods were used to select rows from different table sections, while in the current architecture, the `getMovableRowByIndex()`, `getFrozenRightRowByIndex()`, and `getFrozenRowByIndex()` methods now return the same table row based on the given index. Additionally, class names for table cells (td's) have been separated into `e-leftfreeze`, `e-unfreeze`, and `e-rightfreeze`, making it easier to customize cells within a row.
`getMovableCellFromIndex()` <br> `getFrozenRightCellFromIndex()` | `getCellFromIndex()` gridInstance.getCellFromIndex(1,1) | In the previous approach, the `getMovableCellFromIndex()` method was used to choose a specific cell within the movable table, and the `getFrozenRightCellFromIndex()` method was utilized to target a particular cell within the right freeze table. However, in the current architecture, it is possible to select a specific cell in either the movable or right freeze table by using both the `getFrozenRightCellFromIndex()` and `getMovableCellFromIndex()` methods. This new method simplifies the process of selecting and retrieving specific cells within these tables, offering more versatility and convenience.
`getMovableDataRows()` <br> `getFrozenRightDataRows()` <br> `getFrozenDataRows()` | `getDataRows()` gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze') | In the previous approach, there were separate methods (`getMovableDataRows()`, `getFrozenRightDataRows()`, and `getFrozenDataRows()`) for obtaining viewport data rows from the freeze, movable, and right tables individually. However, in the new approach, these methods have been enhanced to return the entire viewport data rows for all sections together, simplifying data retrieval. Specific cells within these rows can now be extracted using selectors such as` e-leftfreeze` for the left freeze, `e-unfreeze` for the **movable**, and `e-rightfreeze` for the right freeze tables, providing greater flexibility in working with the data.
`getMovableColumnHeaderByIndex()` <br> `getFrozenRightColumnHeaderByIndex()` <br> `getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` gridInstance.getColumnHeaderByIndex(1) | In the previous architecture, the methods selected movable, right freeze, and left freeze headers separately. However, in the new approach, when using the `getMovableColumnHeaderByIndex()`, `getFrozenRightColumnHeaderByIndex()`, and `getFrozenLeftColumnHeaderByIndex()` methods, the same results as in the previous architecture will still be obtained.

> Validation messages displayed in frozen sections prevent scrolling until resolved, ensuring data integrity during editing operations.

### Limitations

The autofill feature is not compatible with frozen rows.

## Adding a new row programmatically

The Grid provides a way to add a new row to the grid programmatically. This feature is useful when adding a new record to the grid without manually entering data in the grid. This can be done using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid#addrecord) method of the Grid.

The addRecord method takes two parameters:

* The **data** object representing the new row to be added
* The **index** at which the new row should be inserted. If no index is specified, the new row will be added at the end of the Grid.

Here’s an example that demonstrates adding a new row using the addRecord method

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/add-new-row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/add-new-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/add-new-row-cs1" %}

> * When working with remote data, it is impossible to add a new row between the existing rows.
> * To add a new record to the beginning of the data source, pass "0" as the second parameter to the `addRecord` method.
> * If no index is specified, the new row will be added at the end of the grid.

## Show or hide a row using external actions

In the Grid, rows can be shown or hidden based on some external action, such as a checkbox click. This can be useful in scenarios where certain rows should be hidden from the grid temporarily without removing them from the underlying data source. This can be achieved by using the [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowbyindex) and [getRowsObject](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#getrowsobject) methods of the grid along with the [change](https://ej2.syncfusion.com/angular/documentation/api/check-box#change) event of the checkbox.

The `getRowsObject` method returns an array of row objects that represents all the rows in the grid. This method can be used to iterate through all the rows and access their data and index.

The getRowByIndex method returns the HTML element of a row at the specified index. This method can be used to retrieve a specific row and apply changes to it.

In the following example, the "onCheckBoxChange" method checks whether the checkbox is checked or not. If it is checked, the method iterates through all the rows in the grid using the `getRowsObject` method. For each row, it checks whether the value in the "CustomerID" column is equal to "VINET". If it is, the index of that row is obtained using the `getRowByIndex` method and hidden by setting its display style to "none". The index of the hidden row is also added to an array called "hiddenRows".

If the checkbox is unchecked, the method iterates through the "hiddenRows" array and shows each row by setting its display style to an empty string. The "hiddenRows" array is also cleared.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { CheckBoxModule} from '@syncfusion/ej2-angular-buttons'
import { Component, ViewChild } from '@angular/core';
import { orderDetails, columnDataType } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
imports: [GridModule,CheckBoxModule],
standalone: true,
  selector: 'app-root',
  template: `<div style="padding:2px 0px 0px 0px">
                <ejs-checkbox #checkbox label='Show / Hide Row' 
                (change)="onCheckBoxChange($event)"></ejs-checkbox>
            </div>
            <p id="message">{{ message }}</p>
            <ejs-grid #grid [dataSource]='data' height='350'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' 
                    textAlign='Right'></e-column>
                    <e-column field='CustomerID' headerText='Customer Name' width='150'>
                    </e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' 
                    format="yMd" textAlign='Right'>
                    </e-column>
                    <e-column field='Freight' headerText='Freight' width='120' format='C2' 
                    textAlign='Right'>
                    </e-column>
                    <e-column field='ShippedDate' headerText='Shipped Date' width='130' 
                    format="yMd" textAlign='Right'>
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150'>
                    </e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent {

  public data: Object[] = [];
  public rowIndex?: number;
  public hiddenRows: number[] = [];
  @ViewChild('grid')
    public grid?: GridComponent;
  public message?: string = '';

  ngOnInit(): void {
    this.data = orderDetails;
  }

  public onCheckBoxChange(args: ChangeEventArgs) {
    if (args.checked) {
      for (let i = 0; i < (this.grid as GridComponent).getRowsObject().length; i++) {
        if (((this.grid as GridComponent).getRowsObject()[i].data as columnDataType).CustomerID === 'VINET') {
          // check the row value
          this.rowIndex = (this.grid as GridComponent).getRowsObject()[i].index; //get particular row index
          ((this.grid as GridComponent).getRowByIndex(this.rowIndex) as HTMLElement).style.display =
            'none'; //hide row
          this.hiddenRows.push((this.rowIndex as number)); // add row index to hiddenRows array
        }
      }
      if (this.hiddenRows.length > 0) {
        this.message = `Rows with a customer name column value of VINET have been hidden`;
      }
    } else {
      // Show hidden rows
      this.hiddenRows.forEach((rowIndex: number) => {
        ((this.grid as GridComponent).getRowByIndex(rowIndex) as HTMLElement).style.display = '';
      });
      this.hiddenRows = [];
      this.message = 'Show all hidden rows';
    }
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-grid-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-grid-cs1" %}

## Get the row data and element

Grid provides several methods to retrieve row data and elements. This feature is useful when needing to access specific rows, perform custom operations, or manipulate the data displayed in the grid.

1. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/grid#getrowbyindex): This method returns the HTML element of a row at the specified index. It can be used to retrieve the element of a specific row in the grid.

    ```ts
    const rowElement = this.grid.getRowByIndex(rowIndex);
    ```

2. [getRowIndexByPrimaryKey](https://ej2.syncfusion.com/documentation/api/grid#getrowindexbyprimarykey): This method allows the row index to be retrieved based on a specific primary key value or row data.

    ```ts
    const rowIndex = this.grid.getRowIndexByPrimaryKey(primaryKey);
    ```

3. [getRowInfo](https://ej2.syncfusion.com/documentation/api/grid#getrowinfo):This method allows row information to be retrieved based on a cell target element.

    ```ts
    const rowInformation = this.grid.getRowInfo(targetElement);
    ```

4. [getRows](https://ej2.syncfusion.com/documentation/api/grid#getrows): This method returns an array of all the row elements in the Grid. To retrieve both row data and row elements, the `getRows` method can be combined with the `getRowInfo` method.

    ```ts
     const rowElements = this.grid.getRows();
    ```

5. [getSelectedRowIndexes](https://ej2.syncfusion.com/documentation/api/grid#getselectedrowindexes): This method allows the collection of indexes of the selected rows to be retrieved. However, it does not directly provide the row elements or the associated data. To access both the row elements and the data of the selected rows, the `getSelectedRowIndexes` method can be combined with the `getRowByIndex` and `getRowInfo` methods.

    ```ts
    const selectedIndexes = this.grid.getSelectedRowIndexes();
    ```
6. [getSelectedRows](https://ej2.syncfusion.com/documentation/api/grid#getselectedrows): This method returns an array of HTML elements representing the selected rows in the grid. By iterating over this array, each row element and its data can be accessed using the `getRowInfo` method. In this way, both the row elements and their associated data for the selected rows can be retrieved.

    ```ts
    const selectedRowElements = this.grid.getSelectedRows();
    ```

These methods can be combined for comprehensive row data access and manipulation scenarios, providing complete control over Grid row interactions and customization.

## See Also

* [Customizing row height in Angular Grid](https://www.syncfusion.com/forums/138140/how-to-customize-the-row-height-in-angular-grid)
* [Setting font size and padding of Angular Grid's toolbar and filter bar](https://www.syncfusion.com/forums/150181/how-to-set-font-size-and-padding-of-angular-grids-toolbar-and-filter-bar)
* [Displaying serial number in Angular Grid](https://www.syncfusion.com/forums/166563/how-to-displaying-serial-number-in-angular-grid)
* [Adding/updating a new row programmatically in Angular Grid](https://www.syncfusion.com/forums/144356/how-to-add-update-a-new-row-programmatically-in-angular-grid)