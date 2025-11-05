import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, TableService, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' ></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, TableService]
})

export class AppComponent {

    public tools: ToolbarSettingsModel = {
        items: ['FullScreen', 'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
            'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
    };
}
