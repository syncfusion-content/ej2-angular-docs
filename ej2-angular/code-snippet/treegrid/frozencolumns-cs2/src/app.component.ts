

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FreezeService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<div style="display:flex;">
                  <label style="padding: 10px 10px 26px 0">Change the frozen column: </label>
                  <ejs-dropdownlist style="margin-top:5px" id="dropdown" #dropdown index="0" width="120" [fields]="field"
                   [dataSource]="ddlData" (change)="columnChange($event)" width="100px"></ejs-dropdownlist>
                </div>  

               <ejs-treegrid [dataSource]='data' childMapping='subtasks' height='310' [allowSelection]='false'>
                 <e-columns>
                    <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' width='200' isFrozen= 'true'></e-column>
                    <e-column field='startDate' headerText='Start Date' isFrozen= 'true' width='150' format='yMd' textAlign='Right'></e-column>
                    <e-column field='endDate' headerText='End Date' width='150' format='yMd' textAlign='Right'></e-column>
                    <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='110' textAlign='Right'></e-column>
                    <e-column field='priority' headerText='Priority' width='110'></e-column>
                    <e-column field='approved' headerText='Approved' textAlign='Left' width='110'></e-column>
                  </e-columns>
               </ejs-treegrid>`,
providers: [FreezeService]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public field?: object;
    public ddlData?: object[];
  
    ngOnInit(): void {
      this.data = sampleData;
      this.field = { text: 'text', value: 'value' };
      this.ddlData = [
        { text: 'taskID', value: 'taskID' },
        { text: 'taskName', value: 'taskName' },
        { text: 'startDate', value: 'startDate' },
        { text: 'endDate', value: 'endDate' },
        { text: 'duration', value: 'duration' },
        { text: 'progress', value: 'progress' },
        { text: 'priority', value: 'priority' },
        { text: 'approved', value: 'approved' },
      ];
    }
    columnChange(args: ChangeEventArgs) {
      const selectedColumn = (
        this.treegrid as TreeGridComponent
      ).getColumnByField(args.value as string);
  
      // Iterate through all columns and unfreeze any previously frozen columns
      (
        (this.treegrid as TreeGridComponent).columns as { isFrozen: boolean }[]
      ).forEach((column) => {
        if (column.isFrozen) {
          column.isFrozen = false;
        }
      });
  
      // Freeze the newly selected column, if it exists
      if (selectedColumn) {
        selectedColumn.isFrozen = true;
      }
  
      // Refresh the columns
      (this.treegrid as TreeGridComponent).refreshColumns();
    }
  }
  


