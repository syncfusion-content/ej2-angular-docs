import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ToolbarItems, PdfQueryCellInfoEventArgs, QueryCellInfoEventArgs, Column, PdfStyle } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' height='272px'  [allowPdfExport]='true' 
                (queryCellInfo)='queryCellInfo($event)' (pdfQueryCellInfo)='pdfQueryCellInfo($event)' (toolbarClick)='toolbarClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' width=80></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;
    

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }

    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            (this.grid as GridComponent).pdfExport();
        }
    }

    pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): void {
        if ((args.column as Column).field === 'Freight') {
            if ((args.value as number) < 30) {
                (args.style as PdfStyle)= { backgroundColor: '#99ffcc' };
            } else if ((args.value as number) < 60) {
                (args.style as PdfStyle) = { backgroundColor: '#ffffb3' };
            } else {
                (args.style as PdfStyle) = { backgroundColor: '#ff704d' };
            }
        }
    }

    queryCellInfo({data, column, cell}: QueryCellInfoEventArgs ): void {
        if ((column as Column).field === 'Freight') {
            const FreightData= (data as columnDataType).Freight;
            if (FreightData < 30) {
                (cell as HTMLElement).style.background = '#99ffcc';
            } else if (FreightData < 60) {
                (cell as HTMLElement).style.background = '#ffffb3';
            } else {
                (cell as HTMLElement).style.background = '#ff704d';
            }
        }
    }
}

interface columnDataType{
    field: number;
    OrderID:number,
    Freight:number,
    CustomerID:string,
    ShipCity:string,
    ShipName:string,
    ShipCountry:string,
    ShipPostalCode:number
}




