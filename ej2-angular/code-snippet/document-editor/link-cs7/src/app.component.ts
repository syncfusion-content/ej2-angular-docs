

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, PrintService, SelectionService, EditorService, EditorHistoryService, SfdtExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div>
          <button ejs-button (click)="onPrint()" >Print</button>
          <ejs-documenteditor #document_editor height="330px" style="display:block" [isReadOnly]=false [enableSelection]=true [enableEditor]=true [enablePrint]=true [enableSfdtExport]=true></ejs-documenteditor>
          <ejs-documenteditor #document_editor_preview height="330px" style="display:block" [isReadOnly]=false [enableSelection]=true [enableEditor]=true [enablePrint]=true [enableSfdtExport]=true></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SelectionService, EditorService, EditorHistoryService, SfdtExportService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    @ViewChild('document_editor_preview')
    public documentEditorPreview?: DocumentEditorComponent;

    public onPrint(): void {
        let sfdtData = (this.documentEditor as DocumentEditorComponent).serialize();
        //Open the document in preview document editor.
        this.documentEditorPreview.open(sfdtData);
        //Set A5 paper size
        this.documentEditorPreview.selection.sectionFormat.pageWidth = 419.55;
        this.documentEditorPreview.selection.sectionFormat.pageHeight = 595.30;
        //Print the document content.
        this.documentEditorPreview.print();
    }
}



