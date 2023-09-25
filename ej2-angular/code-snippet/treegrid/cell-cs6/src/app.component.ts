

import { Component, OnInit } from '@angular/core';
import { htmlData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='300' [treeColumnIndex]='1'  childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='<span> Task ID </span>' [disableHtmlEncode]='true' textAlign='Right' width=150></e-column>
                    <e-column field='taskName' headerText='<span> Task Name </span>' [disableHtmlEncode]='false' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = htmlData;
    }
}



