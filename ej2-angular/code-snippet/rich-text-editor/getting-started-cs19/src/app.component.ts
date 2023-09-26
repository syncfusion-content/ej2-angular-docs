


import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, CountService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [showCharCount]='true' [maxLength]='maxLength'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService]
})
export class AppComponent  {
    public maxLength = 2000;
}



