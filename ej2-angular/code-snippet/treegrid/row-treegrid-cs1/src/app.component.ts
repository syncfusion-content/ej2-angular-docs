import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  EditSettingsModel,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  template: `<div style="padding:2px 0px 0px 0px">
             <ejs-checkbox #checkbox label='Show / Hide Row' 
                  (change)="onCheckBoxChange($event)"></ejs-checkbox>
            </div>
            <div><p id="message"  style="color:red; text-align:center;font-weight: bold;">{{ message }}</p> </div>

            <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' >
                  <e-columns>
                      <e-column field='taskID' headerText='Task ID' textAlign='Right' isPrimaryKey="true" width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                      <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public rowIndex?: number;
  public hiddenRows: number[] = [];
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;
  public message?: string = '';

  ngOnInit(): void {
    this.data = sampleData;
  }
  public onCheckBoxChange(args: ChangeEventArgs) {
    if (args.checked) {
      for (
        let i = 0;
        i < (this.treegrid as TreeGridComponent).grid.getRowsObject().length;
        i++
      ) {
        if (
          (
            (this.treegrid as TreeGridComponent).grid.getRowsObject()[i]
              .data as any
          ).duration === 0
        ) {
          // check the row value
          this.rowIndex = (
            this.treegrid as TreeGridComponent
          ).grid.getRowsObject()[i].index; //get particular row index
          (
            (this.treegrid as TreeGridComponent).getRowByIndex(
              this.rowIndex
            ) as HTMLElement
          ).style.display = 'none'; //hide row
          this.hiddenRows.push(this.rowIndex as number); // add row index to hiddenRows array
        }
      }
      if (this.hiddenRows.length > 0) {
       this.message = `Rows with a duration column value of '0' have been hidden`;
      }
    } else {
      // Show hidden rows
      this.hiddenRows.forEach((rowIndex: number) => {
        (
          (this.treegrid as TreeGridComponent).getRowByIndex(
            rowIndex
          ) as HTMLElement
        ).style.display = '';
      });
      this.hiddenRows = [];
      this.message = 'Show all hidden rows';
    }
  }
}
