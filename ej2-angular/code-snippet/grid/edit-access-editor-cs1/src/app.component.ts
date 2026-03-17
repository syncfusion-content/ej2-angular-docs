import { data } from './datasource';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditEventArgs, EditService, EditSettingsModel, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [ GridModule, DatePickerAllModule,FormsModule, TimePickerModule, FormsModule,TextBoxModule, MultiSelectModule, AutoCompleteModule, DropDownListModule ],
  providers: [EditService, ToolbarService, SortService, PageService],
  standalone: true,
  selector: 'app-root',
  template: `
        <ejs-grid [dataSource]="data"  height='250px' [editSettings]="editSettings" [toolbar]="toolbar" (actionComplete)="access($event)">
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" textAlign="Right" width="100"></e-column>                
                <e-column field="CustomerID" headerText="Customer ID" type="string" [validationRules]='customerIDRules' 
                width="120"></e-column>                
                <e-column field="Freight" headerText="Freight" textAlign="Right" [validationRules]='freightRules' 
                format="C2" editType='numericedit' width="120" ></e-column>                               
                <e-column field="ShipCountry" headerText="Ship Country"  width="150" editType='dropdownedit'>
                </e-column>                
            </e-columns>
        </ejs-grid>`
})
export class AppComponent {

  public data?: object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public orderIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.orderIDRules = { required: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true };
  }
  public access(args: EditEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      const tr = args.row as HTMLTableRowElement;
      const numericTextBox = tr.querySelector('.e-numerictextbox');
      if (numericTextBox) {
        const numericTextBoxInstance = (numericTextBox as HTMLFormElement)['ej2_instances'][0];
        numericTextBoxInstance.element.style.backgroundColor = 'light pink';
        numericTextBoxInstance.element.style.color = 'black';
        numericTextBoxInstance.element.style.border = '2px solid red';
        numericTextBoxInstance.element.style.textAlign = 'center';
        numericTextBoxInstance.max = 1000;
        numericTextBoxInstance.min = 1;
      }
      const dropDownList = tr.querySelector('.e-dropdownlist') ;
      if (dropDownList) {
        const dropDownListInstance = (dropDownList as HTMLFormElement)['ej2_instances'][0];
        dropDownListInstance.showPopup(); // Open the dropdown list
      }
    }
  }
}
