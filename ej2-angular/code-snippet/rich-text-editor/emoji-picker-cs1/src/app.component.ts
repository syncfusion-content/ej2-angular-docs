import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, ImageService, QuickToolbarService, LinkService, TableService, PasteCleanupService, EmojiPickerService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='toolbarSettings' [value]='value'>
</ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, EmojiPickerService, TableService, PasteCleanupService]
})
export class AppComponent {
    public value: string = "<p>An emoji picker in a Rich Text Editor is a tool that allows users to easily add emojis or emoticons to their text.</p><p>Typically, it is a small window or panel that displays a variety of emojis, arranged in different categories, such as smileys, animals, food, and so on. Users can select the desired emoji by clicking on it or by typing its name in a search bar.</p>"
    public toolbarSettings: ToolbarSettingsModel = {
        items: ['EmojiPicker', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
            'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', '|', 'Undo', 'Redo'
        ]
    };
}