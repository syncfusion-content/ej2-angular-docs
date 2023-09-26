

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='270' [treeColumnIndex]='1'  [toolbar]='toolbarOption' childMapping='subtasks' [searchSettings]='searchSettings'>
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
    public toolbarOption?: string[];
    public searchSettings?: Object;
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOption = ['Search'];
        this.searchSettings = { fields: ['taskName', 'duration']}
    }
}



