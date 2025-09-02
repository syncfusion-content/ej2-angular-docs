import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { baselineData } from './data';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [renderBaseline]="true" baselineColor='red'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
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
        baselineStartDate:"BaselineStartDate",
        baselineEndDate:"BaselineEndDate",
        baselineDuration: "BaselineDuration",
        parentID: 'ParentID'
        };
    }
}
