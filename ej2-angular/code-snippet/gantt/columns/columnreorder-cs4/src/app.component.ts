
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, Column } from '@syncfusion/ej2-angular-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" [allowReordering]='true' 
        (columnDragStart)="columnDragStart($event)" (columnDrag)="columnDrag($event)" (columnDrop)="columnDrop($event)" 
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
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public message?: string;
    public ngOnInit(): void {
        this.data = GanttData;
        this.message = '';
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
    columnDrop({ column }: ColumnDragEventArgs) {
        this.message = `columnDrop event triggered`;
        if ((column as Column).allowReordering == true) {
            (this.gantt as GanttComponent).treeGrid.getColumnByField((column as Column).field).customAttributes = {
                class: 'customcss',
            };
        }
    }
    columnDragStart({ column }: ColumnDragEventArgs) {
        this.message = `columnDragStart event triggered`;
        if ((column as Column).field == 'TaskID') {
            ((this.gantt as GanttComponent).treeGrid.getColumnByField((column as Column).field).allowReordering = false);
        }
    }
    columnDrag({ column, target }: ColumnDragEventArgs) {
        var index = (target as Element).getAttribute('data-colIndex');
        if (index) {
            this.message = `columnDrag event is triggered. ` + (column as Column).headerText + ` column is dragged to index ` + index;
        }
    }
}
