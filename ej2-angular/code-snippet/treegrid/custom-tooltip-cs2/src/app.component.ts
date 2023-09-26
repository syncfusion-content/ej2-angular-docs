

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' headerTextAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' headerTextAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Center' headerTextAlign='Center' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Justify' headerTextAlign="Justify" width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
    public data?: object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



