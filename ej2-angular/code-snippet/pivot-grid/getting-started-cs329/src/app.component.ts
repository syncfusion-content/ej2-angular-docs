import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService, ExcelExportProperties } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Observable } from 'rxjs';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div class="col-md-8">
                <ejs-pivotview #pivotview id='PivotTable' height='350' [dataSourceSettings]=dataSourceSettings 
                    allowExcelExport='true' [width]=width [gridSettings]=gridSettings></ejs-pivotview>
            </div>
            <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [ExcelExportService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public button?: Button;
    public dataSourceSettings?: DataSourceSettingsModel;
    public gridSettings?: GridSettings;
    public observable = new Observable();

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.gridSettings = {
            columnRender: this.observable.subscribe((args: any) => {
                for (let i = 1; i < args.columns.length; i++) {
                    if (args.stackedColumns[i].customAttributes &&
                        args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
                        args.stackedColumns[i].visible = false;
                    }
                }
            }) as any
        } as GridSettings;

        this.dataSourceSettings = {
            dataSource: pivotData as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            let excelExportProperties: ExcelExportProperties = {
                includeHiddenColumn: false
            };
            this.pivotGridObj?.excelExport(excelExportProperties);
        };
    }
}
