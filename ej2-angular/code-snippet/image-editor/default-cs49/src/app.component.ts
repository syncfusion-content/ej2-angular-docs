import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
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
                <button class="e-btn e-primary" (click)="saveImage()">Save Image</button>
                </div>`
  })
  
  export class AppComponent {
      @ViewChild('imageEditor')
      public imageEditorObj?: ImageEditorComponent;
      public base64String: any;
        public created(): void {
        if (Browser.isDevice) {
          this.imageEditorObj?.open('./flower.png');        
        } 
        else {
          this.imageEditorObj?.open('./bridge.png');
        }
      }
      saveImage(): void {
        let imageData: any = this.imageEditorObj?.getImageData();
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        // Get the 2D rendering context of the canvas
        const context: any = canvas.getContext('2d');
        // Put the ImageData onto the canvas
        context.putImageData(imageData, 0, 0);
        // Convert the canvas content to a Base64 encoded URL
        this.base64String = canvas.toDataURL();
      }
  }



