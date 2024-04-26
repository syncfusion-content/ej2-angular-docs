import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data, customerData } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

type carType = { CustomerID: string, CustomerName: string, ContactName: string };

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService, ExcelExportService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #mastergrid id="mastergrid" [dataSource]='masterdata' 
             [selectedRowIndex]="1" [toolbar]='toolbarOptions' 
             [allowExcelExport]="true" (rowSelected)="onRowSelected($event)" 
             (toolbarClick)="toolbarClick($event)" [exportGrids]='exportGrids'>
                <e-columns>
                    <e-column field='ContactName' headerText='Customer Name' 
                    width='150'></e-column>
                    <e-column field='CompanyName' headerText='Company Name' 
                    width='150'></e-column>
                    <e-column field='Address' headerText='Address' width='150'></e-column>
                    <e-column field='Country' headerText='Country' width='130'></e-column>
                </e-columns>
            </ejs-grid>
            <div class='e-statustext'>Showing orders of Customer: <b id="key"></b></div>
            <ejs-grid #detailgrid id="detailgrid" [allowExcelExport]='true' 
            [dataSource]='data' [allowSelection]='false'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='100'></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' width='100' 
                    textAlign='Right' type='number'></e-column>
                    <e-column field='ShipName' headerText="Ship Name" width='150'></e-column>
                    <e-column field='ShipCountry' headerText="Ship Country" width='150'></e-column>
                    <e-column field='ShipAddress' headerText="Ship Address" width='150'></e-column>
                </e-columns>
            </ejs-grid>
                `
})
export class AppComponent implements OnInit {

    public masterdata?: object[];
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public exportGrids?: string[];
    @ViewChild('mastergrid') public mastergrid?: GridComponent;
    @ViewChild('detailgrid') public detailgrid?: GridComponent;
    public names?: string[] = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];

    ngOnInit(): void {
        this.masterdata = customerData.filter((e: carType | any) => (this.names as string[]).indexOf(e.CustomerID) !== -1);
        this.toolbarOptions = ['ExcelExport'];
        this.exportGrids = ['mastergrid', 'detailgrid'];
    }
    public onRowSelected(args: RowSelectEventArgs): void {
        let selectedRecord: carType = args.data as carType;
        (this.detailgrid as GridComponent).dataSource = data.filter((record: carType | any) => record.CustomerName === selectedRecord.ContactName).slice(0, 5);
       (document.getElementById('key') as HTMLElement).innerHTML = selectedRecord.ContactName;
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'mastergrid_excelexport') {
            const appendExcelExportProperties: ExcelExportProperties = {
                multipleExport: { type: 'AppendToSheet', blankRows: 2 }
            };
            (this.mastergrid as GridComponent).excelExport(appendExcelExportProperties, true);
        }
    }
}
