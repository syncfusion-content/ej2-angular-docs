import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PageService, SortService, FilterService, ToolbarService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { Component, OnInit, } from '@angular/core';
import { textdata } from './datasource';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule, ButtonModule, DropDownListAllModule, DialogModule],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height=291 width='auto' childMapping= 'Children' [enableHover]="false">
                    <e-columns>
                        <e-column field = 'EmpID' headerText = 'Employee ID' width = '180'></e-column>
                        <e-column  field = 'Name' headerText = 'Employee Name' width = '150'></e-column>
                        <e-column field = 'Designation' headerText = 'Designation' width = '150'></e-column>
                        <e-column headerText='Employee Data' width='150' textAlign='Right' isPrimaryKey='true'>
                            <ng-template #template let-data>
                                <button class="empData" (click)="showDetails(data)">View</button>
                                <div [hidden]="!selectedRecord || selectedRecord !== data">
                                   <ejs-dialog #Dialog [visible]="false" width="50%" showCloseIcon="true" [header]="header">
                                     <p><b>EmployeeID:</b> {{ selectedRecord?.EmpID }}</p>
                                     <p><b>FirstName:</b> {{ selectedRecord?.Name }}</p>
                                     <p><b>Designation:</b> {{ selectedRecord?.Designation }}</p>
                                    </ejs-dialog>
                                </div>
                            </ng-template>
                        </e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public header?: string;
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    @ViewChild('Dialog')
    public dialog?: DialogComponent;

    public selectedRecord: any;

    ngOnInit(): void {
        this.data = textdata;
        this.header = 'Selected Row Details';
    }
    showDetails(data: any) {
        (this.dialog as DialogComponent).visible = true;
        this.selectedRecord = data;
    }
}



