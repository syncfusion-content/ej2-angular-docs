import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, SortService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule, ButtonModule, DropDownListAllModule],
    providers: [SortService],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <label style="margin-right: 10px;font-weight:bold">Column name:</label>
            <ejs-dropdownlist #dropdown index="0" width="120" [dataSource]="columnOptions" [fields]="field"></ejs-dropdownlist>
            <button ejs-button id="button" cssClass="e-outline" (click)="removeSortColumn()">
                Remove sort column
            </button>
        </div>
        <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
        [splitterSettings]="splitterSettings" [sortSettings]="sortSettings" [allowSorting]="true">
        </ejs-gantt>`
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
    @ViewChild('dropdown', { static: true }) public dropDown!: DropDownListComponent;
    public data: object[] = [];
    public taskSettings: object = {};
    public columns: object[] = [];
    public splitterSettings: object = {};
    public sortSettings: object = {};
    public columnOptions: object[] = [];
    public field: object = { text: 'text', value: 'value' };

    ngOnInit(): void {
        this.data = [
            { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '120' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ];
        this.splitterSettings = { columnIndex: 3 };
        this.sortSettings = {
            columns: [
                { field: 'TaskID', direction: 'Descending' },
                { field: 'TaskName', direction: 'Ascending' }
            ]
        };
        this.columnOptions = [
            { text: 'Task ID', value: 'TaskID' },
            { text: 'Task Name', value: 'TaskName' },
            { text: 'Start Date', value: 'StartDate' },
            { text: 'Duration', value: 'Duration' },
            { text: 'Progress', value: 'Progress' }
        ];
    }

    public removeSortColumn(): void {
        const columnField = this.dropDown.value as string;
        (this.ganttInstance as GanttComponent).removeSortColumn(columnField);
    }
}