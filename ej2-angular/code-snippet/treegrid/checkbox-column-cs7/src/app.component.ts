import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<div>
               <label style="padding: 30px 17px 0 0" >Get the checked record details :</label>
              <button ejs-button id="buttons" (click)="GetCheckedRecord()">Checked Records</button>
              <button ejs-button id="buttons" (click)="GetCheckedIndex()">Checked Index</button>
               </div>
               <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
          
                <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' autoCheckHierarchy='true' >
                 <e-columns>
                   <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                   <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180 [showCheckbox]='true'></e-column>
                   <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                   <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                  </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public message?: any;
  public header?: string;
  public checked_record?: any;
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  @ViewChild('Dialog')
  public dialog?: DialogComponent;

  ngOnInit(): void {
    this.data = sampleData;
    this.header = 'Checked record Details';
  }
  GetCheckedRecord(): void {
    this.checked_record = (
      this.treegrid as TreeGridComponent
    ).getCheckedRecords();

    if (this.checked_record.length != 0) debugger;

    var content = '';
    for (var i = 0; i < this.checked_record.length; i++) {
      content +=
        'TaskID: ' +
        this.checked_record[i].taskID +
        ', Task Name: ' +
        this.checked_record[i].taskName +
        ', Date: ' +
        this.checked_record[i].startDate +
        ', Duration: ' +
        this.checked_record[i].duration +
        '<br>';
    }
    this.message = content;
  }
  GetCheckedIndex(): void {
    var checked_index = (
      this.treegrid as TreeGridComponent
    ).getCheckedRowIndexes();
    if (checked_index.length != 0)
      this.message = 'Checked records Index:' + checked_index;
  }
}
