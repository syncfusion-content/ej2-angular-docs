import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { Component, ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
  imports: [ImageEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="fitwidth()">Fit Width</button>
              <button class="e-btn e-primary" (click)="fitheight()">Fit Height</button>
              </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public created(): void {
    if (Browser.isDevice) {
      this.imageEditorObj?.open('./flower.png');
    }
    else {
      this.imageEditorObj?.open('./bridge.png');
    }
  }
  fitwidth(): void {
    this.imageEditorObj?.zoom(1); // Reset zoom to original size before applying Fit Width
    const containerWidth = this.imageEditorObj?.upperCanvas.width;
    const dimension = this.imageEditorObj?.getImageDimension();
    if (!containerWidth || !dimension) return;
    const oldWidth = dimension.width;
    let imageWidth = oldWidth, zoomFactor = 0.1, newZoom = 1;
    while (imageWidth < containerWidth) {
      newZoom++;
      imageWidth = oldWidth * (1 + zoomFactor);
      zoomFactor += 0.1;
    }
    this.imageEditorObj?.zoom(newZoom);
  }
  fitheight(): void {
    this.imageEditorObj?.zoom(1); // Reset zoom to original size before applying Fit Height
    const containerHeight = this.imageEditorObj?.upperCanvas.height;
    const dimension = this.imageEditorObj?.getImageDimension();
    if (!containerHeight || !dimension) return;
    const oldHeight = dimension.height;
    let imageHeight = oldHeight, zoomFactor = 0.1, newZoom = 1;
    while (imageHeight < containerHeight) {
      newZoom++;
      imageHeight = oldHeight * (1 + zoomFactor);
      zoomFactor += 0.1;
    }
    this.imageEditorObj?.zoom(newZoom);
  }
}
