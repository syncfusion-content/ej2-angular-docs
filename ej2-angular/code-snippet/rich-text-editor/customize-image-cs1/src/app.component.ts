import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #editor id='editor' [quickToolbarSettings]='quickToolbarSettings' (quickToolbarSettingsChange)=' quickToolbarSettingsChange' [(value)]='value'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('editor') editorObj: RichTextEditorComponent | undefined;
    public value: string = "<p>Rich Text Editor allows inserting images from online sources as well as from a local computer into your content.</p><p><b>Get started with the Quick Toolbar by clicking on the image</b></p><p>Custom styles can be added to the selected image inside the Rich Text Editor through the quick toolbar.</p><img id='editorImageID' style='width:300px; height:300px; transform: rotate(0deg);' alt='Logo' src='https://ej2.syncfusion.com/demos/src/rich-text-editor/images/RTEImage-Feather.png'>";
    public quickToolbarSettings: QuickToolbarSettingsModel = {
        image: [
            'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '|',
            'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'
        ]
    };
    public quickToolbarSettingsChange: QuickToolbarSettingsModel = {}
}