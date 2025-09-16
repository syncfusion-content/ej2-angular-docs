---
layout: post
title: Cell selection in Angular Grid component | Syncfusion
description: Learn how to use cell selection in the Syncfusion Angular Grid component of Essential JS 2 for interactive, programmatic, and event-driven cell selection, including single, multiple, and range selections.
platform: ej2-angular
control: Cell selection 
documentation: ug
domainurl: ##DomainURL##
---

# Cell Selection in Angular Grid component

Cell selection in the Grid component enables interactive selection of specific cells or ranges of cells within the grid. You can select cells using mouse clicks or arrow keys (up, down, left, right). This is valuable for highlighting, manipulating, or performing operations on particular grid cells.

> To enable cell selection, set [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to **Cell** or **Both**.

## Single cell selection

Single cell selection allows selection of one cell at a time. To configure this, set [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to **Cell** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Single**. 

The following example demonstrates single cell selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs1" %}

## Multiple cell selection

Multiple cell selection permits selection of multiple cells at once. Set [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to **Cell** and [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Multiple**.

The following example demonstrates how to enable multiple cell selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs2" %}

## Cell selection mode

Cell selection mode controls how cells or ranges are selected. Set the desired mode using [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#cellselectionmode):

* **Flow** (default): Selects a continuous flow of cells between the start and end indices across rows.
* **Box**: Selects a rectangular range covering specified rows and columns.
* **BoxWithBorder**: Similar to Box mode, but applies a border for better visual distinction of the selected range.

> For cell selection modes, `selectionSettings.mode` must be **Cell** or **Both**, and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) must be **Multiple**.

You can dynamically update `cellSelectionMode` with a `DropDownList` component, as shown in this example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs1" %}

## Select cells externally

You can programmatically select single cells, multiple cells, or a range of cells using built-in methods. This is useful for custom UI interactions or workflows.

### Single cell selection

Select a cell by index using the [selectCell](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcell) method.

The example below shows selecting a cell from the input (row and cell index):

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs4" %}

### Multiple cell selection

Select several cells by providing row and column indexes using [selectCells](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcells).

The following example enables multiple cell selection programmatically:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs6" %}

> For multiple cell selection and range selection, set `selectionSettings.mode` to **Cell** or **Both** and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Multiple**.

### Range of cell selection

Select a continuous cell range using [selectCellsByRange](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcellsbyrange) by supplying start and end row/cell indexes.

> In **Box** mode, range selection highlights a boxed area. In **Flow** mode, the range selection includes every cell within the row range between start and end.
> Set `selectionSettings.mode` to **Cell** or **Both** and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Multiple**.

Below is an example that demonstrates selecting a cell range using values from the input:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs5" %}

## How to get selected row cell indexes

You can retrieve all currently selected cell indexes using the [getSelectedRowCellIndexes](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrowcellindexes) method. This is useful for processing or displaying information about selected row and cell coordinates.

Below is an example demonstrating how to obtain selected cell indexes and display them in a dialog:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DialogModule } from '@syncfusion/ej2-angular-popups'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel, ISelectedCell } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        DialogModule 
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="padding: 20px 0px">
          <button ejs-button class="sample" (click)="showSelectedIndexes()">
          Show Selected Cell Indexes</button>
        </div>
        <ejs-grid #grid [dataSource]="data" allowPaging="true" 
        [selectionSettings]="selectionOptions" [pageSettings]="pageOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" 
            textAlign="Right" width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="130">
            </e-column>
            <e-column field="Freight" headerText="Freight" format="C2" width="100">
            </e-column>
          </e-columns>
        </ejs-grid>
        <ejs-dialog #dialogComponent [header]="'Selected Cell Indexes'" [content]="dialogContent"
          [visible]="dialogVisible" (close)="dialogClose()" showCloseIcon="true" width="350px"
          [position]='{ X: 300, Y: 100 }'>
          <ng-template #dialogContent>
            <ng-container>
              <div>
                <p><b>Selected Cell Indexes:</b></p>
                <ul>
                  <li *ngFor="let cellIndex of selectedCellIndexes">
                    Row: {{ cellIndex.rowIndex }}, cellIndex: {{ cellIndex.cellIndexes }}
                  </li>
                </ul>
              </div>
            </ng-container>
          </ng-template>
        </ejs-dialog>`
})

export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public dialogVisible: boolean = false;
  public selectedCellIndexes: ISelectedCell[] = [];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode:'Cell', type: 'Multiple', persistSelection: true };
    this.pageOptions = { pageSize: 5 };
  }
  showSelectedIndexes(): void {
    this.selectedCellIndexes = (this.grid as GridComponent).getSelectedRowCellIndexes();
    if (this.selectedCellIndexes.length > 0) {    
      this.dialogVisible = true;
    }
  }
  dialogClose(): void {
    this.dialogVisible = false;
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs8" %}

## Clear cell selection programmatically

Clear any current cell selections using [clearCellSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#clearcellselection). This is useful for resetting or preparing the grid for new selections.

> `clearCellSelection` is supported for both **Multiple** and **Single** selection types.

Example of programmatic cell selection clearing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs3" %}

## Cell selection events

Several events help you customize cell selection interactions:

* [cellSelecting](https://ej2.syncfusion.com/angular/documentation/api/grid/#cellselecting): Triggered before a cell selection, allowing logic or validation to control selection.
* [cellSelected](https://ej2.syncfusion.com/angular/documentation/api/grid/#cellselected): Triggered after cell selection is completed.
* [cellDeselecting](https://ej2.syncfusion.com/angular/documentation/api/grid/#celldeselecting): Triggered before a selected cell is deselected, enabling custom logic or cancellation.
* [cellDeselected](https://ej2.syncfusion.com/angular/documentation/api/grid/#celldeselected): Triggered after a selected cell is deselected.

In the example below:
- Cell selection is blocked via `cellSelecting` if **ShipCountry** equals **France**.
- Background color updates on selection/deselection events to illustrate the event lifecycle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Order, data } from './datasource';
import { GridComponent, SelectionSettingsModel,PageSettingsModel,CellSelectEventArgs,CellSelectingEventArgs,
CellDeselectEventArgs} from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [ GridModule],
  standalone: true,
  selector: 'app-root',
  template: `
        <p id="message">{{ message }}</p>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid #grid [dataSource]="data"
            [selectionSettings]="selectionOptions"
            (cellSelected)="cellSelected($event)"
            (cellSelecting)="cellselecting($event)"
            (cellDeselected)="cellDeselected($event)"
            (cellDeselecting)="cellDeselecting($event)">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>`
})

export class AppComponent implements OnInit {

  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public message?: string;
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Cell', type: 'Multiple' };
    this.pageOptions = { pageSize: 5 };
  }
  cellSelected(args: CellSelectEventArgs): void {
    this.message = ` Trigger cellSelected`;
    (args.currentCell as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)';
  }
  cellselecting(args:CellSelectingEventArgs ): void {
    this.message = `Trigger cellSelecting`;
    if ((args.data as Order).ShipCountry == 'France')
      args.cancel = true;
  }
  cellDeselected(args: CellDeselectEventArgs ): void {
    this.message = `Trigger cellDeselected`;
    if (args.cells && args.cells.length > 0) {
      (args.cells[0] as HTMLElement).style.backgroundColor = 'rgb(245, 69, 69)';
    }
  }
  cellDeselecting(args: CellDeselectEventArgs): void {
    this.message = `Trigger cellDeselecting`;
    if (args.cells && args.cells.length > 0) {
      (args.cells[0] as HTMLElement).style.color = 'rgb(253, 253, 253)';
    }  
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs7" %}
