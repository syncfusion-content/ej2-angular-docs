import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    ToolbarService , DocumentEditorContainerComponent, EditorService, SelectionService, SfdtExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor Container component
      template: `<div style="width:100%;"><button ejs-button (click)="saveAsSfdt()" >Save</button>
      <ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" [enableToolbar]=true [isReadOnly]=false [enableEditor]=true [enableSfdtExport]=true> </ejs-documenteditorcontainer></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarService, EditorService, SelectionService, SfdtExportService]
})

export class AppComponent { 
    @ViewChild('document_editor')
    public container?: DocumentEditorContainerComponent;

    public saveAsSfdt(): void {
        //Download the document as SFDT.
        (this.container as DocumentEditorContainerComponent).documentEditor.save('sample', 'Sfdt');
    }
}


