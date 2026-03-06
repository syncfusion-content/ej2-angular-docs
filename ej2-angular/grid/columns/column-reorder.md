---
layout: post
title: Angular Grid - Column Reorder | Syncfusion
description: Angular Grid column reorder enables drag‑and‑drop movement, configurable restrictions, and events to track and persist updated column order.
platform: ej2-angular
control: Column reorder 
documentation: ug
domainurl: ##DomainURL##
---

# Column Reorder in Angular Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component allows reordering columns by drag and drop of a particular column header from one position to another position within the grid. This feature can be enabled by injecting the `ReorderService` in the provider section of `AppModule`.

To enable column reordering in the Grid, set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid#allowreordering) property to `true` in the grid.

Once enabled, columns can be reordered by:

- Selecting a column header.
- Dragging it to the desired position.
- Dropping it at the new position to update the order.

The following example demonstrates column reordering in the Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs1" %}

>* The appearance of the column headers during drag and drop can be customized using the [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/grid#columndrag) and [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#columndrop) events.
>* When columns are reordered, the position of the corresponding column data will also be changed. Ensure that any additional code or logic that relies on the order of the column data is updated accordingly.

## Prevent reordering for particular column

By default, all columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid can be reordered when the grid-level [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid#allowreordering) property is set to `true`. However, there may be specific columns that should remain in a fixed position and not be reordered. To prevent reordering for a particular column, set the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowreordering) property of that column to `false` in the column definition.

In the following example, the "ShipCity" column is prevented from being reordered by setting its [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowreordering) property to `false`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs6" %}

## Reorder columns externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Angular allows reordering of columns externally, which means that using methods, columns can be programmatically moved around within the grid, based on their index or target index, or by using their field name.

> When reordering columns externally, the [allowReordering](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowreordering) property of the grid must be set to `true`.

### Reorder columns by index

The [reorderColumnByIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#reordercolumnbyindex) method reorders columns by moving them from their current index to a new index. This is useful when the exact positions of the columns are known, as it allows direct control over the column order without using drag-and-drop.

**Method signature:**
```typescript
reorderColumnByIndex(fromIndex: number, toIndex: number): void
```

* `fromIndex`: The current index of the column to move.
* `toIndex`: The new index where the column should be moved.

In this example, the "Customer ID" column, located at index 1, is moved to index 3 when clicking the "Reorder Column by Index" button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs7" %}

### Reorder columns by target index

The [reorderColumnByTargetIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#reordercolumnbytargetindex) method enables reordering of one or more columns to a specific target index. This method is particularly useful when moving columns based on their field names rather than their current index positions.

**Method signature:**
```typescript
reorderColumnByTargetIndex(fieldName: string | string[], toIndex: number): void
```

**Parameters:**
* `fieldName`: The field name (or array of field names) of the column(s) to be reordered.
* `toIndex`: The target index where the column(s) should be moved.

The following example demonstrates the use of the `reorderColumnByTargetIndex` method to reorder both single and multiple columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs8" %}

### Reorder columns by field names

The [reorderColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#reordercolumns) method provides a way to reorder columns using their field names instead of index positions. This method is particularly useful when the exact column positions are unknown, but the field names are available. By specifying the source column field name and the target column field name, the grid updates the order automatically.

**Method signature:**
```typescript
reorderColumns(fromFName: string | string[], toFName: string): void
```

**Parameters:**
* `fromFName`: The field name (or array of field names) of the column(s) to be moved.
* `toFName`: The field name of the target column before which the source column(s) should be placed.

The following example demonstrates the use of the `reorderColumns` method to reorder both single and multiple columns based on field names by clicking the respective buttons.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs9" %}

### Reorder columns using column model

The [reorderColumnByModel](https://ej2.syncfusion.com/angular/documentation/api/grid#reordercolumnbymodel) method provides an advanced way to reorder columns by working with complete column model objects. This method is specifically designed to handle complex column structures, particularly [stacked header columns](https://ej2.syncfusion.com/angular/documentation/grid/columns/column-headers#stacked-header), but it also works seamlessly with normal column configurations. While methods like `reorderColumnByIndex`, `reorderColumns`, and `reorderColumnByTargetIndex` are suitable for simple, flat column structures, `reorderColumnByModel` is the preferred approach when working with hierarchical column arrangements.

**Method signature:**
```typescript
reorderColumnByModel(fromColumn: Column, toColumn: Column): void
```

**Parameters:**
* `fromColumn`: The column object to move.
* `toColumn`: The target column object before which the `fromColumn` should be placed.

**When to use this method:**

- Moving entire column groups.
- Handling complex column hierarchies.
- Working directly with column objects rather than field names or indices.

In this example:

- "Order Details" stacked header is moved before "Customer ID".
- "Ship Country" is moved before "Ship Name" within the "Ship Details" stacked header.

This shows the method handling reordering of both normal and stacked header columns.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reorder-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs10" %}

## Column Reorder events

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides events that are triggered during different stages of the column reordering process. These events make it possible to run custom actions or show the current status while columns are being reordered through drag-and-drop.

The Grid component supports the following column reorder events:

| Event | Description |
|-------|-------------|
| [columnDragStart](https://ej2.syncfusion.com/angular/documentation/api/grid#columndragstart) | Triggers when column header element drag starts. |
| [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/grid#columndrag) | Triggers continuously while a column header is being dragged. |
| [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#columndrop) | Triggered when a column header is dropped into its new position. |

In the following example, the `columnDragStart`, `columnDrag`, and `columnDrop` events are implemented in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ReorderService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ColumnDragEventArgs, Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ReorderService],
standalone: true,
  selector: 'app-root',
  template: `<p id='message'>{{ message }}</p><ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='280px' [enableHover]='false'
         (columnDragStart)="columnDragStart($event)" (columnDrag)="columnDrag($event)" (columnDrop)="columnDrop($event)">
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                  <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
                  <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public message?: string;
  @ViewChild('grid') public gridObj?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.message = '';
  }
  columnDrop({ column }: ColumnDragEventArgs) {
    this.message = `columnDrop event triggered`;
    if ((column as Column).allowReordering == true) {
      (this.gridObj as GridComponent).getColumnByField((column as Column).field).customAttributes = {
        class: 'customcss',
      };
    }
  }
  columnDragStart({ column }: ColumnDragEventArgs) {
    this.message = `columnDragStart event triggered`;
    if ((column as Column).field == 'OrderID') {
      (this.gridObj as GridComponent).getColumnByField((column as Column).field).allowReordering = false;
    }
  }
  columnDrag({ column, target }: ColumnDragEventArgs) {
    var index = (target as Element).getAttribute('data-colIndex');
    if (index) {
      this.message = `columnDrag event is triggered. ` + (column as Column).headerText + ` column is dragged to index ` + index;
    }
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reorder-cs4/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/grid/reorder-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/reorder-cs4" %}