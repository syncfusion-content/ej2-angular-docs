import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'

import { Component } from '@angular/core';
import { orderDatas } from './datasource';

@Component({
imports: [
        
        GridModule,
        ChipListModule,
        DatePickerAllModule,
        DropDownListAllModule,
        NumericTextBoxAllModule
    ],

,
standalone: true,
    selector: 'app-root',
    template: `<div>
                <ejs-grid #grid [dataSource]="data">
                <e-columns>
                    <e-column field="OrderID" headerText="Order ID" width="120" >
                    </e-column>
                    <e-column field="Quantity" headerText="Quantity" width="170" >
                    </e-column>
                    <e-column field="ShipAddress" headerText="Ship Address" width="170">
                    </e-column>
                    <e-column field="OrderDate" headerText="Order Date" width="120" >
                    </e-column>
                    <e-column headerText="Order Status" width="120" ></e-column>
                </e-columns>
                <ng-template #rowTemplate let-data>
                    <tr>
                    <td class="rows">
                        <ejs-chiplist width="50" id="chip" [text]="data.OrderID">
                        </ejs-chiplist>
                    </td>
                    <td class="rows">
                        <ejs-numerictextbox width="150" [(value)]="data.Quantity">
                        </ejs-numerictextbox>
                    </td>
                    <td class="rows">{{data.ShipAddress}} </td>
                    <td class="rows">
                        <ejs-datepicker width="100" [value]="data.OrderDate">
                        </ejs-datepicker>
                    </td>
                    <td class="rows">
                        <ejs-dropdownlist width="100" [(value)]="data.OrderStatus"
                        [dataSource]="dropData" [popupHeight]="150" [popupWidth]="150">
                        </ejs-dropdownlist>
                    </td>
                    </tr>
                </ng-template>
                </ejs-grid>
            </div>`
})

export class AppComponent {

    public data?: Object[];
    public dropData?: string[];

    ngOnInit(): void {
        this.data = orderDatas;
        this.dropData = ['Order Placed', 'Processing', 'Delivered'];
    }
}
