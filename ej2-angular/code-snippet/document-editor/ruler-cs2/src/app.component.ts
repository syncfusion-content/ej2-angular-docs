import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor'


import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

/**
 * Document Editor Component
 */
@Component({
  imports: [
    ButtonModule,
    DocumentEditorContainerModule
  ],


  standalone: true,
  selector: 'app-container',
  template: `<button id='export'(click)="onClick()">Show/Hide Ruler</button>
      <ejs-documenteditorcontainer #documenteditor_default height="600px" style="width:100%;display:block" [enableToolbar]=true [documentEditorSettings]= "enableRuler" ></ejs-documenteditorcontainer>`,
  encapsulation: ViewEncapsulation.None,
  providers: [ToolbarService]
})
export class AppComponent {
  @ViewChild('documenteditor_default')
  public container!: DocumentEditorContainerComponent;
  public enableRuler = { showRuler: true };
  onClick(): void {
    this.container.documentEditorSettings.showRuler = !this.container.documentEditorSettings.showRuler;
  }
}


