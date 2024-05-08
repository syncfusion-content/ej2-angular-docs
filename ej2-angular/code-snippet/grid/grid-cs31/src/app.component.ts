import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule,PageService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs, EditSettingsModel, GridComponent, PageSettingsModel, } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers:[PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (rowDataBound)='rowDataBound($event)' [editSettings]='editSettings' allowPaging="true" [pageSettings]="pageSettings">
                <e-columns>
                    <e-column field='S.No' textAlign='Center' width=120></e-column>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                </e-columns>
               </ejs-grid>`,
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public pageSettings?: PageSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
        };
        this.pageSettings = { pageSize: 8 };
    }
    rowDataBound({row}: RowDataBoundEventArgs) {
        if(row){
            var rowIndex = parseInt(row.getAttribute('aria-rowIndex') as string);
            var currentPageNumber = (this.grid as GridComponent).pageSettings.currentPage;
            var pageSize = (this.grid as GridComponent).pageSettings.pageSize;
            var startIndex = ((currentPageNumber as number) - 1) * (pageSize as number);
            (row.querySelector('.e-rowcell') as Element).innerHTML = (
                startIndex + rowIndex
            ).toString();
        }
    }
}
