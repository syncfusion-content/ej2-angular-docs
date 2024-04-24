
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';
import { TextAlign } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './data';


@Component({
    selector: 'app-root',
    template:
        `<div style="display: flex">
            <label style="padding: 30px 17px 0 0;">Align the text of header text :</label>
            <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" 
            [dataSource]="alignmentData" (change)="changeAlignment($event)">
            </ejs-dropdownlist>
        </div>
        <div class="control-section" style="padding-top:20px">
            <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
            [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">   
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' headerTextAlign='Right' width=110 ></e-column>
                    <e-column field='TaskName' headerText='Task Name' width=290></e-column>
                    <e-column field='StartDate' headerText='Start Date' width=120 ></e-column>
                    <e-column field='Duration' headerText='Duration' width=90 ></e-column>
                    <e-column field='Progress' headerText='Progress' width=120></e-column>
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
    public taskSettings?: object;
    public splitterSettings?: object;
    public alignmentData: Object[] = [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' }
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
    public changeAlignment(args: ChangeEventArgs): void {
        (this.gantt as GanttComponent).treeGrid.grid.columns.forEach((col: any) => {
            (col as ColumnModel).headerTextAlign = (args.value as TextAlign);
        });
        (this.gantt as GanttComponent).treeGrid.refreshHeader()
    }
}
