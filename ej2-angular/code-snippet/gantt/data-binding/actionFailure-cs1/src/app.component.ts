import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt'
import { FailureEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GanttModule ],
    standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" (actionFailure)="actionFailure($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', {static: true}) public ganttInstance?: GanttComponent;
    public data?: DataManager;
    public taskSettings?: object;

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

    public actionFailure = (event: FailureEventArgs) => {
        let span: HTMLElement = document.createElement('span');
        this.ganttInstance!.element.parentNode!.insertBefore(span, this.ganttInstance!.element);
        span.style.color = '#FF0000'
        span.innerHTML = 'Server exception: 404 Not found';
    }
}



