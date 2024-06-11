import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, EditService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { Component, ViewEncapsulation, OnInit, ViewChild, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
        GanttModule, ButtonModule
   ],
providers: [EditService],
standalone: true,
    selector: 'app-root',
    template:
        `<div style="padding:0px 0px 20px 0px">
            <button ejs-button id='above' (click)='addabove()'>Add New Row as Above position</button>
            <button ejs-button id='below' (click)='addbelow()'>Add New Row as Below position</button>
            <button ejs-button id='child' (click)='addchild()'>Add New Row as Child position</button>
        </div>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" [editSettings]="editSettings"> 
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
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
    public editSettings?: object;
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
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.splitterSettings = {
            position: '75%'
        };
    }
    addabove() {
        const newRecord = {
            TaskID: this.generatetaskID(),
            TaskName: this.generatetaskName(),
            StartDate: this.generatestartDate(),
            Duration: this.generateduration(),
        };

        (this.gantt as GanttComponent).addRecord(newRecord, 'Above', 0);
    }
    addbelow() {
        const newRecord = {
            TaskID: this.generatetaskID(),
            TaskName: this.generatetaskName(),
            StartDate: this.generatestartDate(),
            Duration: this.generateduration(),
        };

        (this.gantt as GanttComponent).addRecord(newRecord, 'Below', 1);
    }
    addchild() {
        const newRecord = {
            TaskID: this.generatetaskID(),
            TaskName: this.generatetaskName(),
            StartDate: this.generatestartDate(),
            Duration: this.generateduration(),
        };
        (this.gantt as GanttComponent).clearSelection();
        (this.gantt as GanttComponent).addRecord(newRecord, 'Child', 2);
    }
    // Generate a random taskID
    generatetaskID(): number {
        return Math.floor(1000 + Math.random() * 90000);
    }
    // Generate a random taskName
    generatetaskName(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return result;
    }
    // Generate a random startDate
    generatestartDate(): Date {
        return new Date();
    }
    // Generate a random duration value
    generateduration(): number {
        return Math.random() * 100;
    }
}
