import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService, BeforeExportEventArgs } from '@syncfusion/ej2-angular-pivotview'
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

    beforeExport(args: BeforeExportEventArgs) {
        // Store the drilledMembers here(row/column headers that has been expanded).
        let member = this.pivotGridObj?.dataSourceSettings.drilledMembers;
        // Then apply expandAll to the pivot table settings to get all the data including child members.
        this.pivotGridObj?.setProperties(
            { dataSourceSettings: { expandAll: true, drilledMembers: [] } },
            true
        );
        this.pivotGridObj?.engineModule.generateGridData(this.pivotGridObj.dataSourceSettings, true);
        // Assign that retrieved data to the exporting here.
        args.dataCollections = [(this.pivotGridObj as any).engineModule?.pivotValues];
        // Then set false to expandAll and the stored members to the drilledMembers  to the pivot table settings to get back to the normal state.
        this.pivotGridObj?.setProperties(
            { dataSourceSettings: { expandAll: false, drilledMembers: member } },
            true
        );
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: pivotData as IDataSet[],
            enableSorting: true,
            columns: [{ name: 'Year' }],
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' },
            ],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            expandAll: false,
            filters: []
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.excelExport();
        };
    }
}
