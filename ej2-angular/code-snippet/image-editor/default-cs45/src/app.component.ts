import {NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component,ViewChild } from '@angular/core';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
imports: [
        
        ImageEditorModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="saveBlob()">Get Blob</button>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public blobUrl: any;
      public created(): void {
      if (Browser.isDevice) {
        this.imageEditorObj?.open('./flower.png');        
      } 
      else {
        this.imageEditorObj?.open('./bridge.png');
      }
    }
    saveBlob(): void {
      if (this.imageEditorObj) {
        let imageData = this.imageEditorObj.getImageData();
        let canvas = document.createElement('canvas');
        let ctx: any = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob((blob) => {
          this.blobUrl = URL.createObjectURL(blob as any); // For getting blob.
        });
      }
    }

}




