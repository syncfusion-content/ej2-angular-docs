
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ResizeService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { ResizeMode } from '@syncfusion/ej2-angular-grids';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule
    ],
    providers: [ResizeService],
standalone: true,
    selector: 'app-root',
    template:
        ` <div style="display: flex">
            <label style="padding: 10px 10px 26px 0"> Change the resize mode: </label>
            <ejs-dropdownlist style="margin-top:5px" index="0" width="150" [dataSource]="ddlData"
            (change)="valueChange($event)">
            </ejs-dropdownlist>
        </div>
        <ejs-gantt id="ganttDefault" #gantt height="430px" [allowResizing]='true' [dataSource]="data" 
         [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">    
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
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
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public ddlData: object[] = [
        { text: 'Normal', value: 'Normal' },
        { text: 'Auto', value: 'Auto' },
    ];
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
    valueChange(args: ChangeEventArgs): void {
        (this.gantt as GanttComponent).treeGrid.grid.resizeSettings.mode = (args.value as ResizeMode);
    }
}
