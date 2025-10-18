import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="control-section" style="height: 475px; width: 650px;">
      <ejs-gantt #primaryGantt id="primaryGanttContainer" height="50%" width="100%" [dataSource]="data" [taskFields]="taskSettings"
      [treeColumnIndex]="1" [allowSelection]="true" dateFormat="MMM dd, y" [highlightWeekends]="true" (actionComplete)="syncScroll($event)"></ejs-gantt>
      <ejs-gantt #secondaryGantt id="secondaryGanttContainer" height="50%" width="100%" [dataSource]="data" [taskFields]="taskSettings"
      [treeColumnIndex]="1" [allowSelection]="true" dateFormat="MMM dd, y" [highlightWeekends]="true"></ejs-gantt>
    </div>`
})

export class AppComponent implements OnInit {
  @ViewChild('primaryGantt') public primaryGantt!: GanttComponent;
  @ViewChild('secondaryGantt') public secondaryGantt!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};

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
  }

  public syncScroll(args: any): void {
    if (args.action === 'HorizontalScroll') {
      const chartElement = this.secondaryGantt.element.querySelector('.e-chart-root-container > div');
      if (chartElement) {
        chartElement.scrollLeft = args.scrollLeft;
      }
    }
  }
}