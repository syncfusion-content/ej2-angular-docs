import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent , Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource'

@Component({
imports: [ GridModule ],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (dataBound)="dataBound()">
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    dataBound() {
        const columns = (this.grid as GridComponent).columns as Column[];
        for (const col of columns) {
        if (col.field === 'OrderID') {
            col.width = 120;
        }
        if (col.field === 'OrderDate') {
            col.type = 'date';
            col.format = 'yMd';
        }
        if (col.field === 'Freight') {
            col.format = 'P2';
        }
        }

        this.grid!.refreshColumns();
    }
}



