

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SelectionService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      template: `<div>
      <ejs-documenteditor #document_editor height="330px" style="display:block" [enableSelection]=true (created)="onCreated()"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SelectionService]
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
                                "paragraphFormat": {
                                    "styleName": "Normal"
                                },
                                "inlines": [
                                    {
                                        "text": "First page"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {},
                    },
                    {
                        "blocks": [
                            {
                                "paragraphFormat": {
                                    "styleName": "Normal"
                                },
                                "inlines": [
                                    {
                                        "text": "Second page"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {},
                    }
                ],
                "characterFormat": {},
                "paragraphFormat": {},
                "background": {
                    "color": "#FFFFFFFF"
                },
                "styles": [
                    {
                        "type": "Paragraph",
                        "name": "Normal",
                        "next": "Normal"
                    },
                    {
                        "type": "Character",
                        "name": "Default Paragraph Font"
                    }
                ]
            }`;
            //Open the document in Document Editor.
            (this.documentEditor as DocumentEditorComponent).open(JSON.stringify(sfdt));
            //Navigate to specified page number.
            (this.documentEditor as DocumentEditorComponent).selection.goToPage(2);
        }
    }
}


