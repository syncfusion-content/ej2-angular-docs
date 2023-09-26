

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { Column, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-container',
    template: `<button #btn1 ejs-button cssClass="e-flat" [isToggle]="true"  (click)="click()">Change Header Text</button>

    <ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [height]='210'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
            <e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right'></e-column>
            <e-column field='Priority' headerText='Priority' width='90'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    @ViewChild('treegridObj')
    public treegridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
    }
    click() {
        const column = this.treegridObj?.getColumnByField('Duration'); // get the JSON object of the column corresponding to the field name
        (column as Column).headerText = 'Changed Text'; // assign a new header text to the column
        this.treegridObj?.refreshColumns();
    }
}



