

import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { pivotNullData } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showFieldList='true' width=width></ejs-pivotview></div>`
})

export class AppComponent {

    public width?: string;
    public dataSourceSettings?: IDataOptions;

    ngOnInit(): void {

        this.width = '100%';

        this.dataSourceSettings = {
            dataSource: pivotNullData as IDataSet[],
            expandAll: false,
            rows: [{ name: 'Country' }, { name: 'State'}],
            columns: [{ name: 'Product', showNoDataItems: true }, { name: 'Date' }],
            values: [{ name: 'Amount' }, { name: 'Quantity' }],
            showHeaderWhenEmpty: false
        };
    }
 }



