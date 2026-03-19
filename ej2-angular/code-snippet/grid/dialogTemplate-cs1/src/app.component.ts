import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogEditEventArgs, EditService, GridModule, SaveEventArgs, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DataUtil } from '@syncfusion/ej2-data';

@Component({
    imports: [GridModule,NumericTextBoxAllModule, DatePickerAllModule, DropDownListAllModule,ReactiveFormsModule, FormsModule,CommonModule],
    providers: [EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    templateUrl: `template-driven.html`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public pageSettings?: Object;
    public shipCityDistinctData?: Object[];
    public shipCountryDistinctData?: Object[];
    public orderData!: IOrderModel;
    @ViewChild('orderForm')  public orderForm?: FormGroup|any;

    public ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageSettings = { pageCount: 5};
        this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            if (this.orderForm.valid) {
                args.data = this.orderData;
            } else {
                args.cancel = true;
            }
        }
    } 

    actionComplete(args: DialogEditEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Set initial focus
            if (args.requestType === 'beginEdit') {
                ((args.form as HTMLFormElement).elements.namedItem('CustomerName') as HTMLInputElement).focus();
            } else if (args.requestType === 'add') {
                ((args.form as HTMLFormElement).elements.namedItem('OrderID') as HTMLInputElement).focus();
            }

        }
    }
    public focusIn(event: FocusEvent): void {
        ((event.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
    }

    public focusOut(event: FocusEvent): void {
        ((event.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
        
    }

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