---
layout: post
title: Column selection in Angular Grid component | Syncfusion
description: Learn how to enable and use column selection in the Syncfusion Angular Grid component, including single, multiple, range, and programmatic column selections.
platform: ej2-angular
control: Column selection 
documentation: ug
domainurl: ##DomainURL## 
---

# Column selection in Angular Grid component

Column selection in the Grid component allows users to select one or more columns using mouse interactions or arrow keys. This feature is useful for highlighting, manipulating, or performing actions on specific columns within the Grid.

To enable column selection, set the [`selectionSettings.allowColumnSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#allowcolumnselection) property to **true**.

Example: Enable column selection using `allowColumnSelection`:

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

To select a single column at a time, set [`selectionSettings.allowColumnSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#allowcolumnselection) to **true** and [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Single**.

Example: Enable single column selection:

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

To select multiple columns simultaneously, set [`selectionSettings.allowColumnSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#allowcolumnselection) to **true** and [`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to **Multiple**.

Example: Enable multiple column selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/selection-column-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/selection-column-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/selection-column-cs8" %}

## Select columns externally

You can select single, multiple, or a range of columns externally using the available methods.

### Single column selection

Use the [`selectColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcolumn) method to select a column by its index.

> Column selection requires `allowColumnSelection` set to **true** and `type` to **Single**.

Example: Select a column programmatically:

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

Use the [`selectColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcolumns) method to select columns by passing an array of column indexes.

> For multiple column selection, set `allowColumnSelection` to **true** and `type` to **Multiple**.

Example: Select multiple columns by index array:

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

Use the [`selectColumnsByRange`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcolumnsbyrange) method to select columns from a start index to an end index.

Example: Select a range of columns:

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

The [`selectColumnWithExisting`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#selectcolumnwithexisting) method allows you to add a column to the current selection without clearing the existing selected columns.

Example: Add a column to the current selection:

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

To clear column selections, use the [`clearColumnSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/selection/#clearcolumnselection) method.

> The `clearColumnSelection` method works for both **Multiple** and **Single** selection types.

Example: Clear column selection:

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

The Angular Grid component provides several column selection events for further customization and handling:

- [`columnSelecting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnselecting): Fires before a column is selected, allowing cancellation or validation.
- [`columnSelected`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnselected): Fires after a column is selected.
- [`columnDeselecting`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columndeselecting): Fires just before a selected column is deselected, offering an opportunity for custom logic.
- [`columnDeselected`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columndeselected): Fires after a column is deselected.

In this example, column selection is canceled if `field` equals **CustomerID** in the `columnSelecting` event. The **headerCell** background turns green upon the `columnSelected` event and red upon the `columnDeselecting` event. A message indicates the column selection event that was triggered.

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
