import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<button ej-button id='add' (click)='addRow()'>Add Row</button>
    <ejs-grid #grid id="grid" [dataSource]='data' [editSettings]='editSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 isPrimaryKey="true"></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='ShipCity' headerText='Shi pCity' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=140></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    addRow() {
        (this.grid as any).addRecord(
         { OrderID: 3232, CustomerID: 'ALKIT', ShipCity: 'London', Freight: 40, ShipName: 'Que Delícia'}, 2);
    }
}



