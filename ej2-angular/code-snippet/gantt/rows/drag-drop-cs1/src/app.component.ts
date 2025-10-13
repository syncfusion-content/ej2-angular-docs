import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, RowDDService as GanttRowDDService, EditService as GanttEditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { TreeGridModule, TreeGridComponent, RowDDService, EditService, RowDragEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, TreeGridModule],
  providers: [GanttRowDDService, RowDDService, SelectionService, EditService, GanttEditService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="container">
      <div class="gantt-panel">
        <ejs-gantt #gantt id="ganttDefault" height="450px" [treeColumnIndex]="1" [dataSource]="data" [allowRowDragAndDrop]="true" [taskFields]="taskSettings" [selectionSettings]="selectionOptions" [editSettings]="editSettings" [splitterSettings]="splitterSettings" (load)="load()" (rowDrop)="onRowDrop($event)">
          <e-columns>
            <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
            <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
            <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
            <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
            <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
          </e-columns>
        </ejs-gantt>
      </div>

      <div class="treegrid-panel">
        <ejs-treegrid #treegrid id="TreeGrid" [editSettings]="treeGridEditSettings" childMapping="subtasks">
          <e-columns>
            <e-column field="taskID" headerText="Task ID" [isPrimaryKey]="true" textAlign="Right" width="90"></e-column>
            <e-column field="taskName" headerText="Task Name" textAlign="Left" width="180"></e-column>
            <e-column field="startDate" headerText="Start Date" textAlign="Right" format="yMd" width="120"></e-column>
            <e-column field="duration" headerText="Duration" textAlign="Right" width="120"></e-column>
          </e-columns>
        </ejs-treegrid>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      gap: 2%;
    }
    .gantt-panel, .treegrid-panel {
      width: 49%;
    }
  `]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  @ViewChild('treegrid') public treeGridObject?: TreeGridComponent;
  public data: object[] = [];
  public taskSettings: object = { };
  public treeGridEditSettings: object = { };
  public selectionOptions: object = { };
  public editSettings: object = { };
  public splitterSettings: object = { };

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.selectionOptions = { type: 'Multiple' };
    this.treeGridEditSettings = { allowAdding: true, allowEditing: true };
    this.editSettings = { allowDeleting: true };
    this.splitterSettings = { position: '75%' };
  }

  public load(): void {
    (this.ganttInstance as GanttComponent).treeGrid.rowDropSettings = { targetID: 'TreeGrid' };
  }

  public onRowDrop(args: RowDragEventArgs): void {
    const targetGrid = (args.target as Element).closest('.e-grid');
    if (targetGrid) {
      args.cancel = true;
      const rowIndex = !isNullOrUndefined((args.target as Element).closest('.e-row'))
        ? ((args.target as HTMLElement).closest('.e-row') as any).rowIndex
        : 0;

      const draggedData = args.data as object[];
      draggedData.forEach(item => {
        this.treeGridObject?.addRecord(item, rowIndex);
        this.ganttInstance?.deleteRecord(item);
      });
    }
  }
}
