


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { projectNewData  } from './data';

@Component({
    selector: 'app-root',
    template:
       `<div style="padding-top: 7px; display: inline-block">Hierarchy Mode<ejs-dropdownlist (change)='onChange($event)' [dataSource]='dropData' value='Parent' [fields]='fields'></ejs-dropdownlist></div>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [allowFiltering]='true' [dataSource]="data" [taskFields]="taskSettings" [splitterSettings] = "splitterSettings" [columns]="columns"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public splitterSettings?: object;
    public dropData?: Object[];
    public fields?: Object;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.data = projectNewData,
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.dropData =  [
            { id: 'Parent', mode: 'Parent' },
            { id: 'Child', mode: 'Child' },
            { id: 'Both', mode: 'Both' },
            { id: 'None', mode: 'None' },
        ];
        this.splitterSettings = {
            columnIndex:3
            };
        this.fields = { text: 'mode', value: 'id' };
    }
    onChange(e: ChangeEventArgs): any{
        let mode: any = <string>e.value;
        this.ganttObj.filterSettings.hierarchyMode = mode;
        this.ganttObj.clearFiltering();
        };
}



