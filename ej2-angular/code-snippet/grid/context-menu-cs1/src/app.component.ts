import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import {
    ContextMenuService, PageService, ResizeService, SortService, GroupService, EditService,
    PdfExportService, ExcelExportService
} from '@syncfusion/ej2-angular-grids'




import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ContextMenuItem, } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ContextMenuService,
        PageService,
        ResizeService,
        SortService,
        GroupService,
        EditService,
        PdfExportService,
        ExcelExportService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' [allowExcelExport]='true'
    [allowPdfExport]='true' height='220px' [allowSorting]='true' [allowGrouping]='true' [contextMenuItems]="contextMenuItems" 
    [editSettings]='editing'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
            <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit' width='80'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='100'></e-column>
        </e-columns>
    </ejs-grid>`,
})
export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems?: ContextMenuItem[];
    public editing?: EditSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.editing = { allowEditing: true, allowDeleting: true };
        this.contextMenuItems = ['AutoFit',
            'AutoFitAll',
            'SortAscending',
            'SortDescending',
            'Copy',
            'Edit',
            'Delete',
            'Save',
            'Cancel',
            'PdfExport',
            'ExcelExport',
            'CsvExport',
            'FirstPage',
            'PrevPage',
            'LastPage',
            'NextPage',
            'Group',
            'Ungroup'
        ]
    }
}



