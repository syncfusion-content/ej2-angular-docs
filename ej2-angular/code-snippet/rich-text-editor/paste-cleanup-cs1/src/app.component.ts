import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService, ToolbarSettingsModel, PasteCleanupSettingsModel, PasteCleanupArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { detach } from '@syncfusion/ej2-base';
@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [pasteCleanupSettings]="pasteCleanupSettings" [(value)]='value' (afterPasteCleanup)='afterPasteCleanupHandler($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService]
})
export class AppComponent {
    public value: string = "<p>RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p><p><b>Paste Cleanup properties:</b></p><ul><li><p>prompt - specifies whether to enable the prompt when pasting in RichTextEditor.</p></li><li><p>plainText - specifies whether to paste as plain text or not in RichTextEditor.</p></li><li><p>keepFormat- specifies whether to keep or remove the format when pasting in RichTextEditor.</p></li><li><p>deniedTags - specifies the tags to restrict when pasting in RichTextEditor.</p></li><li><p>deniedAttributes - specifies the attributes to restrict when pasting in RichTextEditor.</p></li><li><p>allowedStyleProperties - specifies the allowed style properties when pasting in RichTextEditor.</p></li></ul>";
    public tools: ToolbarSettingsModel = {
        type: 'MultiRow' as ToolbarSettingsModel['type'],
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    public pasteCleanupSettings: PasteCleanupSettingsModel = {
        prompt: true,
        plainText: false,
        keepFormat: false,
        deniedTags: ['a'],
        deniedAttrs: ['class', 'title', 'id'],
        allowedStyleProps: ['color', 'margin', 'font-size']
    };
    public afterPasteCleanupHandler(args: PasteCleanupArgs) {
        const divElement: HTMLElement = document.createElement('div');
        divElement.innerHTML = args.value;
        const pasteCleanupImage: HTMLElement = divElement.querySelector('.pasteContent_Img') as HTMLElement;
        if (pasteCleanupImage) {
            detach(pasteCleanupImage);
            args.value = divElement.innerHTML;
        }
    }
}