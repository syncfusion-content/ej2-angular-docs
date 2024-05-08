
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { GanttData, SelectedRecordDataType } from './data';

@Component({
    imports: [
         GanttModule, ButtonModule, DialogModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
            <e-columns>
                <e-column field='TaskID' headerText='Task ID'  width=80></e-column>
                <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
                <e-column field='TaskData' headerText='Employee Data' width='150' isPrimaryKey='true'>
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
                                <p><b>TaskID:</b> {{ selectedRecord?.TaskID }}</p>
                                <p><b>TaskName:</b> {{ selectedRecord?.TaskName }}</p>
                                <p><b>Duration:</b> {{ selectedRecord?.Duration }}</p>
                            </ejs-dialog>
                        </div>
                    </ng-template>
                </e-column>
                <e-column field='Duration' headerText='Duration' width=90></e-column>
                <e-column field='Progress' headerText='Progress' width=120 ></e-column>
            </e-columns>  
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public header?: string;
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    @ViewChild('Dialog')
    public dialog?: DialogComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public selectedRecord?: SelectedRecordDataType;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            taskdata: 'TaskData',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
        this.header = 'Selected Row Details';
    }
    showDetails(data: SelectedRecordDataType) {
        (this.dialog as DialogComponent).visible = true;
        this.selectedRecord = data;
    }
}
