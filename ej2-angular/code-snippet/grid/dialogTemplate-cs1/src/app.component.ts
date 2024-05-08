import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { FormGroup } from '@angular/forms';

@Component({
imports: [
        
        GridModule,
        NumericTextBoxAllModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],

providers: [EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    templateUrl: `template-driven.html`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderData?: object | any;
    @ViewChild('orderForm') public orderForm?: FormGroup;
    public shipCityDistinctData?: object[];
    public shipCountryDistinctData?: object[];
    public pageSettings: any;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete'];
        this.shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
        this.shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true );
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.orderData = Object.assign({}, args.rowData);;
        }
        if (args.requestType === 'save') {
            if (this.orderForm?.valid) {
                args.data = this.orderData;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            (args.form as any).ej2_instances[0].rules = {};
            // Set initial Focus
            if (args.requestType === 'beginEdit') {
                (args.form?.elements.namedItem('CustomerID') as HTMLInputElement).focus();
            }
        }
    }
}

export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    ShipCity?: string;
    OrderDate?: Date;
    Freight?: number;
    ShipCountry?: string;
    ShipAddress?: string;
}



