import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { baselineData } from './data';

@Component({
    imports: [GanttModule],
    providers: [SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [renderBaseline]="true" baselineColor='red'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public data?: Object[];
    public taskSettings?: object;

    public ngOnInit(): void {
        this.data = baselineData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            baselineStartDate: "BaselineStartDate",
            baselineEndDate: "BaselineEndDate",
            baselineDuration: "BaselineDuration",
            parentID: 'ParentID'
        };
    }
}
