import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { editingData } from './data';

@Component({
    imports: [GanttModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='scrolltop' (click)='scroll()'>Set Scroll Top</button>
       <br><br>
       <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;

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
        this.splitterSettings = {
            position: "50%"
        };
    }

    public scroll(): void {
        this.ganttInstance.ganttChartModule.scrollObject.setScrollTop(200);
    };
}



