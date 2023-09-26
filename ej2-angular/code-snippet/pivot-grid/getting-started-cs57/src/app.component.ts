

import { Component } from '@angular/core';
import { IDataOptions, PivotView, CellEditSettings, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { pivot_flatdata } from './datasource';

@Component({
  selector: 'app-container',  
  template: `<div class="control-section" style="overflow:auto;">
  <ejs-pivotview #pivotview id='PivotView' [gridSettings]='gridSettings'
  [dataSourceSettings]=dataSourceSettings width='100%' height='290'
  [editSettings]='editSettings'> </ejs-pivotview> </div>`
})

export class AppComponent {

    public width?: string;
    public editSettings?: CellEditSettings
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: any;

    ngOnInit(): void {

        this.width = "100%";
        this.dataSourceSettings = {
            dataSource: pivot_flatdata as IDataSet[],
            expandAll: true,
            rows: [{ name: 'Country'}],
            columns: [{ name: 'Date' }, { name: 'Product' }],
            values: [{ name: 'Quantity', caption: 'Units Sold' },{ name: 'Amount', caption: 'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            showColumnSubTotals:false
            };
        this.editSettings= { allowEditing: true, allowInlineEditing:true } as CellEditSettings;
    }
 }



