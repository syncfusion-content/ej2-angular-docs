import { data, employeeData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnModel, DetailDataBoundEventArgs, DetailRowService, GridComponent, GridModel, GridModule, PdfExportProperties, PdfExportService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [GridModule],
    providers: [PdfExportService, ToolbarService, DetailRowService],
    standalone: true,
    selector: 'app-root',
    template: `
    <ejs-grid #grid id="Grid" [dataSource]="data" [toolbar]="toolbarOptions" [childGrid]="childGrid" height="220px" [allowPdfExport]="true" (toolbarClick)="toolbarClick($event)" (exportDetailDataBound)="exportDetailDataBound($event)">
        <e-columns>
            <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" width="90"></e-column>
            <e-column field="FirstName" headerText="FirstName" width="100"></e-column>
            <e-column field="LastName" headerText="Last Name" width="100"></e-column>
            <e-column field="City" headerText="City" width="100"></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    @ViewChild("grid") public grid?: GridComponent;
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public childGrid: GridModel = {
        dataSource: data,
        queryString: "EmployeeID",
        columns: [
            { field: "OrderID", headerText: "Order ID", textAlign: "Right", width: 90 },
            { field: "CustomerID", headerText: "Customer ID", width: 100 },
            { field: "OrderDate",  headerText: "Order Date",  width: 120, format: { type: 'date', format: 'dd-MM-yyyy' }},
            { field: "ShipCity", headerText: "Ship City", width: 100 }
        ],
    };
    ngOnInit(): void {
        this.data = employeeData;
        this.toolbarOptions = ["PdfExport"];
    }
    public exportDetailDataBound(args: DetailDataBoundEventArgs): void {
        // Set the date format for the OrderDate column before exporting.
        ((args.childGrid as GridModel).columns as ColumnModel[])[2].format = { type: 'date', format: 'dd\\/MM\\/yyyy' };
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_pdfexport') {
            const exportProperties: PdfExportProperties = {
              hierarchyExportMode: 'All',
            };
            (this.grid as GridComponent).pdfExport(exportProperties);
        }
    }
}