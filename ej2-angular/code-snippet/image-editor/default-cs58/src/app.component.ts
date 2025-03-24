import { NgModule } from '@angular/core'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { Component,ViewChild } from '@angular/core';
import { ImageEditorComponent, UploadSettingsModel } from '@syncfusion/ej2-angular-image-editor';

@Component({
imports: [
        
        ImageEditorModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor [uploadSettings]="uploadSettings"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="loadInvalidImage()">Load Invalid Image</button>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public uploadSettings: UploadSettingsModel = {
      minFileSize: 1024,     // Minimum file size in bytes (1 KB)
      maxFileSize: 10 * 1024  // Maximum file size in bytes (10 KB)
    };
    loadInvalidImage(): void {
        this.imageEditorObj?.open('./bridge.jpg');
    }
}
