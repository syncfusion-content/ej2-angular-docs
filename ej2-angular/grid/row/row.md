---
layout: post
title: Row in Angular Grid Component | Syncfusion
description: Learn here all about Row in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row 
documentation: ug
domainurl: ##DomainURL##
---

# Row in Angular Grid Component

Rows in the Syncfusion Angular Grid represent individual records from a data source, presenting information in a structured tabular format. Each row displays field values from a single data record, enabling users to interact with data through selection, editing, sorting, filtering, and custom operations. The Grid provides comprehensive row management capabilities including styling customization, height control, hover effects, frozen row functionality, and programmatic data manipulation.

**Key Row Management Features:**
- Dynamic row styling based on data conditions
- Customizable row heights for optimal content display
- Interactive hover effects and visual feedback
- Frozen rows for persistent header information
- Programmatic row addition, modification, and visibility control
- Comprehensive row data access and manipulation methods

## Row Style Customization

Row styling customization allows modification of row appearance to meet specific design requirements and enhance visual appeal. The Grid supports multiple approaches for row styling including event-driven customization, CSS-based styling, and method-based manipulation.

### Event-Based Row Styling

The [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event provides the most flexible approach for row styling, triggering for every row during data binding. This event handler receives [RowDataBoundEventArgs](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/) containing row details, enabling conditional styling based on data values.

The following example demonstrates conditional row styling based on the **Freight** column value, applying different CSS classes for various data ranges:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-css-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-css-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-css-cs11" %}

>The [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event provides similar functionality for individual cell customization and can be combined with row-level styling for comprehensive appearance control.

### CSS-Based Row Styling

CSS selectors provide a declarative approach for row styling, utilizing Grid-specific classes for consistent appearance modifications across the application.

**Alternate Row Customization**

Alternate row styling improves data readability by creating visual distinction between consecutive rows. The Grid provides the **.e-altrow** CSS class for alternate row targeting, which can be customized with application-specific styles.

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

The following example demonstrates alternate row styling implementation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-style-alt-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-style-alt-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-style-alt-cs1" %}

**Selected Row Customization**

Selected row styling enhances user interaction feedback by highlighting the currently selected row. The **.e-selectionbackground** class provides the default selection styling, which can be overridden for custom appearance.

```css
.e-grid .e-selectionbackground {
    background-color: #f9920b;
}
```

The following example demonstrates selected row styling customization:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-style-selected-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-style-selected-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-style-selected-cs1" %}

### Method-Based Row Styling

The Grid provides comprehensive methods for programmatic row styling and manipulation:

**Row Access Methods:**
1. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/grid/#getrowbyindex): Returns HTML element of a row at the specified index
2. [getRowIndexByPrimaryKey](https://ej2.syncfusion.com/documentation/api/grid/#getrowindexbyprimarykey): Returns row index based on primary key value
3. [getRows](https://ej2.syncfusion.com/documentation/api/grid/#getrows): Returns array of all row elements
4. [getRowInfo](https://ej2.syncfusion.com/documentation/api/grid/#getrowinfo): Returns row data object and index from row element
5. [getSelectedRowIndexes](https://ej2.syncfusion.com/documentation/api/grid/#getselectedrowindexes): Returns array of selected row indexes
6. [getSelectedRows](https://ej2.syncfusion.com/documentation/api/grid/#getselectedrows): Returns array of selected row HTML elements

The following example demonstrates method-based row styling using [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getrowbyindex) within the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/rows-event-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/rows-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/rows-event-cs1" %}

## Row Height

Row height customization enables optimal content display and improved visual hierarchy within the Grid. The [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowheight) property provides uniform height control, while event-driven approaches enable row-specific height customization.

The following example demonstrates dynamic row height adjustment:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-height-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-height-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-height-cs1" %}

>*	The `rowHeight` property applies uniform height to all rows, including header and footer rows.
>*  Individual row height cannot be controlled through the `rowHeight` property alone.
>*	Row-specific height customization requires the `rowDataBound` event approach.

### Individual Row Height Customization

Individual row height customization addresses scenarios requiring variable content display or specific row emphasis. This approach combines the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowheight) property with the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event for conditional height application.

The following example sets custom height for rows with **OrderID** value of '10249':

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/row-height-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/row-height-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/row-height-cs8" %}

>* Virtual scrolling mode does not support variable row heights due to performance optimization requirements.
>* Multiple rows can be customized by implementing appropriate conditional logic within the `rowDataBound` event handler.
>* Row height modification uses the [args.row](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/#row) property and setAttribute method for implementation.

## Row Hover

Row hover functionality provides visual feedback during mouse interaction, enhancing data readability and user experience. The [enableHover](https://ej2.syncfusion.com/documentation/api/grid/#enablehover) property controls hover effect availability across the entire Grid.

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

### How to get the row information when hovering over the cell

Row information retrieval during hover interactions enables dynamic content display and contextual actions. This functionality combines the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event with the [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/grid/#getrowinfo) method for comprehensive row data access.

* The `rowDataBound` event is triggered every time a request is made to access row information, element, or data, before the row element is appended to the Grid element.
* The `getRowInfo` method is used to retrieve the row information when hovering over a specific cell. This method takes a single parameter, which is the target element that is being hovered over.

Here's an example that demonstrates how to use the `rowDataBound` event and `getRowInfo` method to retrieve the row information when hovering over a cell in the Syncfusion Grid.

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

Frozen rows functionality maintains specific rows in fixed positions during vertical scrolling, ensuring important information remains visible within large datasets. The [frozenRows](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozenrows) property specifies the number of rows to freeze from the top of the Grid.

The following example freezes the top two rows:

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

### Frozen Row Line Color Customization

Frozen row visual appearance can be customized through CSS styling to match application design requirements. The **.e-frozenrow-border** class provides the styling target for frozen row borders.

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

Previous | Current | Explanation 
 ---  | --- | --- 
`getMovableRows()` gridInstance.getMovableRows()[0].querySelectorAll('.e-unfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-unfreeze') | The previous architecture used separate tables for left, right, and movable contents, returning only movable rows when calling the method, whereas the current architecture combines them into one table, returning all rows and introduces the `e-unfreeze` class for selecting movable rows
`getFrozenRightRows()` gridInstance.getFrozenRightRows()[0].querySelectorAll('.e-rightfreeze') | `getRows()` gridInstance.getRows()[0].querySelectorAll('.e-rightfreeze') | In the previous architecture, it returned only the table rows from the right freeze table, but in the current architecture, all rows of the entire table are returned, introducing the `e-rightfreeze` class for selecting right freeze rows. 
`getMovableRowByIndex()` <br> `getFrozenRowByIndex()` <br> `getFrozenRightRowByIndex()` | `getRowByIndex()` gridInstance.getRowByIndex(1).querySelectorAll('.e-unfreeze') | In the previous architecture, separate methods were used to select rows from different table sections, while in the current architecture, the `getMovableRowByIndex()`, `getFrozenRightRowByIndex()`, and `getFrozenRowByIndex()` methods now return the same table row based on the given index. Additionally, class names for table cells (td's) have been separated into `e-leftfreeze`, `e-unfreeze`, and `e-rightfreeze`, making it easier to customize cells within a row.
`getMovableCellFromIndex()` <br> `getFrozenRightCellFromIndex()` | `getCellFromIndex()` gridInstance.getCellFromIndex(1,1) | In the previous approach, the `getMovableCellFromIndex()` method was used to choose a specific cell within the movable table, and the `getFrozenRightCellFromIndex()` method was utilized to target a particular cell within the right freeze table. However, in the current architecture, you have the flexibility to select a specific cell in either the movable or right freeze table by using both the `getFrozenRightCellFromIndex()` and `getMovableCellFromIndex()` methods. This new method simplifies the process of selecting and retrieving specific cells within these tables, offering more versatility and convenience.
`getMovableDataRows()` <br> `getFrozenRightDataRows()` <br> `getFrozenDataRows()` | `getDataRows()` gridInstance.getDataRows()[0].querySelectorAll('.e-unfreeze') | In the previous approach, there were separate methods (`getMovableDataRows()`, `getFrozenRightDataRows()`, and `getFrozenDataRows()`) for obtaining viewport data rows from the freeze, movable, and right tables individually. However, in the new approach, these methods have been enhanced to return the entire viewport data rows for all sections together, simplifying data retrieval. You can now extract specific cells within these rows using selectors such as `e-leftfreeze` for the **left freeze**, `e-unfreeze` for the **movable**, and `e-rightfreeze` for the **right freeze** tables, providing greater flexibility in working with the data.
`getMovableColumnHeaderByIndex()` <br> `getFrozenRightColumnHeaderByIndex()` <br> `getFrozenLeftColumnHeaderByIndex()` | `getColumnHeaderByIndex()` gridInstance.getColumnHeaderByIndex(1) | In the previous architecture, the methods selected movable, right freeze, and left freeze headers separately. However, in the new approach, when using the `getMovableColumnHeaderByIndex()`, `getFrozenRightColumnHeaderByIndex()`, and `getFrozenLeftColumnHeaderByIndex()` methods, you will still obtain the same results as in the previous architecture.

> Validation messages displayed in frozen sections prevent scrolling until resolved, ensuring data integrity during editing operations.

### Limitations

* Frozen row is not compatible with the following features:
    1. Autofill

## Adding a new row programmatically

Programmatic row addition enables dynamic data insertion without manual user input. The [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#addrecord) method provides flexible row insertion capabilities with optional index specification.

**Method Parameters:**
* **data**: Object representing the new row data
* **index** (optional): Insertion position. If omitted, the row is added at the end

The following example demonstrates programmatic row addition:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/add-new-row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/add-new-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/add-new-row-cs1" %}

>* When working with remote data, it is impossible to add a new row between the existing rows.
>* If you want to add a new record to the beginning of the data source, you can pass **0** as the second parameter to the `addRecord `method.
>* If you do not specify an index, the new row will be added at the end of the grid.

## Show or hide a row using an external actions

In a Syncfusion grid, you can show or hide a particular row based on some external action, such as a checkbox click.This can be useful in scenarios where you want to hide certain rows from the grid temporarily, without removing them from the underlying data source. This can be achieved by using  the [getRowByIndex](https://ej2.syncfusion.com/documentation/api/grid/#getrowbyindex) and `getRowsObject` methods of the grid along with the [change](https://ej2.syncfusion.com/angular/documentation/api/check-box/#change) event of the checkbox

The `getRowsObject` method returns an array of row objects that represents all the rows in the grid. You can use this method to iterate through all the rows and access their data and index.

The [getRowByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid/#getrowbyindex) method returns the HTML element of a row at the specified index. You can use this method to get a specific row and apply changes to it.

In the following example, the **onCheckBoxChange** method is used to check whether the checkbox is checked or not. If it is checked, the method iterates through all the rows in the grid using the `getRowsObject` method. For each row, it checks whether the value in the **CustomerID** column is equal to "VINET". If it is, the index of that row is obtained using the `getRowByIndex` method and hidden by setting its display style to "none". The index of the hidden row is also added to an array called hiddenRows.

If the checkbox is unchecked, the method iterates through the hiddenRows array and shows each row by setting its display style to an empty string. The hiddenRows array is also cleared.

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
imports: [
        
        GridModule,
        CheckBoxModule
    ],

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

## How to get the row data and element

The Grid provides comprehensive methods for row data and element retrieval, enabling custom operations and data manipulation:

1. [getRowByIndex](https://ej2.syncfusion.com/documentation/api/grid/#getrowbyindex): This method returns the HTML element of a row at the specified index. It can be used to retrieve the element of a specific row in the grid.

    ```ts
    const rowElement = this.grid.getRowByIndex(rowIndex);
    ```

2. [getRowIndexByPrimaryKey](https://ej2.syncfusion.com/documentation/api/grid/#getrowindexbyprimarykey):The method allows you to retrieve the row index based on a specific primary key value or row data.

    ```ts
    const rowIndex = this.grid.getRowIndexByPrimaryKey(primaryKey);
    ```

3. [getRowInfo](https://ej2.syncfusion.com/documentation/api/grid/#getrowinfo):This method allows you to retrieve row information based on a cell target element.

    ```ts
    const rowInformation = this.grid.getRowInfo(targetElement);
    ```

4. [getRows](https://ej2.syncfusion.com/documentation/api/grid/#getrows): This method returns an array of all the row elements in the Grid. If you need to retrieve row data and elements, you can combine the `getRows` method with the `getRowInfo` method.

    ```ts
     const rowElements = this.grid.getRows();
    ```

5. [getSelectedRowIndexes](https://ej2.syncfusion.com/documentation/api/grid/#getselectedrowindexes):This method allows you to retrieve the collection of indexes of the selected rows. However, it does not directly provide the row elements and associated data. To access the row elements and data of the selected rows, you can combine the `getSelectedRowIndexes` method with `getRowByIndex` and `getRowInfo` method.

    ```ts
    const selectedIndexes = this.grid.getSelectedRowIndexes();
    ```
6. [getSelectedRows](https://ej2.syncfusion.com/documentation/api/grid/#getselectedrows):This method returns an array of HTML elements representing the selected rows in the grid.By iterating over this array, you can access each row element and data using the `getRowInfo` method. This way, you can access both the row elements and their associated data for the selected rows.

    ```ts
    const selectedRowElements = this.grid.getSelectedRows();
    ```

These methods can be combined for comprehensive row data access and manipulation scenarios, providing complete control over Grid row interactions and customization.

## See Also

* [How to customize the row height in Angular Grid](https://www.syncfusion.com/forums/138140/how-to-customize-the-row-height-in-angular-grid)
* [How to set font size and padding of Angular Grid's toolbar and filter bar](https://www.syncfusion.com/forums/150181/how-to-set-font-size-and-padding-of-angular-grids-toolbar-and-filter-bar)
* [How to displaying serial number in Angular Grid](https://www.syncfusion.com/forums/166563/how-to-displaying-serial-number-in-angular-grid)
* [How to add/update a new row programmatically in Angular Grid](https://www.syncfusion.com/forums/144356/how-to-add-update-a-new-row-programmatically-in-angular-grid)