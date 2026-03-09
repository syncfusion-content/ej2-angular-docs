---
layout: post
title: Angular Grid - Cell selection | Syncfusion
description: Angular Grid cell selection covers selecting single or multiple cells, selection APIs, and keyboard interactions for fine-grained selection control.
platform: ej2-angular
control: Cell selection 
documentation: ug
domainurl: ##DomainURL##
---

# Cell Selection in Angular Grid Component

Cell selection in the Grid component allows interactive selection of specific cells or ranges of cells within the grid. Selection can be performed through mouse clicks or arrow keys (up, down, left, and right). This functionality allows highlighting, manipulating, or performing actions on specific cells within the grid.

> To enable cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property to either `Cell` or `Both`. This property determines the selection mode of the grid.

## Single cell selection

Single cell selection provides selection of a single cell within a grid. This functionality focuses on a specific cell or allows actions on individual cells within the grid.

To configure single cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property to `Cell` and the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Single`. This configuration allows selection of a single cell at a time within the grid.

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

Multiple cell selection provides selection of multiple cells within a grid. This feature is useful for performing actions on multiple cells simultaneously or focusing on specific areas of data.

To configure multiple cell selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property to `Cell` and the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Multiple`. This configuration allows selection and interaction with multiple cells within the grid.

The following example demonstrates multiple cell selection:

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

The cell selection mode allows interactive selection of specific cells or ranges of cells within the grid. This feature is particularly useful for performing actions on specific cells or obtaining data from selected cells.

The Grid supports three types of cell selection mode which can be configured using [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#cellselectionmode). These modes are:

* `Flow`: This is the default mode. It allows selection of a range of cells between the start index and end index, including all cells in between the rows. It provides a continuous flow of cell selection.
* `Box`: In this mode, selection of a range of cells is possible within the start and end column indexes, including all cells in between the rows within the specified range. This mode is useful for selecting cells within specific columns.
* `BoxWithBorder`: This mode is similar to the `Box` mode, but it adds borders to the selected range of cells. This visual distinction makes it easy to identify the selected cells within the grid.

> * Cell Selection requires the `selectionSettings.mode` to be `Cell` or  `Both` and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) should be `Multiple`.

> * To select a range of cells in the UI using the keyboard, hold the <kbd>Shift</kbd> key and click on the start cell, then click on the end cell to complete the selection. This will apply the currently configured `cellSelectionMode` (Flow, Box, or BoxWithBorder) to the selected range.

The following example demonstrates dynamically enabling and changing the `cellSelectionMode` using the `DropDownList` component:


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs1" %}

## Select cells programmatically

Single cell selection, multiple cell selection, and range of cell selection can be performed externally in a grid using built-in methods. This feature allows interaction with specific cells within the grid. The following section demonstrates achieving cell selection using methods.

### Single cell selection

The [selectCell](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcell) method allows selection of a single cell based on row and cell index values. This method-based approach provides programmatic control for selecting specific cells within the grid.

The following example demonstrates programmatic single cell selection by passing row and cell index values to the `selectCell` method:

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

The [selectCells](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcells) method allows selection of multiple cells based on a collection of row and column indexes. This method provides programmatic control for selecting multiple cells simultaneously within the grid.

The following example demonstrates selecting multiple cells in the grid by calling the `selectCells` method within the button click event and passing a collection of row and column indexes as arguments:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs6" %}

> Cell Selection requires the `selectionSettings.mode` to be `Cell` or `Both` and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) should be `Multiple`.

### Range of cell selection

The [selectCellsByRange](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcellsbyrange) method allows selection of a continuous range of cells based on start and end index values. This method provides programmatic control for selecting multiple cells within a defined range.

> * Range cell selection allows selection of multiple cells in box mode when `cellSelectionMode` is set to `Box`. However, when `cellSelectionMode` is set to `Flow`, it will select the range of cells between the start and end indexes, including other cells of the selected rows.
> * Cell Selection requires the `selectionSettings.mode` to be `Cell` or `Both` and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) should be `Multiple`.

The following example demonstrates programmatic range selection by passing start and end row/cell index values to the `selectCellsByRange` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cell-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cell-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cell-cs5" %}

## Get selected row cell indexes

The collection of selected row and cell indexes of the currently selected cells in the Grid component can be retrieved. This is useful for performing various actions or manipulations on the selected cells within the grid. To achieve this, the [getSelectedRowCellIndexes](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrowcellindexes) method can be utilized. 

The following example demonstrates obtaining the selected row cell indexes using the `getSelectedRowCellIndexes` method and displaying them in a dialog when a button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel, ISelectedCell } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        CommonModule,
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

Clearing cell selection programmatically in the Grid component is a useful feature for removing any existing cell selections. To achieve this, the [clearCellSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#clearcellselection) method can be used.

> The `clearCellSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) is set to `Multiple` or `Single`.

The following example demonstrates clearing cell selection by calling the `clearCellSelection` method in the button click event:

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

The Grid provides several events related to cell selection, allowing customization of the cell selection behavior. The following are the available cell selection events:

[cellSelecting](https://ej2.syncfusion.com/angular/documentation/api/grid#cellselecting): This event is triggered before any cell selection occurs. It provides an opportunity to implement custom logic or validation before a cell is selected, allowing control of the selection process.

[cellSelected](https://ej2.syncfusion.com/angular/documentation/api/grid#cellselected): This event is triggered after a cell is successfully selected. This event can be used to perform actions or updates when a cell is selected.

[cellDeselecting](https://ej2.syncfusion.com/angular/documentation/api/grid#celldeselecting): This event is triggered just before a selected cell is deselected. It allows implementation of custom logic or validation to decide whether the cell should be deselected or not.

[cellDeselected](https://ej2.syncfusion.com/angular/documentation/api/grid#celldeselected): This event is triggered when a particular selected cell is deselected. This event can be used to perform actions or validations when a cell is no longer selected.

In the following example, cell selection is canceled when the value of "Ship Country" is equal to "France" within the `cellSelecting` event. The background color changes to green when the `cellSelected` event is triggered, and it changes to red when the `cellDeselecting` event is triggered. Furthermore, the text color switches to white when the `cellDeselected` event is triggered. A notification message is displayed to indicate which event was triggered whenever a cell is selected:

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
