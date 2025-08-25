---
layout: post
title: Reactive aggregate in Angular Grid component | Syncfusion
description: Learn how to implement reactive aggregate values in the Syncfusion Angular Grid, with auto and manual aggregate refresh based on different editing modes.
platform: ej2-angular
control: Reactive aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Reactive aggregate in Angular Grid component

The Syncfusion Angular Grid component supports reactive aggregates, enabling dynamic updates of aggregate values as data changes. Aggregate summaries in the footer, group footer, and group caption cells are automatically or manually refreshed, depending on the Grid’s editing configuration and event handling.

## Automatic update of aggregates in batch editing

When the grid operates in **batch editing** mode, aggregate values in the footer, group footer, and group caption cells are refreshed automatically every time a cell is saved. This ensures that aggregate values remain accurate as edits occur, supporting real-time data analysis within the grid.

Example: Automatic aggregate updates in batch editing mode:

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
    template: `<ejs-grid #grid [dataSource]='data' height='290px' [allowPaging]='true' [toolbar]='toolbar' [allowGrouping]="true" [groupSettings]="groupOptions" [editSettings]='editSettings'>
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

By default, aggregate values are **not** automatically updated in **inline** and **dialog** editing modes, since value changes cannot be detected in real time during editing. In these scenarios, you can manually refresh the aggregates by calling the aggregate module’s refresh method in response to editor change events.

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
    template: `<ejs-grid #grid [dataSource]='data' height='290px' [allowPaging]='true' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)='actionBegin($event)'>
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