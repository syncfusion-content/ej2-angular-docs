import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { MultiSelectModule, CheckBoxSelectionService, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'

import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, FilterSettingsModel, FilterType, GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
        ButtonModule
    ],

providers: [FilterService, PageService, CheckBoxSelectionService],
standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('type') public typeDropdown?: DropDownListComponent;

  public data?: object[];
  public filterSettings?: FilterSettingsModel = { type: 'Menu' };
  public columnFilterSettings?: FilterSettingsModel;
  public fieldData: string[] | undefined;
  public typeData: string[] = [];
  public column: Column | undefined;

  ngOnInit(): void {
    this.data = data;
  }
  dataBound() {
    this.fieldData = (this.grid as GridComponent).getColumnFieldNames();
  }
  onFieldChange(args: ChangeEventArgs): void {
    (this.typeDropdown as DropDownListComponent).enabled = true;
    this.typeData = ['Menu', 'CheckBox', 'Excel'];
    this.column = (this.grid as GridComponent).getColumnByField(args.value as string);
  }
  onTypeChange(args: ChangeEventArgs): void {
    this.columnFilterSettings = { type: args.value as FilterType};
    (this.column as Column).filter = this.columnFilterSettings;
    (this.grid as GridComponent).refresh();
  }
}
