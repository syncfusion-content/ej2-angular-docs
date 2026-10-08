import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [GanttModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template:
        `
        <button ejs-button (click)='hideIndicators()'>Hide data markers</button>
        <button ejs-button (click)='showIndicators()'>Show data markers</button>
        <br><br>
        <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true })
    public ganttObj?: GanttComponent | any;
    public data?: object[];
    public taskSettings?: object;

    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
            },
            {
                TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50,
                Indicators: [
                    {
                        'date': new Date('04/08/2019'),
                        'iconClass': 'e-btn-icon e-notes-info e-icons',
                        'name': 'Review Meeting',
                        'tooltip': 'Review and approve project requirements'
                    },

                ]
            },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
            },
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50,
                Indicators: [
                    {
                        'date': new Date('04/10/2019'),
                        'iconClass': 'e-btn-icon e-notes-info e-icons',
                        'name': 'Quality Check',
                        'tooltip': 'Soil quality inspection checkpoint'
                    }
                ]
            },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            resourceInfo: 'resources',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID',
            indicators: 'Indicators'
        };
    }

    hideIndicators(): void {
        const nodes = this.ganttObj.element.querySelectorAll('.e-indicator-span');
        nodes.forEach((box: HTMLElement) => {
            box.style.display = 'none';
        });
    }

    showIndicators(): void {
        const nodes = this.ganttObj.element.querySelectorAll('.e-indicator-span');
        nodes.forEach((box: HTMLElement) => {
            box.style.display = '';
        });
    }
}
