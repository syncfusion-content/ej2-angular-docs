
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";
import { GanttModule, GanttComponent, EditSettingsModel, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
        GanttModule, ButtonModule,
    ],
    providers: [EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='indent' (click)='indent()'>Indent</button>
         <button ejs-button id='outdent' (click)='outdent()'>Outdent</button>
         <br><br><br>
        <ejs-gantt id="ganttDefault" #gantt height="430px" [treeColumnIndex]='1' [dataSource]="data" [splitterSettings] = "splitterSettings" [taskFields]="taskSettings"  [editSettings]="editSettings"  >
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
    public gantt?: GanttComponent | any;
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.editSettings = {
            allowEditing: true
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    indent(): void {
        (this.gantt as GanttComponent).selectRow(2);
        (this.gantt as GanttComponent).indent();
    }
    outdent(): void {
        (this.gantt as GanttComponent).selectRow(2);
        (this.gantt as GanttComponent).outdent();
    }
}