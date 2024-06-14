---
layout: post
title: Reactive aggregate in Angular TreeGrid component | Syncfusion
description: Learn here all about Reactive aggregate in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Reactive aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Reactive aggregate in Angular TreeGrid component

The TreeGrid component provides support for reactive aggregates, which allow you to update the aggregate values dynamically as the data changes. Reactive aggregates automatically recalculate their values when there are changes in the underlying data, providing real-time updates to the aggregate values in the tree grid.

## Auto update aggregate value in batch editing

When the tree grid is in batch editing mode, the aggregate values in the footer, and in parent row footer are automatically refreshed every time a cell is saved. This ensures that the aggregate values accurately reflect the edited data.

Here's an example code snippet demonstrating how to auto update aggregate value in batch editing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EditSettingsModel, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService ,ToolbarService, EditService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';

@Component({
    imports: [ TreeGridModule  ],
    providers: [AggregateService, ToolbarService, EditService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='245' [treeColumnIndex]='1' [toolbar]='toolbar' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='ID' headerText='ID' [isPrimaryKey]='true'  width=120></e-column>
                        <e-column field='category' headerText='Category'  width=240></e-column>
                        <e-column field='units' headerText='Total Units'  textAlign='Right' type='number' Width=130></e-column>
                        <e-column field='unitPrice' headerText='Unit Price($)' format='C2' textAlign='Right' type='number' width=110 ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]='false' >
                            <e-columns>
                                <e-column field="units" type="sum" format="N0">
                                    <ng-template #footerTemplate let-data>Sum:{{data.sum}} </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar ?: string[];
    ngOnInit(): void {
        this.data = summaryData;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = [ 'Delete', 'Update', 'Cancel'];
    }
    
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs11" %}

> Adding a new record to the grouped grid will not refresh the aggregate values.

## Refresh aggregate values in inline editing

By default, reactive aggregate updates are not supported in inline and dialog edit modes, as it is not feasible to anticipate the value change event for every editor. However, you can refresh the aggregates manually in the inline edit mode using the refresh method of the aggregate module.

Here's an example demonstrating how to register the input event for the **units** column editor and manually refresh the aggregate value in inline editing mode:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EditSettingsModel, TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService ,ToolbarService, EditService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import {  IEditCell,ActionEventArgs } from '@syncfusion/ej2-grids';

@Component({
    imports: [ TreeGridModule  ],

    providers: [AggregateService, ToolbarService, EditService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='245' [treeColumnIndex]='1' [toolbar]='toolbar' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='ID' headerText='ID' [isPrimaryKey]='true'  width=120></e-column>
                        <e-column field='category' headerText='Category'  width=240></e-column>
                        <e-column field='units' headerText='Total Units'  textAlign='Right' format='C2' editType='numericedit' [edit]='numericParams' Width=130></e-column>
                        <e-column field='unitPrice' headerText='Unit Price($)' format='C2' textAlign='Right' type='number' width=110 ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]='false' >
                            <e-columns>
                                <e-column field="units" type="sum" format="N0">
                                    <ng-template #footerTemplate let-data>Sum:{{data.sum}} </ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar ?: string[];
    public numericParams?: IEditCell;
    public selectedRecord: object = {};
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    actionBegin({ requestType, rowData }: ActionEventArgs): void {
        if (requestType === 'beginEdit') {
            this.selectedRecord = {};
            this.selectedRecord = rowData as object;
        }
    }

    ngOnInit(): void {
        this.data = summaryData;
        this.editSettings = { allowEditing: true, allowDeleting: true, mode: 'Row' };
        this.toolbar = [ 'Delete', 'Update', 'Cancel'];
        this.numericParams = {
            params: {
                change: ((args: ChangeEventArgs) => {
                    (this.selectedRecord as any).units = args.value as string;
                    (this.treegrid as TreeGridComponent).grid.aggregateModule.refresh(this.selectedRecord);
                }).bind(this)
            }
        };
    }
    
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs12" %}