import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, AutoFormatService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [(value)]='value'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, AutoFormatService]
})

export class AppComponent {
    public value: string = `<h3>Markdown Auto-Format</h3>
    <p>The Markdown Auto-Format feature automatically converts Markdown syntax into clean, semantic HTML within the Rich Text Editor. This capability streamlines content creation by allowing you to write using familiar Markdown patterns while ensuring consistent HTML output.</p>
    <p>When enabled, the editor supports both <strong>inline formatting</strong> (such as bold and italic) and <strong>block-level elements</strong> (such as headings and lists). As you type, Markdown syntax is instantly transformed into its corresponding HTML tags, delivering a smooth and efficient editing experience.</p>
    <p>It also supports <strong>checklists</strong> and <strong>to-do lists,</strong> allowing you to create interactive task lists using simple Markdown syntax.</p>`;
}