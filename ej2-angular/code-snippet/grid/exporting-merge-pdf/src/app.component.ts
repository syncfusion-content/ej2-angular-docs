import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule, PdfExportCompleteArgs, PdfExportService, PdfQueryCellInfoEventArgs, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { PdfGridCell } from '@syncfusion/ej2-pdf-export';

@Component({
    imports: [ GridModule],
    providers: [PdfExportService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' [enableRowSpan]="true"
                height='272px' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)'
                (pdfQueryCellInfo)="pdfQueryCellInfo($event)" (pdfExportComplete)="pdfExportComplete($event)"
                >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                        <e-column field='City' headerText='Ship City' width=150></e-column>
                    </e-columns>
                </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public currentCell: PdfGridCell | null = null;
    public currentOrderID: number | null = null;;
    public cellIndexCount = 1;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            (this.grid as GridComponent).pdfExport();
        }
    } 
    pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs) {
        if (!this.currentOrderID && args.column && args.column.field == "OrderID") {
            this.currentOrderID = (args.data as Order)["OrderID"];
            this.currentCell = args.cell as PdfGridCell;
        }
        else if (this.currentOrderID && args.column && args.column.field == "OrderID" && this.currentOrderID == (args.data as Order)["OrderID"]) {
            this.cellIndexCount++;
        } else if (this.currentOrderID !== (args.data as Order)["OrderID"] && args.column && args.column.field == "OrderID") {
            (this.currentCell as PdfGridCell).rowSpan = this.cellIndexCount;
            this.currentOrderID = (args.data as Order)["OrderID"];
            this.currentCell = args.cell as PdfGridCell;
            this.cellIndexCount = 1;
        }
    };
    // Reset the pdf export global variable values
    pdfExportComplete(args: PdfExportCompleteArgs) {
        this.currentOrderID = null;
        this.currentCell = null;
        this.cellIndexCount = 1;
    }
}

interface Order {
    OrderID: number;
    CustomerID: string;
    City: string;
}