import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import {data} from './datasource';

@Component({
imports: [
        
        FormsModule,
        GridModule,
        ButtonAllModule
    ],

providers: [
        PageService,
        SortService,
        FilterService,
        GroupService
    ],
standalone: true,
    selector: 'app-root',
    template: `<div style="padding:0px 0px 20px 0px">
                <button ejs-button (click)=next($event)>Change datasource and column</button>
                </div>
                <ejs-grid #Grid [dataSource]="data"  allowPaging="true" [pageSettings]="pageSettings" >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public isDataLoading = true;
    public pageSettings?: object = { pageSize: 5, pageCount: 3 }
    @ViewChild('Grid') public grid?: GridComponent;
    public count = 0;

    public newColumn = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 125 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right'},
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right'},
    ];

    ngOnInit(): void {
      this.data= data
      
    }
    next(args:MouseEvent) {
      this.count = this.count + 100;
      (this.grid as GridComponent).changeDataSource(data.slice(0, this.count + 100), this.newColumn as Object[]);
    }

}
