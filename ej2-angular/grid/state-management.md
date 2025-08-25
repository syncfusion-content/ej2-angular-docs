---
layout: post
title: State management in Angular Grid component | Syncfusion
description: Learn here all about State management in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State management 
documentation: ug
domainurl: ##DomainURL##
---

# State Management in Angular Grid component

State management in the Angular Grid component maintains the grid's configuration and user interactions across browser sessions, page refreshes, and navigation events. This capability preserves critical grid states including column arrangements, sorting preferences, filtering criteria, paging positions, and grouping configurations, ensuring users can resume their work exactly where they left off.

To enable state persistence in the Grid, utilize the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property. When set to **true**, the grid automatically saves its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp), ensuring state preservation across page reloads and browser sessions.

```html
<ejs-grid [dataSource]="data" [enablePersistence]="true"></ejs-grid>
```

> The grid stores state using the combination of component name and component ID in storage. For example, if the component name is **grid** and the ID is **OrderDetails**, the state is stored as **gridOrderDetails**.

When state persistence is enabled, the following grid settings persist in local storage:

| Grid Settings    | Properties Persisted                                                                                                                                                                                                                                                                                                                | Properties Ignored                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageSettings     | currentPage<br> pageCount<br> pageSize<br> pageSizes<br> totalRecordsCount                                                                                                                                                                                                                                                        | template<br> enableQueryString                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| groupSettings    | allowReordering<br> columns<br> disablePageWiseAggregates<br> enableLazyLoading<br> showDropArea<br> showGroupedColumn<br> showToggleButton<br> showUngroupButton                                                                                                                                                                 | captionTemplate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| columns          | allowEditing<br> allowFiltering<br> allowGrouping<br> allowReordering<br> allowResizing<br> allowSearching<br> allowSorting<br> autoFit<br> disableHtmlEncode<br> enableGroupByFormat<br> field<br> foreignKeyField<br> index<br> showColumnMenu<br> showInColumnChooser<br> sortDirection<br> type<br> uid<br> visible<br> width | clipMode<br> commands<br> customAttributes<br> dataSource<br> defaultValue<br> displayAsCheckBox<br> edit<br> editTemplate<br> editType<br> filter<br> filterBarTemplate<br> filterTemplate<br> foreignKeyValue<br> format<br> formatter<br> freeze<br> headerTemplate<br> headerText<br> headerTextAlign<br> headerValueAccessor<br> hideAtMedia<br> isFrozen<br> isIdentity<br> isPrimaryKey<br> lockColumn<br> maxWidth<br> minWidth<br> sortComparer<br> template<br> textAlign<br> validationRules<br> valueAccessor |
| sortSettings     | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| filterSettings   | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| searchSettings   | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| selectedRowIndex | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

The grid persists only the last selected row index during state management operations.

## Restore initial Grid state

The Syncfusion Angular Grid component provides the capability to restore the grid to its initial state, reverting all user-applied changes and configurations. This feature proves particularly valuable when resetting the grid to original settings, removing applied filters, sorting, column reordering, and other user interactions.

Follow these steps to reset the grid to its initial state, even when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is enabled:

### Changing component id

To restore the initial state of the grid, change the component ID dynamically. This approach treats the grid as a new instance, effectively reverting to default settings and clearing any persisted state associated with the previous ID.

The following example demonstrates how to change the component id dynamically to restore initial grid state:

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

Clear the local storage associated with the grid component to reset the grid state. This method removes stored state information, allowing the grid to return to its original configuration without affecting other application data.

The following example demonstrates how to clear local storage to restore the grid's default state:

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

Syncfusion Angular Grid supports version-based persistence for restoration to specific state versions. To enable version-based persistence, import `enableVersionBasedPersistence` from `@syncfusion/ej2-base` and set it globally to **true**. Configure the grid in the template with properties, bind data, and enable persistence using [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) and [ej2StatePersistenceVersion](https://ej2.syncfusion.com/angular/documentation/api/grid/#ej2statepersistenceversion).

In the following example, the `clickHandler` method handles button clicks corresponding to different versions. The method assigns the targeted version to the grid's `ej2StatePersistenceVersion` dynamically. The code checks for existing persisted state for the selected version in local storage. When found, the grid updates with settings retrieved from local storage, including columns, filter settings, group settings, sort settings, page settings, and selected row index. If no persisted state exists, the current grid state persists to local storage using the [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/grid/#getpersistdata) method.

The following example demonstrates version-based persistence integration and restoration to specific state versions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent, GroupService, SortService, ReorderService } from '@syncfusion/ej2-angular-grids';
import { enableVersionBasedPersistence } from '@syncfusion/ej2-base';

