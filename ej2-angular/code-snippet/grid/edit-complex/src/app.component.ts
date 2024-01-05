import { Component, OnInit } from '@angular/core';
import { complexData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]="data" [height]="315" [editSettings]="editSettings" [toolbar]="toolbar">
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="120"></e-column>
        <e-column field="Name.FirstName" headerText="First Name" width="200">
          <ng-template #editTemplate let-data>
              <input class="e-input" name="Name___FirstName" type="text" id="Name___FirstName" [value]="data.Name.FirstName" />
          </ng-template>
        </e-column>
        <e-column field="Name.LastName" headerText="Last Name" width="200">
          <ng-template #editTemplate let-data>
              <input class="e-input" type="text" name="Name___LastName" id="Name___LastName" [value]="data.Name.LastName" >
          </ng-template>
        </e-column>
        <e-column field="Title" headerText="Title" width="150" ></e-column>
      </e-columns>
    </ejs-grid>
  `,
})
export class AppComponent implements OnInit {
    
  public data?: object[];
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];

  ngOnInit(): void {
    this.data = complexData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
}
