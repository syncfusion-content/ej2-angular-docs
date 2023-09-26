

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1' [allowFiltering]='true' [filterSettings]="filterSettings" (actionBegin)='actionBegin($event)' childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration'  textAlign='Right' width=120></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public filterSettings?: Object;
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    actionBegin(e: any) {
     if(e.requestType === 'filtersearchbegin' && e.column.type === "string")
     {
        e.operator = 'contains';
      }
    }
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Excel'};

    }
}



