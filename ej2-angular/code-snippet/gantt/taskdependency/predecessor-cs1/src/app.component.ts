import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, EditService, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [GanttModule, ButtonModule],
    providers: [EditService],
    standalone: true,
    selector: 'app-root',
    template: `
        <div style="margin-bottom: 10px;">
            <button ejs-button (click)="addDependency()">Add Predecessor</button>
            <button ejs-button (click)="removeDependency()">Remove Predecessor</button>
            <button ejs-button (click)="updateDependency()">Update Predecessor</button>
        </div>
        <ejs-gantt #ganttDefault id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings"  [columns]="columns" 
        [editSettings]="editSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    @ViewChild('ganttDefault', { static: true })
    public ganttObj!: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public columns?: object[];

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2FS', Progress: 50 },
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
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '6SS', Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.editSettings = {
            allowTaskbarEditing: true,
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Predecessor', headerText: 'Dependency', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ];
    }

    public addDependency(): void {
        this.ganttObj.addPredecessor(2, '3SF,7FS');
    }

    public removeDependency(): void {
        this.ganttObj.removePredecessor(4);
    }

    public updateDependency(): void {
        this.ganttObj.updatePredecessor(8, '7FS');
    }
}