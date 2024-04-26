import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, SfdtExportService, EditorHistoryService, BookmarkDialogService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: 'app-container',
      //specifies the template string for the Document Editor Container component
      template: `<div style="width:100%;"><button ejs-button (click)="saveAsSfdt()" >Save</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableEditor]=true [enableSfdtExport]=true> </ejs-documenteditor></div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [EditorService, SelectionService, SfdtExportService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public saveAsSfdt(): void {
        //Download the document as SFDT.
        (this.documentEditor as DocumentEditorComponent).save('sample', 'Sfdt');
    }
}


