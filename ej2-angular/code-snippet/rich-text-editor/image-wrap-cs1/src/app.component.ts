import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, ToolbarSettingsModel, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='imageWrapRTE' [toolbarSettings]="toolbarSettings" [quickToolbarSettings]="quickToolbarSettings"></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class AppComponent {
    public toolbarSettings: ToolbarSettingsModel = {
        items: ['Image']
    };
    quickToolbarSettings: QuickToolbarSettingsModel = {
        image: ['AltText', 'Caption', '|', 'Display', 'WrapText', '|', 'InsertLink', 'RemoveImageLink']
    };
}
