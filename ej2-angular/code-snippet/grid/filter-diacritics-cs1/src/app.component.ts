import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, FilterService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService,
                FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' >
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
                    <e-column field='Name' headerText='Name' width=140></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=170></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
           ignoreAccent: true
        };
    }
}



