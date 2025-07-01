import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, TableService, ToolbarSettingsModel, CodeBlockService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [placeholder]='placeholder' [codeBlockSettings]='codeBlockSettings' ></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, TableService, CodeBlockService]
})

export class AppComponent {
    public placeholder: string = 'Type something...';
    public tools: ToolbarSettingsModel = {
        items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
            'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'EmojiPicker', '|', 'SourceCode']
    };
    public codeBlockSettings = {
        languages: [
            { label: "HTML", language: "html" },
            { label: "JavaScript", language: "javascript" },
            { label: "CSS", language: "css" },
            { label: "Plain Text", language: "plaintext" }
        ],
        defaultLanguage: "plaintext"
    };
}
