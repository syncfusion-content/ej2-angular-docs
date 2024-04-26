import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, EditService, Column, PageService } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' allowPaging='true' [editSettings]='editSettings' (dataBound)="dataBound()">
               </ejs-grid>`,
    providers: [EditService, PageService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings: EditSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;


    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    dataBound() {
        (((this.grid as GridComponent).columns[0]) as Column).isPrimaryKey = true;
    }
}



