import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, PageService, FilterService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import {
  GridComponent,
  ToolbarItems,
  ExcelExportProperties,
  ExportType,
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [ExcelExportService,PageService, ToolbarService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
        <div style="display: flex">
            <label style="padding: 10px 10px 26px 0"> Change export type: </label>
            <ejs-dropdownlist
            style="margin-top:5px"
            #dropDownList
            index="0"
            width="150"
            [dataSource]="dropDownData"></ejs-dropdownlist>
          </div>
          <div style="padding: 0px 0 20px 0">
            <ejs-grid #grid id='Grid' [dataSource]='data' allowPaging='true' [pageSettings]='initialPage'[toolbar]='toolbarOptions' 
            height='220px' [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                    <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                    <e-column field='LastName' headerText='Last Name' width=100></e-column>
                    <e-column field='City' headerText='City' width=100></e-column>
                </e-columns>
            </ejs-grid>
          </div>`
})
export class AppComponent implements OnInit {
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  @ViewChild('grid') public grid?: GridComponent;
  @ViewChild('dropDownList')
  public dropDownList?: DropDownListComponent;
  public dropDownData: object[] = [
    { text: 'CurrentPage', value: 'CurrentPage' },
    { text: 'AllPages', value: 'AllPages' },
  ];
  public initialPage?: object;
  
  ngOnInit(): void {
    this.data = employeeData;
    this.toolbarOptions = ['ExcelExport'];
    this.initialPage = { pageSize: 6};
  }
  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_excelexport') {
      // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      const exportProperties: ExcelExportProperties = {
        exportType: ((this.dropDownList as DropDownListComponent).value as ExportType),
      };
      (this.grid as GridComponent).excelExport(exportProperties);
    }
  }
}
