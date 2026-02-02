import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, QuickToolbarService, ClipboardCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ClipboardCleanupService]
})

export class AppComponent {}