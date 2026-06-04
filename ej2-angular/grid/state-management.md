---
layout: post
title: Angular Grid - State Management | Syncfusion
description: Angular Grid state management describes preserving grid state, serializing settings, and integrating with external state stores like Redux for consistent UX.
platform: ej2-angular
control: State management 
documentation: ug
domainurl: ##DomainURL##
---

# State Management in Angular Grid Component

State management in the Angular Grid component enables maintaining the grid's state across browser refreshes and during navigation within the same browser session. This capability helps retain the grid's configuration and data after a page reload.

Enable state persistence in the grid using the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) property. When this property is set to `true`, the grid automatically saves its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#), preserving the state across page reloads.

```html
<ejs-grid [dataSource]="data" [enablePersistence]="true"></ejs-grid>
```

> The Grid stores state using the combination of the component name and component ID in storage. For example, if the component name is "grid" and the ID is "OrderDetails", the state is stored as **gridOrderDetails**.

When enabling state persistence, the following grid settings will persist in the local storage.

Grid Settings |Properties persist |Ignored properties
-------|-------|-------|
pageSettings |currentPage<br>pageCount<br>pageSize<br>pageSizes<br>totalRecordsCount |template<br>enableQueryString
groupSettings |allowReordering<br>columns<br>disablePageWiseAggregates<br>enableLazyLoading<br>showDropArea<br>showGroupedColumn<br>showToggleButton<br>showUngroupButton |captionTemplate
columns |allowEditing<br>allowFiltering<br>allowGrouping<br>allowReordering<br>allowResizing<br>allowSearching<br>allowSorting<br>autoFit<br>disableHtmlEncode<br>enableGroupByFormat<br>field<br>foreignKeyField<br>index<br>showColumnMenu<br>showInColumnChooser<br>sortDirection<br>type<br>uid<br>visible<br>width |clipMode<br>commands<br>customAttributes<br>dataSource<br>defaultValue<br>displayAsCheckBox<br>editeditemplate<br>editType<br>filter<br>filterBarTemplate<br>filterTemplate<br>foreignKeyValue<br>format<br>formatter<br>freeze<br>headerTemplate<br>headerText<br>headerTextAlign<br>headerValueAccessor<br>hideAtMedia<br>isFrozen<br>isIdentity<br>isPrimaryKey<br>lockColumn<br>maxWidth<br>minWidth<br>sortComparer<br>template<br>textAlign<br>validationRules<br>valueAccessor
sortSettings |- |-
filterSettings |- |-
searchSettings |- |-
selectedRowIndex |- |-

> The grid will persist only the last selected row index.

## Restore initial Grid state

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid component, restoring the grid to its initial state reverts all changes. This is useful for returning the grid to original settings, removing applied filters, sorting, or column reordering.

The following steps describe the process of resetting the grid to its initial state, even when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) property is enabled.

### Changing component Id

Restoring the initial state of the grid can be achieved by changing the component ID. This causes the grid to be treated as a new instance, reverting to default settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs1" %}

### Clearing local storage

Clearing the local storage associated with the grid component resets the grid by removing stored state information and returning the grid to its original configuration.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs2" %}

## Restore to specific state version

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports version-based persistence for restoration to a specific state. 

Steps to enable version-based persistence in the Angular Grid:

1. Import `enableVersionBasedPersistence` from `@syncfusion/ej2-base`.
2. Call `enableVersionBasedPersistence(true)` to turn on version-based persistence for the application.
3. Define the grid with the required properties and bind the data source.
4. Set the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) property on the grid to store and restore its state automatically.
5. Use the [ej2state-persistenceVersion](https://ej2.syncfusion.com/angular/documentation/api/grid#ej2state-persistenceversion) property on the grid to define the version of the persisted state.

The example below assigns the targeted version to the grid's `ej2statepersistenceVersion` dynamically in a `clickHandler` method. The code checks local storage for a persisted state for the selected version; if found, the grid is updated with settings retrieved from local storage (columns, filterSettings, groupSettings, sortSettings, pageSettings, and selectedRowIndex). If no persisted state is found, the current grid state is saved to local storage using the [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/grid#getpersistdata) method.

The example below demonstrates integration of version-based persistence and restoration to a specific state version:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridModule,FilterService, PageService, GridComponent, GroupService, SortService, ReorderService } from '@syncfusion/ej2-angular-grids';
import { enableVersionBasedPersistence } from '@syncfusion/ej2-base';

