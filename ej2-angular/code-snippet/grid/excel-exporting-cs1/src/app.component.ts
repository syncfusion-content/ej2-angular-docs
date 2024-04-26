import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, ExcelExportService, FilterService } from '@syncfusion/ej2-angular-grids'

import { Component, ViewChild, OnInit } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [ExcelExportService, ToolbarService, FilterService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' 
               height='272px' [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                     width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit{

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid') public grid?: GridComponent;

    public ngOnInit(): void 
     {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
     }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            const excelExportProperties: ExcelExportProperties = {
                header: {
                    headerRows: 7,
                    rows: [
                        {
                            cells: [{
                                colSpan: 4, value: 'Northwind Traders',
                                style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, }
                            }]
                        },
                        {
                            cells: [{
                                colSpan: 4, value: '2501 Aerial Center Parkway',
                                style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, }
                            }]
                        },
                        {
                            cells: [{
                                colSpan: 4, value: 'Suite 200 Morrisville, NC 27560 USA',
                                style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, }
                            }]
                        },
                        {
                            cells: [{
                                colSpan: 4, value: 'Tel +1 888.936.8638 Fax +1 919.573.0306',
                                style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, }
                            }]
                        },
                        {
                            cells: [{
                                colSpan: 4, hyperlink: { target: 'https://www.northwind.com/', displayText: 'www.northwind.com' },
                                style: { hAlign: 'Center' }
                            }]
                        },
                        { cells: [{ colSpan: 4, hyperlink: { target: 'mailto:support@northwind.com' }, style: { hAlign: 'Center' } }] },
                    ]
                },
                footer: {
                    footerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 4, value: 'Thank you for your business!', style: { hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 4, value: '!Visit Again!', style: { hAlign: 'Center', bold: true } }] }
                    ]
                },
            };
            (this.grid as GridComponent).excelExport(excelExportProperties);
        }
    }
}



