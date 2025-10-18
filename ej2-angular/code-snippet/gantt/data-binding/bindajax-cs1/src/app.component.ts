import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Fetch } from '@syncfusion/ej2-base';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `
    <button ejs-button id='binddata' (click)='bind()'>Bind Data</button>
       <br><br>
       <ejs-gantt #gantt [dataSource]="data" height="430px" [taskFields]="taskSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public temp: any;

    public ngOnInit(): void {
        this.temp = this,
        this.data = [],
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'SubTasks'
        },
        this.projectStartDate = new Date('02/24/2021'),
        this.projectEndDate = new Date('07/20/2021')
    }

    public bind(): void {
        const temp = this.ganttInstance;
        let fetch = new Fetch("https://services.syncfusion.com/angular/production/api/GanttData", "GET");
        temp!.showSpinner();
        fetch.send();
        fetch.onSuccess = function (data: any) {
            temp!.hideSpinner();
            temp!.dataSource = data.Items;
            temp!.refresh();
        };
    };
}