enableVersionBasedPersistence(true);

@Component({
    imports: [ GridModule,ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<h4 id='message'>{{message}}</h4>
    <button ejs-button *ngFor="let v of versions" [id]="'restore' + v" (click)="clickHandler('v.' + v)">Version {{ v }}</button>
               <ejs-grid #grid id="OrderDetails" [dataSource]='data' [enablePersistence]='true' [ej2StatePersistenceVersion]='gridversion' 
               [allowPaging]='true' [allowFiltering]='true' [allowReordering]='true' [allowSorting]='true' [allowGrouping]='true' height='210px'>
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

The Syncfusion Angular Grid component enables saving and restoring grid state using local storage. This functionality preserves the current grid state, including column order, sorting, and filtering configurations, allowing users to return to previous work or configurations seamlessly.

Implement this functionality using the `getItem` and `setItem` methods for local storage, combined with the Grid component's `setProperties` and [getPersistData](https://ej2.syncfusion.com/angular/documentation/api/grid/#getpersistdata) methods.

The following code demonstrates saving and restoring the previous state of a Syncfusion Angular Grid component using local storage:

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
        height="320" (actionBegin)="actionBegin()">
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
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs4" %>

## Maintaining custom query in a persistent state

When [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) is enabled, the Grid does not automatically maintain custom query parameters after page loads. This occurs because the Grid refreshes its query parameters for every page load. Maintain custom query parameters by resetting the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method in the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}

## Observable binding with state persistence

The Syncfusion Angular Grid supports state persistence when using observable binding, ensuring the Grid retains its state across sessions. This capability proves essential when handling real-time data updates or asynchronous data sources while preserving user interactions such as sorting, filtering, paging, and grouping.

To implement state persistence with observables, handle the initial query state manually through these steps:

* Retrieve the initial query using the Grid's [getDataModule](https://ej2.syncfusion.com/angular/documentation/api/grid/#getdatamodule) method with `generateQuery`
* Obtain the state from the query via `getStateEventArgument` method
* Send the retrieved state to the service to fetch data accordingly

Beyond initial render, state persistence ensures manually performed actions are retained by storing state in the browser's `localStorage`, allowing persistence across page reloads. The following example demonstrates using the [created](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event to send persisted state to the service at initial render:

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

When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to **true**, the Grid property values are saved in **window.localStorage** for reference. Retrieve or set localStorage values using the **getItem** and **setItem** methods in **window.localStorage**.

To retrieve the Grid model from Local Storage, follow these steps:

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

In the Syncfusion Angular Grid component, prevent certain settings from persisting when using the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) feature. When the `enablePersistence` property is set to **true**, Grid properties such as [Grouping](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings/), [Paging](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/), [Filtering](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/), [Sorting](https://ej2.syncfusion.com/angular/documentation/api/grid/sortSettings/), and [Columns](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) will persist. Use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates preventing Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the Grid, override the `addOnPersist` method and remove the columns from the key list designated for persistence:

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

Persistence enhances the user experience in Syncfusion Angular Grid components by saving and restoring grid state, including column layouts, sorting, filtering, and other user-specific settings. This section explores persisting column templates, header templates, and header text settings in the Angular Grid.

### Add a new column in persisted columns list

When the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true in the Syncfusion Grid component, column configurations are persisted. To add new columns to the existing persisted state, use the Grid's built-in methods like `column.push`, then call the [refreshColumns](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshcolumns) method to update the UI with the new columns.

The following example demonstrates adding a new column to a list of persisted columns:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/state-persistence-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/state-persistence-cs7" %>

> Adding new columns using `ColumnDirectives` directly in grid initialization is not recommended when intending to persist new columns with existing columns list.

### Persist the column template, header template and header text

By default, when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to **true** in the Syncfusion Grid component, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted. This occurs because these properties can be customized at the application level.

To restore these column properties and achieve persistence, clone the grid's columns property using JavaScript Object's assign method and manually store it with the persist data. When restoring settings, assign this cloned column object to the grid's columns property to restore column settings. The following example demonstrates this process:

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
imports: [
        
        GridModule,
        ButtonAllModule
    ],

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
    providers: [GroupService, FilterService, PageService]
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