

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' type='number' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' type='string' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
                        <e-column field='endDate' headerText='End Date' textAlign='Right' format='dd/MM/yyyy hh:mm' width=200 type='dateTime'></e-column>
                        <e-column field='approved' headerText='Approved' width='100' type='boolean' [displayAsCheckBox]='true'></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' type='number' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



