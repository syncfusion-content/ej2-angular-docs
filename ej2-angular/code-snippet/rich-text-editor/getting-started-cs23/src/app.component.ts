import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, BeforeSanitizeHtmlArgs, QuickToolbarService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import { detach } from '@syncfusion/ej2-base';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [value]='editorValue' (beforeSanitizeHtml)='onBeforeSanitizeHtml($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService]
})
export class AppComponent {
    public editorValue: string = `<div>Prevention of Cross Sit Scripting (XSS)</div><script>alert('hi')</script>`;
    public onBeforeSanitizeHtml(e: BeforeSanitizeHtmlArgs): void {
        e.helper = (value: string) => {
            e.cancel = true;
            let temp: HTMLElement = document.createElement('div');
            temp.innerHTML = value;
            let scriptTag: HTMLElement = temp.querySelector('script') as HTMLElement;
            if (scriptTag) {
                detach(scriptTag);
            }
            return temp.innerHTML;
        }
    }
}