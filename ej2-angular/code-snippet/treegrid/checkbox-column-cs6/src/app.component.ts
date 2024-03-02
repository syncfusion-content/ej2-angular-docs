import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' autoCheckHierarchy='true' (rowDataBound)="rowdatabound($event)" >
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
  @ViewChild('treegrid') treegrid?: TreeGridComponent;
  
  ngOnInit(): void {
    this.data = sampleData;
  }

  rowdatabound(args: any): void {
    if (!args.data.hasChildRecords) {
      //Here hide the parent checkboxes
      args.row.querySelector('.e-checkbox-wrapper').style.display = 'none';
    }
  }
}
