import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component } from '@angular/core';
import { PivotView, CellEditSettings, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { pivot_flatdata } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',  
  template: `<div class="control-section" style="overflow:auto;">
  <ejs-pivotview #pivotview id='PivotView' [gridSettings]='gridSettings'
  [dataSourceSettings]=dataSourceSettings width='100%' height='290'
  [editSettings]='editSettings'> </ejs-pivotview> </div>`
})

export class AppComponent {

    public width?: string;
    public editSettings?: CellEditSettings
    public dataSourceSettings?: DataSourceSettingsModel;
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



