import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotViewComponent, IDataSet, FieldListService, PivotView, DataSourceSettings, PivotEngine } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div class="col-md-8"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings
    showFieldList="true" [width]=width  height=height></ejs-pivotview></div><div class="col-md-2">
    <button ej-button id='refresh' (click)='applyData($event)'>Refresh</button></div>`
})
export class AppComponent implements OnInit {
    public pivotData?: IDataSet[];
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;
    public width?: string;
    public height?: string;

    @ViewChild('pivotview',{static: false})
    public pivotGridObj?: PivotViewComponent;

    applyData(e: Event): void {
        debugger;
        ((this.pivotGridObj as PivotViewComponent).engineModule as PivotEngine).fieldList = {};
        ((this.pivotGridObj as PivotViewComponent).dataSourceSettings as DataSourceSettings ).dataSource = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Year': 'FY 2016' }
        ] as IDataSet[];
    };

    ngOnInit(): void {

        this.pivotData = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }
        ];

        this.dataSourceSettings = {
            dataSource: this.pivotData,
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

        this.width = '100%';

        this.height = '350';

        this.button = new Button({ 
            isPrimary: true,
        });
        this.button.appendTo('#refresh');
    }
}


