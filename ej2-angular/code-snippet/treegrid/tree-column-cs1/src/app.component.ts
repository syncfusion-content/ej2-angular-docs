

import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: ` <ejs-treegrid #treegrid [dataSource]='data' height='285' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styleUrls: ['./custom-column.style.css']
})
export class AppComponent implements OnInit {

    public data?: Object[];
   
    ngOnInit(): void {
        this.data = sampleData;
    }
}



