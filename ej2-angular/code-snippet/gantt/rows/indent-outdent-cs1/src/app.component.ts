import { GanttComponent, GanttModule, EditService, SelectionService, ToolbarService, EditSettingsModel, ToolbarItem, } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttData } from './data';

@Component({
    imports: [
        GanttModule
    ],
    providers: [EditService, SelectionService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [treeColumnIndex]="1" [taskFields]="taskSettings" [splitterSettings] = "splitterSettings"  [editSettings]="editSettings"  [toolbar]="toolbar">
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
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public splitterSettings?: object;
    @ViewChild('gantt')
    public ganttObj?: GanttComponent | any;
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
            allowAdding: true,
            allowEditing: true,
        };
        this.toolbar = ['Add', 'Indent', 'Outdent'];
        this.splitterSettings = {
            position: '75%'
        };
    }
}