

import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { DocumentEditorComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: "app-container",
      template: `<button id='container_ruler_button'(click)="onClick(this)">Show/Hide Ruler</button>
      <ejs-documenteditorcontainer #documenteditor serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" isReadOnly: false style="width:100%;display:block" [enableToolbar]=true [documentEditorSettings]= "enableRuler"> </ejs-documenteditorcontainer>`,
      encapsulation: ViewEncapsulation.None,
      providers: []
})
export class AppComponent implements OnInit {
    @ViewChild("documenteditor")
    public documentEditor: DocumentEditorComponent;
    ngOnInit(): void {
      this.documentEditor.enableAllModules();
    }
    public enableRuler = { showRuler: true };


    onClick(args: any):void {
      this.documentEditor.documentEditorSettings.showRuler = !this.documentEditor.documentEditorSettings.showRuler;
    }   
}



