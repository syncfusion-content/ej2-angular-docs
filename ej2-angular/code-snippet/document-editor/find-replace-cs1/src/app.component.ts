import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import {ColorPickerModule } from '@syncfusion/ej2-angular-inputs'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SelectionService, EditorService, SearchService, OptionsPaneService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        ToolbarModule,
        DocumentEditorAllModule,
        ComboBoxModule,
        ColorPickerModule
    ],


standalone: true,
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div>
      <button ejs-button (click)="showOptionsPane()" >Show</button>
      <ejs-documenteditor #document_editor height="330px" style="display:block" id="container" height="330px" style="display:block" [enableSelection]=true [enableSearch]=true [enableEditor]=true [isReadOnly]=false [enableOptionsPane]=true (created)="onCreated()"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SelectionService, EditorService, SearchService, OptionsPaneService]
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
                                        "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }`;
            //Open the document in Document Editor
            (this.documentEditor as DocumentEditorComponent).open(sfdt);
        }
    }

    public showOptionsPane(): void {
        //Open options pane.
        (this.documentEditor as DocumentEditorComponent).showOptionsPane();
    }
}


