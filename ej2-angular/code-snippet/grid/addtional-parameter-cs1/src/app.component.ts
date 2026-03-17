import { data } from './datasource';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcelExportCompleteArgs, ExcelExportService, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GridModule],
  providers: [ExcelExportService, ToolbarService],
  template: `<p id="message">{{ message }}</p>
             <ejs-grid #grid id='Grid' [dataSource]='data'[toolbar]='toolbarOptions' height='272px' [allowExcelExport]='true' (excelExportComplete)='excelExportComplete($event)' (toolbarClick)='toolbarClick($event)'>
              <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width='150'></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                  <e-column field='ShipName' headerText='Ship Name' width='150'></e-column>
              </e-columns>
             </ejs-grid>
             <p id="message">{{ message }}</p>`
})
export class AppComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;
  public data: object[] = [];
  public toolbarOptions: ToolbarItems[] = ['ExcelExport'];
  public queryClone!: Query;
  public message: string = '';

  public ngOnInit(): void {
    this.data = data;
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_excelexport') {
      this.queryClone = this.grid.query;
      this.grid.query = new Query().addParams('recordcount', '15');
      this.message = `Key: ${this.grid.query.params[0].key} and Value: ${this.grid.query.params[0].value} on ${args.item.text}`;
      this.grid.excelExport();
    }
  }

  public excelExportComplete(args: ExcelExportCompleteArgs): void {
    this.grid.query = this.queryClone;
  }
}