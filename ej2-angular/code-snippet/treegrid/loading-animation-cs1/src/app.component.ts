import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
@Component({
imports: [
        
        TreeGridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' hasChildMapping='isParent' parentIdMapping='ParentItem' idMapping='TaskID' [allowSorting]="true" [allowPaging]="true">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data?: DataManager;
    public loadingIndicator?: any;
    public pageSettings?: Object;
    ngOnInit(): void {
        this.data = new DataManager({
                url: 'https://services.syncfusion.com/angular/production/api/SelfReferenceData',
                adaptor: new WebApiAdaptor, crossDomain: true
            });
        this.loadingIndicator = {indicatorType: 'Shimmer'};
        this.pageSettings = { pageCount: 3 };
    }
}