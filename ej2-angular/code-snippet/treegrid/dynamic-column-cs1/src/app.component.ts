

import { Component, NgIterable, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ColumnModel } from '@syncfusion/ej2-angular-treegrid';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'>
                    <e-columns>
                         <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText"></e-column> 
                     </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public columns?: NgIterable<ColumnModel> | null | undefined;

    ngOnInit(): void {
        this.data = sampleData;
        this.columns= [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180 },
            { field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date',format: 'yMd'},
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
        ];
    }
}



