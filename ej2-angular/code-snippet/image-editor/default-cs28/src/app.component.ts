import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule, ImageEditorComponent, ImageFinetuneOption } from '@syncfusion/ej2-angular-image-editor';
import { Browser, enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';

@Component({
  imports: [
    ImageEditorModule
  ],

  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="brightnessClick()">Brightness</button>
              <button class="e-btn e-primary" (click)="contrastClick()">Contrast</button>
              <button class="e-btn e-primary" (click)="saturationClick()">Saturation</button>
              </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public toolbar: string[] = [];
  public created(): void {
    if (Browser.isDevice) {
      this.imageEditorObj?.open('./flower.png');
    }
    else {
      this.imageEditorObj?.open('./bridge.png');
    }
  }
  brightnessClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Brightness, 10);
  }
  contrastClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Contrast, 30);
  }
  saturationClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Saturation, 30);
  }
}
