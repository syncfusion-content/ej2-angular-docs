import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { Component, ViewEncapsulation } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [ RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    styleUrl: 'app.css',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-richtexteditor></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService],
})
export class App {
}
