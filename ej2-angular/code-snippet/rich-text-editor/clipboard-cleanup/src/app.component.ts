import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, QuickToolbarService, ClipboardCleanupService, ClipboardWriteEventArgs } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' (beforeClipboardWrite)='onBeforeClipboardWrite($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ClipboardCleanupService]
})

export class AppComponent {
    public onBeforeClipboardWrite(args: ClipboardWriteEventArgs) {
        if (args.operation === 'copy') {
            args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
            args.plainTextContent = 'This is customized content triggered while copy event';
        }
    }
}