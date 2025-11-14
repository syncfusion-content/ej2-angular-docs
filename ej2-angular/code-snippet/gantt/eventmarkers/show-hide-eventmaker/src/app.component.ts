import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule, DayMarkersService } from '@syncfusion/ej2-angular-gantt';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonAllModule],
  providers: [DayMarkersService],
  encapsulation: ViewEncapsulation.None,
  template: `
   <div style="margin-bottom:20px">
        <button ejs-button (click)="toggleEventMarkers()">
        {{ eventMarkersEnabled ? 'Disable' : 'Enable' }} Event Markers
        </button>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [eventMarkers]="eventMarkers">
    </ejs-gantt>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public eventMarkers: object[] = [];
  public eventMarkersEnabled: boolean = true;

  private defaultMarkers: object[] = [
    { day: new Date('04/09/2019'), label: 'Research phase' },
    { day: new Date('04/30/2019'), label: 'Design phase' },
    { day: new Date('05/23/2019'), label: 'Production phase' },
    { day: new Date('06/20/2019'), label: 'Sales and marketing phase' }
  ];

  ngOnInit(): void {
    this.data = projectNewData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.eventMarkers = [...this.defaultMarkers];
  }

  public toggleEventMarkers(): void {
    if (this.eventMarkersEnabled) {
      this.ganttInstance.eventMarkers = [];
    } else {
      this.ganttInstance.eventMarkers = [...this.defaultMarkers];
    }
    this.eventMarkersEnabled = !this.eventMarkersEnabled;
  }
}