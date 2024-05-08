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
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';

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
    template: `<button ejs-button (click)="btnClick()"  cssClass="e-flat">Enable/Disable Grid</button>
               <div id="GridParent">
                    <ejs-grid #Grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                             editType= 'numericedit' width=120 format= 'C2'></e-column>
                            <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
               </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('Grid') public Grid?: GridComponent;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    public btnClick(): void {
        if ((this.Grid as any).element.classList.contains('disablegrid')) {
            (this.Grid as any).element.classList.remove('disablegrid');
            (document.getElementById('GridParent') as any).classList.remove('wrapper');
        } else {
            (this.Grid as any).element.classList.add('disablegrid');
            (document.getElementById('GridParent') as any).classList.add('wrapper');
        }
    }
}



