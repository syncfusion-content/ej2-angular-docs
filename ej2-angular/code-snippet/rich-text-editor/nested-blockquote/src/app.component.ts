import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [value]='value'>
   </ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService]
})
export class AppComponent {
    public value: string = "<blockquote><p><strong>Outer Quote:</strong> The Rich Text Editor provides a flexible way to format quotations.</p><blockquote><p><em>Inner Quote:</em> You can even nest blockquotes to represent quoted replies or layered citations.</p><blockquote><p><em>Deep Quote:</em> This is useful in forums, emails, or academic writing where multiple levels of quoting are needed.</p></blockquote></blockquote></blockquote>";
    public tools: ToolbarSettingsModel = {
        items: ['Blockquote', '|', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
            , 'OrderedList', 'UnorderedList', '|', 'CreateLink',
            'Image', '|', 'SourceCode', 'Undo', 'Redo']
    };
}