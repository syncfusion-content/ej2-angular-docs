

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TimePicker } from '@syncfusion/ej2-calendars';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='315' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format="hh:mm" [edit]="editOptions" width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public editSettings?: EditSettingsModel;
  public editOptions?: Object;
  public elem?: HTMLElement;
  public timeObject?: TimePicker;
  @ViewChild('treegrid')
  public treeGridObj?: TreeGridComponent;
  public toolbarOptions?: ToolbarItems[];

  ngOnInit(): void {
    this.data = sampleData;
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      newRowPosition: 'Below',
      mode: 'Cell',
    };
    this.editOptions = {
      create: () => {
        this.elem = document.createElement('input');
        return this.elem;
      },
      read: () => {
        return (this.timeObject as TimePicker).value;
      },
      destroy: () => {
        (this.timeObject as TimePicker).destroy();
      },
      write: (args: { rowData: Object; column: Column } | any) => {
        this.timeObject = new TimePicker({
          value: args.rowData[args.column.field],
          step: 60,
        });
        this.timeObject.appendTo(this.elem);
      },
    };
  }
}



