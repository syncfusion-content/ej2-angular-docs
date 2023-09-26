


/**
* RTE Inline mode Sample
*/
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
selector: 'app-root',
template: `<ejs-richtexteditor id='inlineRTE' #inlineRTE [inlineMode]='inlineMode' [toolbarSettings]='toolbarSettings' [format]='format' [fontFamily]='fontFamily'>
            <ng-template #valueTemplate>
                <p>The sample is configured with inline mode of editor. Initially, the editor is rendered without a <a href="https://ej2.syncfusion.com/home/" target="_blank">toolbar</a>. The toolbar becomes visible only when the content is selected.</p>
            </ng-template>
          </ejs-richtexteditor>`,
providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class AppComponent  {
public inlineMode: object = { enable: true, onSelection: true };
public toolbarSettings: Object = {
    items: ['Bold', 'Italic', 'Underline',
        'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
        'CreateLink']
};
public format: Object = {
    width: 'auto'
};
public fontFamily: Object = {
    width: 'auto'
};
}



