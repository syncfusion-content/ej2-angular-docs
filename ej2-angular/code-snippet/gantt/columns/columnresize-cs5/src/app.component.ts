
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ResizeArgs, Column } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
        [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings" [allowResizing]='true'
        (resizeStart)="resizeStart($event)" (resizing)="resizing($event)" (resizeStop)="resizeStop($event)">    
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
    public message?: string;
    @ViewChild('gantt')
    public gantt?: GanttComponent;
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
    resizeStart(args: ResizeArgs) {
        this.message = `resizeStart event triggered`;
        if ((args.column as Column).field === 'TaskID') {
            args.cancel = true;
        }
    }

    resizing(args: ResizeArgs) {
        this.message = `resizing event triggered`;
    }
    resizeStop(args: ResizeArgs) {
        this.message = `resizeStop event triggered`;
        const headerCell = (this.gantt as GanttComponent).treeGrid.getColumnHeaderByField((args.column as Column).field);
        headerCell.classList.add('customcss');
        const columnCells = (this.gantt as GanttComponent).treeGrid
            .getContentTable()
            .querySelectorAll(`[data-colindex="${(args.column as Column).index}"]`);
        for (let i = 0; i < columnCells.length; i++) {
            const cell = columnCells[i] as HTMLElement;
            cell.style.backgroundColor = 'rgb(43, 195, 226)';
        }

    }
}
