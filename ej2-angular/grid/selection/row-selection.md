---
layout: post
title: Row selection in Angular Grid component | Syncfusion
description: Learn row selection in Syncfusion Angular Grid for interactive, programmatic, and event-driven single, multiple, and range selections.
platform: ej2-angular
control: Row selection 
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Angular Grid component

Row selection in the Grid component enables the selection of specific rows or ranges of rows through mouse clicks or keyboard navigation (up, down, left, right arrows). This is useful for highlighting, manipulating, or performing actions on specific rows.

> To enable row selection, set the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) property to either **Row** or **Both**.

## Single row selection

To select one row at a time, set [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to **Row** and [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Single**.

Example:

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

To allow selecting multiple rows simultaneously, set [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode) to **Row** and [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Multiple**.

Example:

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

Use the [`selectedRowIndex`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectedrowindex) property to highlight or pre-select a specific row when the Grid is initially rendered.

Example:

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

The Grid allows you to select rows in any page based on their index value. This feature is useful when you want to perform specific actions on rows, such as highlighting, applying styles, or executing operations, regardless of their location across multiple pages within the grid.

To achieve this, you can utilize the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrow) method and the [goToPage](https://ej2.syncfusion.com/angular/documentation/api/grid/#gotopage) method of the Grid control. By handling the [change](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#change) event of `DropDownList` component, you can implement the logic to navigate to the desired page and select the row based on the index value. 

Additionally, by handling the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event of the Grid, you can maintain the selection of the desired row after completing the paging action.

Example:

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

Set [`selectionSettings.enableSimpleMultiRowSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#enablesimplemultirowselection) to **true** to select or deselect multiple rows with single clicks (no need for CTRL or SHIFT keys).

Example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs9" %}

## Select rows externally

You can programmatically select single rows, multiple rows, and ranges of rows.

### Single row selection

Use the [`selectRow`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectrow) method with an index to select a single row.

Example:

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

Use the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectrows) method with an array of indexes.

Example:

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

Use the [`selectRowsByRange`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectrowsbyrange) method to select a range of rows by their start and end indexes.

Example:

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

Rows can be selected programmatically based on data conditions using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) and [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) events. Combine this with `rowDataBound` to identify target rows.

Example: Select grid rows where **EmployeeID** is greater than **3**:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/custom-column-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/custom-column-cs5" %}

## How to get selected row indexes

Retrieve the indexes of selected rows in the Grid using [`getSelectedRowIndexes`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrowindexes).

Example:

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
        <div style="padding: 10px 0px 20px 0px">
          <button ejs-button class="btn" (click)="click()">Get selected row indexes</button>
        </div>
        <p id="message" *ngIf="showMessage">Selected row indexes: {{ selectedRowIndexes }}</p>
        <ejs-grid #grid [dataSource]="data" height="315px" 
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

## How to get selected records on various pages

Enable [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#persistselection)the property to **true** and retrieve selected records even after navigating between grid pages, using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords).

Example:

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

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns](https://ej2.syncfusion.com/angular/documentation/api/grid/#columns) property.

## How to get selected records

Retrieve the data objects of selected rows using [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords).

Example: Show the selected record count:

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

Use the [`clearRowSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#clearrowselection) method to clear any existing row selections. Works for both **Multiple** and **Single** selection types.

Example:

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

The Angular Grid provides several row selection events:

- [`rowSelecting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselecting): Fires before a row is selected, allows cancellation or validation.
- [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselected): Fires after a row is selected.
- [`rowDeselecting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdeselecting): Fires just before a selected row is deselected, allows custom logic.
- [`rowDeselected`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdeselected): Fires after a row is deselected.

Example: Row selection is canceled if **CustomerID** is **VINET** in `rowSelecting`, and the background color changes are handled according to **Freight** values in other events.

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

The Syncfusion Angular Grid allows you to select multiple or single records and send them to the server using AJAX requests. This feature is useful for scenarios where you need to process or manipulate selected data on the server side.

To achieve passing selected records to the server using AJAX requests in the Syncfusion Angular Grid, follow these steps:

**Step 1:** Open Visual Studio and create an **Angular and ASP.NET Core** project named **SelectedRecord**. To create an Angular and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) for detailed steps.

**Step 2 :** Create a simple Angular Grid by following the [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation link.

**Step 3:** In your Angular component HTML file (e.g., **app.component.html**), add a button to trigger the AJAX call and include the Syncfusion Angular Grid with necessary configurations:

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

**Step 4:** In your Angular component (**app.component.ts**), you need to handle the button [click](https://ej2.syncfusion.com/angular/documentation/api/button/#click) event. When clicked, retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method from the Syncfusion Angular Grid and send them to the server using AJAX. Add the following code:

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

**Step 5:** On the server side, create a controller named **GridController.cs** under the **Controllers** folder to handle incoming requests and process selected records. Add the following code:

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

**Step 6:** Create a model class named **OrdersDetails.cs** under the **Models** folder in the server-side project to represent the order data. Add the following code:

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

**Step 7:** In the **Program.cs** file, add the following code:

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

The following screenshot shows how to pass selected records to the server:

![Pass selected records to server using ajax](../grid/images/row-selected-record.png)

## Pass selected records to server using FETCH

The Syncfusion Angular Grid allows you to select multiple or single records and send them to the server using Fetch requests. This feature is useful for scenarios where you need to process or manipulate selected data on the server side.

To achieve passing selected records to the server using Fetch requests in the Syncfusion Angular Grid, follow these steps:

**Step 1:** Open Visual Studio and create an **Angular and ASP.NET Core** project named **SelectedRecord**. To create an Angular and ASP.NET Core application, follow the documentation [link](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-angular?view=vs-2022) for detailed steps.

**Step 2 :** Create a simple Angular Grid by following the [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) documentation link.

**Step 3:** In your Angular component HTML file (e.g., **app.component.html**), add a button to trigger the Fetch call and include the Syncfusion Angular Grid with necessary configurations:

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

**Step 4:** In your Angular component (**app.component.ts**), you need to handle the button [click](https://ej2.syncfusion.com/angular/documentation/api/button/#click) event. When clicked, retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method from the Syncfusion Angular Grid and send them to the server using Fetch. Add the following code:

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

**Step 5:** On the server side, create a controller named **GridController.cs** under the **Controllers** folder to handle incoming requests and process selected records. Add the following code:

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

**Step 6:** Create a model class named **OrdersDetails.cs** under the **Models** folder in the server-side project to represent the order data. Add the following code:

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

**Step 7:** In the **Program.cs** file, add the following code:

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

The following screenshot shows how to pass selected records to the server:

![Pass selected records to server using fetch](../grid/images/row-selected-record.png)
