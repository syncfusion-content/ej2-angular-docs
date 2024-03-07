

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' [enableHover]='false' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styles: [
            `.e-treegrid .e-altrow {
                background-color: #fafafa;
            }`,
        ],
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}


