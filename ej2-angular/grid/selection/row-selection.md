---
layout: post
title: Angular Grid - Row selection | Syncfusion
description: Angular Grid row selection explains single and multi-row selection modes, keyboard behaviors, and events to handle selection changes.
platform: ej2-angular
control: Row selection 
documentation: ug
domainurl: ##DomainURL##
---

# Row Selection in Angular Grid Component

Row selection in the Grid component provides interactive selection of specific rows or ranges of rows within the grid. Row selection can be performed effortlessly through mouse clicks or arrow keys (up, down, left, and right). This feature is useful when highlighting, manipulating, or performing actions on specific rows within the grid.

> To enable row selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property to either `Row` or `Both`. This property determines the selection mode of the grid.

## Single row selection

Single row selection provides selecting a single row at a time within the grid. This feature is useful when focusing on specific rows or performing actions on the data within a particular row.

To configure single row selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property to `Row` and the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Single`. This configuration allows selecting only one row at a time within the grid.

The following example demonstrates single row selection in grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-row-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-row-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs1" %}

## Multiple row selection

To allow selecting multiple rows simultaneously, set Multiple row selection provides option to select multiple rows within the grid. This feature is useful when performing actions on several rows simultaneously or focusing on specific data areas.

To configure multiple row selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) property to `Row` and the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Multiple`. This configuration allows selecting multiple rows at a time within the grid.

The following example demonstrates multiple rows selection in grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-row-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-row-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs2" %}

## Select row at initial rendering

