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
    <label style="padding: 10px 10px 26px 0"> Change the page orientation property: </label> 
    <ejs-dropdownlist
    style="margin-top:5px"
    #dropDownList
    index="0"
    width="100"
    [dataSource]="ddlData">
    </ejs-dropdownlist>
    </div>
    <ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;
    @ViewChild('dropDownList')
    public dropDownList?: DropDownListComponent;
    public ddlData?: object[] = [
      { text: 'Portrait', value: 'Portrait' },
      { text: 'Landscape', value: 'Landscape' },
    ];

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const pdfExportProperties: PdfExportProperties = {
                pageOrientation: (this.dropDownList as DropDownListComponent).value as PdfExportProperties["pageOrientation"],
            };
            (this.grid as GridComponent).pdfExport(pdfExportProperties);
        }
    }
}




