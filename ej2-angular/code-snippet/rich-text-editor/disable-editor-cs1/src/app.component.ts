import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, QuickToolbarService, LinkService, ImageService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [enabled]='false'></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, LinkService, ImageService, PasteCleanupService]
})
export class AppComponent {
    public tools: ToolbarSettingsModel = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
            'Outdent', 'Indent', '|', 'ClearFormat',
            '|', 'FullScreen']
    };
}
