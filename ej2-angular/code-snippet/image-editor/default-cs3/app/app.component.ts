

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="rectangleClick()">Rectangle</button>
              <button class="e-btn e-primary" (click)="ellipseClick()">Ellipse</button>
              <button class="e-btn e-primary" (click)="lineClick()">Line</button>
              <button class="e-btn e-primary" (click)="pathClick()">Path</button>
              <button class="e-btn e-primary" (click)="arrowClick()">Arrow</button>`
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
    rectangleClick(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawRectangle(dimension.x, dimension.y);
    }
    ellipseClick(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawEllipse(dimension.x, dimension.y);
    }
    lineClick(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawLine(dimension.x, dimension.y);
    }
    pathClick(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
    }
    arrowClick(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawArrow(dimension.x, dimension.y+10, dimension.x+50, dimension.y+10, 10);
    }
}



