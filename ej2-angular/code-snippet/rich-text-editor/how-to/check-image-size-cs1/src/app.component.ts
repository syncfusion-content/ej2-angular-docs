import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, PasteCleanupService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' #sample [value]="value" [insertImageSettings]='insertImageSettings' [toolbarSettings]='toolbarSettings' (imageUploading)='onImageUploading($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, QuickToolbarService, PasteCleanupService, HtmlEditorService]
})

export class AppComponent {
    @ViewChild('sample') public rteObj?: RichTextEditorComponent;

    private hostUrl: string =
        'https://services.syncfusion.com/angular/production/';

    public toolbarSettings: Object = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

    public value: string =
        "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";

    public insertImageSettings: object = {
        saveUrl: this.hostUrl + 'api/RichTextEditor/SaveFile',
        removeUrl: this.hostUrl + 'api/RichTextEditor/DeleteFile',
        path: this.hostUrl + 'RichTextEditor/',
    };

    public onImageUploading = (args: UploadingEventArgs) => {
        console.log("file is uploading");
        let imgSize: number = 500000;
        let sizeInBytes: number = args.fileData.size;
        if (imgSize < sizeInBytes) {
            args.cancel = true;
        }

    }
}