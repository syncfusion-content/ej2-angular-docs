
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";
import { CheckBoxModule} from '@syncfusion/ej2-angular-buttons';

import { Component, ViewEncapsulation, OnInit, ViewChild, NgModule  } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
    imports: [
        GanttModule, ButtonModule, CheckBoxModule
   ],
standalone: true,
    selector: 'app-root',
    template:
        `
        <div style="padding:2px 0px 0px 0px">
                <ejs-checkbox #checkbox label='Show / Hide Row' 
                (change)="onCheckBoxChange($event)"></ejs-checkbox>
            </div>
        <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
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
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public rowIndex?: number;
    public hiddenRows: number[] = [];
    public message?: string = '';
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
    public onCheckBoxChange(args: ChangeEventArgs) {
        if (args.checked) {
            for (let i = 0; i < (this.gantt as GanttComponent).treeGrid.grid.getRowsObject().length; i++) {
                if (((this.gantt as GanttComponent).treeGrid.grid.getRowsObject()[i].data as any).TaskName === 'Perform Soil test') {
                    // check the row value
                    this.rowIndex = (this.gantt as GanttComponent).treeGrid.grid.getRowsObject()[i].index; //get particular row index
                    ((this.gantt as GanttComponent).treeGrid.getRowByIndex(this.rowIndex) as HTMLElement).style.display =
                        'none'; //hide row
                        ((this.gantt as GanttComponent).getRowByIndex(this.rowIndex) as HTMLElement).style.display =
                        'none';
                    this.hiddenRows.push((this.rowIndex as number)); // add row index to hiddenRows array
                }
            }
            if (this.hiddenRows.length > 0) {
                this.message = `Rows with a task name column value of 'Perform Soil test' have been hidden`;
            }
        } else {
            // Show hidden rows
            this.hiddenRows.forEach((rowIndex: number) => {
                ((this.gantt as GanttComponent).treeGrid.getRowByIndex(rowIndex) as HTMLElement).style.display = '';
                ((this.gantt as GanttComponent).getRowByIndex(rowIndex) as HTMLElement).style.display = '';
            });
            this.hiddenRows = [];
            this.message = 'Show all hidden rows';
        }
    }
}
