---
layout: post
title: Row Drag and Drop in Angular Grid Component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Row drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Row Drag and Drop in Angular Grid Component

The Syncfusion Angular Grid component provides comprehensive row drag and drop functionality, enabling intuitive data manipulation through visual interaction. This feature allows users to rearrange rows within the same grid, transfer rows between different grids, or drag rows to custom components. Row drag and drop enhances user experience by providing direct manipulation capabilities for data organization and workflow management.

**Key Capabilities:**
- Reorder rows within the same grid
- Transfer rows between multiple grid instances
- Drag rows to custom Angular components
- Customize drag behavior with events and settings
- Hide drag icons for seamless interaction

To implement row drag and drop functionality, inject the **RowDDService** in the provider section of the **AppModule**. The **RowDDService** handles all drag and drop operations within the grid component. After injecting the service, configure the feature using the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowrowdraganddrop) and [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid) properties.

## Drag and drop within grid 

Row reordering within a single grid enables users to reorganize data by dragging rows to new positions using a drag icon. Enable this feature by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowrowdraganddrop) property to **true**. This boolean property controls the availability of row drag and drop functionality and defaults to **false**.

The following example demonstrates how to enable drag and drop within the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs3" %}

## Drag and drop to grid 

The grid supports dragging rows from one grid instance and dropping them into another grid, facilitating data transfer between related datasets. Enable this functionality by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowrowdraganddrop) property to **true** in both grid components. This property defaults to **false**, requiring explicit activation.

Specify the destination grid using the [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid) property within the [rowDropSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/) configuration object. The `targetID` property accepts the DOM element ID of the target grid component.

The following example demonstrates row drag and drop between two Grid components:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs1" %}

> * Row drag and drop functionality is not supported with virtual scrolling and frozen rows and columns mode.
> * The **RowDDService** must be injected in the provider section of **AppModule** to enable row drag and drop features.

## Drag and drop to custom component 

The Grid enables dragging rows to any custom Angular component, providing flexibility for complex data manipulation scenarios. This capability supports workflows where data moves between different UI components or applications. Enable this feature by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowrowdraganddrop) property to **true** and specifying the custom component's ID in the [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid) property of the `rowDropSettings` object. The `targetID` must match the DOM element ID of the target component.

In the following example, selected grid rows are dragged and dropped into a TreeView component using the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrop) event. Upon successful drop, the corresponding grid row is removed and its data is inserted into the custom component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs5" %}

> * The `rowDrop` event triggers when a row is dropped onto a custom component, regardless of drop success. Use the `args.cancel` property to prevent the default action and implement custom handling logic.

## Drag and drop rows without drag icons

For a cleaner interface, the Grid can perform drag and drop operations without displaying drag icons. This approach provides seamless row reordering through direct row interaction. Achieve this by setting the [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings/) object to the current Grid's ID.

When the `targetID` matches the Grid's own ID, the Grid renders without helper icons for row dragging. Customize the drag and drop behavior by handling the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrop) event. Within the event handler, prevent the default action by setting `args.cancel` to **true**, then reorder rows using the [reorderRows](https://ej2.syncfusion.com/angular/documentation/api/grid/#reorderrows) method.

The following example demonstrates how to implement drag and drop without icons:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs2" %}

> * The selection feature must be enabled to allow users to select rows before performing drag and drop operations.
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) property to **Multiple**. Users can then select multiple rows by clicking and dragging within the grid.

## Drag and drop events

The Grid component provides comprehensive event handling for drag and drop operations, enabling customization of drag behavior, progress tracking, and drop actions. These events offer granular control over the drag and drop workflow:

1. [rowDragStartHelper](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdragstarthelper): Triggers when clicking on the drag icon or grid row, allowing customization of the drag element based on specific criteria.

2. [rowDragStart](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdragstart): Triggers when grid row dragging begins, providing opportunity to initialize drag-specific logic.

3. [rowDrag](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrag): Triggers continuously while the grid row is being dragged, enabling real-time feedback and validation.

4. [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdrop): Triggers when a drag element is dropped onto a target element, allowing custom drop handling and data manipulation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids'
import { Component, ViewChild,OnInit } from '@angular/core';
import { GridComponent, RowDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { orderDetails, columnDataType } from './datasource';

@Component({
  imports: [ GridModule],
  providers: [SelectionService, RowDDService],
  standalone: true,
  selector: 'app-root',
  template: `<div style="text-align:center">
             <p style="color:red;" id="message">{{ message }}</p>
             </div>
            <ejs-grid #grid [dataSource]="data" [allowPaging]="true" 
            [allowRowDragAndDrop]="true" (rowDragStartHelper)="rowDragStartHelper($event)"
            [selectionSettings]="selectOptions" 
            id="Grid" (rowDrop)="rowDrop($event)"  (rowDragStart)="rowDragStart($event)" 
            (rowDrag)="rowDrag($event)">
              <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="120"
                textAlign="Right"></e-column>
                <e-column field="CustomerID" headerText="Customer Name" 
                width="130"></e-column>
                <e-column field="OrderDate" headerText="Order Date" width="120"
                format="yMd" textAlign="Right"></e-column>
                <e-column field="Freight" headerText="Freight" width="120"
                format="C2" textAlign="Right"></e-column>
                <e-column field="ShipCity" headerText="Ship City" width="120">
                </e-column>
                <e-column field="ShipCountry" headerText="Ship Country"
                width="120"></e-column>
              </e-columns>
            </ejs-grid>`,
  styleUrls: ['./app.style.css']

})
export class AppComponent implements OnInit {

  public data: Object[] = [];
  public selectOptions?: Object;
  public message?: string;
  @ViewChild('grid')
  public grid!: GridComponent;

  ngOnInit(): void {
    this.data = orderDetails;
    this.selectOptions = { type: 'Multiple' };
  }
  rowDragStartHelper(args: RowDragEventArgs): void {
    this.message = `rowDragStartHelper event triggered`;
    if (((args.data as Object[])[0] as columnDataType).OrderID === 10248) {
      args.cancel = true;
    }
  }
  rowDragStart(args: RowDragEventArgs) {
    this.message = `rowDragStart event triggered`;
    args.cancel = true;
  }
  rowDrag(args:RowDragEventArgs): void {
    this.message = `rowDrag event triggered`;
    (args.rows as Element[]).forEach((row: Element) => {
      row .classList.add('drag-limit');
    });
  }
  rowDrop(args: RowDragEventArgs): void {
    this.message = `rowDrop event triggered`;
    const value = [];
    for (let r = 0; r < (args.rows as Element[]).length; r++) {
      value.push((args.fromIndex as number) + r);
    }
    this.grid.reorderRows(value, (args.dropIndex as number));
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs6" %}

## Limitations

* Single row drag and drop is supported within the same grid without enabling row selection.
* Row drag and drop functionality does not have built-in support with row template, detail template, and hierarchy grid features.

## See also

[Sorting data in the Syncfusion Grid](https://help.syncfusion.com/angular/grid/sorting)
[Filtering data in the Syncfusion Grid](https://help.syncfusion.com/angular/grid/filtering)