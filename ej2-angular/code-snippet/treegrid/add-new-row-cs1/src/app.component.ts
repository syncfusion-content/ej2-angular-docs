import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  EditSettingsModel,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<div style="padding:0px 0px 20px 0px">
                <button ejs-button id='above' (click)='addabove()'>Add New Row as Above position</button>
                <button ejs-button id='below' (click)='addbelow()'>Add New Row as Below position</button>
                <button ejs-button id='child' (click)='addchild()'>Add New Row as Child position</button>
          </div>
            <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' [editSettings]='editSettings'  >
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
  public editSettings?: EditSettingsModel;
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
  }
  addabove() {
    const newRecord = {
      taskID: this.generatetaskID(),
      taskName: this.generatetaskName(),
      startDate: this.generatestartDate(),
      duration: this.generateduration(),
    };

    (this.treegrid as TreeGridComponent).addRecord(newRecord, 0, 'Above');
  }
  addbelow() {
    const newRecord = {
      taskID: this.generatetaskID(),
      taskName: this.generatetaskName(),
      startDate: this.generatestartDate(),
      duration: this.generateduration(),
    };

    (this.treegrid as TreeGridComponent).addRecord(newRecord, 4, 'Below');
  }
  addchild() {
    const newRecord = {
      taskID: this.generatetaskID(),
      taskName: this.generatetaskName(),
      startDate: this.generatestartDate(),
      duration: this.generateduration(),
    };
    (this.treegrid as TreeGridComponent).clearSelection();
    (this.treegrid as TreeGridComponent).addRecord(newRecord, 8, 'Child');
  }
  // Generate a random taskID
  generatetaskID(): number {
    return Math.floor(1000 + Math.random() * 90000);
  }
  // Generate a random taskName
  generatetaskName(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
  // Generate a random startDate
  generatestartDate(): Date {
    return new Date();
  }
  // Generate a random duration value
  generateduration(): number {
    return Math.random() * 100;
  }
}
