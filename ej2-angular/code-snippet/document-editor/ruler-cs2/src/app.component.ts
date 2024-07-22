import { ViewEncapsulation, ViewChild, Component, OnInit } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  encapsulation: ViewEncapsulation.None,
  // specifies the template string for the DocumentEditorContainer component
  template: `<button id='export'(click)="onClick()">Show/Hide Ruler</button>
    <ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="width:100%;display:block" [enableToolbar]=true [documentEditorSettings]= "enableRuler"> </ejs-documenteditorcontainer>`,
  providers: [ToolbarService]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  public enableRuler = { showRuler: true };
  onClick(): void {
    (this.container as DocumentEditorContainerComponent).documentEditorSettings.showRuler = !(this.container as DocumentEditorContainerComponent).documentEditorSettings.showRuler;
  }
}