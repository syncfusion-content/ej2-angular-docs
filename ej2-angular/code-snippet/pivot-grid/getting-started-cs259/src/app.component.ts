

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  width=width (dataBound)='ondataBound()'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj?: PivotView;

    ondataBound(): void {
        if (this.pivotGridObj?.showGroupingBar) {
            let columns: string[] = [];
            for (let i: number = 1; i < (this.pivotGridObj?.grid as any).columnModel.length; i++) {
                columns.push((this.pivotGridObj?.grid as any).columnModel[i].field);
            }
            this.pivotGridObj?.grid.autoFitColumns(columns);
        }
    }

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
}



