import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, EditSettingsModel, GridComponent, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        SwitchModule
      ],
  providers: [EditService, ToolbarService, SortService, PageService],
  standalone: true,
  selector: 'app-root',
  template: `
        <div>
          <label>Enable/Disable show delete confirmation dialog</label>
          <ejs-switch id="switch1" [(checked)]="enableShowDeleteConfirmDialog" 
          (change)="toggleShowDeleteConfirmDialog()"></ejs-switch>
        </div>
        <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="270px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" [validationRules]="orderIDRules"
              isPrimaryKey="true" width="100"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" [validationRules]="customerIDRules" width="120"></e-column>
            <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"
              [validationRules]="freightRules"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit" width="150"></e-column>
          </e-columns>
        </ejs-grid> `
})
export class AppComponent implements OnInit {
  
  @ViewChild('grid')
  public grid?: GridComponent;

  public data: object[] = [];
  public editSettings: EditSettingsModel = {};
  public toolbar: ToolbarItems[] = ['Add', 'Delete', 'Update', 'Cancel'];
  public orderIDRules: Object = {};
  public customerIDRules: Object = {};
  public freightRules: Object = {};
  public enableShowConfirmDialog: boolean = true;
  public enableShowDeleteConfirmDialog: boolean = false;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal'
    };
    this.orderIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { min: 1, max: 1000 };
  }
  toggleShowDeleteConfirmDialog(): void {
    (this.grid as GridComponent).editSettings.showDeleteConfirmDialog = this.enableShowDeleteConfirmDialog;
  }
  
}
