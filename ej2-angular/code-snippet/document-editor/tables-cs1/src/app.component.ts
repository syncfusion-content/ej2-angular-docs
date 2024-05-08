import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import {ColorPickerModule } from '@syncfusion/ej2-angular-inputs'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, SfdtExportService, EditorHistoryService, TableDialogService, ContextMenuService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        ToolbarModule,
        DocumentEditorAllModule,
        ComboBoxModule,
        ColorPickerModule
    ],


standalone: true,
        selector: 'app-container',
        styleUrls: ['./style.css'],
        template: `<div>
        <div>
            <ejs-toolbar (clicked)='toolbarButtonClick($event)'>
                <e-items>
                    <e-item prefixIcon="e-de-ctnr-table e-icons" tooltipText="Insert Table" id="table"></e-item>
                    <e-item type="Separator"></e-item>
                    <e-item prefixIcon="e-de-ctnr-insertabove e-icons" tooltipText="Insert new row above" id="insert_above"></e-item>
                    <e-item prefixIcon="e-de-ctnr-insertbelow e-icons" tooltipText="Insert new row below" id="insert_below"></e-item>
                    <e-item type="Separator"></e-item>
                    <e-item prefixIcon="e-de-ctnr-insertleft e-icons" tooltipText="Insert new column to the left" id="insert_left"></e-item>
                    <e-item prefixIcon="e-de-ctnr-insertright e-icons" tooltipText="Insert new column to the right" id="insert_right"></e-item>
                    <e-item type="Separator"></e-item>
                    <e-item prefixIcon="e-de-delete-table e-icons" tooltipText="Delete Entire table" id="delete_table"></e-item>
                    <e-item prefixIcon="e-de-ctnr-deleterows e-icons" tooltipText="Delete the selected row" id="delete_row"></e-item>
                    <e-item prefixIcon="e-de-ctnr-deletecolumns e-icons" tooltipText="Delete the selected column" id="delete_column"></e-item>
                    <e-item type="Separator"></e-item>
                    <e-item prefixIcon="e-de-ctnr-mergecell e-icons" tooltipText="Merge the selected cells" id="merge_cell"></e-item>
                    <e-item type="Separator"></e-item>
                    <e-item text="Dialog" tooltipText="Open insert table dialog" id="table_dialog"></e-item>
                </e-items>
            </ejs-toolbar>
        </div>
    <ejs-documenteditor #document_editor [isReadOnly]=false  [enableSelection]=true  [enableEditorHistory]=true  [enableEditor]=true [enableTableDialog]=true [enableContextMenu]=true [enableSfdtExport]=true height="330px" style="display:block" (created)="onCreated()"></ejs-documenteditor>
        </div>`,
        encapsulation: ViewEncapsulation.None,
        providers: [EditorService, SelectionService, SfdtExportService, EditorHistoryService, TableDialogService, ContextMenuService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    onCreated(): void {
        (this.documentEditor as DocumentEditorComponent).editor.insertTable(2, 2);
    }

    public toolbarButtonClick(arg: any) {
        switch (arg.item.id) {
            case 'table':
                //Insert table API to add table
                (this.documentEditor as DocumentEditorComponent).editor.insertTable(3, 2);
                break;
            case 'insert_above':
                //Insert the specified number of rows to the table above to the row at cursor position
                (this.documentEditor as DocumentEditorComponent).editor.insertRow(true, 2);
                break;
            case 'insert_below':
                //Insert the specified number of rows to the table below to the row at cursor position
                (this.documentEditor as DocumentEditorComponent).editor.insertRow();
                break;
            case 'insert_left':
                //Insert the specified number of columns to the table left to the column at cursor position
                (this.documentEditor as DocumentEditorComponent).editor.insertColumn(true, 2);
                break;
            case 'insert_right':
                //Insert the specified number of columns to the table right to the column at cursor position
                (this.documentEditor as DocumentEditorComponent).editor.insertColumn();
                break;
            case 'delete_table':
                //Delete the entire table
                (this.documentEditor as DocumentEditorComponent).editor.deleteTable();
                break;
            case 'delete_row':
                //Delete the selected number of rows
                (this.documentEditor as DocumentEditorComponent).editor.deleteRow();
                break;
            case 'delete_column':
                //Delete the selected number of columns
                (this.documentEditor as DocumentEditorComponent).editor.deleteColumn();
                break;
            case 'merge_cell':
                //Merge the selected cells into one (both vertically and horizontally)
                (this.documentEditor as DocumentEditorComponent).editor.mergeCells();
                break;
            case 'table_dialog':
                //Opens insert table dialog
                (this.documentEditor as DocumentEditorComponent).showDialog('Table');
                break;
        }
    }
}


