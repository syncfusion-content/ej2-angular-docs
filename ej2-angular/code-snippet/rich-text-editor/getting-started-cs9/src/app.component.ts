


/**
* RTE - removeUrl Sample
*/
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
selector: 'app-root',
template: `<ejs-richtexteditor [toolbarSettings]='toolbarSettings' [insertImageSettings]='insertImageSettings'>
            <ng-template #valueTemplate>
                <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a> of the content</p>
                <p><b>Key features:</b></p>
                <ul>
                    <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
                    <li><p>Capable of handling markdown editing.</p></li>
                    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
                    <li><p>Provides a fully customizable toolbar.</p></li>
                    <li><p>Provides HTML view to edit the source directly for developers.</p></li>
                    <li><p>Supports third-party library integration.</p></li>
                    <li><p>Allows preview of modified content before saving it.</p></li>
                    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
                </ul>
            </ng-template>
          </ejs-richtexteditor>`,
providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})

export class AppComponent {
    public toolbarSettings: Object = {
        items: ['Image']
    };
    public insertImageSettings: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
}



