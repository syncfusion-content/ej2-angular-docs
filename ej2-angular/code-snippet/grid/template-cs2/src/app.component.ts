

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { closest } from '@syncfusion/ej2-base';
import { RecordClickEventArgs, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
    selector: 'app-root',
    template: `
    <ejs-grid #grid [dataSource]='data' height='315px'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=130></e-column>
            <e-column field='FirstName' headerText='Name' width=120></e-column>
            <e-column headerText='Employee Data' width='150' textAlign='Right' isPrimaryKey='true'>
                <ng-template #template let-data>
                    <button class="empData" (click)="showDetails(data)">View</button>
                    <div [hidden]="!selectedRecord || selectedRecord !== data">
                        <ejs-dialog
                            #Dialog
                            [visible]="false"
                            width="50%"
                            showCloseIcon="true"
                            [header]="header"
                        >
                            <p><b>EmployeeID:</b> {{ selectedRecord?.EmployeeID }}</p>
                            <p><b>FirstName:</b> {{ selectedRecord?.FirstName }}</p>
                            <p><b>LastName:</b> {{ selectedRecord?.LastName }}</p>
                        </ejs-dialog>
                    </div>
                </ng-template>
            </e-column>
        </e-columns>
    </ejs-grid>`,
    styleUrls: ['./app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];
    public header?: string; 
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('Dialog')
    public dialog?: DialogComponent;
    public selectedRecord?: any;

    ngOnInit(): void {
        this.data = employeeData;
        this.header= 'Selected Row Details';
    }
    showDetails(data: any) {
        if (this.selectedRecord === data) {
            this.selectedRecord = null;
        } else {
            (this as any).dialog.visible = true;
            this.selectedRecord = data;
        }
    }
}




