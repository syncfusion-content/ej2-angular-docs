import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<button ejs-button id='show' (click)='show()'>Show</button>
       <button ejs-button id='hide' (click)='hide()'>Hide</button>
       <br><br><br>
       <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings] = "splitterSettings"> 
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=150 ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=90></e-column>
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
    show(): void {
        this.gantt!.showColumn('Duration', 'headerText'); // show by HeaderText
    }

    hide(): void {
        this.gantt!.hideColumn('Duration', 'headerText'); // hide by HeaderText
    }
}