


import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' #sample [insertImageSettings]='insertImageSettings' [toolbarSettings]='toolbarSettings' (imageUploading)='onImageUploading($event)'>
</ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})
export class AppComponent  {
@ViewChild('sample') public rteObj?: RichTextEditorComponent;

public toolbarSettings: Object = {
  items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};
public insertImageSettings: object = {
    saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
    path: "../Images/"
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
