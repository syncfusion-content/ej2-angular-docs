
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ResizeService } from '@syncfusion/ej2-angular-gantt';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
         GanttModule, DropDownListAllModule, TextBoxModule, ButtonModule
    ],
providers: [ResizeService],
standalone: true,
    selector: 'app-root',
    template:
        `<div style="display:flex;">
            <label style="padding: 10px 10px 26px 0">Change the field: </label>
            <ejs-dropdownlist
            style="margin-top:5px"
            id="value"
            #dropdown
            index="0"
            width="120"
            [fields]="field"
            [dataSource]="ddlData"
            ></ejs-dropdownlist>
        </div>
        <div>
            <label style="padding: 30px 17px 0 0">Enter the width: </label>
            <ejs-textbox #textbox required placeholder="Enter new width" width="120"></ejs-textbox>
            <button ejs-button id="button" cssClass="e-outline" (click)="onExternalResize()">Resize</button>
        </div>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
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
    public field: object = { text: 'text', value: 'value' };
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    @ViewChild('dropdown')
    public dropDown?: DropDownListComponent;
    @ViewChild('textbox')
    public textbox?: any;
    public taskSettings?: object;
    public splitterSettings?: object;
    public ddlData: object[] = [
        { text: 'TaskID', value: 'TaskID' },
        { text: 'TaskName', value: 'TaskName' },
        { text: 'StartDate', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' },
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
    onExternalResize() {
        (this.gantt as GanttComponent).treeGrid.getColumnByField((this.dropDown as DropDownListComponent).value as string).width = this.textbox.element.value;
        (this.gantt as GanttComponent).treeGrid.refreshColumns();

    }

}
