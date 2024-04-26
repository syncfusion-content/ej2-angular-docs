import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        
        GridModule,
        DropDownListAllModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="display: flex">
    <label style="padding: 10px 10px 26px 0"> Change the page size property: </label> 
    <ejs-dropdownlist
    style="margin-top:5px"
    #dropDownList
    index="0"
    width="100"
    [dataSource]="ddlData">
    </ejs-dropdownlist>
    </div>
    <ejs-grid #grid id='Grid' [dataSource]='data'  [toolbar]='toolbarOptions' height='220px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('dropDownList')
    public dropDownList?: DropDownListComponent;
    public ddlData: object[] = [
      { text: 'Letter', value: 'Letter' },
      { text: 'Note', value: 'Note' },
      { text: 'Legal', value: 'Legal' },
      { text: 'A0', value: 'A0' },
      { text: 'A1', value: 'A1' },
      { text: 'A2', value: 'A2' },
      { text: 'A3', value: 'A3' },
      { text: 'A4', value: 'A4' },
      { text: 'A5', value: 'A5' },
      { text: 'A6', value: 'A6' },
      { text: 'A7', value: 'A7' },
      { text: 'A8', value: 'A8' },
      { text: 'B0', value: 'B0' },
      { text: 'B1', value: 'B1' },
      { text: 'B2', value: 'B2' },
      { text: 'B3', value: 'B3' },
      { text: 'B4', value: 'B4' },
      { text: 'B5', value: 'B5' },
      { text: 'Archa', value: 'Archa' },
      { text: 'Archb', value: 'Archb' },
      { text: 'Archc', value: 'Archc' },
      { text: 'Archd', value: 'Archd' },
      { text: 'Arche', value: 'Arche' },
      { text: 'Flsa', value: 'Flsa' },
      { text: 'HalfLetter', value: 'HalfLetter' },
      { text: 'Letter11x17', value: 'Letter11x17' },
      { text: 'Ledger', value: 'Ledger' },
    ];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                pageSize: (this.dropDownList as DropDownListComponent).value as PdfExportProperties["pageSize"],
            };
            (this.grid as GridComponent).pdfExport(pdfExportProperties);
        }
    }
}



