import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, HtmlEditorService, QuickToolbarService, PasteCleanupService} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [value]='value' (afterPasteCleanup)='onAfterPasteCleanup($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})

export class AppComponent {
   public value: string = "<p>The Rich Text Editor component is a WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p> <p><b>Key features:</b></p> <ul><li>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</li><li>Capable of handling markdown editing.</li><li>Contains a modular library to load the necessary functionality on demand.</li><li>Provides a fully customizable toolbar.</li><li>Provides HTML view to edit the source directly for developers.</li><li>Supports third-party library integration.</li><li>Allows preview of modified content before saving it.</li><li>Handles images, hyperlinks, videos, uploads, etc.</li><li>Contains undo/redo manager.</li><li>Creates bulleted and numbered lists.</li></ul>";

    public onAfterPasteCleanup(args: any): void {
        // Here you can get the pasted Html string using args.value
        console.log(args.value);
    }
}