import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService, PageService } from '@syncfusion/ej2-angular-grids'

import { L10n, } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import deDELocalization from './locale.json'

L10n.load(deDELocalization);

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [locale]='locale' [allowGrouping]='true' [allowPaging]='true'
             [pageSettings]='pageOptions' height='220px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageOptions?: PageSettingsModel;
    public locale: any = "de-DE";

    ngOnInit(): void {
        this.data = data;
        this.pageOptions = { pageSize: 6 };
    }
}



