import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, ParagraphDialogService, EditorService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableParagraphDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SfdtExportService, SelectionService, ParagraphDialogService, EditorService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public btnClick(): void {
        //Open paragraph dialog.
        (this.documentEditor as DocumentEditorComponent).showDialog('Paragraph');
    }
}


