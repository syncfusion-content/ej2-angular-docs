

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Pivot_Data } from './datasource';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [gridSettings]='gridSettings' width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public observable = new Observable();

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

        this.gridSettings = {
            columnWidth: 140,
            columnRender: this.observable.subscribe((args: any) => {
                if ((args as any).stackedColumns[0]) {
                    // Content for the row headers is right-aligned here.
                    (args as any).stackedColumns[0].textAlign = 'Right';
                }
                if ((args as any).stackedColumns[1]) {
                    // Content for the column header "FY 2015" is center-aligned here.
                    (args as any).stackedColumns[1].textAlign = 'Center';
                }
                if ((args as any).stackedColumns[1] && ((args as any).stackedColumns[1].columns[0] as any)) {
                    // Content for the column header "Q1" is right-aligned here.
                    ((args as any).stackedColumns[1].columns[0] as any).textAlign = 'Right';
                }
                if ((args as any).stackedColumns[1] && (args as any).stackedColumns[1].columns[0] && ((args as any).stackedColumns[1].columns[0] as any).columns[0]) {
                    // Content for the value header "Units Sold" is right-aligned here.
                    ((args as any).stackedColumns[1].columns[0] as any).columns[0].headerTextAlign = 'Right';
                }
                if ((args as any).stackedColumns[1] && (args as any).stackedColumns[1].columns[0] && ((args as any).stackedColumns[1].columns[0] as any).columns[0]) {
                    // Content for the values are left-aligned here.
                    ((args as any).stackedColumns[1].columns[0] as any).columns[0].textAlign = 'Left';
                }
            }) as any
        } as GridSettings;
    }
}



