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

import { Component, OnInit } from '@angular/core';
import { complexData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

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
        DropDownListModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
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
