import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';


import { Component, ViewEncapsulation, OnInit, ViewChild, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
    imports: [
        GanttModule, CheckBoxModule
    ],
    providers: [SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<div style="padding:2px 0px 0px 0px">
            <ejs-checkbox #checkbox label='Enable / Disable Auto-focus Tasks' 
            (change)="onCheckBoxChange($event)"></ejs-checkbox>
        </div>
        <br>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" [autoFocusTasks]="true"
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" >     
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    public onCheckBoxChange(args: ChangeEventArgs) {
        if (args.checked) {
            (this.gantt as GanttComponent).autoFocusTasks = false;
        } else {
            (this.gantt as GanttComponent).autoFocusTasks = true;
        }
    }
}