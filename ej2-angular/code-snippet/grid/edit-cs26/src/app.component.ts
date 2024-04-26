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
import { productData } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

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
  template: `
        <ejs-grid #grid  [dataSource]="data" [editSettings]="editSettings" 
        [toolbar]="toolbar" height="273px">
          <e-columns>
            <e-column field="ProductID" headerText="Product ID" textAlign="Right" 
            isPrimaryKey="true" [validationRules]='orderIDRules' width="100"></e-column>
            <e-column field="ProductName" headerText="Product Name" width="120" 
            [validationRules]=' productNameRules'></e-column>
            <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" 
            [edit]="priceParams" width="150" [validationRules]='unitIDRules' format="C2" 
            textAlign="Right"></e-column>
            <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit" 
            [edit]="stockParams" [validationRules]='stockIDRules'  width="150" 
            textAlign="Right"></e-column>
            <e-column field="TotalCost" headerText="Total Cost" width="150" 
            [allowEditing]='false' format="C2" textAlign="Right"></e-column>
          </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public priceParams?: Object;
  public stockParams?: Object;
  public orderIDRules?: object;
  public unitIDRules?: object;
  public stockIDRules?: object;
  public productNameRules?: object;

   
  ngOnInit(): void {
    this.data = productData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true
    };
    this.orderIDRules = { required: true };
    this. productNameRules = { required: true };
    this.unitIDRules={ required: true, min: 1 }
    this.unitIDRules={ required: true, min: 1 }
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.priceParams = { params: { change: this.calculateTotalCost.bind(this) } };
    this.stockParams = { params: { change: this.calculateTotalCost.bind(this) } };
  }
  calculateTotalCost(args:ChangeEventArgs): void {
    const formEle = ((this.grid as GridComponent).element.querySelector('form') as HTMLFormElement)['ej2_instances'][0];
    formEle.getInputElement('TotalCost').value = formEle.getInputElement('UnitPrice').value * formEle.getInputElement('UnitsInStock').value;
  }
  
}
