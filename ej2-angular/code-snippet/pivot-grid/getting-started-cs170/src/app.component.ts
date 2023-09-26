

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService, DataSourceSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  width=width (dataBound)='ondataBound()' showFieldList='true'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj?: PivotView;

    ondataBound(): void {
        if (this.pivotGridObj && (this.pivotGridObj?.dataSourceSettings as DataSourceSettings).values.length === 0) {
            (this.pivotGridObj?.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
        }
    }

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
        };
    }
}



