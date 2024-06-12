import { NgModule ,ViewEncapsulation,ViewChild} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule,GanttComponent } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { timelineTemplateData } from './data';

@Component({
imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
    template: `
    <ejs-gantt
      id="TimelineTemplate"
      height="430px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [allowSelection]="true"
      [labelSettings]="labelSettings"
      [treeColumnIndex]="1"
      [columns]="columns"
      [timelineSettings]="timelineSettings"
      [splitterSettings]="splitterSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [holidays]="holidays"
    >
      <ng-template #timelineTemplate let-data>
        <ng-container [ngIf]="data.tier === 'topTier'">
          <div class="e-header-cell-label e-gantt-top-cell-text"
            style="width:100%;background-color:#FBF9F1;font-weight:bold;height:100%;display:flex;justify-content:center;align-items:center;"
            title="{{data.date}}">
            <div>{{ data.value }}</div>
            <div style="width:20px;height:20px;line-height:normal;padding-left:10px;">
              <img style="width:100%;height:100%;" [src]="imagedate()" >
            </div>
          </div>
        </ng-container>
        <ng-container [ngIf]="data.tier === 'bottomTier'">
          <div class="e-header-cell-label e-gantt-top-cell-text"
            [ngStyle]="{ 'background-color': bgColor(data.value, data.date) }"
            style="width:100%;text-align:center;height:100%;display:flex;align-items:center;font-weight:bold;justify-content:center;"
            title="{{data.date}}">
            {{ holidayValue(data.value, data.date) }}
          </div>
        </ng-container>
      </ng-template>
    </ejs-gantt>
`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
  @ViewChild('ganttObj')
  public ganttObj: GanttComponent;
  // Data for Gantt
  public data?: object[];
  public taskSettings?: object;
  public holidays?: object[];
  public labelSettings?: object;
  public projectStartDate?: Date;
  public projectEndDate?: Date;
  public timelineSettings?: object;
  public columns?: object[];
  public splitterSettings?: object;
  public bgColor(value: string, date: string): string {
    if (value === "S") {
      return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < this.ganttObj.holidays.length; i++) {
      const holiday = this.ganttObj.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return "#97E7E1";
      }
    }
    return "#E0FBE2"
  };
  public imagedate() {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return "./images/" + getImage + ".svg";

  }
  public holidayValue(value: string, date: string) {
    const parsedDate = new Date(date);
    for (let i = 0; i < this.ganttObj.holidays.length; i++) {
      const holiday = this.ganttObj.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options: any = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  public ngOnInit(): void {
    this.data = timelineTemplateData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.columns = [
      { field: 'TaskID', visible: false },
      { field: 'TaskName', width: 300 },
      { field: 'StartDate' },
      { field: 'EndDate' },
      { field: 'Duration' },
      { field: 'Progress' }
    ];
    this.splitterSettings = {
      columnIndex: 1
    };
    this.timelineSettings = {
      topTier: {
        unit: 'Week',
        format: 'dd/MM/yyyy'
      },
      bottomTier: {
        unit: 'Day',
        count: 1
      },
      timelineUnitSize: 100
    };
    this.holidays = [
      {
        from: new Date('04/04/2019'),
        to: new Date('04/04/2019'),
        label: 'Local Holiday'
      }, {
        from: new Date('04/19/2019'),
        to: new Date('04/19/2019'),
        label: 'Good Friday'
      },
    ];
    this.projectStartDate = new Date('03/31/2024');
    this.projectEndDate = new Date('04/23/2024');
    this.labelSettings = {
      leftLabel: 'TaskName',
      taskLabel: 'Progress'
    };
  }
}



