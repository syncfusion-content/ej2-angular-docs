

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, VirtualScrollService, GroupingBarService } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-container',
  providers: [VirtualScrollService, GroupingBarService],
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]='dataSourceSettings' showGroupingBar='true' enableVirtualization='true' maxNodeLimitInEditor='100' width='710' height='260'></ejs-pivotview>`
})

export class AppComponent implements OnInit  {
public dataSourceSettings?: IDataOptions;
public date1?: number;
public date2?: number;
data(count: number) {
  let result: Object[] = [];
  let dt: number = 0;
  for (let i: number = 1; i < count + 1; i++) {
    dt++;
    let round: string;
    let toString: string = i.toString();
    if (toString.length === 1) {
      round = "0000" + i;
    } else if (toString.length === 2) {
      round = "000" + i;
    } else if (toString.length === 3) {
      round = "00" + i;
    } else if (toString.length === 4) {
      round = "0" + i;
    } else {
      round = toString;
    }
    result.push({
      ProductID: "PRO-" + round,
      Year: "FY " + (dt + 2013),
      Sold: Math.round(Math.random() * 80) + 10
    });
    if (dt / 4 == 1) {
        dt = 0;
    }
  }
  return result;
}
    ngOnInit(): void {
        this.dataSourceSettings = {
          dataSource: this.data(1000) as IDataSet[],
          enableSorting: false,
          rows: [{ name: 'ProductID' }],
          columns: [{ name: 'Year' }],
          values: [{ name: 'Sold', caption: 'Unit Sold' }]
        };
    }
}



