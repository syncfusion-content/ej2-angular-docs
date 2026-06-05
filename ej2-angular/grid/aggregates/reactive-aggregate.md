---
layout: post
title: Angular Grid - Reactive Aggregate | Syncfusion
description: Angular Grid reactive aggregate supports live aggregate updates during editing or data changes, ensuring summaries always represent the current grid state.
platform: ej2-angular
control: Reactive aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Reactive Aggregate in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports reactive aggregates, which automatically recalculate and update aggregate values in real time whenever the data changes.

## Auto-update aggregates in Batch editing

When the Grid is in batch editing mode, aggregate values in the footer, group footer, and group caption rows are automatically refreshed after every cell save, ensuring the aggregate values always reflect the latest edited data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService, GroupService, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [ GridModule],
providers: [AggregateService, GroupService, PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='210px' [allowPaging]='true' [toolbar]='toolbar' [allowGrouping]="true" [groupSettings]="groupOptions" [editSettings]='editSettings'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120></e-column>
        <e-column field='Freight' format='C2' editType='numericedit' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum" format="C2">
                        <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                    </e-column>
                    <e-column field="Freight" type="sum" format="C2">
                        <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}}</ng-template>
                    </e-column>
                    <e-column field="Freight" type="average" format="C2">
                        <ng-template #groupCaptionTemplate let-data>Average: {{data.average}}</ng-template>
                    </e-column>
                </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar ?: string[];
    public groupOptions?: GroupSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = [ 'Delete', 'Update', 'Cancel'];
        this.groupOptions =  { showDropArea: false, columns: ['ShipCountry'] };
    }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-aggregates-batchedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/reactive-aggregates-batchedit-cs1" %}

> When using batch editing with grouping, adding a new record to a grouped grid does not refresh the aggregate values automatically.

## Manual aggregate refresh in inline and dialog editing

By default, reactive aggregate updates are not supported in Inline and Dialog edit modes because value changes cannot be automatically detected for all editor types.

To ensure aggregates are updated correctly, they must be refreshed manually using the `aggregateModule.refresh()` method:

- **Inline edit mode:** Register an `input` event on the editor (for example, the Freight column). Whenever the value changes, call `aggregateModule.refresh()` to update the aggregate values.
- **Dialog edit mode:** Since multiple editors are rendered inside a dialog, aggregates are refreshed automatically after the data is saved by clicking the Save button. In special cases where an immediate refresh is required for a particular editor before saving, apply the same approach as in Inline mode: bind an `input` event to that editor and call `aggregateModule.refresh()` to update the aggregate values instantly.

Example: Manually refreshing aggregates in inline editing mode:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService, GroupService, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { EditSettingsModel, IEditCell, GridComponent, ToolbarItems, ActionEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [GridModule],
providers: [AggregateService, GroupService, PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='212px' [allowPaging]='true' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)='actionBegin($event)'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120></e-column>
        <e-column field='Freight' format='C2' editType='numericedit' [edit]='numericParams' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
                <e-columns>
                    <e-column field="Freight" type="sum" format="C2">
                        <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                    </e-column>
                </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public selectedRecord: object = {};
    public numericParams?: IEditCell;
    @ViewChild('grid') public gridObj?: GridComponent;

    actionBegin({ requestType, rowData }: ActionEventArgs): void {
        if (requestType === 'beginEdit') {
            this.selectedRecord = {};
            this.selectedRecord = rowData as object;
        }
    }
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Delete', 'Update', 'Cancel'];
        this.numericParams = {
            params: {
                change: ((args: ChangeEventArgs) => {
                    (this.selectedRecord as ItemType).Freight = args.value as string;
                    (this.gridObj as GridComponent).aggregateModule.refresh(this.selectedRecord);
                }).bind(this)
            }
        };
    }

}
interface ItemType{
    Freight:string
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/reactive-aggregates-inlineedit-cs1" %}

> In inline and dialog editing, manually invoke the aggregate module’s `refresh` method to update aggregates after data changes. Access aggregate values in template cells by their type key (e.g., `data.sum`, `data.max`).


## See also
- [Aggregates overview](./aggregates)
- [Batch editing](../editing/batch-editing)
- [Inline editing](../editing/in-line-editing)
- [Aggregates API](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn)