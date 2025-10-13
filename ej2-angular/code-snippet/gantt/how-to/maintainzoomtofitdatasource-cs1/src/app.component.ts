import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule,ToolbarItem, GanttComponent, ToolbarService} from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { projectNewData, data } from './data';

@Component({
    imports: [GanttModule, ButtonModule],
    providers: [ToolbarService],
    standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='changeData' (click)='changeData()'>Change Data</button>
       <br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"[toolbar]="toolbar" (dataBound)="dataBound($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent | any;
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
            parentID: 'ParentID',
        };
        this.toolbar = ['ZoomToFit'];
    }

    public dataBound(args: object) {
        this.ganttInstance.fitToProject();
    };

    public changeData(): void {
        this.ganttInstance.dataSource = data;
    };
}
