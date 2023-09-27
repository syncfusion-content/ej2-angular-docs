


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [holidays] = "holidays"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public holidays?: object[];
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.holidays = [{
            from: "04/04/2019",
            to:"04/05/2019",
            label: " Public holidays",
            cssClass:"e-custom-holiday"
        },
        {
            from: "04/12/2019",
            to:"04/12/2019",
            label: " LOcal holidays",
            cssClass:"e-custom-holiday"
        }];
    }
}



