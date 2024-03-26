import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sortData } from './datasource';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1'  [allowSorting]='true' childMapping='subtasks' (created)="created($event)" >
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
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent | undefined;

  ngOnInit(): void {
    this.data = sortData;
  }
  created(args: any) {
    (
      (this.treegrid as TreeGridComponent).grid.sortModule as any
    ).enableSortMultiTouch = true;
  }
}
