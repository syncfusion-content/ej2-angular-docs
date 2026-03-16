---
layout: post
title: Angular Grid - Column selection | Syncfusion
description: Angular Grid column selection supports selecting entire columns, configuration options, and examples for applying operations or styling to selected columns.
platform: ej2-angular
control: Column selection 
documentation: ug
domainurl: ##DomainURL## 
---

# Column Selection in Angular Grid Component

Column selection in the Grid allows selecting one or more columns by clicking the column header or using keyboard navigation. This feature is useful for highlighting, manipulating, or performing actions on specific columns within the grid. Press <kbd>Esc</kbd> to clear the current column selection.

To enable column selection in the grid, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true`. 

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-cs6" %}

## Single column selection

Single column selection allows selecting one column at a time within the grid. This capability is particularly useful when focusing on specific columns or performing actions on the data within a particular column.

To enable single column selection, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true`. Additionally, set the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Single`. This configuration provides single column selection at a time within the grid.

**Mouse interaction:** Click on any column header to select a single column.

**Keyboard navigation:** 
* Navigate between columns using the <kbd>Left</kbd> and <kbd>Right</kbd> arrow keys when a column header is focused.
* Press the <kbd>Enter</kbd> key to select the focused column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs7" %}

## Multiple column selection

Multiple column selection allows selecting several columns simultaneously within the grid. This capability is particularly useful when focusing on or performing actions on multiple columns at once.

To enable multiple column selection, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true`. Additionally, set the [selectionSettings.type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) property to `Multiple`. This configuration provides multiple column selection within the grid.

**Mouse interactions:**
* Hold the <kbd>Ctrl</kbd> key and click on different column headers to select multiple non-consecutive columns.
* Hold the <kbd>Shift</kbd> key and click on the start column header, then click on the end column header to select a continuous range of columns.

**Keyboard navigation:** Hold the <kbd>Shift</kbd> key and use the <kbd>Left</kbd> or <kbd>Right</kbd> arrow keys to extend the selection to multiple columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs8" %}

## Select columns programmatically

The Grid supports externally performing single column selection, multiple column selection, and range of column selection using built-in methods. This capability allows interaction with specific columns within the grid. The following topic demonstrates achieving these selections using methods.

### Single column selection

column within the grid. This capability is particularly useful when focusing on specific columns or performing actions on the data within a particular column.

To achieve single column selection, use the [selectColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcolumn) method. This method selects the column by passing the column index as a parameter.

> Column selection requires the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true` and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) should be `Single`.

The following example demonstrates selecting a single column within the grid. The selected column index is obtained through a `textbox` component and passed as an argument to the `selectColumn` method. When the button event is triggered by clicking the "Select Column" button, a single column is selected within the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs9" %}

### Multiple column selection

Multiple column selection in the grid enables programmatic selection of several columns at once, allowing operations to be performed on multiple columns simultaneously. This capability is particularly useful for scenarios that require highlighting, manipulating, or applying actions across more than one column in the grid.

To achieve multiple column selection, use the [selectColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcolumns) method. This method selects columns by passing an array of column indexes as a parameter.

> Column selection requires the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#allowcolumnselection) property to `true` and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) should be `Multiple`.

The following example demonstrates selecting multiple columns in the grid by calling the `selectColumns` method within the button click event and passing an array of column indexes as arguments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs10/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs10" %}

### Range of column selection

Range of column selection provides selecting a group of consecutive columns within the grid. This capability is particularly useful when performing actions on a consecutive set of columns or focusing on specific column ranges.

To achieve range of column selection, use the [selectColumnsByRange](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcolumnsbyrange) method. This method selects columns by specifying the start and end column indexes.

The following example demonstrates selecting a range of columns within the grid. The selected column's start index and end index are obtained through `textbox` components and passed as arguments to the `selectColumnsByRange` method. When the button event is triggered by clicking the "Select Columns" button, a range of columns is selected within the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs11/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs11" %}

### Select with existing column

Select with existing column provides adding a column to the current selection without clearing the existing column selection in the Grid component. This capability is valuable when expanding the selection to include additional columns while preserving previously selected columns.

To achieve this, use the [selectColumnWithExisting](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#selectcolumnwithexisting) method. This method selects a column along with an existing column by specifying the column index as a parameter.

The following example demonstrates selecting a column with an existing column. The selected column index is obtained through a `textbox` component and passed as an argument to the `selectColumnWithExisting` method. When the button event is triggered by clicking the "Select Columns" button, the specified column is selected along with any existing selections within the grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs12" %}

## Clear column selection programmatically

Clearing column selection programmatically in the Grid component is useful for removing any existing column selections. To achieve this, use the [clearColumnSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#clearcolumnselection) method.

> The `clearColumnSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#type) is set to `Multiple` or `Single`.

