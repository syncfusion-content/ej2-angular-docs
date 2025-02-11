import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, ToolbarSettingsModel, ImageSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor [toolbarSettings]='toolbarSettings' [insertImageSettings]='insertImageSettings' [(value)]='value'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
    public value: string = "<p>The Rich Text Editor is a WYSIWYG (\"what you see is what you get\") editor useful for creating and editing content, and returning valid <a href=\"https://ej2.syncfusion.com/home/\" target=\"_blank\">HTML markup</a> or <a href=\"https://ej2.syncfusion.com/home/\" target=\"_blank\">markdown</a> of the content.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Capable of handling markdown editing.</p></li><li><p>Contains a modular library to load the necessary functionality on demand.</p></li><li><p>Provides a fully customizable toolbar.</p></li><li><p>Provides HTML view to edit the source directly for developers.</p></li><li><p>Supports third-party library integration.</p></li><li><p>Allows preview of modified content before saving it.</p></li><li><p>Handles images, hyperlinks, videos, uploads, etc.</p></li></ul>";
    public toolbarSettings: ToolbarSettingsModel = {
        items: ['Image']
    };
    public insertImageSettings: ImageSettingsModel = {
        saveUrl: 'https://services.syncfusion.com/angular/production/api/RichTextEditor/SaveFile',
        removeUrl: 'https://services.syncfusion.com/angular/production/api/RichTextEditor/DeleteFile'
    };
}