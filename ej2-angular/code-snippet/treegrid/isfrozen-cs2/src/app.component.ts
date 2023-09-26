

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FreezeService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' childMapping='subtasks' height='310' [treeColumnIndex]='1' [allowSelection]='false'>
        <e-columns>
            <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='taskName' headerText='Task Name' width='200' freeze='Left'></e-column>
            <e-column field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right'></e-column>
            <e-column field='endDate' headerText='End Date' width='150' format='yMd' textAlign='Right'></e-column>
            <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
            <e-column field='progress' headerText='Progress' width='110' textAlign='Right'></e-column>
            <e-column field='priority' headerText='Priority' width='110' freeze='Right'></e-column>
            <e-column field='approved' headerText='Approved' textAlign='Left' width='110'></e-column>
        </e-columns>
    </ejs-treegrid>`,
providers: [FreezeService]
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



