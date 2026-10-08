import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    GanttModule,
    DayMarkersService,
    SelectionService
} from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule],
    providers: [DayMarkersService, SelectionService],
    encapsulation: ViewEncapsulation.None,
    template: `
    <ejs-gantt
      height="450px"
      width="1000px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [labelSettings]="labelSettings"
      [eventMarkers]="eventMarkers"
      [renderBaseline]="true">
    </ejs-gantt>
  `
})
export class AppComponent implements OnInit {

    public data?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public eventMarkers?: object[];

    public ngOnInit(): void {

        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
            baselineStartDate: 'BaselineStartDate',
            baselineEndDate: 'BaselineEndDate'
        };

        this.labelSettings = {
            rightLabel: 'TaskName'
        };

        this.eventMarkers = [
            {
                day: new Date('01/16/2026'),
                label: 'Project approval and kick-off'
            }
        ];

        this.data = [
            {
                TaskId: 1,
                TaskName: 'Project initiation',
                StartDate: new Date('01/06/2026'),
                EndDate: new Date('01/09/2026')
            },
            {
                TaskId: 2,
                TaskName: 'Identify Site location',
                StartDate: new Date('01/06/2026'),
                Duration: 0,
                Progress: 30,
                ParentId: 1
            },
            {
                TaskId: 3,
                TaskName: 'Perform soil test',
                StartDate: new Date('01/06/2026'),
                EndDate: new Date('01/09/2026'),
                BaselineStartDate: new Date('01/06/2026'),
                BaselineEndDate: new Date('01/07/2026'),
                Progress: 40,
                ParentId: 1,
                Predecessor: '2'
            },
            {
                TaskId: 4,
                TaskName: 'Soil test approval',
                StartDate: new Date('01/06/2026'),
                Duration: 0,
                BaselineStartDate: new Date(2026, 0, 5, 8, 0, 0),
                BaselineEndDate: new Date(2026, 0, 5, 8, 0, 0),
                Progress: 30,
                ParentId: 1,
                Predecessor: '3'
            },
            {
                TaskId: 5,
                TaskName: 'Project estimation',
                StartDate: new Date('01/06/2026'),
                EndDate: new Date('01/17/2026')
            },
            {
                TaskId: 6,
                TaskName: 'Develop floor plan for estimation',
                StartDate: new Date('01/06/2026'),
                EndDate: new Date('01/09/2026'),
                Progress: 30,
                ParentId: 5,
                Predecessor: '4'
            },
            {
                TaskId: 7,
                TaskName: 'List materials',
                StartDate: new Date('01/06/2026'),
                EndDate: new Date('01/09/2026'),
                BaselineStartDate: new Date('01/09/2026'),
                BaselineEndDate: new Date('01/14/2026'),
                Progress: 40,
                ParentId: 5,
                Predecessor: '6'
            },
            {
                TaskId: 8,
                TaskName: 'Estimation approval',
                StartDate: new Date('01/06/2026'),
                Duration: 0,
                Progress: 30,
                ParentId: 5,
                Predecessor: '7'
            }
        ];
    }
}