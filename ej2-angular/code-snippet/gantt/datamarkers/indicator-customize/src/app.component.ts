import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [GanttModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    template:
        `
        <button ejs-button (click)='indicator()'>Indicator background change</button>
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
        this.data =  this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
                        Indicators: [
                            {
                                'date': '04/08/2019',
                                'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                                'name': 'Custom String',
                                'tooltip': 'Follow up'
                            },
                            {
                                'date': '04/11/2019',
                                'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                                'name': '<span style="color:red">String Template</span>',
                            }
                        ]
                    },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    {
                        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
                    },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50,
                        Indicators: [
                            {
                                'date': '04/10/2019',
                                'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                                'name': 'Indicator title',
                                'tooltip': 'tooltip'
                            }
                        ]
                    },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            resourceInfo: 'resources',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks',
            indicators: 'Indicators'
        };
    }

    indicator(): void {
        const nodes = this.ganttObj.element.querySelectorAll('.e-indicator-span');
        nodes.forEach((box: HTMLElement) => {
            const child = box.children[0] as HTMLElement; 
            child.style.color = 'red';
        });
    }
}