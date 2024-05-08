import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { PageEventArgs } from '@syncfusion/ej2-grids';
import { orderDetails } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, ToolbarService, EditService],
standalone: true,
    selector: 'app-root',
    template: `
    <p id="message1">{{ message1 }}</p>
    <p id="message">{{ message }}</p>    
    <ejs-grid #grid [dataSource]="data" allowPaging="true"
            (actionBegin)="onActionBegin($event)" (actionComplete)="onActionComplete($event)"
            [pageSettings]="initialPage">
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
                <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
                <e-column field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" width="120"></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public initialPage?: object;
    @ViewChild('grid') grid?: GridComponent;
    public message?: string;
    public message1?: string;

    ngOnInit(): void {
        this.data = orderDetails;
        this.initialPage = { pageSize: 5 };
    }
    onActionBegin({requestType,currentPage,previousPage}: PageEventArgs) {
        if (requestType === 'paging') {
            this.message = (currentPage as string) > (previousPage as string)
                ? `You are going to switch to page ${parseInt((currentPage as string), 10) + 1}`
                : `You are going to switch to page ${previousPage}`;
        }
    }
    onActionComplete(args: PageEventArgs) {
        if (args.requestType === 'paging') {
            this.message1 = 'Now you are in page ' + args.currentPage;
        }
    }
}
