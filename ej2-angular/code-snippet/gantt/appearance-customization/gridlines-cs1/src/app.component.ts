import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data"  [taskFields]="taskSettings" [gridLines] = "gridLines"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public gridLines?: string;

    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
        };
        this.gridLines = 'Both';
    }
}