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
import { DialogModule } from '@syncfusion/ej2-angular-popups'

import { Component, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs, Item } from '@syncfusion/ej2-angular-navigations';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
      grid: {
          'OKButton':'YES',
          'CancelButton':'Discard' ,
          'ConfirmDelete': 'Are you sure you want to delete the selected Record?' 
      }
  }
});
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
        DropDownListModule,
        DialogModule
    ],

providers: [EditService, ToolbarService, SortService, PageService],
standalone: true,
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" 
        (toolbarClick)="toolbarClick($event)">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
      </e-columns>
    </ejs-grid>
  `,
})
export class AppComponent {

  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: Object;
  public toolbar?: Object;

  public ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      showDeleteConfirmDialog: true,
    };

    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
  toolbarClick(args: ClickEventArgs): void {
    debugger;
    if ((args.item as Item).text === 'Delete') {
        const dialogObj= ((this.grid as GridComponent).editModule as any).dialogObj   ;
        dialogObj.header = 'Delete Confirmation Dialog';
        dialogObj.showCloseIcon = true;    
    }
  }
}
