import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, PrintService, SelectionService, EditorService, EditorHistoryService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: 'app-container',
      template: `<div>
      <button ejs-button (click)="onPrint()" >Print</button>
      <ejs-documenteditor #document_editor height="330px" style="display:block" [isReadOnly]=true [enableSelection]=true [enableEditor]=true [enablePrint]=true (created)="onCreated()"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SelectionService, EditorService, EditorHistoryService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    onCreated(): void {
        if ((this.documentEditor as DocumentEditorComponent).isDocumentLoaded) {
            let sfdt: string = `{
                "sections": [
                    {
                        "blocks": [
                            {
                                "inlines": [
                                    {
                                        "characterFormat": {
                                            "bold": true,
                                            "italic": true
                                        },
                                        "text": "Hello World"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {
                        }
                    }
                ]
            }`;
            //Open the document content.
            (this.documentEditor as DocumentEditorComponent).open(sfdt);
        }
    }

    public onPrint(): void {
        //Print the document content.
        (this.documentEditor as DocumentEditorComponent).print();
    }
}


