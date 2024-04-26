import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent, Column } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ButtonAllModule
    ],

providers: [GroupService],
standalone: true,
    selector: 'app-root',
    template: `<div id='message'>{{message}}</div><button ejs-button id='save' (click)='save()'>Save column settings</button><button ejs-button id='restore' (click)='restore()'>Restore column settings</button>
               <ejs-grid #Grid id="Orders" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' [allowFiltering]='true'
           height='210px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120>
                    </e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 headerTemplate='<button ejs-button>HeaderTemplate</button>'>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150 template='#template'>
                    </e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('Grid')
    public grid?: GridComponent;
    public message: string = '';
    public persistedGridSettings?: object;

    ngOnInit(): void {
        this.data = data;
    }
    save() {
        this.persistedGridSettings = JSON.parse(((this.grid as GridComponent)).getPersistData());
        var gridColumns = Object.assign([], ((this.grid as GridComponent)).getColumns());
        (this.persistedGridSettings as any).columns.forEach((persistedColumn: Column) => {
            const column = gridColumns.find((col: Column) => col.field === persistedColumn.field);
            if (column) {
                persistedColumn.headerText = 'Text Changed';
                persistedColumn.template = (column as Column).template;
                persistedColumn.headerTemplate = (column as Column).headerTemplate;
            }
        });
        window.localStorage.setItem('gridOrders1', JSON.stringify(this.persistedGridSettings));
        this.grid?.setProperties(this.persistedGridSettings as object);
        this.message = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
    }
    restore() {
        const savedSettings = window.localStorage.getItem("gridOrders1");
        if (savedSettings) {
            this.grid?.setProperties(JSON.parse(savedSettings));
            this.message = 'Restored the headerText, template column, and headerTemplate';
        } else {
            this.message = 'No saved settings found.';
        }
    }

}