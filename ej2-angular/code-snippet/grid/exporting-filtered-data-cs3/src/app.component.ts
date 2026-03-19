import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService, GridComponent, GridModule, PageService, PdfExportService, SelectionService, SelectionSettingsModel, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    imports: [GridModule],
    providers: [ SelectionService,ToolbarService, PdfExportService,PageService, FilterService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id='Grid' [dataSource]='data' [toolbar]='toolbarOptions' [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)' [selectionSettings]='selectionSettings'>
                <e-columns>
                  <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                  <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                </e-columns>
              </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public selectionSettings?: SelectionSettingsModel;
    @ViewChild('grid') public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['PdfExport'];
        this.selectionSettings = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    }

    toolbarClick(args: ClickEventArgs) {
        if (args.item.id === 'Grid_pdfexport') {
            const selectedRecords = (this.grid as GridComponent).getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            (this.grid as GridComponent).pdfExport(exportProperties);
        }
    }
}
