import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { RowDropSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [PageService, SelectionService, RowDDService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid id='Grid' [dataSource]='data' [allowRowDragAndDrop]='true'
                [rowDropSettings]='rowDropOptions' [selectionSettings]='selectionOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150>
                    </e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150>
                    </e-column>
                </e-columns>
                </ejs-grid>
                <ejs-grid id='DestGrid' [dataSource]='destGridData' 
                [allowRowDragAndDrop]='true' [rowDropSettings]='destRowDropOptions' 
                [selectionSettings]='selectionOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app.style.css']
})
export class AppComponent implements OnInit {

    public data?: object[];
    public destGridData?: object[];
    public rowDropOptions?: RowDropSettingsModel;
    public destRowDropOptions?: RowDropSettingsModel;
    public selectionOptions?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.destGridData = [];
        this.rowDropOptions = { targetID: 'DestGrid' };
        this.destRowDropOptions = { targetID: 'Grid' };
        this.selectionOptions = { type: 'Multiple' };
    }
}



