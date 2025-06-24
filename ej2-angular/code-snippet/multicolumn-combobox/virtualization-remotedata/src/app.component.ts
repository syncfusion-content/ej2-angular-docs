import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, HostListener, ViewChild } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, MultiColumnComboBoxModule, ButtonModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiColumn ComboBox component with change event
    template: `<ejs-multicolumncombobox id='multicolumn' #multicolumn [dataSource]='dataSource' [placeholder]='waterMark' [enableVirtualization]='true' [gridSettings]='gridSettings' [fields]='fields' popupHeight='230px'>
                  <e-columns>
                    <e-column field='OrderID' header='Order ID' width='120'></e-column>
                    <e-column field='CustomerID' header='Customer ID' width='130'></e-column>
                    <e-column field='ShipCountry' header='Ship Country' width='120'></e-column>
                  </e-columns>
               </ejs-multicolumncombobox>`
})
export class AppComponent {
    public dataSource = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  public fields: Object = { text: 'ShipCountry', value: 'CustomerID' };
  public waterMark: string = 'Select a name';
  public gridSettings: Object = { rowHeight: 40 };
}


