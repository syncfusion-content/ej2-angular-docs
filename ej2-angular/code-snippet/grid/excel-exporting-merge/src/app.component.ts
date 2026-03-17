import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcelExportCompleteArgs, ExcelExportService, ExcelQueryCellInfoEventArgs, FilterService, GridComponent, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [GridModule],
    providers: [ExcelExportService, ToolbarService, FilterService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' 
               height='272px' [allowExcelExport]='true' (toolbarClick)='toolbarClick($event)'
               (dataBound)="onDataBound()" (excelQueryCellInfo)="excelQueryCellInfo($event)" (excelExportComplete)="excelExportComplete($event)"
               >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                    width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150>
                    </e-column>
                    <e-column field='City' headerText='Ship City' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public gridcells: HTMLElement | null = null;
    public currentOrderID: number | null = null;
    public rowspanCount = 1;

    @ViewChild('grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['ExcelExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_excelexport') {
            // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            (this.grid as GridComponent).excelExport();
        }
    }
    onDataBound() {
        let previousData: number | null = null;
        let startRowIndex: number | null = null;
        let endRowIndex: number | null = null;

        let rows = (this.grid as GridComponent).getRows();
        let data = (this.grid as GridComponent).getCurrentViewRecords();

        for (let i = 0, len = rows.length; i < len; i++) {
            if (!previousData) {
                previousData = (data[i] as Order)['OrderID'];
                startRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string));
            }
            else if (previousData === (data[i] as Order)['OrderID']) {
                rows[i].children[0].classList.add('e-hide');
            }
            else if (previousData && previousData !== (data[i] as Order)['OrderID']) {
                if ((this.grid as GridComponent).getRows().length > 0 && (this.grid as GridComponent).getRows().length > (startRowIndex as number)) {
                    endRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                    let targetRow = (this.grid as GridComponent).getRows()[(startRowIndex as number)];
                    let currentRowChild = rows[i] && rows[i].children[0];
                    if (targetRow && currentRowChild) {
                        let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                            parseInt(((cell as HTMLElement).getAttribute('aria-colindex') as string), 10) === parseInt(((currentRowChild as HTMLElement).getAttribute('aria-colindex') as string))
                        );
                        if (targetCell[0]) {
                            (targetCell[0] as HTMLElement).setAttribute("rowSpan", ((endRowIndex as number) - (startRowIndex as number)).toString());
                        }
                    }
                    previousData = (data[i] as Order)['OrderID'];
                    startRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                }
            }
            if (rows[i].children[0].classList.contains("e-hide") || i < len) {
                endRowIndex = parseInt(((rows[i] as HTMLElement).getAttribute("aria-rowindex") as string), 10);
                if (endRowIndex > 0) {
                    let targetRow = (this.grid as GridComponent).getRows()[(startRowIndex as number)];
                    let currentRowChild = rows[i] && rows[i].children[0];
                    if (targetRow && currentRowChild) {
                        let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                            parseInt(((cell as HTMLElement).getAttribute('aria-colindex') as string), 10) === parseInt(((currentRowChild as HTMLElement).getAttribute('aria-colindex') as string))
                        );
                        if (targetCell.length > 0) {
                            (targetCell[0] as HTMLElement).setAttribute("rowSpan", ((endRowIndex as number) - (startRowIndex as number) + 1).toString());
                        }
                    }
                }
            }
        }

    };
    excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs) {

        if (!this.currentOrderID && args.column.field == "OrderID") {
            this.currentOrderID = (args.data as Order)["OrderID"];
            this.gridcells = (args.cell as HTMLElement);
        }
        else if (this.currentOrderID && args.column.field == "OrderID" && this.currentOrderID == (args.data as Order)["OrderID"]) {
            this.rowspanCount++;
        } else if (this.currentOrderID !== (args.data as Order)["OrderID"] && args.column.field == "OrderID") {
            (this.gridcells as HTMLTableCellElement).rowSpan = this.rowspanCount;
            this.currentOrderID = (args.data as Order)["OrderID"];
            this.gridcells = (args.cell as HTMLElement);
            this.rowspanCount = 1;
        }
    };
    excelExportComplete(args: ExcelExportCompleteArgs) {
        this.currentOrderID = null;
        this.gridcells = null;
        this.rowspanCount = 1;
    }
}

interface Order {
    OrderID: number;
    CustomerID: string;
    City: string;
}