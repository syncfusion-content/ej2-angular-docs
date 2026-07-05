import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor'
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, PasteCleanupService, QuickToolbarService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
    imports: [
        RichTextEditorModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' #sample [value]="value" (imageUploadSuccess)='onImageUploadSuccess($event)' [insertImageSettings]='insertImageSettings' [toolbarSettings]='toolbarSettings'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, PasteCleanupService, QuickToolbarService, HtmlEditorService]
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

    public onImageUploadSuccess = (args: any) => {
        if (args.e.currentTarget.getResponseHeader('name') != null) {
            args.file.name = args.e.currentTarget.getResponseHeader('name');
            let filename: any = document.querySelectorAll(".e-file-name")[0];
            filename.innerHTML = args.file.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML, '');
            filename.title = args.file.name;
        }
    }
}
