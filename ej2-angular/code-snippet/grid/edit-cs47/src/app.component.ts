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
import { GridComponent, ToolbarItems } from '@syncfusion/ej2-angular-grids';

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
    template: `<button ejs-button (click)="SingleClearSort()"  cssClass="e-flat">Clear the sort for <b>OrderID</b> column</button>
               <button ejs-button (click)="MultiClearSort()"  cssClass="e-flat">Clear sorting for entire sorted columns</button>
               <div id="GridParent">
                    <ejs-grid #Grid [dataSource]='data' [sortSettings]='sortOptions' allowSorting='true' [toolbar]='toolbar' height='273px'>
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
    public sortOptions?: object;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.sortOptions = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'CustomerID', direction: 'Descending' }] };
    }
    public SingleClearSort(): void {
        const column: any = (this.grid as any).sortSettings.columns;
        for (let i = 0; i < column.length; i++) {
            if (column[i].field === 'OrderID') {
                column.splice(i, 1);
                (this.grid as any).refresh();
            }
        }
    }
    public MultiClearSort(): void {
        (this.grid as any).clearSorting();
    }
}



