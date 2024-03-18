import { Component, ViewChild, OnInit } from '@angular/core';
import { sampleGridData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { GridComponent, RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-container',
  template: `<div>
                <div style="float:left;width:49%">
                    <ejs-treegrid #treegrid id='TreeGrid'  [dataSource]='sourceData' childMapping='subtasks'  [allowPaging]="true" [pageSettings]="true" [allowSelection]="true" [allowRowDragAndDrop]="true" 
                      [selectionSettings]="selectionOptions" [rowDropSettings]="srcDropOptions" (rowDrop)='onRowDrop($event)' [editSettings]='treeGridEditSettings'>
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true'  textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-treegrid>
                </div>
                <div style="float:left;width:49%">
                    <ejs-grid #grid id='Grid'  [editSettings]="gridEditSettings" >
                        <e-columns> 
                            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field='description' headerText='Description' textAlign='Left' width=180></e-column>
                            <e-column field='category' headerText='Category' textAlign='Left' width=180></e-column>
                            <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>
            </div>`,
})
export class AppComponent implements OnInit {
  @ViewChild('grid')
  gridObject!: GridComponent;
  @ViewChild('treegrid')
  treeGridObject!: TreeGridComponent;
  public sourceData: Object[] = [];
  public selectionOptions?: Object;
  public srcDropOptions?: Object;
  public treegridData: object[] = [];
  public gridEditSettings?: Object;
  public treeGridEditSettings?: Object;

  ngOnInit(): void {
    this.sourceData = sampleGridData;
    this.selectionOptions = { type: 'Multiple' };
    this.srcDropOptions = { targetID: 'Grid' };
    this.gridEditSettings = { allowAdding: true, allowEditing: true };
    this.treeGridEditSettings = { allowDeleting: true };
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
        this.gridObject.addRecord((args.data as Object[])[i], rowIndex);
        this.treeGridObject.deleteRecord('taskID', (args.data as Object[])[i]);
      }
    }
  }
}
