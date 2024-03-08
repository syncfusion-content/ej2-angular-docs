import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' [enableHover]='false' (rowDataBound)='rowBound($event)' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];

  ngOnInit(): void {
    this.data = sampleData;
  }
  rowBound(args: RowDataBoundEventArgs | any) {
    if (!args.data.hasChildRecords) {
      //Here apply the background color of child rows
      args.row.style.background = '#33ff12';
    } else {
      //Here apply the background color of parent rows
      args.row.style.background = '#ff2f1f';
    }
  }
}
