import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, EditService, EditSettingsModel, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt'
import { DropDownList } from "@syncfusion/ej2-angular-dropdowns";

@Component({
    imports: [GanttModule],
    providers: [EditService, SelectionService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [columns]="columns"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public dropDownListObject?: DropDownList | any;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public columns?: object[];
    public elem?: HTMLElement;

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.editSettings = {
            allowEditing: true
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID' },
            {
                field: 'TaskName', headerText: 'Task Name',
                edit: {
                    create: () => {
                        this.elem = document.createElement('input');
                        return this.elem;
                    },
                    read: () => {
                        return this.dropDownListObject.value;
                    },
                    destroy: () => {
                        this.dropDownListObject.destroy();
                    },
                    write: (args: Object) => {
                        this.dropDownListObject = new DropDownList({
                            dataSource: (this.ganttInstance as GanttComponent).treeGrid.grid.dataSource as any,
                            fields: { value: 'TaskName' },
                            value: (args as any).rowData[(args as any).column.field],
                            floatLabelType: 'Auto',
                        });
                        this.dropDownListObject.appendTo(this.elem);
                    }
                }
            },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' },
        ];
    }
}