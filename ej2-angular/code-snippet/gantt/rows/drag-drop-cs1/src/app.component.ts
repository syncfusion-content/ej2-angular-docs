import { NgModule } from '@angular/core';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, RowDDService as GanttRowDDService, SelectionService, GanttComponent, RowDropEventArgs, EditService as GanttEditService } from '@syncfusion/ej2-angular-gantt';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TreeGridComponent, EditService, RowDDService, RowDragEventArgs } from '@syncfusion/ej2-angular-treegrid';
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttData } from './data';

@Component({
  imports: [TreeGridModule,
    GanttModule,
  ],
  providers: [GanttRowDDService, RowDDService, SelectionService, EditService, GanttEditService,],
  standalone: true,
  selector: 'app-root',
  template:
    `<div>
       <div style="float:left;width:49%">
           <ejs-gantt id="ganttDefault" #gantt height="450px" [treeColumnIndex]='1' [dataSource]="data"  [allowRowDragAndDrop]='true'
           [taskFields]="taskSettings" [selectionSettings]="selectionOptions" (load)='ganttDrop()' [editSettings]='EditSettings' (rowDrop)='onRowDrop($event)' >
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                    <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                    <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                    <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
                </e-columns>   
           </ejs-gantt>
       </div>
       <div style="float:left;width:49%">
           <ejs-treegrid #treegrid id='TreeGrid' [editSettings]='treeGridEditSettings' childMapping='subtasks'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true'  textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                </e-columns>
            </ejs-treegrid>
       </div>
   </div>
`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public data?: object[];
  @ViewChild('gantt')
  public gantt?: GanttComponent
  @ViewChild('treegrid')
  public treeGridObject?: TreeGridComponent
  public taskSettings?: object;
  public treeGridEditSettings?: Object;
  public selectionOptions?: Object;
  public EditSettings?: Object;

  public ngOnInit(): void {
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
    this.EditSettings = { allowDeleting: true };
  }
  ganttDrop() {
    (this.gantt as GanttComponent).treeGrid.rowDropSettings = { targetID: 'TreeGrid' };;
  }
  onRowDrop(args: RowDragEventArgs) {
    if ((args.target as Element).closest('.e-grid')) {
      args.cancel = true;
      var rowIndex = !isNullOrUndefined(
        (args.target as Element).closest('.e-row') as Element
      )
        ? ((args.target as HTMLElement).closest('.e-row') as any).rowIndex
        : 0;
      for (var i = 0; i < (args.data as Object[]).length; i++) {
        (this.treeGridObject as TreeGridComponent).addRecord((args.data as Object[])[i], rowIndex);
        (this.gantt as GanttComponent).deleteRecord((args.data as Object[])[i]);
      }
    }
  }

}