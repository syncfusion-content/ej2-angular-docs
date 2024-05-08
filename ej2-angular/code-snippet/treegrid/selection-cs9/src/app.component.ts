import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        TreeGridModule,
        ButtonModule,
        DropDownListAllModule
    ],

providers: [PageService,
                SortService,
                FilterService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='265' [treeColumnIndex]='1' [allowPaging]='true' [selectionSettings]='selectionOptions' childMapping='subtasks' >
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
    public selectionOptions?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { mode: 'Both' };
    }
}



