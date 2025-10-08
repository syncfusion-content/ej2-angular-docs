import { GanttModule, DayMarkersService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { editingData } from './data';

@Component({
    imports: [GanttModule],
    providers: [DayMarkersService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" highlightWeekends='true' [taskFields]="taskSettings"  [workWeek]="workWeek"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public workWeek?: object;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.workWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    }
}