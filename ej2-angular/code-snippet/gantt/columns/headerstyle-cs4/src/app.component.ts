import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Column, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { HeaderCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (headerCellInfo)="onHeaderCellInfo($event)">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styles: [`
    .e-gantt .e-headercell.customcss {
      background-color: #a2d6f4;
      color: rgb(3, 2, 2);
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

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
    this.splitterSettings = {
      position: '75%'
    };
  }

  
  public onHeaderCellInfo(args: HeaderCellInfoEventArgs): void {
    const column = args.cell?.column as Column;
    if (column?.field === 'TaskID') {
        (args.node as HTMLElement).classList.add('customcss');
    }
  }
}
