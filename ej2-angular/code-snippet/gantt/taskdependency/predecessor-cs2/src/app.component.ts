import { Component, ViewChild } from '@angular/core';
import { EditService, GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { SwitchComponent, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [EditService],
    imports: [GanttModule, SwitchModule],
    template: `<div class="switch-container">
    <label>Auto Update Predecessor Offset</label>
    <ejs-switch [checked]="autoUpdatePredecessorOffset" (change)="onToggleChange($event)">
    </ejs-switch>
</div>

<ejs-gantt #gantt id="Default" [dataSource]="data" height="420px" [taskFields]="taskSettings"
    [editSettings]="editSettings" [columns]="columns" [eventMarkers]="eventMarkers" [holidays]="holidays"
    [autoUpdatePredecessorOffset]="autoUpdatePredecessorOffset">
</ejs-gantt>
  `
})
export class AppComponent {

    @ViewChild('gantt', { static: true })
    public gantt!: GanttComponent;

    public data: object[] = GanttData;

    public autoUpdatePredecessorOffset = true;

    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate',
        child: 'subtasks'
    };

    public editSettings: object = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    public columns: object[] = [
        { field: 'TaskID', headerText: 'Task ID', width: 100 },
        { field: 'Predecessor', headerText: 'Dependency', width: 150 },
        { field: 'TaskName', headerText: 'Task Name', width: 150 },
        { field: 'StartDate', headerText: 'Start Date', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150 },
        { field: 'Progress', headerText: 'Progress', width: 150 }
    ];

    public holidays: object[] = [
        {
            from: '04/04/2019',
            to: '04/05/2019',
            label: 'Public holidays',
            cssClass: 'e-custom-holiday'
        },
        {
            from: '04/12/2019',
            to: '04/12/2019',
            label: 'Public holiday',
            cssClass: 'e-custom-holiday'
        }
    ];

    public eventMarkers: object[] = [
        {
            day: '04/10/2019',
            cssClass: 'e-custom-event-marker',
            label: 'Project approval and kick-off'
        }
    ];

    public onToggleChange(args: any): void {
        this.autoUpdatePredecessorOffset = args.checked;
    }
}