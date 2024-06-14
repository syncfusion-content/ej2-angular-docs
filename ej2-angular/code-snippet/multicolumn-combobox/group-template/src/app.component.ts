import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, HostListener, ViewChild } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, MultiColumnComboBoxModule, ButtonModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiColumn ComboBox component with change event
    template: `<ejs-multicolumncombobox id='multicolumn' #multicolumn [dataSource]='orderData' [placeholder]='waterMark' [fields]='fields' [groupTemplate]='groupTemplate'>
                  <e-columns>
                    <e-column field='OrderID' header='Order ID' width='100'></e-column>
                    <e-column field='CustomerID' header='Custome ID' width='90'></e-column>
                    <e-column field='Freight' header='Freight' width='90'></e-column>
                    <e-column field='OrderDate' header='Order Date' width='100'></e-column>
                  </e-columns>
                </ejs-multicolumncombobox>`
})
export class AppComponent {
  public orderData: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', OrderDate: new Date(8364186e5), Freight: 32.38 },
    { OrderID: 10249, CustomerID: 'TOMSP', OrderDate: new Date(836505e6), Freight: 11.61 },
    { OrderID: 10250, CustomerID: 'HANAR', OrderDate: new Date(8367642e5), Freight: 65.83 },
    { OrderID: 10251, CustomerID: 'VICTE', OrderDate: new Date(8367642e5), Freight: 41.34 },
    { OrderID: 10252, CustomerID: 'SUPRD', OrderDate: new Date(8368506e5), Freight: 51.3 },
    { OrderID: 10253, CustomerID: 'HANAR', OrderDate: new Date(836937e6), Freight: 58.17 },
    { OrderID: 10254, CustomerID: 'CHOPS', OrderDate: new Date(8370234e5), Freight: 22.98 },
    { OrderID: 10255, CustomerID: 'RICSU', OrderDate: new Date(8371098e5), Freight: 148.33 },
    { OrderID: 10256, CustomerID: 'WELLI', OrderDate: new Date(837369e6), Freight: 13.97 }
   ];
    public fields: Object = { text: 'CustomerID', value: 'OrderID', groupBy: 'CustomerID'};
    public waterMark: string = 'Select a order';
    public groupTemplate: string = '<div class="e-group-temp">Key is: ${key}, Field is: ${field}, Count is: ${count}</div>';
}


