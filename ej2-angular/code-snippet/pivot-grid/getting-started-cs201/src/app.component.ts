

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PagerSettings, PageSettings, PagerService } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings width=width [gridSettings]='gridSettings' enablePaging="true" [pageSettings]="pageSettings" [pagerSettings]="pagerSettings"></ejs-pivotview>`,
    providers: [PagerService]
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: IDataOptions;
    public remoteData?: DataManager;
    public width?: string;
    public gridSettings?: GridSettings;
    public pageSettings?: PageSettings;
    public pagerSettings?: PagerSettings;

    ngOnInit(): void {
        this.remoteData = new DataManager({
            url: 'https://bi.syncfusion.com/northwindservice/api/orders',
            adaptor: new WebApiAdaptor,
            crossDomain: true
        });
        this.width = '100%';
        this.pageSettings = {
            rowPageSize: 10,
            columnPageSize: 5,
            currentColumnPage: 1,
            currentRowPage: 1
        } as PageSettings;
        this.pagerSettings = {
            position: 'Bottom',
            enableCompactView: false,
            showColumnPager: true,
            showRowPager: true,
            columnPageSizes: [5, 10, 20, 50, 100],
            rowPageSizes: [10, 50, 100, 200],
            isInversed: false,
            showColumnPageSize: true,
            showRowPageSize: true
        } as PagerSettings;
        this.gridSettings = { columnWidth: 120 } as GridSettings;
        this.dataSourceSettings = {
            dataSource: this.remoteData,
            expandAll: true,
            filters: [],
            columns: [{ name: 'ProductName', caption: 'Product Name' }],
            rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
            formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
            values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
        };
    }
}