A specific row can be selected during the initial rendering of the Grid component. This feature is particularly useful when highlighting or pre-selecting a specific row in the grid. To achieve this, utilize the [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/grid#selectedrowindex) property provided by the Grid component.

The following example demonstrates selecting a row at initial rendering:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs7" %}

## Select rows in any page based on index value

The Grid allows selecting rows in any page based on their index value. This feature is useful when performing specific actions on rows, such as highlighting, applying styles, or executing operations, regardless of their location across multiple pages within the grid.

To achieve this, utilize the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/grid#selectrow) method and the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/grid#gotopage) method of the grid control. By handling the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list#change) event of the `DropDownList` component, implement the logic to navigate to the desired page and select the row based on the index value. 

Additionally, by handling the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event of the grid, maintain the selection of the desired row after completing the paging action.

The following example demonstrates selecting rows on any page based on their index value using the actionComplete and change events:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-index-page-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-index-page-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-index-page-cs14" %}

## Multiple row selection by single click

The Grid component allows multiple row selection by simply clicking on rows one by one without pressing <kbd>CTRL</kbd> or <kbd>SHIFT</kbd> keys. When clicking on a row, it becomes selected, and clicking on another row adds it to the selection without deselecting the previously selected rows. To deselect a previously selected row, click on the row again.

To configure simple multiple row selection, set the [selectionSettings.enableSimpleMultiRowSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#enablesimplemultirowselection) property to `true`. 

The following example demonstrates configuring multiple row selection with a single click on a grid row using the `enableSimpleMultiRowSelection` property:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs9" %}

## Select rows programmatically

Single row selection, multiple row selection, and range of row selection can be performed externally in a grid using built-in methods. This feature allows interacting with specific rows within the grid programmatically.

### Single row selection

To achieve single row selection, use the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectrow) method. This method allows programmatic selection of a specific row within the grid by specifying the row index.

The example below demonstrates single row selection in the grid. The row index is obtained from a textbox component and passed to the `selectRow` method. Upon clicking the "Select Row" button, the corresponding row is selected:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-row-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-row-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs7" %}

### Multiple rows selection

To achieve multiple row selection, use the [selectRows](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectrows) method. This method allows selecting a collection of rows by specifying their indexes, providing the ability to interact with multiple rows together.

The following example demonstrates selecting multiple rows in the grid by calling the `selectRows` method within the button click event and passing an array of row indexes as arguments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-row-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-row-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs6" %}

### Range of rows selection

Range selection in the grid provides selecting a continuous range of rows within the grid. This feature is particularly useful when performing actions on multiple rows simultaneously or focusing on a specific range of data.

To achieve range selection, use the [selectRowsByRange](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectrowsbyrange) method. This method selects a range of rows from start and end row indexes.
 
The following example demonstrates selecting a range of rows within the grid by obtaining the selected rows start index and end index through textbox components. Then pass these start index and end index as arguments to the `selectRowsByRange` method. When the "Select Rows" button is clicked, a range of rows is selected within the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-row-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-row-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs5" %}

## Select grid rows based on certain condition

Specific rows in the Angular Grid component can be programmatically selected based on a certain condition. This feature is particularly useful when dynamically highlighting or manipulating specific rows in the grid based on custom conditions. This functionality can be achieved using the [selectRows](https://ej2.syncfusion.com/angular/documentation/api/grid#selectrows) method in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event of the grid.

The following example demonstrates selecting grid rows only when the "Employee ID" column value is greater than "3".

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/custom-column-cs5" %}

## Get selected row indexes 

The indexes of the currently selected rows in the Grid component can be retrieved. This feature is particularly useful when performing actions or operations specifically on the selected rows. 

To achieve this, invoke the [getSelectedRowIndexes](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrowindexes) method, which returns an array of selected row indexes.

The following example demonstrates getting selected row indexes using the `getSelectedRowIndexes` method: 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
imports: [
        CommonModule,
        GridModule,
        ButtonModule
    ],
providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: ` 
        <div style="padding: 5px 0px 5px 0px">
          <button ejs-button class="btn" (click)="click()">Get selected row indexes</button>
        </div>
        <p id="message" *ngIf="showMessage">Selected row indexes: {{ selectedRowIndexes }}</p>
        <ejs-grid #grid [dataSource]="data" height="300px" 
        [selectionSettings]="selectionOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="150">
            </e-column>
            <e-column field="ShipCity" headerText="Ship City" width="150">
            </e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150">
            </e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectedRowIndexes: number[] = [];
  public selectionOptions?: SelectionSettingsModel;
  public showMessage = false;

  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  click() {
    this.selectedRowIndexes = (this.grid as GridComponent).getSelectedRowIndexes();
    this.showMessage = this.selectedRowIndexes.length > 0;
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs8" %}

## Get selected records on various pages

The Grid component allows retrieving the selected records even when navigating to different pages. This feature is useful when working with large data sets and allows performing actions on the selected records across multiple pages. 

To persist the selection across pages, enable the [persistSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#persistselection) property. By default, this property is set to `false`. To enable it, set the value to `true` in the `selectionSettings` property of the Grid component.

To retrieve the selected records from different pages, use the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrecords) method. This method returns an array of the selected records.

The following example demonstrates retrieving selected records from various pages using the `getSelectedRecords` method and displaying the "Order ID" values of those records in a dialog when the "Show Selected Records" button is clicked:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {GridModule, PageService, EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
imports: [
        GridModule,
        CommonModule,
        ButtonModule,
        DialogModule
    ],
providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
    <div style="padding: 20px 0px">
      <button ejs-button class="sample" (click)="showSelectedRecords()">Show Selected Records</button>
    </div>
    <ejs-grid #grid [dataSource]="data" allowPaging="true" [selectionSettings]="selectionOptions" 
    [pageSettings]="pageOptions">
      <e-columns>
        <e-column type="checkbox" width="50"></e-column>
        <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" 
        width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
      </e-columns>
    </ejs-grid>
    <ejs-dialog #dialogComponent [header]="'Selected Records'" [content]="dialogContent"
      [visible]="dialogVisible" (close)="dialogClose()" showCloseIcon="true" width="400px" 
      [position]='{ X: 300, Y: 100 }'>
      <ng-template #dialogContent>
        <ng-container>
          <div *ngFor="let record of selectedRecords">
            <p><b>Order ID:</b> {{ record.OrderID }}</p>
          </div>
        </ng-container>
      </ng-template>
    </ejs-dialog>
  `
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public dialogVisible: boolean = false;
  public selectedRecords: Order[] = [];
  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple', persistSelection: true };
    this.pageOptions = { pageSize: 5 };
  }

  showSelectedRecords(): void {
    this.selectedRecords = (this.grid as GridComponent).getSelectedRecords();
    if (this.selectedRecords.length > 0) {
      this.dialogVisible = true;
    }
  }
  dialogClose(): void {
    this.dialogVisible = false;
  }
}
interface Order {
  OrderID?: number;
  CustomerID?: string;
  ShipCountry?: string;
  Freight?: number;
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs12" %}

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns.isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) property.

## Get selected records

Getting selected records enables retrieving the data of the selected rows from the Grid component. This is particularly useful when performing actions on the selected data or displaying specific information based on the selected rows.

To retrieve the selected records, use the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrecords) method. This method enables obtaining an array of objects representing the selected records.

