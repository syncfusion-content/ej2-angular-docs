import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotView, PagerSettings, PageSettings, PagerService } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Pager } from '@syncfusion/ej2-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width [gridSettings]='gridSettings' enablePaging="true" [pageSettings]="pageSettings" [pagerSettings]="pagerSettings" (dataBound)='dataBound()'></ejs-pivotview>`,
    providers: [PagerService]
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: DataSourceSettingsModel;
    public remoteData?: DataManager;
    public width?: string;
    public gridSettings?: GridSettings;
    public pageSettings?: PageSettings;
    public pagerSettings?: PagerSettings;
    public rowPager?: Pager;
    public columnPager?: Pager;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    dataBound() {
        this.updateTemplate();
    }

    updateTemplate() {
        if (!isNullOrUndefined(this.rowPager as Pager)) {
            this.rowPager?.destroy();
            this.rowPager = undefined;
        }
        this.rowPager = new Pager({
            pageSize: this.pivotGridObj?.pageSettings.rowPageSize,
            totalRecordsCount: this.pivotGridObj?.engineModule.rowCount,
            currentPage: this.pivotGridObj?.pageSettings.currentRowPage,
            pageCount: 5,
            click: this.rowPageClick.bind(this)
        });
        this.rowPager.appendTo('#row-pager');
        if (!isNullOrUndefined(this.columnPager as Pager)) {
            this.columnPager?.destroy();
            this.columnPager = undefined;
        }
        this.columnPager = new Pager({
            pageSize: this.pivotGridObj?.pageSettings.columnPageSize,
            totalRecordsCount: this.pivotGridObj?.engineModule.columnCount,
            currentPage: this.pivotGridObj?.pageSettings.currentColumnPage,
            pageCount: 5,
            click: this.columnPageClick.bind(this)
        });
        this.columnPager.appendTo('#column-pager');
    }

    rowPageClick(args: any) {
        this.pivotGridObj!.pageSettings.currentRowPage = args.currentPage;
    }

    columnPageClick(args: any) {
        this.pivotGridObj!.pageSettings.currentColumnPage = args.currentPage;
    }

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
            template: '#template'
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



