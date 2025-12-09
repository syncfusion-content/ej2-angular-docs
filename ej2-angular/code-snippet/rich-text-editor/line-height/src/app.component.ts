import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarSettingsModel, ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [RichTextEditorModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='editor' [toolbarSettings]='tools' [value]='value' >
   </ejs-richtexteditor>`,
    providers: [ToolbarService, HtmlEditorService, QuickToolbarService, ImageService, LinkService, TableService, PasteCleanupService]
})
export class AppComponent {
    public value: string = "<p>The Rich Text Editor allows users to apply line-height (line-spacing) to elements like paragraphs, lists, headings, and table cells. You can set line height using a dedicated dropdown in the toolbar, and it is applied as inline style to the selected blocks. This feature makes text easier to read and gives better control over content layout.</p><p><b> Key features:</b></p> <ul> <li><p>Provides a <b>Line Height</b> dropdown in the toolbar for easy access.</p></li><li><p>Supports applying line-height to paragraphs, headings, lists, and table cells.</p></li><li><p>Applies line-height as inline styles for consistent and precise text rendering.</p></li><li><p>Ensures consistent appearance across devices and print layouts.</p></li><li><p>Improves text readability and overall document aesthetics.</p></li></ul>";
    public tools: ToolbarSettingsModel = {
        items: ['LineHeight']
    };
}