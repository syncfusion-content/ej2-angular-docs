

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Observable } from 'rxjs';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  width=width (columnRender)='columnRender($event)'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    columnRender($event: Event) {
    }
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public gridSettings?: GridSettings;
    public observable = new Observable();

    ngOnInit(): void {

        this.gridSettings = {
            columnRender: this.observable.subscribe((args: any) => {
                for(var i = 0; i < (args as any).columns.length;i++) {
                    (args as any).columns[i].autoFit = true;
                }
            }) as any
        } as GridSettings;

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



