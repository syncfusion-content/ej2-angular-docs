import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService } from '@syncfusion/ej2-angular-grids'
import { EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { CheckboxSelectionType, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListModule
    ],

providers: [EditService, ToolbarService, PageService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
              <div style="display: flex ">
                <label style="padding: 30px 17px 0 0" >Choose checkbox selection mode:
                </label>
                <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="150" 
                [dataSource]=" dropdownData" (change)="valueChange($event)">
                </ejs-dropdownlist>
              </div>
            <div style="padding: 20px 0px 0px 0px">
                <ejs-grid #grid [dataSource]='data' [selectionSettings]='selectionOptions' 
                height='315px'>
                    <e-columns>
                        <e-column type='checkbox' width='50'></e-column>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                        width=120></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=150>
                        </e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=150>
                        </e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=150>
                        </e-column>
                    </e-columns>
                </ejs-grid>
              </div>`
})
export class AppComponent implements OnInit {

  public data?: Object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public selectionOptions?: SelectionSettingsModel;
  public dropdownData: Object[] = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' }
  ];

  ngOnInit(): void {
    this.data = data;
  }
  valueChange(args: ChangeEventArgs): void {
    ((this.grid as GridComponent).selectionSettings.checkboxMode as CheckboxSelectionType) = (args.value as CheckboxSelectionType);
  }
}