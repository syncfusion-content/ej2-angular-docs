import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { DocumentEditorComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: "app-container",
      template: `<button id='container_ruler_button'(click)="onClick(this)">Show/Hide Ruler</button>
      <ejs-documenteditorcontainer #documenteditor serviceUrl="https://services.syncfusion.com/angular/production/api/documenteditor/" height="600px" isReadOnly: false style="width:100%;display:block" [enableToolbar]=true [documentEditorSettings]= "enableRuler"> </ejs-documenteditorcontainer>`,
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



