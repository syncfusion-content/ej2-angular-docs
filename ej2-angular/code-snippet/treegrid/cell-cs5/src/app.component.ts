

import { Component, OnInit } from '@angular/core';
import { complexData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='300' gridLines='Both' [treeColumnIndex]='1' childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' clipMode='EllipsisWithTooltip' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=180></e-column>
                    <e-column field='assignee.firstName' width=120 headerText='Assignee' clipMode='Ellipsis'></e-column>
                    <e-column field='priority' headerText='Priority' clipMode='Clip' width=150></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=130></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    ngOnInit(): void {
        this.data = complexData;
    }
}




