import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { AggregateService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ReturnType } from '@syncfusion/ej2-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [AggregateService],
standalone: true,
    selector: 'app-root',
    templateUrl: 'app.template.html'
})

export class AppComponent implements OnInit {


    public data?: object[];
    ngOnInit(): void {
        this.data = data;
    }
    public customAggregateFn = (customData: ReturnType) => {
        return customData.result.filter((item: object) => (item as itemType)['ShipCountry'] === 'Brazil').length;
    }
}
interface itemType {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: Date;
    ShipName: string;
    ShipCountry: string;
}