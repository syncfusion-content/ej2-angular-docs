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