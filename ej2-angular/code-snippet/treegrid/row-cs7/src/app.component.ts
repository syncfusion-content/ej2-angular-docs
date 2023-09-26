import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import {RowDataBoundEventArgs} from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' (rowDataBound)='onRowBound($event)' childMapping='subtasks' >
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

    ngOnInit(): void {
        this.data = sampleData;
        interface TasKDetails {
    taskID ?: number;
}
    }
 onRowBound(args: RowDataBoundEventArgs) {
   if((args.data as any).taskID === 3){
        args.rowHeight = 90;
    }
}
}