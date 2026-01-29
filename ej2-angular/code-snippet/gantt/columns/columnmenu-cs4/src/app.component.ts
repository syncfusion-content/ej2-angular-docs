import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, SortService, FilterService, ColumnMenuService } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation } from '@angular/core';
import { projectNewData } from './data';

@Component({
    imports: [
        GanttModule
    ],
    providers: [SortService, FilterService, ColumnMenuService],
    standalone: true,
    selector: 'app-root',
    template:
        `<div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [treeColumnIndex]='1'
         [allowFiltering] = 'true' [showColumnMenu] = 'true' [allowSorting] = 'true' [splitterSettings]="splitterSettings" 
         (columnMenuOpen)="columnMenuOpen($event)" (columnMenuClick)="columnMenuClick()">
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=150 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=150></e-column>
            </e-columns>
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public message?: string;
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = projectNewData;
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
    };
    columnMenuOpen(args: any): void {
        const columnField = args.column?.field;
        const headerCell = document.querySelector(`[aria-label="${columnField}"]`);
        if (headerCell) {
            (headerCell as HTMLElement).style.backgroundColor = '#f0f8ff';
        }
    }

    columnMenuClick() {
        this.message = `columnMenuClick event is triggered`;
    }
}