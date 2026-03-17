import { orderDetails } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogEditEventArgs, EditService, GridModule, PageService, SaveEventArgs, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule, TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { DataUtil } from '@syncfusion/ej2-data';

@Component({
    imports: [
        GridModule,
        NumericTextBoxAllModule, 
        DatePickerAllModule,
        CommonModule,
        DropDownListAllModule, 
        ReactiveFormsModule, 
        FormsModule,
        TextAreaModule
        ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-root',
    templateUrl: `reactive-form.html`
})
export class AppComponent implements OnInit {
    public data?: Object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderForm?: FormGroup|any;
    public pageSettings?: Object;
    public shipCityDistinctData?: Object[];
    public shipCountryDistinctData?: Object[];
    public submitClicked: boolean = false;

    public ngOnInit(): void {
        this.data = orderDetails;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.pageSettings = { pageCount: 5};
        this.shipCityDistinctData = DataUtil.distinct(orderDetails, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(orderDetails, 'ShipCountry', true );
    }

    createFormGroup(data: IOrderModel): FormGroup {
        return new FormGroup({
            OrderID: new FormControl(data.OrderID, Validators.required),
            OrderDate: new FormControl(data.OrderDate, (this.dateValidator() as Object)),
            CustomerName: new FormControl(data.CustomerName, Validators.required),
            Freight: new FormControl(data.Freight,Validators.required),
            ShipAddress: new FormControl(data.ShipAddress,Validators.required),
            ShipCity: new FormControl(data.ShipCity,Validators.required),
            ShipCountry: new FormControl(data.ShipCountry,Validators.required)
        });
    }

    dateValidator() {
        return (control: FormControl): null | Object  => {
            return control.value && control.value.getFullYear &&
            (1900 <= control.value.getFullYear() && control.value.getFullYear() <=  2099) ? null : { OrderDate: { value : control.value}};
        }
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.submitClicked = false;
            this.orderForm = this.createFormGroup((args.rowData as Object));
        }
        if (args.requestType === 'save') {
            this.submitClicked = true;

            if (this.orderForm.valid) {
                args.data = this.orderForm.value;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Set initial focus
            if (args.requestType === 'beginEdit') {
                ((args.form as HTMLFormElement).elements.namedItem('CustomerName') as HTMLInputElement).focus();
            } else if (args.requestType === 'add') {
                ((args.form as HTMLFormElement).elements.namedItem('OrderID') as HTMLInputElement).focus();
            }
        }
    }

    get OrderID(): AbstractControl  { return this.orderForm.get('OrderID'); }
    get CustomerName(): AbstractControl { return this.orderForm.get('CustomerName'); }
    get OrderDate(): AbstractControl { return this.orderForm.get('OrderDate'); }
    get Freight(): AbstractControl { return this.orderForm.get('Freight'); }
    get ShipCountry(): AbstractControl { return this.orderForm.get('ShipCountry'); }
    get ShipCity(): AbstractControl { return this.orderForm.get('ShipCity'); }

}

export interface IOrderModel {
    OrderID?: number;
    CustomerName?: string;
    ShipCity?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
    ShipAddress?: string;
}
