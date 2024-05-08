import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'




import { Component, OnInit, ViewChild } from '@angular/core';
import { data, employeeData } from './datasource';
import { GridComponent, ToolbarItems, PdfExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `<p><b>First Grid:</b></p>
    <ejs-grid #firstGrid id='FirstGrid' [dataSource]='firstGridData' [toolbar]='toolbarOptions' [allowPdfExport]='true'
        (toolbarClick)='toolbarClick($event)' [exportGrids]='exportGrids'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=110></e-column>
                </e-columns>
                </ejs-grid>
                <p><b>Second Grid:</b></p>
                <ejs-grid #secondGrid id='SecondGrid' [dataSource]='secondGridData' [allowPdfExport]='true'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=90></e-column>
                    <e-column field='FirstName' headerText='FirstName' width=100></e-column>
                    <e-column field='LastName' headerText='Last Name' width=100></e-column>
                    <e-column field='City' headerText='City' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public firstGridData?: object[];
    public secondGridData?: object[];
    public toolbarOptions?: ToolbarItems[];
    public exportGrids?: string[];
    @ViewChild('firstGrid') public firstGrid?: GridComponent;
    @ViewChild('secondGrid') public secondGrid?: GridComponent;

    ngOnInit(): void {
        this.firstGridData = data;
        this.secondGridData = employeeData;
        this.toolbarOptions = ['PdfExport'];
        this.exportGrids = ['FirstGrid', 'SecondGrid'];
    }

    toolbarClick = (args: ClickEventArgs) => {
        const appendPdfExportProperties: PdfExportProperties = {
            multipleExport: { type: 'NewPage' }
        };
        if (args.item.id === 'FirstGrid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            (this.firstGrid as GridComponent).pdfExport(appendPdfExportProperties, true);
        }
    }
}




