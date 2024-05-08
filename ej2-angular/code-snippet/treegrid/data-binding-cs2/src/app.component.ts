import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        TreeGridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService,
                FilterService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data'  [treeColumnIndex]='1' childMapping='subtasks'
                [allowPaging]="true" [pageSettings]='pageSettings'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: PageSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.pageSettings = { pageSize: 6 };
    }
}



