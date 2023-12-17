

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-container',
  template: `<button id='export'(click)="onClick(this)">Show/Hide Ruler</button>
  <ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="width:100%;display:block" [enableToolbar]=true [documentEditorSettings]= "enableRuler"> </ejs-documenteditorcontainer>`,
  encapsulation: ViewEncapsulation.None,
  providers: [ToolbarService]
})
export class AppComponent {
@ViewChild('documenteditor_default')
public container: DocumentEditorContainerComponent;
public enableRuler = { showRuler: true };
onClick():void {
    this.container.documentEditorSettings.showRuler = !this.container.documentEditorSettings.showRuler;
}
}



