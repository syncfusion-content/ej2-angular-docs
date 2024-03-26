import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sortData } from './datasource';
import { SortEventArgs } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-container',
  template: `
          <div style="margin-left:100px;">
            <p style="color:red;" id="message">{{message}}</p>
          </div>
       
            <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1'  [allowSorting]='true' childMapping='subtasks' (actionComplete)='actionComplete($event)' (actionBegin)='actionBegin($event)'>
                <e-columns>
                    <e-column field='Category' headerText='Category' textAlign='Right' width=140></e-column>
                    <e-column field='orderName' headerText='Order Name' textAlign='Left' width=200></e-column>
                    <e-column field='orderDate' headerText='Order Date' textAlign='Right' format='yMd' width=150></e-column>
                    <e-column field='units' headerText='Units' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public initialSort?: Object;
  public message?: string;

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = sortData;
  }

  actionBegin(args: any) {
    if (args.requestType === 'sorting' && args.columnName === 'Category') {
      args.cancel = true;
      this.message = args.requestType + ' action cancelled for ' +  args.columnName + ' column';
    }
  }
  actionComplete({ requestType, columnName }: SortEventArgs) {
    this.message = requestType + ' action completed for ' + columnName + ' column';
  }
}
