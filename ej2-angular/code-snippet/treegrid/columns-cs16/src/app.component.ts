import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, Column } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<button ejs-button id='add' cssClass="e-info" (click)='addColumns()'> Add Column</button>
             <button ejs-button id='delete' cssClass="e-info" (click)='deleteColumns()'> Delete Column</button>
    
             <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'>
                  <e-columns>
                      <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                      <e-column field='duration' headerText='Duration'  textAlign='Right' width=80></e-column>
                  </e-columns>
              </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  
  ngOnInit(): void {
    this.data = sampleData;
  }
  addColumns(): void {
    var col: any = (this.treegrid as TreeGridComponent).columns;
    var newColumns = [
      { field: 'progress', headerText: 'Progress', width: 120 },
      { field: 'priority', headerText: 'Priority', width: 120, format: 'yMd' },
    ];
    newColumns.forEach((cols: any) => {
      col.push(cols);
    });
    (this.treegrid as TreeGridComponent).refreshColumns();
  }
  deleteColumns(): void {
    var col: any = (this.treegrid as TreeGridComponent).columns;
    col.pop();
    (this.treegrid as TreeGridComponent).refreshColumns();
  }
}
