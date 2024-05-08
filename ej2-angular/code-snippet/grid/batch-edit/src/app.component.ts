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
import { isNullOrUndefined } from '@syncfusion/ej2-base';

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
    template: `<ejs-grid style="padding:70px" #grid id="grid" [dataSource]='data' height='272px' [allowPaging]="true" [enableHover]="false" [editSettings]='editSettings' [toolbar]='toolbar'
    (created)="created()" (load)="load()">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     isPrimaryKey='true' [validationRules]='orderIDrules' visible='false' width=120></e-column>
                    <e-column field='CustomerID' [validationRules]='customerIDrules' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' [validationRules]='freightrules' format='C2' textAlign='Right' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' editType='datepickeredit' [validationRules]='orderDaterules' format='yMd' width=150></e-column>
                    <e-column field='ShipCountry' [validationRules]='shipCountryrules' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public orderIDrules?: Object;
    public customerIDrules?: Object;
    public freightrules?: Object;
    public shipCountryrules?: Object;
    public orderDaterules?: Object;
    
    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderIDrules = { required: true, number: true };
        this.customerIDrules = { required: true };
        this.freightrules =  { min:1,max:1000 };
        this.shipCountryrules = { required: true };
        this.orderDaterules = { required: true };
    }
    created = () => {
        (this.grid as GridComponent).getContentTable().addEventListener('click', (args) => {
            if ((args.target as HTMLElement).classList.contains('e-rowcell')) {
                (this.grid as GridComponent).editModule.editCell(parseInt(((args.target as HTMLElement).getAttribute('index') as string)),
                (this.grid as GridComponent).getColumnByIndex(parseInt((args.target as HTMLElement).getAttribute('data-colindex') as string)).field);
            }
        });
    };
    load = () => {
        (this.grid as GridComponent).element.addEventListener('keydown', (e) => {
            var closesttd = (e.target as HTMLElement).closest('td');
            if (e.keyCode === 39 && !isNullOrUndefined(((closesttd as HTMLTableCellElement).nextSibling as HTMLElement))) {
                this.editACell(((closesttd as HTMLTableCellElement).nextSibling as  HTMLElement));
            }
            if (e.keyCode === 37 && !isNullOrUndefined(((closesttd as HTMLTableCellElement).previousSibling as HTMLElement)) &&
                !(this.grid as GridComponent).getColumnByIndex(
                    parseInt((((closesttd as HTMLTableCellElement).previousSibling  as HTMLElement).getAttribute('data-colindex') as string))).isPrimaryKey)
            {
                this.editACell(((closesttd as HTMLTableCellElement).previousSibling as HTMLElement));
            }
            if (e.keyCode === 40 && !isNullOrUndefined((((closesttd as HTMLTableCellElement).closest('tr') as HTMLTableRowElement).nextSibling as HTMLElement ))) {
                this.editACell(
                    (((closesttd as HTMLTableCellElement).closest('tr') as  HTMLTableRowElement).nextSibling as HTMLElement).querySelectorAll('td')[
                    parseInt(((closesttd as HTMLTableCellElement).getAttribute('data-colindex') as string))]);
            }
            if ( e.keyCode === 38 && !isNullOrUndefined((((closesttd as HTMLTableCellElement ).closest('tr') as HTMLTableRowElement).previousSibling as ChildNode))) {
                this.editACell(
                    (((closesttd as HTMLTableCellElement).closest('tr') as HTMLTableRowElement).previousSibling as HTMLElement).querySelectorAll('td')[
                     parseInt(((closesttd as HTMLTableCellElement).getAttribute('data-colindex') as string))]);
            }
        });
    };
    public editACell(args: HTMLElement) {
        (this.grid as GridComponent).editModule.editCell(
            parseInt((args.getAttribute('index') as string)),
            (this.grid as GridComponent).getColumnByIndex(parseInt(args.getAttribute('data-colindex') as string)).field);
    }
}



