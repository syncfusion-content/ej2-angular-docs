---
layout: post
title: Angular Grid - Row Drag and Drop | Syncfusion
description: Angular Grid row drag and drop explains enabling row reorder, drag behavior, drop targets, and handling events to update underlying data accordingly.
platform: ej2-angular
control: Row drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Row Drag and Drop in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides built-in support for seamless row drag and drop functionality. This feature enables effortless row rearrangement within the grid by dragging and dropping rows to new positions. Additionally, rows can be transferred between grids, as well as dragged and dropped to custom components, providing powerful flexibility for complex data management scenarios.

**Key Capabilities:**
- Reorder rows within the same grid
- Transfer rows between multiple grid instances
- Drag rows to custom Angular components
- Customize drag behavior with events and settings
- Hide drag icons for seamless interaction

To use the row drag and drop feature in Grid component, inject the `RowDDService` in the provider section of the `AppModule`. The `RowDDService` handles the row drag and drop functionality within the Grid component. Once the `RowDD` service is injected, use the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#allowrowdraganddrop) and [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings#targetid) properties to enable and configure the row drag and drop feature in the Grid.

## Drag and drop within the grid 

The drag and drop feature allows rearranging rows within the grid by dragging them using a drag icon. To activate this feature, set the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#allowrowdraganddrop) property to `true`.

The following example demonstrates drag and drop within the Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs3" %}

## Drag and drop to another grid 

The grid row drag and drop allows drag grid rows and drop to another grid. To enable this feature, set the [allowRowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#allowrowdraganddrop) property to `true` in the source Grid component.

To specify the target Grid component where rows should be dropped, configure the [rowDropSettings.targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings#targetid) property. The `targetID` property references the "ID" of the destination Grid component.

The following example demonstrates row drag and drop between different Grid components:

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
> * The `RowDDService` must be injected in the provider section of **AppModule** to enable row drag and drop features.

## Drag and drop to custom component 

The Grid supports row drag-and-drop into custom components, enabling seamless data transfer without manual copy-paste. To enable this feature, set the `allowRowDragAndDrop` property to `true` and specify the target component's "ID" in the `targetID` property of the `rowDropSettings` object.

In the following example, selected grid rows are dragged and dropped into a TreeView component using the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdrop) event. Upon successful drop, the corresponding grid row is removed and its data is inserted into the custom component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/dragndrop-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/dragndrop-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/dragndrop-cs5" %}

> The `rowDrop` event triggers when a row is dropped onto a custom component, regardless of drop success. Use the `args.cancel` property to prevent the default action and implement custom handling logic.

## Hide drag and drop icons

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid displays drag icon in each row when enabling the row drag and drop feature. To hide these icons, set the [targetID](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDropSettings) object to the current Grid's ID.

When `targetID` references the Grid's own ID, the Grid renders without drag helper icons. Customize drag and drop behavior by binding to the [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdrop) event. Within the event handler, prevent the default action by setting `args.cancel` to `true`, then reorder rows using the [reorderRows](https://ej2.syncfusion.com/angular/documentation/api/grid#reorderrows) method.

The following example demonstrates hide drag and drop icons in the Syncfusion<sup style="font-size:70%">&reg;</sup> angular Grid:

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
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Multiple`. Users can then select multiple rows by clicking and dragging within the grid.

## Drag and drop events

The Grid component provides powerful events that trigger during row drag and drop operations. These events enable customization of drag elements, tracking of drag progress, and execution of actions when rows are dropped on target elements. The following events are available:

1. [rowDragStartHelper](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdragstarthelper): Triggers when clicking on the drag icon or grid row, allowing customization of the drag element based on specific criteria.

2. [rowDragStart](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdragstart): Triggers when grid row dragging begins, providing opportunity to initialize drag-specific logic.

3. [rowDrag](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdrag): Triggers continuously while the grid row is being dragged, enabling real-time feedback and validation.

4. [rowDrop](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdrop): Triggers when a drag element is dropped onto a target element, allowing custom drop handling and data manipulation.

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

The row drag and drop feature offers focused functionality, working seamlessly with a curated set of Grid features. The features listed below are not part of its supported set of features:

* Row template
* Detail template
* Hierarchy grid
* Row pinning
* Virtual scrolling beyond the grid viewport

## See also

- [Sorting data in the Syncfusion Grid](https://help.syncfusion.com/angular/grid/sorting)
- [Filtering data in the Syncfusion Grid](https://help.syncfusion.com/angular/grid/filtering)