

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='200' [dataSourceSettings]=dataSourceSettings  width=width (load)="load($event)"></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public button?: Button;
  public width?: string;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj?: PivotView;

    load(args: any): void {
      if(this.pivotGridObj) {
        this.pivotGridObj.minHeight = 200;
      }
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Total', format: 'C2' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
        this.width = '100%';
    }
}



