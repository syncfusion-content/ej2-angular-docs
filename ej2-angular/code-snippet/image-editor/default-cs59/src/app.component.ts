import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule, ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  imports: [ImageEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- Image Editor -->
      <div id="wrapperDiv" style="width:550px;height:350px;">
        <ejs-imageeditor #imageEditor (created)="created()"></ejs-imageeditor>
      </div>
      <button class="e-btn e-primary" (click)="saveImage()">Save Byte[]</button>
      <button class="e-btn e-primary" (click)="loadImage()">Load Byte[]</button>
    </div>
  `
})
export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public byteArray: Uint8Array | null = null; // Store image as byte[]
  public created(): void {
    if (Browser.isDevice) {
      this.imageEditorObj?.open('./flower.png');
    } else {
      this.imageEditorObj?.open('./bridge.png');
    }
  }

  saveImage(): void {
    const imageData = this.imageEditorObj?.getImageData();
    if (!imageData) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onloadend = () => {
          this.byteArray = new Uint8Array(reader.result as ArrayBuffer);
        };
      }
    }, 'image/png');
  }

  loadImage(): void {
    if (this.byteArray) {
      const blob = new Blob([this.byteArray], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      this.imageEditorObj?.open(url);
    }
  }
}
