import { Component } from '@angular/core';
import { RichTextEditorModule, InlineModeModel, ToolbarSettingsModel, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='inlineEditor' #inlineEditor [inlineMode]='inlineMode' [toolbarSettings]='toolbarSettings' [format]='format' [fontFamily]='fontFamily' [value]='value'>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    public value: string = "<p>The sample is configured with inline mode of editor. Initially, the editor is rendered without a <a href='https://ej2.syncfusion.com/home/' target='_blank'>toolbar</a>. The toolbar becomes visible only when the content is selected.</p>"
    public inlineMode: InlineModeModel = { enable: true, onSelection: true };
    public toolbarSettings: ToolbarSettingsModel = {
        items: ['Bold', 'Italic', 'Underline',
            'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
            'CreateLink']
    };
}