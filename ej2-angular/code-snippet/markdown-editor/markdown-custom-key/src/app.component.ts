import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, MarkdownFormatter, MarkdownEditorService , HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [formatter]='formatter' [editorMode]='mode' [toolbarSettings]='tools' [value]="value"></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, MarkdownEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService]
})

export class AppComponent {
    public mode: string = 'Markdown';
    public value: string =
      'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.';
  
    public formatter: MarkdownFormatter = new MarkdownFormatter({
      keyConfig: {
        'insert-link': 'ctrl+q', // confite the desired key
      },
    });

    public tools: ToolbarSettingsModel = {
      items: [
        'Bold',
        'Italic',
        'StrikeThrough',
        'InlineCode',
        'SuperScript',
        'SubScript',
        '|',
        'Formats',
        'Blockquote',
        '|',
        'OrderedList',
        'UnorderedList',
        'CreateLink',
        'Image',
        'CreateTable',
      ],
    };
}