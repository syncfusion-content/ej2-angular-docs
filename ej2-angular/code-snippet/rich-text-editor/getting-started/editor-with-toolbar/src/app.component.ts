import { RichTextEditorModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    selector: 'app-root',
    template: `
        <ejs-richtexteditor [toolbarSettings]="tools" [value]="value"></ejs-richtexteditor>
    `,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService],
})
export class App {
    public tools: ToolbarSettingsModel = {
        items: ['Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName',
        'FontSize', 'FontColor', 'BackgroundColor', '|', 'SubScript', 'SuperScript', '|', 'LowerCase',
        'UpperCase', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|', 'Indent',
        'Outdent', '|', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'],
    };

    public value: string = `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul> <li> <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p> </li> <li> <p>Bulleted and numbered lists.</p> </li> <li> <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p> </li> <li> <p>Contains undo/redo manager. </p> </li> </ul><p><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline" height="174"></p>`;
}
