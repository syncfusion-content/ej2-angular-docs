

import { Component, OnInit,ViewChild } from '@angular/core';
import { TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1' [allowFiltering]='true' (dataBound)='dataBound($event)' childMapping='subtasks' >
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
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    dataBound(args: any) {
    Object.assign((this.treeGridObj?.grid.filterModule as any).filterOperators, { startsWith: 'contains' });
    }
    ngOnInit(): void {
        this.data = sampleData;
    }
}



