import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotView } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [ 
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width (beforeServiceInvoke)='beforeServiceInvoke($event)'></ejs-pivotview>`,
    providers: []
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: DataSourceSettingsModel;
    public width?: string;
    public gridSettings?: GridSettings;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    // Attach an Authorization header before each server call
    beforeServiceInvoke(args:any) {
        const token = this.getAuthToken(); // obtain securely at runtime

        args.internalProperties = args.internalProperties || {};
        args.internalProperties.headers = {
            ...(args.internalProperties.headers || {}),
            'Authorization': `Bearer ${token}`
        };
    }

    getAuthToken() {
        // Retrieve and return a valid auth token securely
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    }

    ngOnInit(): void {
        this.width = '100%';
        this.dataSourceSettings = {
            url: 'https://services.syncfusion.com/angular/production/api/pivot/post',
            mode: 'Server',
            expandAll: true,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }],
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }
            ],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
            filters: []
        };
    }
}



