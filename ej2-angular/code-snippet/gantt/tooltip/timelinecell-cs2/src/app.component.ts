import { GanttModule, GanttComponent} from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule,CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ejs-gantt
        #gantt
        id="ganttChart"
        height="430px"
        [dataSource]="taskData"
        [taskFields]="taskFields"
        [treeColumnIndex]="1"
        [columns]="columns"
        [timelineSettings]="timelineSettings"
        [splitterSettings]="splitterSettings"
        [projectStartDate]="projectStartDate"
        [projectEndDate]="projectEndDate"
        [holidays]="holidays"
    >
      <ng-template #timelineTemplate let-data>
        <ng-container *ngIf="data.tier === 'topTier'">
          <div class="e-header-cell-label e-gantt-top-cell-text"
            style="width:100%;background-color:#FBF9F1;font-weight:bold;height:100%;display:flex;justify-content:center;align-items:center;"
            title="{{data.date}}">
            <div>{{ data.value }}</div>
            <div style="width:20px;height:20px;line-height:normal;padding-left:10px;">
              <img style="width:100%;height:100%;" [src]="imagedate()" >
            </div>
          </div>
        </ng-container>
        <ng-container *ngIf="data.tier === 'bottomTier'">
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
})
export class AppComponent {
    public taskData?: object;
    public taskFields?: object;
    public timelineSettings?: object;
    public columns?: object[];
    public splitterSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    @ViewChild('gantt')
    public ganttRef?: GanttComponent;
    public holidays?: object[];
    public bgColor(value: string, date: string): string {
        if (value === "S") {
          return "#7BD3EA";
        }
        const parsedDate = new Date(date);
        const holidays = this.ganttRef?.holidays ?? [];
        for (let i = 0; i < holidays.length; i++) {
          const holiday: any = this.ganttRef?.holidays[i];
          const fromDate: Date = new Date(holiday.from);
          const toDate: Date = new Date(holiday.to);
          if (parsedDate >= fromDate && parsedDate <= toDate) {
            return "#97E7E1";
          }
        }
        return "#E0FBE2";
    }

    private currentIndex: number = 1;
    
    public imagedate(): string {
        const getImage = this.currentIndex;
        this.currentIndex = this.currentIndex < 4 ? this.currentIndex + 1 : 1; // Loop 1-4

        return `assets/images/${getImage}.svg`;
    }
    
    public holidayValue(value: string, date: string): string {
        const parsedDate = new Date(date);
        const holidays = this.ganttRef?.holidays ?? [];
        for (let i = 0; i < holidays.length; i++) {
          const holiday: any = this.ganttRef?.holidays[i];
          const fromDate: Date = new Date(holiday.from);
          const toDate: Date = new Date(holiday.to);
          if (parsedDate >= fromDate && parsedDate <= toDate) {
            const options: any = { weekday: 'short' };
            return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
          }
        }
        return value;
    }
    public ngOnInit(): void {
        this.taskData = GanttData;
        this.taskFields = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
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
        this.columns = [
            { field: 'TaskId', width: 80 },
            { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor' }
        ];
        this.projectStartDate = new Date('03/31/2024');
        this.projectEndDate = new Date('04/23/2024');
        this.holidays = [ 
            {
              from: new Date('04/04/2024'),
              to: new Date('04/04/2024'),
              label: 'Local Holiday'
            },
            {
              from: new Date('04/19/2024'),
              to: new Date('04/19/2024'),
              label: 'Good Friday'
            }
        ];
    }
}