import { Component, ViewChild } from '@angular/core';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService, AudioService, VideoService, QuickToolbarService, TableService, PasteCleanupService, RichTextEditorComponent, QuickToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #imageEditor id='imageEditor' [toolbarSettings]='tools'><ng-template #valueTemplate>
                <p>Rich Text Editor allows inserting video, image and audio from online sources and the local computers where you want to insert a video, image and audio into your content.</p>
                <p><b>Get started with Quick Toolbar to click on a video</b></p>
                <p>Using the quick toolbar, users can replace, align, display, dimension, and delete the selected video.</p>
                <p><video controls style="width: 30%;">
                    <source
                      src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Ocean-Waves.mp4"
                      type="video/mp4" />
                  </video></p>
                  <p><b>Get started Quick Toolbar to click on the image</b></p><p>It is possible to add custom style on the selected image inside the Rich Text Editor through the quick toolbar.</p><p><img id="rteImageID" alt="Sky" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Portrait.png" style="width: 300px; height: 300px; transform: rotate(0deg);" class="e-rte-image e-imginline"></p>
                <p><b>Get started with Quick Toolbar to click on an audio</b></p>
                <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3"></audio></p>
                </ng-template>
            </ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService,VideoService, AudioService, HtmlEditorService, QuickToolbarService, TableService, PasteCleanupService]
})
export class AppComponent {
    @ViewChild('imageEditor') editorObj: RichTextEditorComponent | undefined;
    public tools: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'Audio', 'Video', 'CreateTable','|', 'SourceCode', 'Undo', 'Redo']
    };
}