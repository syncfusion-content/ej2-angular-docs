import { Component } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #imageRTE id='imageRTE' [insertImageSettings]='insertImageSettings' [(value)]='value'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})

export class AppComponent {
    public value: string = "<p>Rich Text Editor allows you to insert images from online sources as well as your local computer into your content.</p><p><b>Get started with Quick Toolbar by clicking on the image</b></p><p>Custom styles can be applied to the selected image inside the Rich Text Editor through the quick toolbar.</p><img id=\"rteImageID\" style=\"width:300px; height:300px; transform:rotate(0deg);\" alt=\"Logo\" src=\"https://ej2.syncfusion.com/demos/src/rich-text-editor/images/RTEImage-Feather.png\">";
    public insertImageSettings = {
        display: 'inline'
    };
}