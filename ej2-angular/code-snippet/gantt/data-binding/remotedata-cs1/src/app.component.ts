import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public data?: DataManager;
    public taskSettings?: object;
    public columns?: object[];

    public ngOnInit(): void {
        this.data = new DataManager({
            url: 'https://services.syncfusion.com/angular/production/api/GanttData',
            adaptor: new WebApiAdaptor,
            crossDomain: true
        });
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'SubTasks'
        };
        this.columns = [
            { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'Duration' }
        ];
    }
}