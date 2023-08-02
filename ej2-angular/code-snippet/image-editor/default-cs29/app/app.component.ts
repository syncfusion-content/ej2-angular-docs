

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ImageFinetuneOption, } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="hueClick()">Hue</button>
              <button class="e-btn e-primary" (click)="exposureClick()">Exposure</button>
              <button class="e-btn e-primary" (click)="blurClick()">Blur</button>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public toolbar: string[] = [];
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }   
    }
    hueClick(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Hue,10);    
    }
    exposureClick(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Exposure,10);    
    }
    blurClick(): void {
        this.imageEditorObj?.finetuneImage(ImageFinetuneOption.Blur,10);    
    }
   
}



