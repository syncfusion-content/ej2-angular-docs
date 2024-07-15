import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  DocumentEditorComponent, SfdtExportService, SelectionService, FontDialogService, EditorService, ContextMenuService
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
      <button ejs-button (click)="btnClick()" >Show/Hide Ruler</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSelection]=true
      [enableSfdtExport]=true [enableContextMenu]=true
      [enableFontDialog]=true [enableEditor]=true [documentEditorSettings]="documentEditorSettings" >
      </ejs-documenteditor>
      </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [SfdtExportService, SelectionService, FontDialogService, EditorService, ContextMenuService]
})

export class AppComponent {
  @ViewChild('document_editor')
  public documentEditor!: DocumentEditorComponent;

  public documentEditorSettings = { showRuler: true };
  public btnClick(): void {
    this.documentEditorSettings.showRuler = !this.documentEditorSettings.showRuler;
    this.documentEditor.documentEditorSettings = { showRuler: this.documentEditorSettings.showRuler };
  }
}


