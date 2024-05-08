import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
imports: [
        
        GridModule,
        NumericTextBoxAllModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],

providers: [EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    templateUrl: `reactive-form.html`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public shipCountryDistinctData?: object[];
    public orderForm?: FormGroup | any;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    createFormGroup(data1: IOrderModel): FormGroup {
        return new FormGroup({
            OrderID: new FormControl(data1.OrderID, Validators.required),
            OrderDate: new FormControl(data1.OrderDate, Validators.required),
            CustomerID: new FormControl(data1.CustomerID, Validators.required),
            Freight: new FormControl(data1.Freight),
            ShipCountry: new FormControl(data1.ShipCountry)
        });
    }


    actionBegin(args: SaveEventArgs): void {
        if ((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add') {
            this.orderForm = this.createFormGroup((args as any).rowData);
        }
        if ((args as any).requestType === 'save') {
            if ((this as any).orderForm.valid) {
                (args as any).data = (this as any).orderForm.value;
            } else {
                (args as any).cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if ((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add') {
            // Set initial Focus
            if ((args as any).requestType === 'beginEdit') {
                ((args as any).form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            } else if ((args as any).requestType === 'add') {
                ((args as any).form.elements.namedItem('OrderID') as HTMLInputElement).focus();
            }
        }
    }

    public focusIn(target: HTMLElement | any): void {
        (target as any).parentElement.classList.add('e-input-focus');
    }

    public focusOut(target: HTMLElement | any): void {
        (target as any).parentElement.classList.remove('e-input-focus');
    }

    get OrderID(): AbstractControl  { return (this as any).orderForm.get('OrderID'); }

    get CustomerID(): AbstractControl { return (this as any).orderForm.get('CustomerID'); }

}

export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
}



