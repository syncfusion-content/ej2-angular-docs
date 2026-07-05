import { Component } from '@angular/core'
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, ResizeService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    styleUrls: ['app.style.css'],
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [enableResize]="true" [value]='value' [width]=350 [height]=350>
    </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, ResizeService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
    public value: string = "<p>The Rich Text Editor component is WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>"
}