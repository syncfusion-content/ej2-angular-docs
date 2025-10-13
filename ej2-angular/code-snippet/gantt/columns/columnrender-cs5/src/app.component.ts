import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [editSettings]="editSettings" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (rowDataBound)="rowDataBound($event)">
      <e-columns>
        <e-column field="S.No" headerText="S.No" textAlign="Right" width="90"></e-column>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public editSettings?: EditSettingsModel;
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
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public rowDataBound(args: RowDataBoundEventArgs): void {
    const row = args.row;
    if (row) {
      const rowIndex = parseInt(row.getAttribute('aria-rowindex') || '0', 10);
      const serialCell = row.querySelector('.e-rowcell');
      if (serialCell) {
        serialCell.textContent = (rowIndex + 1).toString();
      }
    }
  }
}
