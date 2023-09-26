

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
    selector: 'app-container',
    template: `<div>
    <ejs-documenteditor #document_editor height="330px" style="display:block" (created)="onCreated()"></ejs-documenteditor>
    </div>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;
    onCreated(): void {
        if ((this.documentEditor as DocumentEditorComponent).isDocumentLoaded) {
            let sfdt: any = {
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
            };
            //Open the default document in Document Editor.
            (this.documentEditor as DocumentEditorComponent).open(JSON.stringify(sfdt));
            //Scroll to specified page number.
            (this.documentEditor as DocumentEditorComponent).scrollToPage(2);
        }
    }
}


