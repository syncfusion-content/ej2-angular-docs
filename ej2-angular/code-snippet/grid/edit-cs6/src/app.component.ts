import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  template: `
      <div style="padding: 20px">
        <label>Enable/Disable show confirmation dialog</label>
        <ejs-switch id="switch" [(checked)]="enableShowConfirmDialog" 
        (change)="toggleShowConfirmDialog()"></ejs-switch>
      </div>
      <div style="padding: 20px">
        <label>Enable/Disable show delete confirmation dialog</label>
        <ejs-switch id="switch1" [(checked)]="enableShowDeleteConfirmDialog" 
        (change)="toggleShowDeleteConfirmDialog()"></ejs-switch>
      </div>
      <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" height="273px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" [validationRules]="orderidrules"
            isPrimaryKey="true" width="100"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" [validationRules]="customeridrules" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" textAlign="Right" editType="numericedit" width="120" format="C2"
            [validationRules]="freightrules"></e-column>
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
  public orderidrules: Object = {};
  public customeridrules: Object = {};
  public freightrules: Object = {};
  public enableShowConfirmDialog: boolean = true;
  public enableShowDeleteConfirmDialog: boolean = false;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Batch'
    };
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true };
    this.freightrules = { min: 1, max: 1000 };
  }
  toggleShowConfirmDialog(): void {
    (this as any).grid.editSettings.showConfirmDialog = this.enableShowConfirmDialog;
  }
  toggleShowDeleteConfirmDialog(): void {
    (this as any).grid.editSettings.showDeleteConfirmDialog = this.enableShowDeleteConfirmDialog;
  }
  
}
