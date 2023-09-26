

import { Component, OnInit } from '@angular/core';
import { projectData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' parentIdMapping='parentID' idMapping='TaskID' height=265 [allowPaging]="true">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='170'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = projectData;
    }
}



