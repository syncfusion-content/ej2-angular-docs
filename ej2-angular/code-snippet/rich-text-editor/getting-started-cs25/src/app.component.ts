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
    public family = {
        default: 'Arial',
        items: [
            { text: 'Arial', value: 'Arial, Helvetica, sans-serif' },
            { text: 'Courier New', value: '"Courier New", Courier, monospace' },
            { text: 'Georgia', value: 'Georgia, serif' },
            { text: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
            { text: 'Verdana', value: 'Verdana, Geneva, sans-serif' }
        ]
    };
}