enableVersionBasedPersistence(true);

@Component({
    imports: [ GridModule,ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<h4 id='message'>{{message}}</h4>
    <button ejs-button *ngFor="let v of versions" [id]="'restore' + v" (click)="clickHandler('v.' + v)">Version {{ v }}</button>
               <ejs-grid #grid id="OrderDetails" [dataSource]='data' [enablePersistence]='true' [ej2StatePersistenceVersion]='gridversion' 
               [allowPaging]='true' [allowFiltering]='true' [allowReordering]='true' [allowSorting]='true' [allowGrouping]='true' height='160px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService, GroupService, SortService, ReorderService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public message?: string;
    public gridversion?: string = 'v.0';
    public versions: number[] = [1, 2, 3];


    ngOnInit(): void {
        this.data = data;
    }
    clickHandler(version: string) {
        const grid = this.grid as GridComponent;
        grid.ej2StatePersistenceVersion = version;
        var persistedGridSettings: string = (window.localStorage.getItem(`gridOrderDetails` + grid.ej2StatePersistenceVersion)) as string;
        if (persistedGridSettings) {
            grid.setProperties(JSON.parse(persistedGridSettings));
            this.message = `Grid state restored to ` + version;
        } else {
            var gridData = grid.getPersistData();
            window.localStorage.setItem((`gridOrderDetails` + grid.ej2StatePersistenceVersion), gridData);
        }

    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs3" %}

## Restore to previous state

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component supports saving and restoring state using local storage. This feature preserves the current state of the grid, such as column order, sorting, and filtering, enabling a return to previous configurations.

Implement this functionality using the `getItem` and `setItem` methods for local storage, along with the Grid component's `setProperties` and [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/grid#getpersistdata) methods.

The code below demonstrates saving and restoring the previous state of a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component using local storage.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs4/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.component.html" %}
{% raw %}
<div class="control-section">
    <button ejs-button class="e-success" (click)="save()">Save</button>
    <button ejs-button class="e-danger" (click)="restore()">restore</button>
    <div id='message'>{{message}}</div>
    <ejs-grid #Orders id="Orders" [dataSource]="data" allowPaging="true" allowSorting="true" allowFiltering="true"
        [allowGrouping]="true" [editSettings]="editSettings" [groupSettings]="groupOptions"
        [filterSettings]="filterOptions" [toolbar]="toolbar" [pageSettings]="pageSettings" [enablePersistence]="true"
        height="200" (actionBegin)="actionBegin()">
        <e-columns>
            <e-column field="OrderID" headerText="Order ID" width="140" textAlign="Right" isPrimaryKey="true"
                [validationRules]="orderidrules"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="140" [validationRules]="customeridrules">
            </e-column>
            <e-column field="Freight" headerText="Freight" width="140" format="C2" textAlign="Right"
                editType="numericedit" [validationRules]="freightrules"></e-column>
            <e-column field="OrderDate" [allowGrouping]="false" headerText="Order Date" width="120"
                editType="datetimepickeredit" [format]="formatoptions" textAlign="Right"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="150" editType="dropdownedit"
                [edit]="editparams"></e-column>
        </e-columns>
    </ejs-grid>
</div>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs4" %}

## Maintaining custom query in a persistent state

When [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) is enabled, the grid does not automatically maintain custom query parameters after a page load because the grid refreshes its query params on every load. Maintain custom query params by resetting the [addParams](https://ej2.syncfusion.com/documentation/api/data/query#addparams) method in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Observables binding with state persistence

The Syncfusion Angular Grid supports state persistence when using The Syncfusion Angular Grid supports state persistence with observable binding, ensuring the grid retains state across sessions. This is useful for real-time data updates or asynchronous data sources while preserving interactions such as sorting, filtering, paging, and grouping.

Implementing state persistence with observables requires manual handling of the initial query state. This involves:

* Retrieving the initial query using the grid’s [getDataModule](https://ej2.syncfusion.com/angular/documentation/api/grid#getdatamodule) method with `generateQuery`.
* Obtaining the state from the query via `getStateEventArgument` method.
* Sending the retrieved state to the service to fetch data accordingly.

Except for the initial render, state persistence retains manually performed actions by storing the state in the browser’s `localStorage`, allowing persistence across page reloads. 

The following example demonstrates using the [created](https://ej2.syncfusion.com/angular/documentation/api/grid#created) event to send the persisted state to the service at initial render:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs9/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="order.service.ts" %}
{% include code-snippet/grid/state-persistence-cs9/src/order.service.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/grid/state-persistence-cs9" %}

## Get or set local storage value

If the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) property is set to `true`, the grid property value is saved in **window.localStorage** for reference. Get or set the localStorage value using the `getItem` and `setItem` methods in **window.localStorage**.

Retrieve the grid model from Local Storage as follows:

```typescript
//get the Grid model.
let value: string = window.localStorage.getItem('gridOrders'); //"gridOrders" is component name + component id.
let model: Object = JSON.parse(value);

```

```typescript
//set the Grid model.
window.localStorage.setItem('gridOrders', JSON.stringify(value)); //"gridOrders" is component name + component id.

```

## Prevent columns from persisting

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, certain settings may need to be excluded from being saved when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) feature is turned on. When the `enablePersistence` property is `true`, grid properties such as [Grouping](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings), [Paging](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings), [Filtering](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings), [Sorting](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings), and [Columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column) persist. To prevent specific properties from being persisted, the `addOnPersist` method can be used.

The following example demonstrates preventing grid columns from persisting. Override the `addOnPersist` method in the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event and remove the columns from the key list given for persistence.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs6" %}

## Add to persist

Persistence can be added to a Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component to enhance the application experience. Persistence allows saving and restoring the state of the grid, including column layouts, sorting, filtering, and other settings. This section describes the process of persisting column templates, header templates, and header text settings in the Angular Grid.

### Add a new column in persisted columns list

When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) property is set to `true` in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, column configurations are automatically persisted. To add new columns to an already persisted state, the grid’s built-in methods such as `push` can be used, followed by calling the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid#refreshcolumns) method to update the UI with the newly added columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs7" %}

> Adding new columns using `ColumnDirectives` directly in the grid initialization is not recommended when intending to persist new columns with the existing columns list. 

### Persist the column template, header template and header text

By default, when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid#enablepersistence) property is `true` in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted because these properties can be customized at the application level.

Restoring these column properties and achieving persistence requires cloning the grid's columns property using JavaScript Object's assign method and manually storing it along with the persist data. When restoring the settings, assign this cloned column object to the grid's columns property to restore the column settings. The sample below demonstrates this process:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent, Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [ GridModule, ButtonAllModule],
providers: [GroupService, FilterService, PageService]
standalone: true,
    selector: 'app-root',
    template: `<div id='message'>{{message}}</div><button ejs-button id='save' (click)='save()'>Save column settings</button><button ejs-button id='restore' (click)='restore()'>Restore column settings</button>
               <ejs-grid #Grid id="Orders" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120>
                    </e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 headerTemplate='<button ejs-button>HeaderTemplate</button>'>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150 template='#template'>
                    </e-column>
                </e-columns>
                </ejs-grid>`,
    
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('Grid')
    public grid?: GridComponent;
    public message: string = '';
    public persistedGridSettings?: object;

    ngOnInit(): void {
        this.data = data;
    }
    save() {
        this.persistedGridSettings = JSON.parse(((this.grid as GridComponent)).getPersistData());
        var gridColumns = Object.assign([], ((this.grid as GridComponent)).getColumns());
        (this.persistedGridSettings as any).columns.forEach((persistedColumn: Column) => {
            const column = gridColumns.find((col: Column) => col.field === persistedColumn.field);
            if (column) {
                persistedColumn.headerText = 'Text Changed';
                persistedColumn.template = (column as Column).template;
                persistedColumn.headerTemplate = (column as Column).headerTemplate;
            }
        });
        window.localStorage.setItem('gridOrders1', JSON.stringify(this.persistedGridSettings));
        this.grid?.setProperties(this.persistedGridSettings as object);
        this.message = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
    }
    restore() {
        const savedSettings = window.localStorage.getItem("gridOrders1");
        if (savedSettings) {
            this.grid?.setProperties(JSON.parse(savedSettings));
            this.message = 'Restored the headerText, template column, and headerTemplate';
        } else {
            this.message = 'No saved settings found.';
        }
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs8" %}
