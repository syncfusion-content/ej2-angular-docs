


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager } from '@syncfusion/ej2-data';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" (actionFailure)="actionFailure($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{

     actionFailure = ($event: any) => {
        let span: HTMLElement = document.createElement('span');
        this.ganttObj!.element.parentNode!.insertBefore(span, this.ganttObj!.element);
        span.style.color = '#FF0000'
        span.innerHTML = 'Server exception: 404 Not found';
    }
    // Data for Gantt
    public data?: DataManager;
    public taskSettings?: object;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent;
    public ngOnInit(): void {
        this.data = new DataManager({
            url: 'http://some.com/invalidUrl',
        });
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'SubTasks'
        };

    }
}



