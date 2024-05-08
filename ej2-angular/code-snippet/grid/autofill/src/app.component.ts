import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        FormsModule,
        FormsModule,
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' height='272px' [enableAutoFill]='true' [editSettings]='editSettings'
     [toolbar]='toolbar' [selectionSettings]='selectionOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                    isPrimaryKey='true' [visible]='false' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {  
        this.data = data;
        this.selectionOptions = { type: 'Multiple', cellSelectionMode: 'Box', mode: 'Cell'};
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        this.toolbar = ['Add', 'Update', 'Cancel'];
    }
}