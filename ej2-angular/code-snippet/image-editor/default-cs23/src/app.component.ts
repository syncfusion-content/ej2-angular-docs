import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ImageFilterOption } from '@syncfusion/ej2-angular-image-editor';

@Component({
imports: [
        
        ImageEditorModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="chromeClick()">Chrome</button>
              <button class="e-btn e-primary" (click)="coldClick()">Cold</button>
              <button class="e-btn e-primary" (click)="warmClick()">Warm</button>
              <button class="e-btn e-primary" (click)="grayScaleClick()">GrayScale</button>
              <button class="e-btn e-primary" (click)="sepiaClick()">Sepia</button>
              <button class="e-btn e-primary" (click)="invertClick()">Invert</button>
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
    chromeClick(): void {
        this.imageEditorObj?.applyImageFilter(ImageFilterOption.Chrome);
    }
    coldClick(): void {
        this.imageEditorObj?.applyImageFilter(ImageFilterOption.Cold);
    }
    warmClick(): void {
        this.imageEditorObj?.applyImageFilter(ImageFilterOption.Warm);
    }
    grayScaleClick(): void {
        this.imageEditorObj?.applyImageFilter(ImageFilterOption.Grayscale);
    }
    sepiaClick(): void {
        this.imageEditorObj?.applyImageFilter(ImageFilterOption.Sepia);
    }
    invertClick(): void {
        this.imageEditorObj?.applyImageFilter(ImageFilterOption.Invert);
    }
}



