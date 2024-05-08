import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [SortService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:100px;"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid [dataSource]='data' (actionComplete)='actionComplete($event)' (actionBegin)='actionBegin($event)' [allowSorting]='true' height='315px'>
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
    public message?: string;

    ngOnInit(): void {
        this.data = data;
    }

    actionBegin({ requestType, columnName, cancel }: SortEventArgs) {
        if (requestType === 'sorting' && columnName === 'OrderID') {
            cancel = true;
        }
    }
    actionComplete({ requestType, columnName }: SortEventArgs) {
        this.message = requestType + ' action completed for ' + columnName + ' column';
    }
}



