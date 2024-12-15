import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
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
      allowedExtensions: ".png, .svg"
    };
    loadInvalidImage(): void {
        this.imageEditorObj?.open('./flower.jpeg');
    }
}



