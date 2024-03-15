import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, VirtualScrollService, VirtualScrollSettingsModel } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-container',
  providers: [VirtualScrollService],
  template: `<ejs-pivotview #pivotview id='PivotView' width='100%' height='350'
    [dataSourceSettings]='dataSourceSettings' enableVirtualization='true' [virtualScrollSettings]='virtualScrollSettings'>
  </ejs-pivotview>`
})

export class AppComponent implements OnInit  {
  public dataSourceSettings?: IDataOptions;
  public virtualScrollSettings?: VirtualScrollSettingsModel;

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
    this.virtualScrollSettings = {
      allowSinglePage: true
    } as VirtualScrollSettingsModel;

    this.dataSourceSettings = {
      dataSource: this.data(1000) as IDataSet[],
      enableSorting: false,
      expandAll: true,
      formatSettings: [{ name: 'Price', format: 'C0' }],
      rows: [{ name: 'ProductID' }],
      columns: [{ name: 'Year' }],
      values: [{ name: 'Price', caption: 'Unit Price' },
        { name: 'Sold', caption: 'Unit Sold' }
      ]
    };
  }
}



