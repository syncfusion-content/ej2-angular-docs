import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, LinkService, ImageService, HtmlEditorService, CountService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [undoRedoSteps] ='steps' [undoRedoTimer]='timer'>
               </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, CountService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    public tools: ToolbarSettingsModel = { items: ['Undo', 'Redo'] };
    public steps: number= 50;
    public timer: number = 400;
}


