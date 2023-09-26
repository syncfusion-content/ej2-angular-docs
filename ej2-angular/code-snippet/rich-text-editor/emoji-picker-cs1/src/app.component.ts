/**
 * Rich Text Editor Custom-Toolbar Sample
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RichTextEditorComponent, ToolbarService, HtmlEditorService, ImageService, QuickToolbarService, LinkService, EmojiPickerService } from '@syncfusion/ej2-angular-richtexteditor';
@Component( {
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='toolbarSettings'>
    <ng-template #valueTemplate>
    <p>An emoji picker in a Rich Text Editor is a tool that allows users to easily add emojis or emoticons to their text.</p>
    <p>Typically, it is a small window or panel that displays a variety of emojis, arranged in different categories, such as smileys, animals, food, and so on. Users can select the desired emoji by clicking on it or by typing its name in a search bar.</p>
    </ng-template>
</ejs-richtexteditor>`,
providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, EmojiPickerService]
} )
export class AppComponent {
    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
        'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'EmojiPicker', '|', 'Undo', 'Redo'
    ]
    };
}
