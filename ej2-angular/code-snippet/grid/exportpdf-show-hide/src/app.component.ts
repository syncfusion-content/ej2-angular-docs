import { data } from './datasource';
import { Component, ViewChild } from '@angular/core';
import { Column, ColumnModel, GridComponent, GridModule, PdfExportService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [ GridModule],
    providers: [ PdfExportService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `
      <ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='250px' [allowPdfExport]='true' (pdfExportComplete)='pdfExportComplete()' (toolbarClick)='toolbarClick($event)'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' [visible]='false' width=100></e-column>
          <e-column headerText="Order Details" [columns]="orderColumns" textAlign='Center'></e-column>
          <e-column headerText="Ship Details" [columns]="shipColumns" textAlign='Center'></e-column>
        </e-columns>
      </ejs-grid>`
})
export class AppComponent {
  @ViewChild('grid') public grid?: GridComponent;
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  public orderColumns?: ColumnModel[];
  public shipColumns?: ColumnModel[];
  
  ngOnInit(): void  {
    this.data = data;
    this.toolbarOptions = ['PdfExport'];
    this.orderColumns = [
      {
        field: 'OrderDate',
        headerText: 'Order Date',
        format: 'yMd',
        width: 130,
        textAlign: 'Right',
        minWidth: 10,
      },
      {
        field: 'Freight',
        headerText: 'Freight ($)',
        width: 120,
        format: 'C1',
        textAlign: 'Right',
        minWidth: 10,
      },
    ];
    this.shipColumns = [
      {
        field: 'ShippedDate',
        headerText: 'Shipped Date',
        format: 'yMd',
        textAlign: 'Right',
        width: 150,
        minWidth: 10,
      },
      {
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: 150,
        minWidth: 10,
      },
      {
        field: 'ShipName',
        headerText: 'Ship Name',
        width: 150,
        minWidth: 10,
        visible:false
      },
    ];
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_pdfexport') { 
      (((this.grid as GridComponent).columns[2] as ColumnModel).columns![0] as Column).visible = false;
      (((this.grid as GridComponent).columns[3] as ColumnModel).columns![2] as Column).visible = true;
      (this.grid as GridComponent).pdfExport();
    }
  }
  public pdfExportComplete(): void {
    (((this.grid as GridComponent).columns[2] as ColumnModel).columns![0] as Column).visible = true;
    (((this.grid as GridComponent).columns[3] as ColumnModel).columns![2] as Column).visible = false;
  }
}
