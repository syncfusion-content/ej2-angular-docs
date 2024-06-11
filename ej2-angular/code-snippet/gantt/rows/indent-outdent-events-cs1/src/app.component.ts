
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, EditService, SelectionService, ToolbarService, EditSettingsModel, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
        GanttModule,
    ],
    providers: [EditService, SelectionService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template:
        `<p id="message" style="color:red">{{message}}</p>
        <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [treeColumnIndex]='1' [taskFields]="taskSettings"  [editSettings]="editSettings" 
                [splitterSettings] = "splitterSettings" (actionComplete)="actioncomplete($event)" [toolbar]="toolbar">
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
    public splitterSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public message: string = '';
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
        this.splitterSettings = {
            position: '75%'
        };
        this.editSettings = {
            allowEditing: true,
        };
        this.toolbar = ['Indent', 'Outdent'];
    }
    actioncomplete(args: any) {
        if (args.requestType == 'outdented') {
            this.message = 'Task ID ' + args.data[0].TaskID + ' has been outdented';
        } else if (args.requestType == 'indented') {
            this.message = 'Task ID ' + args.data[0].TaskID + ' has been indented';
        }
    }
}
