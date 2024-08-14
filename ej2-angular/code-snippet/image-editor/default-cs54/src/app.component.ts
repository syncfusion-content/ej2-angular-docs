import {NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { ImageEditorModule, SelectionChangeEventArgs } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component,ViewChild } from '@angular/core';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ZoomSettingsModel } from '@syncfusion/ej2-angular-image-editor';
import { FileManagerModule  } from '@syncfusion/ej2-angular-filemanager';

@Component({
imports: [
        
        ImageEditorModule, FileManagerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px; margin-top: 60px">
              <ejs-filemanager id='default-filemanager' #filemanagerObj [ajaxSettings]='ajaxSettings' [view]='view' (fileOpen)="fileOpen($event)">
              </ejs-filemanager>
                <ejs-imageeditor #imageEditor></ejs-imageeditor>
              </div>
              </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public view?: any;
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations'
  };
 public fileOpen(args: any) {
  debugger
    let file = (args).fileDetails;
    if (file.isFile) {
        args.cancel = true;
        if (file.size <= 0 ) { file.size = 10000; }
        let imagePath = (args.fileDetails)._fm_imageUrl;
        this.imageEditorObj?.open(imagePath);
    }
}

}