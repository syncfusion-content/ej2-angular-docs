import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { editingData } from './data';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data"  [taskFields]="taskSettings" [splitterSettings] = "splitterSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            durationUnit: 'DurationUnit',
            child: 'subtasks'
        };
        this.splitterSettings = {
            columnIndex: 4
        }
    }
}


