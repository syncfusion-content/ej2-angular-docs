import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';

const SERVICE_URI = 'https://services.syncfusion.com/angular/production/';

@Component({
imports: [
        
        GridModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='EmployeeID' headerText='EmployeeID' textAlign='Right' width=90></e-column>
                    <e-column field='ShipName' headerText='Ship Name' textAlign='Left' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: DataManager;

    public ngOnInit(): void {
        this.data = new DataManager({ url: SERVICE_URI+ 'api/Orders' });
    }
}



