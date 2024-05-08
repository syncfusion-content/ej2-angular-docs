
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { Column, ColumnModel } from '@syncfusion/ej2-angular-grids';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule, ButtonModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `
        <button ejs-button cssClass="e-success" (click)='changeHeaderText()'>Change Header Text</button>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">         
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='StartDate' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=150 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=150></e-column>
            </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public headerTextMap: { [key: string]: string } = {
        'TaskID': 'ID',
        'TaskName': 'Name',
        'StartDate': 'Start Date',
        'Duration': 'Task Duration',
        'Progress': 'Task Progress'
    };
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    changeHeaderText(): void {
        (this.gantt as GanttComponent).treeGrid.grid.columns.forEach((column: ColumnModel | any) => {
            column.headerText = this.headerTextMap[column.field as string];
        });
        (this.gantt as GanttComponent).treeGrid.refreshHeader();
    }
}
