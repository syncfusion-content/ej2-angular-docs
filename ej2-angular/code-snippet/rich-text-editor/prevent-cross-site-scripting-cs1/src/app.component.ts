import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, BeforeSanitizeHtmlArgs, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [value]='editorValue' (beforeSanitizeHtml)='onBeforeSanitizeHtml($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    public editorValue: string = `<div>Prevention of Cross-Site Scripting (XSS)</div><script>alert('hi')</script><iframe srcdoc="<p>The Rich Text Editor component is WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>"></iframe>`
;
    public onBeforeSanitizeHtml(e: BeforeSanitizeHtmlArgs): void {
          if (e.selectors && e.selectors.tags) {
            e.selectors.tags = e.selectors.tags.filter((tag: string) => tag !== 'iframe:not(.e-rte-embed-url)');
            e.selectors.tags = [('iframe[src^="https://"]')];
        }
    }
}



