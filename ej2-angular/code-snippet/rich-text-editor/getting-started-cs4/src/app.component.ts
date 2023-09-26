


import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [enableRtl] = 'rtl'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
    public rtl = true;
}



