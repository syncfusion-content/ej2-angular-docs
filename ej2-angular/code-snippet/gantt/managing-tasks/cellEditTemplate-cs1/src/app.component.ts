


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [columns]="columns"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public columns?: object[];
    public elem?: HTMLElement;
    public dropdownlistObj?: DropDownList| any;
    public ngOnInit(): void {
        this.data =  [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
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
                        return this.dropdownlistObj.value;
                    },
                    destroy: () => {
                        this.dropdownlistObj.destroy();
                    },
                    write: (args: Object) => {
                        this.dropdownlistObj = new DropDownList({
                            dataSource: this.ganttObj.treeGrid.grid.dataSource,
                            fields: { value: 'TaskName' },
                            value: (args as any).rowData[(args as any).column.field],
                            floatLabelType: 'Auto',
                        });
                        this.dropdownlistObj.appendTo(this.elem);
                    }
                }
            },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' },
        ];
    }
}



