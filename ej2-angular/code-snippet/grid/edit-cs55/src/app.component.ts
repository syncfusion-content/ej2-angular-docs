import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditService, EditSettingsModel, GridComponent, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule, FormsModule],
  providers: [EditService, ToolbarService, SortService, PageService],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273'  (actionBegin)="actionBegin($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [validationRules]='customerIDRules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
             </ejs-grid>`
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  public orderIDRules?: object;
  public customerIDRules?: object;

  public orderIdCustomValidation(args: any): boolean {
    return (this.grid?.dataSource as Object[]).every((data: any) => {
      return data['OrderID'] + '' !== args['value'] || data['OrderID'] === (this.grid as any).editModule.editModule.args.rowData['OrderID']
    });
  }

  public actionBegin(args: any):void {
    if (args.requestType === 'save') {
      (this.grid as GridComponent).editModule.formObj.addRules('OrderID', this.orderIDRules as object);  // Add form validation rules dynamically.
      if (!(this.grid as GridComponent).editModule.formObj.validate()) { // Check dynamically added validation rules.
        args.cancel = true; // Prevent adding duplicate data action.
      }
      (this.grid as GridComponent).editModule.formObj.removeRules('OrderID'); // Remove form validation rules dynamically.
    }
  }
  
  public ngOnInit(): void {
    this.data = data;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.orderIDRules = { required: true, min: [this.orderIdCustomValidation.bind(this), 'The entered value already exists in the column OrderID. Please enter a unique value.'] };
    this.customerIDRules = { required: true };
  }
}
