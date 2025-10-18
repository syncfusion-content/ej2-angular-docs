import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [gridLines]="gridLines" (queryCellInfo)="queryCellInfoEvent($event)">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="work1" headerText="Work 1" textAlign="Center" width="150"></e-column>
        <e-column field="work2" headerText="Work 2" textAlign="Center" width="150"></e-column>
        <e-column field="work3" headerText="Work 3" textAlign="Center" width="150"></e-column>
        <e-column field="work4" headerText="Work 4" textAlign="Center" width="150"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public gridLines?: string;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.gridLines = 'Both';
    this.splitterSettings = {
      position: '85%'
    };
  }

  public queryCellInfoEvent = (args: any): void => {
    const data = args.data;
    const field = args.column?.field;

    switch (data.TaskID) {
      case 1:
        if (field === 'work3' || field === 'work4') {
          args.colSpan = 1;
        } else if (field === 'work1') {
          args.colSpan = 2;
        }
        break;
      case 2:
        if (field === 'work1' || field === 'work4') {
          args.colSpan = 1;
        } else if (field === 'work2') {
          args.colSpan = 2;
        }
        break;
      case 3:
        if (field === 'work4') {
          args.colSpan = 1;
        } else if (field === 'work1') {
          args.colSpan = 3;
        }
        break;
      case 4:
        if (field === 'work4' || field === 'work1') {
          args.colSpan = 1;
        }
        break;
      case 5:
        if (field === 'work3') {
          args.colSpan = 2;
        } else if (field === 'work1') {
          args.colSpan = 2;
        }
        break;
      case 6:
        if (field === 'work4') {
          args.colSpan = 1;
        } else if (field === 'work1') {
          args.colSpan = 3;
        }
        break;
      case 7:
        if (field === 'work4' || field === 'work1') {
          args.colSpan = 1;
        }
        break;
      case 8:
        if (field === 'work1' || field === 'work4') {
          args.colSpan = 1;
        } else if (field === 'work2') {
          args.colSpan = 2;
        }
        break;
    }
  };
}
