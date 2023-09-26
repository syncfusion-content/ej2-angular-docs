

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [fontSize]='size' [fontFamily] ='family'>
               </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
    public tools: object = {
        items: [ 'FontName', 'FontSize']
    };
    public size = {
        width: '40px'
    };
    public family = {
        width: '60px'
    };
}



