


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
    GridComponent, ContextMenuService, PageService, ResizeService, SortService, GroupService, EditService,
    EditSettingsModel, ContextMenuItem, PdfExportService, ExcelExportService
} from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' [allowExcelExport]='true'
     [allowPdfExport]='true' height='220px' [allowSorting]='true'
        [contextMenuItems]="contextMenuItems" [editSettings]='editing' [allowGrouping]='true'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey='true'></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [ContextMenuService, PageService, ResizeService, SortService, GroupService, EditService,
        PdfExportService, ExcelExportService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems: ContextMenuItem[] = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
        'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
        'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Group', 'Ungroup'];
    @ViewChild('grid')
    public grid?: GridComponent;
    public editing: EditSettingsModel = { allowEditing: true, allowDeleting: true };

    ngOnInit(): void {
        this.data = data;
    }
}



