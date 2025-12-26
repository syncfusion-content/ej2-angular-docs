import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService, IAxisSet } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div class="col-md-8">
                <ejs-pivotview #pivotview id='PivotTable' height='350' [dataSourceSettings]=dataSourceSettings 
                    allowExcelExport='true' [width]=width (beforeExport)='beforeExport($event)'></ejs-pivotview>
            </div>
            <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [ExcelExportService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public button?: Button;
    public dataSourceSettings?: DataSourceSettingsModel;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    beforeExport(args: any) {
        for (let i: number = 0; i < args.dataCollections.length; i++) {
            const pivotValue: IAxisSet[] = args.dataCollections[i];
            for (let j: number = 0; j < pivotValue.length; j++) {
                const row: any = pivotValue[j];
                pivotValue[j] = row.filter((item: any) => {
                    return item !== null && (item.axis !== 'row');
                });
            }
        }
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            expandAll: false,
            dataSource: pivotData as IDataSet[],
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.excelExport();
        };
    }
}
