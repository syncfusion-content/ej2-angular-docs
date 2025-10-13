import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [RowDDService, EditService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt id="gantt" height="450px" [dataSource]="data" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowRowDragAndDrop]="true" (rowDrop)="onRowDrop($event)" [taskFields]="taskSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data: object[] = [];
  public message: string = '';
  public taskSettings: object = {};
  public splitterSettings: object = {};

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

  public onRowDrop(args: RowDragEventArgs): void {
    if ((args as any).dropPosition === 'middleSegment') {
      args.cancel = true;
      this.gantt?.rowDragAndDropModule.reorderRows([(args.fromIndex as number)], (args.dropIndex as number), 'above');
    }
  }
}
