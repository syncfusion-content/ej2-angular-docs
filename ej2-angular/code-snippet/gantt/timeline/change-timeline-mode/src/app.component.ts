import { Component, ViewEncapsulation, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GanttComponent, GanttModule, TimelineViewMode } from '@syncfusion/ej2-angular-gantt';
import { ComboBoxModule, ComboBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { ItemModel, ToolbarModule  } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ComboBoxModule, ToolbarModule ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-template #template>
      <ejs-combobox #combo [dataSource]="timelineOptions" width="200px" [fields]="{ text: 'Value', value: 'Id' }"
        index="0" (change)="onTimelineChange($event)">
      </ejs-combobox>
    </ng-template>
    <ejs-toolbar [items]="toolbarItems"></ejs-toolbar>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [timelineSettings]="timelineSettings">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  @ViewChild('combo', { static: true }) public comboBoxInstance!: ComboBoxComponent;
  @ViewChild('template', { static: true }) public templateRef!: TemplateRef<any>
  public toolbarItems: ItemModel[] = [];
  public data: object[] = [];
  public taskSettings: object = {};
  public timelineSettings: object = {};
  public timelineOptions = [
    { Id: 'Week', Value: 'Week' },
    { Id: 'Day', Value: 'Day' },
    { Id: 'Month', Value: 'Month' }
  ];

  ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50 }
        ]
      }
    ];

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

    this.toolbarItems = [
        {
            template: this.templateRef,
            align: 'Left',
        }
    ];

    this.timelineSettings = {
      timelineViewMode: 'Week'
    };
  }

  public onTimelineChange(args: ChangeEventArgs ): void {
    (this.ganttInstance as GanttComponent).timelineSettings.timelineViewMode = args.value as TimelineViewMode | undefined;
    this.ganttInstance.refresh();
  }
}
