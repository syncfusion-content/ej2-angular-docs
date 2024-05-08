import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild } from '@angular/core';
import { inventoryData } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
  selector: 'app-root',
  template: `
          <ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' 
            [toolbar]='toolbarOptions' height='272px' [allowExcelExport]='true' 
            (toolbarClick)='toolbarClick($event)' (excelQueryCellInfo)="excelQueryCellInfo($event)">
            <e-columns>
              <e-column field="Inventor" headerText="Inventor Name" width="180" textAlign="Right">
              </e-column>
              <e-column field="NumberofPatentFamilies" headerText="Number of Patent Families" 
              width="180" textAlign="Right"></e-column>
              <e-column field="Country" headerText="Country" width="140" textAlign="Left">
              </e-column>
              <e-column field="Mainfieldsofinvention" headerText="Main fields of invention" 
              width="200" textAlign="Left"></e-column>
              <e-column field="Number of INPADOC patents" headerText="Number of INPADOC patents" 
              width="180" textAlign="Right"></e-column>
              <e-column field="TotalPatents" headerText="Total Patents" [visible]='false' 
              [valueAccessor]="valueAccess" width="120"  textAlign="Right"></e-column>
            </e-columns>
          </ejs-grid>`
})
export class AppComponent {

  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  @ViewChild('grid') public grid?: GridComponent;

  public ngOnInit(): void {
    this.data = inventoryData;
    this.toolbarOptions = ['ExcelExport'];
  }
  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_excelexport') {
      // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const excelExportProperties: ExcelExportProperties = {
        includeHiddenColumn: true,
      };
      (this.grid as GridComponent).excelExport(excelExportProperties);
    }

  }
  valueAccess = (field: string, data: Object[]) => {
    const cell = (this.data as Object[]).indexOf(data) + 2;
    return '=E' + cell + '+' + 'B' + cell;
  }
  excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
    if (args.column.field === 'TotalPatents') {
      args.value = this.valueAccess(args.column.field, (args.data as Object[]));
      (args.cell as CustomExcelCell).formula = args.value;
    }
  } 
} 
interface CustomExcelCell {
  formula: string; 
}