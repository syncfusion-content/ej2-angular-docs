import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  template: `<div style="text-align:center">
  <p style="color:red;" id="message">{{message}}</p>
  </div>
  <ejs-treegrid #treegrid id='TreeGrid'  [dataSource]='sourceData' childMapping='subtasks'  [allowPaging]="true" [pageSettings]="true" [allowSelection]="true" [allowRowDragAndDrop]="true" 
              [selectionSettings]="selectionOptions"  (rowDrop)="rowDrop($event)" (rowDragStartHelper)="rowDragStartHelper($event)" (rowDragStart)="rowDragStart($event)" 
            (rowDrag)="rowDrag($event)">
                <e-columns>
                  <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true'  textAlign='Right' width=90></e-column>
                  <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                  <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                  <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>  `,
  styles: [],
})
export class AppComponent implements OnInit {
  @ViewChild('treegrid')
  treeGridObject!: TreeGridComponent;
  public sourceData: Object[] = [];
  public selectionOptions?: Object;
  public message?: string;

  ngOnInit(): void {
    this.sourceData = sampleData;
    this.selectionOptions = { type: 'Multiple' };
  }
  rowDragStartHelper(args: RowDragEventArgs): void {
    this.message = `rowDragStartHelper event triggered`;
    if (((args.data as Object[])[0] as any).taskID === 4) {
      args.cancel = true;
    }
  }
  rowDragStart(args: RowDragEventArgs) {
    this.message = `rowDragStart event triggered`;
    if (((args.data as Object[])[0] as any).taskID === 7) {
      args.cancel = true;
    }
  }
  rowDrag(args: RowDragEventArgs): void {
    this.message = `rowDrag event triggered`;
  }
  rowDrop(args: RowDragEventArgs): void {
    this.message = `rowDrop event triggered`;
  }
}
