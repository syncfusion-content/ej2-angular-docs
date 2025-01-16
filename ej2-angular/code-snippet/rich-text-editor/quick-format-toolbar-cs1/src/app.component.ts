import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #imageEditor id='imageEditor' [quickToolbarSettings]='quickToolbarSettings' (quickToolbarSettingsChange)=' quickToolbarSettingsChange' [(value)]='value'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('imageEditor') editorObj: RichTextEditorComponent | undefined;
    public value: string = "<p>RichTextEditor allows to insert images from online source as well as local computer where you want to insert the image in your content.</p><p><b>Get started Quick Toolbar to click on the image</b></p><p>It is possible to add custom style on the selected image inside the Rich Text Editor through quick toolbar.</p><img id=\"editorImageID\" style=\"width: 300px; height: 300px; transform: rotate(0deg);\" alt=\"Logo\" src=\"https://ej2.syncfusion.com/demos/src/rich-text-editor/images/RTEImage-Feather.png\">";
    quickToolbarSettings: QuickToolbarSettingsModel = {
        text: ['Bold', 'Italic', 'Underline', 'FontColor', 'BackgroundColor', 'Alignments', '-', 'FontSize', 'FontName', 'Formats', 'OrderedList', 'UnorderedList', 'FormatPainter']
    };
    quickToolbarSettingsChange: QuickToolbarSettingsModel = {}
}