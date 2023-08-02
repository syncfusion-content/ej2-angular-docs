

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="drawClick()">Draw</button>
              <button class="e-btn e-primary" (click)="btnClick()">Delete</button>`
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
    drawClick(): void {
        this.imageEditorObj?.freeHandDraw(true);    
    }
    btnClick(): void {
        this.imageEditorObj?.deleteShape('pen_1');    
    }
}



