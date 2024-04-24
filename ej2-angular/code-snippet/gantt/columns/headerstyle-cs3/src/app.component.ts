
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" (dataBound)="dataBound()" >  
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
    dataBound() {
        ((this.gantt as Gantt).treeGrid.getColumnHeaderByIndex(0) as HTMLElement).style.color = '#0d0b0b';
        ((this.gantt as Gantt).treeGrid.getColumnHeaderByField('TaskName') as HTMLElement).style.backgroundColor = '#f45ddeab';
        ((this.gantt as Gantt).treeGrid.getColumnHeaderByField('TaskName') as HTMLElement).style.color = '#0d0b0b';
        ((this.gantt as Gantt).treeGrid.getColumnHeaderByUid('grid-column11') as HTMLElement).style.background = '#f45ddeab';
        const columnIndex = (this.gantt as Gantt).treeGrid.getColumnIndexByField('Duration');
        ((this.gantt as Gantt).treeGrid.getColumnHeaderByIndex(columnIndex) as HTMLElement).style.color = '#0d0b0b';
        const index = (this.gantt as Gantt).treeGrid.getColumnIndexByUid('grid-column11');
        ((this.gantt as Gantt).treeGrid.getColumnHeaderByIndex(index) as HTMLElement).style.color = '#0d0b0b';
    }
}
