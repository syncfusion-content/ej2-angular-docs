import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnChooserService, EditService, ExcelExportService, FilterService, GridComponent, GridModule, GroupService, PageService, PdfExportService, SelectionService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    imports: [GridModule],
    providers: [PageService, GroupService, SortService, FilterService, EditService, ToolbarService, SelectionService, ExcelExportService, PdfExportService, ColumnChooserService],
    standalone: true,
    selector: 'app-root',
    template: `
        <div class="e-adaptive-demo e-bigger">
            <div class="e-mobile-layout">
                <div class="e-mobile-content">
                    <ejs-grid #grid id="Grid" [dataSource]='data' enableAdaptiveUI='true' adaptiveUIMode= 'Mobile'
                    height='100%' allowPaging='true' allowGrouping=true allowFiltering='true' allowSorting='true' allowSelection='true' [selectionSettings]="selectionSettings" showColumnChooser='true' [editSettings]='editSettings'
                    [filterSettings]='filterSettings' [toolbar]='toolbar' allowExcelExport='true' allowPdfExport='true' (load)='onLoad()' (toolbarClick)='toolbarClick($event)'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' width='150' isPrimaryKey='true' [validationRules]='orderidrules'></e-column>
                            <e-column field='CustomerID' headerText='Customer Name' width='160' minWidth=80 maxWidth=300 [validationRules]='customerIDRules'></e-column>
                            <e-column field='Freight' headerText='Freight' width='150' minWidth=80 maxWidth=300 [validationRules]='freightRules'></e-column>
                            <e-column field='OrderDate' headerText='Order Date' width='200' type='date' [format]='dateFormat' editType='datepickeredit'></e-column>
                            <e-column field='ShipCountry' headerText='Ship Country' width='200'></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>
            </div>
        </div>`
})

export class AppComponent implements OnInit {
    @ViewChild('grid')
    public grid?: GridComponent;
    public data?: object[];
    public editSettings?: Object;
    public toolbar?: string[];
    public orderidrules?: Object;
    public customerIDRules?: Object;
    public freightRules?: Object;
    public filterSettings?: Object;
    public selectionSettings?: Object;
    public dateFormat?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'];
        this.orderidrules = { required: true, number: true };
        this.customerIDRules = { required: true };
        this.freightRules = { required: true };
        this.filterSettings = { type: 'Excel' };
        this.selectionSettings = { type: 'Multiple' };
        this.dateFormat = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    }

    public onLoad(): void {
        (this.grid as GridComponent).adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }

    toolbarClick(args: ClickEventArgs): void {
        switch (args.item.id) {
            case 'Grid_pdfexport':
                (this.grid as GridComponent).pdfExport();
                break;
            case 'Grid_excelexport':
                (this.grid as GridComponent).excelExport();
                break;
        }
    }
}