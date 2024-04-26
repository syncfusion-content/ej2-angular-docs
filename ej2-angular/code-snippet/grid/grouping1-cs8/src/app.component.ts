import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<button ej-button id='restore' (click)='clickHandler()'>Restore</button>
               <ejs-grid #grid id="Grid" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120>
                    </e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 headerTemplate='#customertemplate'>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150  template='#template'>
                    </e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }

    clickHandler() {
        var savedProperties = JSON.parse((this.grid as any).getPersistData());
        var gridColumnsState = Object.assign([], (this.grid as any).getColumns());
        savedProperties.columns.forEach(function (col: any) {
            var headerText = gridColumnsState.find(function (colColumnsState: any) { return colColumnsState.field === col.field; })['headerText'];
            var colTemplate = gridColumnsState.find(function (colColumnsState: any) { return colColumnsState.field === col.field; })['template'];
            var headerTemplate = gridColumnsState.find(function (colColumnsState: any) { return colColumnsState.field === col.field; })['headerTemplate'];
            col.headerText = 'Text Changed';
            col.template = colTemplate;
            col.headerTemplate = headerTemplate;
        });
        console.log(savedProperties);
        (this.grid as any).setProperties(savedProperties);
   }
}
