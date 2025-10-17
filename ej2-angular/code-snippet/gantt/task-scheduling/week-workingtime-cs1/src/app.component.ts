import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, DayMarkersService, EditSettingsModel } from '@syncfusion/ej2-angular-gantt'
import { editingData } from './data';

@Component({
    imports: [GanttModule],
    providers: [DayMarkersService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt [weekWorkingTime]="weekWorkingTime" height="430px" [dataSource]="data" [taskFields]="taskSettings" highlightWeekends='true' [timelineSettings]="timelineSettings" [splitterSettings]="splitterSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public timelineSettings?: object;
    public editSettings?: EditSettingsModel;
    public weekWorkingTime?: object;
    public splitterSettings?: object;

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
        this.timelineSettings = {
            timelineViewMode: 'Day'
        };
        this.weekWorkingTime = [
            { dayOfWeek: 'Monday', timeRange: [{ from: 10, to: 18 }] },
            { dayOfWeek: 'Tuesday', timeRange: [{ from: 10, to: 18 }] }
        ];
        this.splitterSettings = {
            columnIndex: 0
        }
    }
}
