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
import { GridComponent } from '@syncfusion/ej2-angular-grids';

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
    template: `<button ejs-button (click)="SingleSort()"  cssClass="e-flat">Sort <b>OrderID</b> column</button>
               <button ejs-button (click)="MultiSort()"  cssClass="e-flat">Sort <b>CustomerID</b> and <b>ShipName</b> columns</button>
               <div id="GridParent">
                    <ejs-grid #Grid [dataSource]='data' allowSorting='true' [toolbar]='toolbar' height='273px'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                             editType= 'numericedit' width=120 format= 'C2'></e-column>
                            <e-column field='ShipName' headerText='Ship Name' editType= 'dropdownedit' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
               </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('Grid') public grid?: GridComponent;
    public toolbar?: any;

    ngOnInit(): void {
        this.data = data;
    }
    public SingleSort(): void {
        (this.grid as any).sortColumn('OrderID', 'Descending');
    }
    public MultiSort(): void {
        (this.grid as any).sortSettings.columns.push({ field: 'CustomerID', direction: 'Ascending' },
            { field: 'ShipName', direction: 'Descending' });
        (this.grid as any).refresh();
    }
}



