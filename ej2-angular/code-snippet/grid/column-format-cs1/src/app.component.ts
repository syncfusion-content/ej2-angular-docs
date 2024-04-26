import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height="315px">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate'  headerText='Order Date' textAlign='Right' width=120>
                        <ng-template #template let-data>
                            {{ data.OrderDate | date:'dd/MMM/yyyy' }}
                        </ng-template>
                    </e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public formatOptions?: object;
    public shipFormat?: object;

    ngOnInit(): void {
        this.data = data;

    }
}



