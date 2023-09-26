

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ReorderService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [allowReordering]='true' [treeColumnIndex]='1' childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
        </e-columns>
                </ejs-treegrid>`,
    providers: [ReorderService]
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;

    }
}



