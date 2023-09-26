


import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ColumnMenuService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid height='315' [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' showColumnMenu="true" (columnMenuOpen)="columnMenuOpen()" (columnMenuClick)="columnMenuClick()">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=100></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=130></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=130></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=150></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    providers: [ColumnMenuService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    ngOnInit(): void {
        this.data = sampleData;
    }
    columnMenuOpen() {
        alert('columnMenuOpen event is Triggered');
    }
    columnMenuClick() {
        alert('columnMenuClick event is Triggered');
    }
}



