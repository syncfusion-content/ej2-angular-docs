

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, EditorHistoryService, HyperlinkDialogService, SfdtExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
    selector: 'app-container',
    //specifies the template string for the Document Editor component
    template: `<div><button ejs-button (click)="showHyperlinkDialog()" >Show Dialog</button>
    <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableEditor]=true [enableSelection]=true [enableSfdtExport]=true [enableEditorHistory]=true [enableHyperlinkDialog]=true> </ejs-documenteditor></div>`,
    encapsulation: ViewEncapsulation.None,
    providers: [EditorService, SelectionService, EditorHistoryService, HyperlinkDialogService, SfdtExportService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public showHyperlinkDialog(): void {
        //Open hyperlink dialog.
        (this.documentEditor as DocumentEditorComponent).showDialog('Hyperlink');;
    }
}


