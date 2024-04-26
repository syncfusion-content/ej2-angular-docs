import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
    selector: 'app-root',
    template: `<button ejs-button id="btnId" cssClass="e-info" (click)='updateColumns()'> Update Columns </button>
                <ejs-grid #grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid') grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }
    updateColumns(): void {
      // Modifying column properties
      (this.grid as GridComponent).columns[0].textAlign = 'Center';
      (this.grid as GridComponent).columns[0].width = '100';
      (this.grid as GridComponent).columns[2].visible = false;
      (this.grid as GridComponent).columns[1].customAttributes = { class: 'customcss' };
      // Applying changes to the grid
      (this.grid as GridComponent).refreshColumns();
    }
}


