import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #defaultRTE id='defaultRTE' [(value)]='value' [toolbarSettings]='tools' [keyConfig]='keyConfig' (created)='onCreate()'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, QuickToolbarService, PasteCleanupService, HtmlEditorService]
})

export class AppComponent {
    @ViewChild('defaultRTE') rteObj: RichTextEditorComponent | undefined;

    public value: string = "<p>The Rich Text Editor component is a WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li><li><p>Capable of handling markdown editing.</p></li><li><p>Contains a modular library to load the necessary functionality on demand.</p></li><li><p>Provides a fully customizable toolbar.</p></li><li><p>Provides HTML view to edit the source directly for developers.</p></li><li><p>Supports third-party library integration.</p></li><li><p>Allows a preview of modified content before saving it.</p></li><li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager.</p></li><li><p>Creates bulleted and numbered lists.</p></li></ul>";
  
    public tools = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    public keyConfig = {
        bold: 'ctrl+alt+b',
        italic: 'ctrl+alt+i',
        underline: 'ctrl+alt+u',
    }
    onCreate() {
        document.onkeyup = (e: KeyboardEvent) => {
            if (e.altKey && (e.key === 't' || e.key === 'T')) {
                this.rteObj.focusIn();
            }
        };
    }
}