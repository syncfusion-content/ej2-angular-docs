

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: ` <button ejs-button cssClass="e-primary" (click)="onClick()">Clear filter</button>

                <ejs-treegrid #treegrid id='treegrid' [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

     @ViewChild('treegrid')
     public treegrid:TreeGridComponent | undefined;
      public data?: Object[];
   
    ngOnInit(): void {
        this.data = sampleData;
    }

    public onClick(): void {
      this.treegrid?.clearFiltering(); //clear filtering for all columns
    }
}