The following example demonstrates clearing column selection by calling the `clearColumnSelection` method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs14" %}

## Column selection events

he Grid provides several events related to column selection that allow responding to and customizing the behavior of column selection. The following are the available column selection events:

[columnSelecting](https://ej2.syncfusion.com/angular/documentation/api/grid#columnselecting): This event is triggered before any column selection occurs. It provides an opportunity to implement custom logic or validation before a column is selected, allowing control of the selection process.

[columnSelected](https://ej2.syncfusion.com/angular/documentation/api/grid#columnselected): This event is triggered after a column is successfully selected. Use this event to perform actions or updates when a column is selected.

[columnDeselecting](https://ej2.syncfusion.com/angular/documentation/api/grid#columndeselecting): This event is triggered just before a selected column is deselected. It allows performing custom logic or validation to decide whether the column should be deselected or not.

[columnDeselected](https://ej2.syncfusion.com/angular/documentation/api/grid#columndeselected): This event is triggered when a particular selected column is deselected. Use this event to perform actions or validations when a column is no longer selected.

In the following example, column selection is canceled when the value of `field` is equal to "CustomerID" within the `columnSelecting` event. The "headerCell" background color changes to green when the `columnSelected` event is triggered and changes to red when the `columnDeselecting` event is triggered. A notification message is displayed to indicate which event was triggered whenever a column is selected.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  SelectionSettingsModel,
  PageSettingsModel,
  ColumnSelectEventArgs,
  ColumnSelectingEventArgs,
  ColumnDeselectEventArgs,
  Column,
} from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `<p id="message">{{ message }}</p>
            <div style="padding: 20px 0px 0px 0px">
              <ejs-grid
                #grid
                [dataSource]="data"
                [selectionSettings]="selectionOptions"
                (columnSelected)="columnSelected($event)"
                (columnSelecting)="columnselecting($event)"
                (columnDeselected)="columnDeselected($event)"
                (columnDeselecting)="columnDeselecting($event)">
                <e-columns>
                  <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
                  width="120"></e-column>
                  <e-column field="CustomerID" headerText="Customer ID" width="120">
                  </e-column>
                  <e-column field="ShipCountry" headerText="Ship Country" width="130">
                  </e-column>
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
    this.selectionOptions = { allowColumnSelection: true };
    this.pageOptions = { pageSize: 5 };
  }
  columnSelected(args: ColumnSelectEventArgs): void {
    this.message = `Trigger columnSelected`;
    (args.headerCell as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)';

  }
  columnselecting(args: ColumnSelectingEventArgs ): void {
    this.message = `Trigger columnSelecting`;
    if ((args.column as Column).field == "CustomerID")
      args.cancel = true;
  }
  columnDeselected(args: ColumnDeselectEventArgs ): void {
    this.message = `Trigger columnDeselected`;
    (args.headerCell as HTMLElement).style.backgroundColor = 'rgb(245, 69, 69)';
  }
  columnDeselecting(args: ColumnDeselectEventArgs ): void {
    this.message = `Trigger columnDeselecting`;
    if ((args.column as Column).field == "Freight")
      args.cancel = true;
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs13" %}
