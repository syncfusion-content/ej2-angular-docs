import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'



import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttData } from './data';

@Component({
imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1'
         [splitterSettings]="splitterSettings" [gridLines]='gridLines' (queryCellInfo)='queryCellInfoEvent($event)'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='work1' headerText='Work 1' textAlign='Center' width=150 ></e-column>
                <e-column field='work2' headerText='Work 2' textAlign='Center' width=150 ></e-column>
                <e-column field='work3' headerText='Work 3' textAlign='Center' width=150 ></e-column>
                <e-column field='work4' headerText='Work 4' textAlign='Center' width=150 ></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public gridLines?: string;
    public queryCellInfoEvent = (args: any) => {
        const datas: any = args.data as any;
        switch (datas.TaskID) {
            case 1:
                if ((args.column!.field === 'work3') || (args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work1') {
                    args.colSpan = 2;
                }
                break;
            case 2:
                if ((args.column!.field === 'work1') || (args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work2') {
                    args.colSpan = 2;
                }
                break;
            case 3:
                if ((args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work1') {
                    args.colSpan = 3;
                }
                break;
            case 4:
                if ((args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work1') {
                    args.colSpan = 1;
                }
                break;
            case 5:
                if ((args.column!.field === 'work3')) {
                    args.colSpan = 2;
                }
                else if (args.column!.field === 'work1') {
                    args.colSpan = 2;
                }
                break;
            case 6:
                if ((args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work1') {
                    args.colSpan = 3;
                }
                break;
            case 7:
                if ((args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work1') {
                    args.colSpan = 1;
                }
                break;
            case 8:
                if ((args.column!.field === 'work1') || (args.column!.field === 'work4')) {
                    args.colSpan = 1;
                }
                else if (args.column!.field === 'work2') {
                    args.colSpan = 2;
                }
                break;
        }
    }
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.gridLines = 'Both';
        this.splitterSettings = {
            position: '85%'
        };
    }
}



