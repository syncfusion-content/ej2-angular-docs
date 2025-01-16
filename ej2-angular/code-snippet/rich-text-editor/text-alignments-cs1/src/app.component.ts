import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, QuickToolbarService,  LinkService, ImageService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools'> </ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, LinkService, ImageService, TableService, PasteCleanupService]
})
export class AppComponent {
    public tools: ToolbarSettingsModel = {
        items: ['Alignments']
    };
}
