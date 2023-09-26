

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='275' [treeColumnIndex]='1'  [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
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
    public filterSettings?: Object;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings={
        columns: [{ field: 'taskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'plan' },
        { field: 'duration', matchCase: false, operator: 'equal', predicate: 'and', value: 5 }]
    };
    }
}



