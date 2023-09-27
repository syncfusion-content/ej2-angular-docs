


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { Fetch } from '@syncfusion/ej2-base/src/fetch';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataManager, WebApiAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template:`
    <button ejs-button id='binddata' (click)='bind()'>Bind Data</button>
       <br><br>
       <ejs-gantt #gantt id="ganttDefault" [dataSource]="data" height="430px" [taskFields]="taskSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    @ViewChild('gantt', { static: true })
    public ganttObj?: GanttComponent;
    public gantt?: GanttComponent;
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
            this.projectStartDate = new Date('02/24/2019'),
            this.projectEndDate = new Date('07/20/2019')
    }
    bind(): void {
        const temp = this.ganttObj;
        let fetch = new Fetch("https://ej2services.syncfusion.com/production/web-services/api/GanttData", "GET");
        temp!.showSpinner();
        fetch.send();
        fetch.onSuccess = function (data: any) {
            temp!.hideSpinner();
            temp!.dataSource = data.Items;
            temp!.refresh();
        };
    };
}
