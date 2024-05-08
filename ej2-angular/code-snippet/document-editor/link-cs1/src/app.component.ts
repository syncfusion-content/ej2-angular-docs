import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, SfdtExportService, EditorHistoryService, ImageResizerService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
imports: [
        
        ButtonModule,
        DocumentEditorAllModule
    ],


standalone: true,
      selector: 'app-container',
      //specifies the template string for the Document Editor component.
      template: `<div>
      <input id="insertImageButton" #insert_Image_Button style="position:fixed; left:-100em" type="file" (change)="onInsertImage($event)" accept=".jpeg,.jpg,.png,.gif,.bmp">
      <button ejs-button (click)="insertImageButtonClick()" >Insert Image</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [enableSfdtExport]=true [enableWordExport]=true [enableSelection]=true [enableEditor]=true [isReadOnly]=false [enableImageResizer]=true> </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [EditorService, SelectionService, SfdtExportService, ImageResizerService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor?: DocumentEditorComponent;

    public insertImageButtonClick(): void {
        let pictureUpload: HTMLInputElement = document.getElementById("insertImageButton") as HTMLInputElement;
        pictureUpload.value = '';
        //Open file picker.
        pictureUpload.click();
    }

    public onInsertImage(args: any): void {
        let documentEditor: DocumentEditorComponent = this.documentEditor as DocumentEditorComponent;
        if (navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') || navigator.userAgent.match('Edge') || navigator.userAgent.match('MSIE') || navigator.userAgent.match('.NET')) {
            if (args.target.files[0]) {
                //Get selected image.
                let path = args.target.files[0];
                let reader = new FileReader();
                reader.onload = function (frEvent: any) {
                    let base64String = frEvent.target.result;
                    let image = document.createElement('img');
                    image.addEventListener('load', function () {
                        //Insert the image into Document Editor.
                        documentEditor.editor.insertImage(base64String, this.width, this.height);
                    })
                    image.src = base64String;
                };
                //Convert the image in to base64 format.
                reader.readAsDataURL(path);
            }
            //Safari does not Support FileReader Class
        } else {
            let image = document.createElement('img');
            image.addEventListener('load', function () {
                //Insert the image into Document Editor.
                documentEditor.editor.insertImage(args.target.value);
            })
            image.src = args.target.value;
        }
    }
}


