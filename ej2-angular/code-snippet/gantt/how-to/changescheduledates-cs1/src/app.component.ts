import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { editingData } from './data';

@Component({
    imports: [GanttModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='changedate' (click)='change()'>Change Date</button>
       <br><br>
       <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
        };
    }

    public change(): void {
        (this.ganttInstance as GanttComponent).updateProjectDates(new Date('04/10/2019'), new Date('06/20/2019'), true);
    };
}