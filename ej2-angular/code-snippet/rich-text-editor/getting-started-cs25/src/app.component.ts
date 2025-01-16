import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [ RichTextEditorAllModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [fontFamily] ='family'>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
    public tools: object = {
        items: [ 'FontName']
    };
    public size = {
        default: '10',
        width: '40px',
        items: [
            { text: '8', value: '8pt' },
            { text: '10', value: '10pt' },
            { text: '12', value: '12pt' },
            { text: '14', value: '14pt' },
            { text: '42', value: '42pt' }
        ]
    };
}