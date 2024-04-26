import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, ToolbarItems, GridComponent, EditEventArgs, Column } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [EditService, PageService, ToolbarService],
standalone: true,
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging='true' (load)='load($event)' (actionComplete)='onActionComplete($event)'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {
  public data?: object[];
  public toolbar?: ToolbarItems[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public editSettings?: EditSettingsModel;
  public isDropdown = false;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  load(args: Object) {
    (this.grid as GridComponent).element.addEventListener('mouseup', (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('e-rowcell')) {
        if ((this.grid as GridComponent).isEdit) {
          (this.grid as GridComponent).endEdit();
        }
        let rowInfo = (this.grid as GridComponent).getRowInfo(e.target as EventTarget);
        if (rowInfo && rowInfo.column && (rowInfo.column as Column).field  === 'ShipCountry') {
          this.isDropdown = true;
          (this.grid as GridComponent).selectRow((rowInfo.rowIndex as number));
          (this.grid as GridComponent).startEdit();
        }
      }
    });
  }

  onActionComplete(args: EditEventArgs) {
    if (args.requestType === 'beginEdit' && this.isDropdown) {
      this.isDropdown = false;
      let dropdownObj = ((args.form as HTMLFormElement).querySelector('.e-dropdownlist') as HTMLFormElement)['ej2_instances'][0] ;
      dropdownObj.element.focus();
      dropdownObj.showPopup();
    }
  }
}