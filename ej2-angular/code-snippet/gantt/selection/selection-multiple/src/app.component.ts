import { Component, OnInit, ViewChild} from '@angular/core';
import { editingData } from './data';
import { GanttAllModule,GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [ GanttAllModule],
    standalone: true,
    selector: 'app-root',
    template: ` 
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
    height="450px" [allowSelection]="true"  [selectionSettings]="selectionSettings" (created)="created($event)">
    </ejs-gantt>`
})
export class AppComponent implements OnInit{
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public startDate? :object;
    public selectionSettings?: object;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
        };
        this.selectionSettings = {
            mode: 'Row',
            type: 'Multiple',
        };
    }

    public created(args:object): void {
        this.ganttObj.treeGrid.grid.selectionSettings.enableSimpleMultiRowSelection = false;
    }
}
