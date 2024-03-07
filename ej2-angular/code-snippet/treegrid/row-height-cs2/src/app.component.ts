import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { sampleData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='315' childMapping='subtasks' (rowDataBound)='rowDataBound($event)' >
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
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  ngOnInit(): void {
    this.data = sampleData;
  }
  public rowDataBound(args: RowDataBoundEventArgs) {
    if ((args.data as any)['taskID'] === 5) {
      args.rowHeight = 90;
    }
  }
}
