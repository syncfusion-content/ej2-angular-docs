
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
         GanttModule, ButtonModule, TextBoxModule, DropDownListAllModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<div style="display: flex">
             <label style="padding: 30px 20px 0 0" > Select column name  :</label>
              <ejs-dropdownlist  #dropdown style="padding: 26px 0 0 0" index='0' width="220" 
              [dataSource]="columnsdata"  >
              </ejs-dropdownlist>
        </div>
        <div>
            <label style="padding: 30px 17px 0 0" >Enter new header text :</label>
            <ejs-textbox #textbox required placeholder="Enter new header text" width="220">
            </ejs-textbox>
        </div>
        <div>
            <label style="padding: 30px 17px 0 0" >Click the change button :</label>
            <button ejs-button id="buttons" (click)="ChangeHeaderText()">Change</button>
        </div>
        <div style="padding: 20px 17px 0 0">
            <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
            [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">      
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                    <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                    <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                    <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
                </e-columns>
            </ejs-gantt>
        </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public columnsdata?: Object[] = [
        { text: 'TaskID', value: 'TaskID' },
        { text: 'TaskName', value: 'TaskName' },
        { text: 'Duration', value: 'Duration' },
        { text: 'Progress', value: 'Progress' },
    ];
    public field?: Object = { text: 'text', value: 'value' };
    @ViewChild('dropdown') public dropdown?: DropDownListComponent;
    @ViewChild('textbox') public textbox?: TextBoxComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
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
    public ChangeHeaderText(): void {
        if ((this.textbox as TextBoxComponent).element.value.trim() !== '') {
            const column = (this.gantt as Gantt).treeGrid.grid.getColumnByField(
                (((this.dropdown as DropDownListComponent).value as string))
            );
            column.headerText = (this.textbox as TextBoxComponent).element.value;
            (this.gantt as Gantt).treeGrid.refreshHeader();
        }
    }
}
