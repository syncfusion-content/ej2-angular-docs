import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'

import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotView, FieldListService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    providers: [FieldListService],
    template: `<div class="col-md-8"> <ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings [width]=width height=height 
   (aggregateCellInfo)='aggregateCellInfo($event)' showFieldList='true'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: DataSourceSettingsModel;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    aggregateCellInfo(args: any) {
        if (args.fieldName === 'Sold') {
            args.value = this.secondsToHms(args.value);
        }
    }

    secondsToHms(d: number) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);
        return (
            ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
        );
    }

    ngOnInit(): void {

        this.width = "100%";
        this.height = 350;

        this.dataSourceSettings = {
            expandAll: false,
            dataSource: Pivot_Data as IDataSet[],
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold' }, { name: 'Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        };
    }
}



