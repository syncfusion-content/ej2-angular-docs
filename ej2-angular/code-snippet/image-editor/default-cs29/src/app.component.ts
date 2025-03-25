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
              <button class="e-btn e-primary" (click)="hueClick()">Hue</button>
              <button class="e-btn e-primary" (click)="exposureClick()">Exposure</button>
              <button class="e-btn e-primary" (click)="blurClick()">Blur</button>
              <button class="e-btn e-primary" (click)="opacityClick()">Opacity</button>
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
  hueClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Hue, 10);
  }
  exposureClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Exposure, 10);
  }
  blurClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Blur, 10);
  }
  opacityClick(): void {
    this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Opacity, 70);
  }
}