The following example displays the selected row count using the `getSelectedRecords` method:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
imports: [GridModule,CommonModule,ButtonModule],
providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
    <div style="padding: 20px 0px">
      <button ejs-button class="sample" (click)="click()">Selected Records count</button>
    </div>
    <p id="message" *ngIf="showMessage">Selected record count: {{ selectedRecordscount }}</p>
    <div class="control-section">
      <ejs-grid #grid [dataSource]="data" allowPaging="true" [allowSelection]="true" 
      [selectionSettings]="selectionOptions">
        <e-columns>
          <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" 
          textAlign="Right"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
})
export class AppComponent implements OnInit {

  @ViewChild('grid') public grid?: GridComponent;
  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public showMessage = false;
  public selectedRecordscount: number = 0;

  public ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { type: 'Multiple' };
  }
  click(): void {
    this.selectedRecordscount = (this.grid as GridComponent).getSelectedRecords().length;
    this.showMessage = this.selectedRecordscount > 0;
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-record-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-record-cs1" %}

## Clear row selection programmatically

Clearing row selection programmatically in the Grid component is a useful feature when removing any existing row selections. To achieve this, use the [clearRowSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#clearrowselection) method.

> The `clearRowSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) is set to `Multiple` or `Single`.

The following example demonstrates clearing row selection by calling the `clearRowSelection` method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-row-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-row-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs4" %}

## Row selection events

The Grid provides several events related to row selection that allow responding to and customizing the behavior of row selection. These events provide control over various aspects of row selection. The following are the available row selection events:

[rowSelecting](https://ej2.syncfusion.com/angular/documentation/api/grid#rowselecting): This event is triggered before any row selection occurs. It provides an opportunity to implement custom logic or validation before a row is selected, allowing control over the selection process.

[rowSelected](https://ej2.syncfusion.com/angular/documentation/api/grid#rowselected): This event is triggered after a row is successfully selected. Use this event to perform actions or updates when a row is selected.

[rowDeselecting](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdeselecting): This event is triggered just before a selected row is deselected. It allows performing custom logic or validation to decide whether the row should be deselected or not.

[rowDeselected](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdeselected): This event is triggered when a particular selected row is deselected. Use this event to perform actions or validations when a row is no longer selected.

In the following example, row selection is canceled when the value of "Customer ID" is equal to "VINET" within the `rowSelecting` event. The background color changes to green when the value of "Freight" is greater than 10 and less than or equal to 140, triggering the `rowDeselected` event. The background color changes to red when the value of "Freight" is less than or equal to 10 during the `rowDeselected` event. Furthermore, the background color changes to yellow when the value of "Freight" is greater than 140 during the `rowDeselected` event. A notification message is displayed to indicate which event was triggered whenever a row is selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule} from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data ,Order} from './datasource';
import { GridModule,GridComponent, SelectionSettingsModel,PageSettingsModel,RowSelectingEventArgs, RowSelectEventArgs, RowDeselectEventArgs, RowDeselectingEventArgs} from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  imports: [ GridModule],
  standalone: true,
  selector: 'app-root',
  template: `
        <p id="message">{{ message }}</p>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid
            #grid
            [enableHover]='false'
            [dataSource]="data"
            [selectionSettings]="selectionOptions"
            (rowSelected)="rowSelected($event)"
            (rowSelecting)="rowselecting($event)"
            (rowDeselected)="rowDeselected($event)"
            (rowDeselecting)="rowDeselecting($event)">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
              </e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120">
              </e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130">
              </e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public message?: string;

  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('dialogComponent') public dialog?: DialogComponent;
  public selectedCellCount: number = 0;
  public dialogVisible: boolean = false;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Row', type: 'Multiple' };
    this.pageOptions = { pageSize: 5 };
  }
  rowselecting(args: RowSelectingEventArgs): void {
    this.message = `Trigger rowSelecting`;
    if ((args.data as Order).CustomerID == 'VINET')
      args.cancel = true;
  }
  rowSelected(args: RowSelectEventArgs): void {
    this.message = ` Trigger rowSelected`;
    if ((args.data as Order).Freight > 10 || (args.data as Order).Freight <= 140)
      (args.row as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)'; 
  }
  rowDeselected(args: RowDeselectEventArgs ): void {
    this.message = `Trigger rowDeselected`;
    if ((args.data as Order).Freight <= 10)
    (args.row as HTMLElement).style.backgroundColor = 'red';
  }
  rowDeselecting(args: RowDeselectingEventArgs): void {
    this.message = `Trigger rowDeselecting`;
    if ((args.data as Order).Freight > 140)
    (args.row as HTMLElement).style.backgroundColor = 'yellow';
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %} 
{% include code-snippet/grid/selection-row-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-row-cs3" %}

## Pass selected records to server using AJAX

The Syncfusion Angular Grid allows selecting multiple or single records and sending them to the server using AJAX requests. This feature is useful for scenarios requiring processing or manipulation of selected data on the server side.

To pass selected records to the server using AJAX requests in the Syncfusion Angular Grid, follow these steps:

**Step 1:** Open Visual Studio and create an "Angular and ASP.NET Core" project named "SelectedRecord". To create an Angular and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) for detailed steps.

**Step 2 :** Create a simple Angular Grid by following the [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation link.

**Step 3:** In the Angular component HTML file (e.g., "app.component.html"), add a button to trigger the AJAX call and include the Syncfusion Angular Grid with necessary configurations. Handle the button [click](https://ej2.syncfusion.com/angular/documentation/api/button#click) event to retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrecords) method from the grid and send them to the server using AJAX.

```html
<button ejs-button (click)="click($event)">Pass the selected records to controller</button>
<div style="padding: 20px 17px 0 0">
  <ejs-grid #grid [dataSource]='data' allowPaging="true" height="320" [selectionSettings]="selectionOptions">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="100"></e-column>
      <e-column field="EmployeeID" headerText="Employee ID" width="120"></e-column>
      <e-column field="CustomerID" headerText="Customer Name" textAlign="Right" width="120"></e-column>
      <e-column field="OrderDate" headerText="Date" width="150" format="yMd"></e-column>
    </e-columns>
  </ejs-grid>
</div>
```

```ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
  public selectionOptions?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:****/api/grid', // Replace with your API endpoint.
      adaptor: new UrlAdaptor()
    });
    this.selectionOptions = { type: 'Multiple' }
  }
  public click(event: MouseEvent): void {
    var selectedRecords = (this.grid as GridComponent).getSelectedRecords();
    var rows = JSON.stringify(selectedRecords);
    var ajax = new Ajax({
      url: 'https://localhost:****/api/grid/SelectRecord',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: rows
    }); //Use remote server host number instead ****.
    ajax.onSuccess = (result: any) :void => {
    }
    ajax.send();
  }
}

```

**Step 4:** On the server side, create a controller named "GridController.cs" under the "Controllers" folder to handle incoming requests and process selected records. Add the following code:

```cs

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using SelectedReacord.Server.Models;
namespace SelectedReacord.Server.Controllers
{
    [ApiController]
    public class GridController : Controller
    {
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();
            QueryableOperation queryableOperation = new QueryableOperation(); // Initialize DataOperations instance.
            // Handling searching operation.
            if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0)
            {
                DataSource = queryableOperation.PerformSearching(DataSource, DataManagerRequest.Search);
            }
            // Handling filtering operation.
            if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
            {
                foreach (var condition in DataManagerRequest.Where)
                {
                    foreach (var predicate in condition.predicates)
                    {
                        DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerRequest.Where, predicate.Operator);
                    }
                }
            }
            // Handling sorting operation.
            if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0)
            {
                DataSource = queryableOperation.PerformSorting(DataSource, DataManagerRequest.Sorted);
            }
            // Get the total count of records.
            int totalRecordsCount = DataSource.Count();

            // Handling paging operation.
            if (DataManagerRequest.Skip != 0)
            {
                DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
            }
            if (DataManagerRequest.Take != 0)
            {
                DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
            }
            // Return data based on the request.
            return new { result = DataSource, count = totalRecordsCount };
        }

        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }
        [HttpPost]
        [Route("api/[controller]/SelectRecord")]
        public ActionResult SelectRecord([FromBody] List<Gridcolumns> row)
        {
            return Json(row);
        }
        public class SelectedModel
        {
            public List<Gridcolumns> rowData { get; set; }
        }
        public class Gridcolumns
        {
            public int OrderID { get; set; }
            public string CustomerID { get; set; }
            public int EmployeeID { get; set; }
            public DateTime OrderDate { get; set; }
        }
    }
}

```

**Step 5:** Create a model class named "OrdersDetails.cs" under the "Models" folder in the server-side project to represent the order data. Add the following code:

```cs
namespace SelectedReacord.Server.Models
{
    public class OrdersDetails
    {
        public static List<OrdersDetails> order = new List<OrdersDetails>();
        public OrdersDetails()
        {

        }
        public OrdersDetails(
        int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
        DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
        DateTime ShippedDate, string ShipAddress)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.EmployeeID = EmployeeId;
            this.Freight = Freight;
            this.ShipCity = ShipCity;
            this.Verified = Verified;
            this.OrderDate = OrderDate;
            this.ShipName = ShipName;
            this.ShipCountry = ShipCountry;
            this.ShippedDate = ShippedDate;
            this.ShipAddress = ShipAddress;
        }

        public static List<OrdersDetails> GetAllRecords()
        {
            if (order.Count() == 0)
            {
                int code = 10000;
                for (int i = 1; i < 10; i++)
                {
                    order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
                    order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
                    order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                    order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                    order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                    code += 5;
                }
            }
            return order;
        }

        public int? OrderID { get; set; }
        public string? CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public double? Freight { get; set; }
        public string? ShipCity { get; set; }
        public bool? Verified { get; set; }
        public DateTime OrderDate { get; set; }
        public string? ShipName { get; set; }
        public string? ShipCountry { get; set; }
        public DateTime ShippedDate { get; set; }
        public string? ShipAddress { get; set; }
    }
}

```

**Step 7:** In the "Program.cs" file, add the following code:

```cs

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
      builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
app.UseCors();
app.UseDefaultFiles();
app.UseStaticFiles();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");
app.Run();

```

The following screenshot shows passing of selected records to the server:

![Pass selected records to server using ajax](../grid/images/row-selected-record.png)

## Pass selected records to server using FETCH

The Syncfusion Angular Grid allows selecting multiple or single records and sending them to the server using Fetch requests. This feature is useful for scenarios requiring processing or manipulation of selected data on the server side.

To pass selected records to the server using Fetch requests in the Syncfusion Angular Grid, follow these steps:

**Step 1:** Open Visual Studio and create an "Angular and ASP.NET Core" project named "SelectedRecord". To create an Angular and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) for detailed steps.

**Step 2 :** Create a simple Angular Grid by following the [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation link.

**Step 3:** In the Angular component HTML file (e.g., "app.component.html"), add a button to trigger the Fetch call and include the Syncfusion Angular Grid with necessary configurations. Handle the button [click](https://ej2.syncfusion.com/angular/documentation/api/button#click) event to retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid#getselectedrecords) method from the grid and send them to the server using Fetch.

```html
<button ejs-button (click)="click($event)">Pass the selected records to controller</button>
<div style="padding: 20px 17px 0 0">
  <ejs-grid #grid [dataSource]='data' allowPaging="true" height="320" [selectionSettings]="selectionOptions">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="100"></e-column>
      <e-column field="EmployeeID" headerText="Employee ID" width="120"></e-column>
      <e-column field="CustomerID" headerText="Customer Name" textAlign="Right" width="120"></e-column>
      <e-column field="OrderDate" headerText="Date" width="150" format="yMd"></e-column>
    </e-columns>
  </ejs-grid>
</div>
```

```ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Fetch } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: DataManager;
  public selectionOptions?: SelectionSettingsModel;

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://localhost:****/api/grid', // Replace with your API endpoint.
      adaptor: new UrlAdaptor()
    });
    this.selectionOptions = { type: 'Multiple' }
  }
  public click(event: MouseEvent): void {
    var selectedRecords = (this.grid as GridComponent).getSelectedRecords();
    var rows = JSON.stringify(selectedRecords);
    var fetch = new Fetch({
      url: 'https://localhost:****/api/grid/SelectRecord',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: rows
    }); //Use remote server host number instead ****
    fetch.onSuccess = (result: any):void => {
    }
   fetch.send();
  }
}

```

**Step 4:** On the server side, create a controller named "GridController.cs" under the "Controllers" folder to handle incoming requests and process selected records. Add the following code:

```cs

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using SelectedReacord.Server.Models;
namespace SelectedReacord.Server.Controllers
{
    [ApiController]
    public class GridController : Controller
    {
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();
            QueryableOperation queryableOperation = new QueryableOperation(); // Initialize DataOperations instance.
            // Handling searching operation.
            if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0)
            {
                DataSource = queryableOperation.PerformSearching(DataSource, DataManagerRequest.Search);
            }
            // Handling filtering operation.
            if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
            {
                foreach (var condition in DataManagerRequest.Where)
                {
                    foreach (var predicate in condition.predicates)
                    {
                        DataSource = queryableOperation.PerformFiltering(DataSource, DataManagerRequest.Where, predicate.Operator);
                    }
                }
            }
            // Handling sorting operation.
            if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0)
            {
                DataSource = queryableOperation.PerformSorting(DataSource, DataManagerRequest.Sorted);
            }
            // Get the total count of records.
            int totalRecordsCount = DataSource.Count();

            // Handling paging operation.
            if (DataManagerRequest.Skip != 0)
            {
                DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
            }
            if (DataManagerRequest.Take != 0)
            {
                DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
            }
            // Return data based on the request.
            return new { result = DataSource, count = totalRecordsCount };
        }

        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }
        [HttpPost]
        [Route("api/[controller]/SelectRecord")]
        public ActionResult SelectRecord([FromBody] List<Gridcolumns> row)
        {
            return Json(row);
        }
        public class SelectedModel
        {
            public List<Gridcolumns> rowData { get; set; }
        }
        public class Gridcolumns
        {
            public int OrderID { get; set; }
            public string CustomerID { get; set; }
            public int EmployeeID { get; set; }
            public DateTime OrderDate { get; set; }
        }
    }
}

```

**Step 5:** Create a model class named "OrdersDetails.cs" under the "Models" folder in the server-side project to represent the order data. Add the following code:

```cs
namespace SelectedReacord.Server.Models
{
    public class OrdersDetails
    {
        public static List<OrdersDetails> order = new List<OrdersDetails>();
        public OrdersDetails()
        {

        }
        public OrdersDetails(
        int OrderID, string CustomerId, int EmployeeId, double Freight, bool Verified,
        DateTime OrderDate, string ShipCity, string ShipName, string ShipCountry,
        DateTime ShippedDate, string ShipAddress)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.EmployeeID = EmployeeId;
            this.Freight = Freight;
            this.ShipCity = ShipCity;
            this.Verified = Verified;
            this.OrderDate = OrderDate;
            this.ShipName = ShipName;
            this.ShipCountry = ShipCountry;
            this.ShippedDate = ShippedDate;
            this.ShipAddress = ShipAddress;
        }

        public static List<OrdersDetails> GetAllRecords()
        {
            if (order.Count() == 0)
            {
                int code = 10000;
                for (int i = 1; i < 10; i++)
                {
                    order.Add(new OrdersDetails(code + 1, "ALFKI", i + 0, 2.3 * i, false, new DateTime(1991, 05, 15), "Berlin", "Simons bistro", "Denmark", new DateTime(1996, 7, 16), "Kirchgasse 6"));
                    order.Add(new OrdersDetails(code + 2, "ANATR", i + 2, 3.3 * i, true, new DateTime(1990, 04, 04), "Madrid", "Queen Cozinha", "Brazil", new DateTime(1996, 9, 11), "Avda. Azteca 123"));
                    order.Add(new OrdersDetails(code + 3, "ANTON", i + 1, 4.3 * i, true, new DateTime(1957, 11, 30), "Cholchester", "Frankenversand", "Germany", new DateTime(1996, 10, 7), "Carrera 52 con Ave. Bolívar #65-98 Llano Largo"));
                    order.Add(new OrdersDetails(code + 4, "BLONP", i + 3, 5.3 * i, false, new DateTime(1930, 10, 22), "Marseille", "Ernst Handel", "Austria", new DateTime(1996, 12, 30), "Magazinweg 7"));
                    order.Add(new OrdersDetails(code + 5, "BOLID", i + 4, 6.3 * i, true, new DateTime(1953, 02, 18), "Tsawassen", "Hanari Carnes", "Switzerland", new DateTime(1997, 12, 3), "1029 - 12th Ave. S."));
                    code += 5;
                }
            }
            return order;
        }

        public int? OrderID { get; set; }
        public string? CustomerID { get; set; }
        public int? EmployeeID { get; set; }
        public double? Freight { get; set; }
        public string? ShipCity { get; set; }
        public bool? Verified { get; set; }
        public DateTime OrderDate { get; set; }
        public string? ShipName { get; set; }
        public string? ShipCountry { get; set; }
        public DateTime ShippedDate { get; set; }
        public string? ShipAddress { get; set; }
    }
}

```

**Step 6:** In the "Program.cs" file, add the following code:

```cs

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
app.UseCors();
app.UseDefaultFiles();
app.UseStaticFiles();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");
app.Run();

```

The following screenshot shows passing selected records to the server:

![Pass selected records to server using fetch](../grid/images/row-selected-record.png)
