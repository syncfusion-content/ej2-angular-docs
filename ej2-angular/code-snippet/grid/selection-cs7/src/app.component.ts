import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [selectedRowIndex]=1 
               [selectionSettings]='selectionOptions' height='315px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                        width=120></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=150>
                        </e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple', mode: 'Row' };
    }
}



