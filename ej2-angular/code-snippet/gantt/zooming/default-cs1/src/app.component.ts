import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { EditService, SelectionService, ToolbarItem, ToolbarService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    providers: [EditService, SelectionService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"[toolbar]="toolbar"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];

    public ngOnInit(): void {
        this.data = projectNewData;
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
        this.toolbar = ['ZoomIn', 'ZoomOut', 'ZoomToFit'];
    }
}



