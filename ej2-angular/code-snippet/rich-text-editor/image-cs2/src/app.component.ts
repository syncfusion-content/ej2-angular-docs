import { RichTextEditorModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, ImageSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [insertImageSettings]='imageSettingsModel'>
  </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
    public tools: ToolbarSettingsModel = {
        items: ['Image']
    };
    public imageSettingsModel: ImageSettingsModel = {
        saveFormat: 'Base64'
    }
}