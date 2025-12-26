import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Observable } from 'rxjs';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule,
        DropDownListModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `
        <div class="col-md-8">
            <ejs-pivotview #pivotview id='PivotTable' height='350' [dataSourceSettings]=dataSourceSettings
                allowExcelExport='true' [width]=width [gridSettings]=gridSettings></ejs-pivotview>
        </div>
        <div class="col-md-2">
            <div id="export-btn">
                <button ej-button id='export'>Export</button>
            </div>
            <div id="dropdownlist" style="display: flex; align-items: center; margin-top: 25px;">
                <label>Select a degree:</label>
                <ejs-dropdownlist id='ddlelement' #ddlelement placeholder='Select a degree' [dataSource]='degree'>
                </ejs-dropdownlist>
            </div>
        </div>`,
    providers: [ExcelExportService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public button?: Button;
    public dataSourceSettings?: DataSourceSettingsModel;
    public gridSettings?: GridSettings;
    public observable = new Observable();
    public degree?: number[];

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    @ViewChild('ddlelement')
    public dropDownListObject: any;

    ngOnInit(): void {
        this.degree = [90, 135, 180, 270];

        this.gridSettings = {
            excelHeaderQueryCellInfo: this.observable.subscribe((args: any) => {
                args.style = { rotation: this.dropDownListObject.value as number };
            }) as any,
            excelQueryCellInfo: this.observable.subscribe((args: any) => {
                args.style = { rotation: this.dropDownListObject.value as number };
            }) as any,
        } as GridSettings;

        this.dataSourceSettings = {
            expandAll: false,
            dataSource: pivotData as IDataSet[],
            columns: [{ name: 'Year' }],
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
