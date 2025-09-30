import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, ResizeService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SparklineAllModule, Sparkline } from '@syncfusion/ej2-angular-charts';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, SparklineAllModule],
  providers: [ResizeService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px"  [dataSource]="data" (created)="renderGridSparkline()"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">    
            <e-columns>
                <e-column field='TaskID' headerText='TaskID'  width=100></e-column>
                <e-column field='TaskName' headerText='TaskName' width=290 ></e-column>
                <e-column field='customData' headerText='Custom Data' width='280'>
                    <ng-template #template let-ganttdata>
                        <div id="spkline{{ganttdata.TaskID}}"></div>
                    </ng-template>
                 </e-column>
            </e-columns>
       </ejs-gantt>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data = GanttData;
  public taskSettings?: object;
  public splitterSettings?: object;
  public lineData: object[] = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
  ];

  public ngOnInit(): void {
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks',
      customData: 'customData'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public getSparkData(type: string, count: number): number[] {
    return this.lineData[count] as number[];
  }

  public renderGridSparkline(): void {
    setTimeout(() => {
      const length = (this.ganttInstance as GanttComponent).treeGrid.getDataRows().length
      for (let i: number = 1; i <= length; i++) {
        let line: Sparkline = new Sparkline({
          height: '50px',
          width: '90%',
          lineWidth: 2,
          valueType: 'Numeric',
          fill: '#3C78EF',
          dataSource: this.getSparkData('line', i)
        });
        line.appendTo('#spkline' + i);
      }
    }, 100)
  }
}

