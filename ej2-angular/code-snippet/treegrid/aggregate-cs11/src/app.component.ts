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