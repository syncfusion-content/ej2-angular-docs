import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'



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
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="rectangleClick()">Rectangle</button>
              <button class="e-btn e-primary" (click)="ellipseClick()">Ellipse</button>
              <button class="e-btn e-primary" (click)="lineClick()">Line</button>
              <button class="e-btn e-primary" (click)="pathClick()">Path</button>
              <button class="e-btn e-primary" (click)="arrowClick()">Arrow</button>
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
    rectangleClick(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
        this.imageEditorObj?.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 700, null, '', '', null, null, 8);
    }
    ellipseClick(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawEllipse(dimension.x, dimension.y + 200);
    }
    lineClick(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawLine(dimension.x+300, dimension.y+300);
    }
    pathClick(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
    }
    arrowClick(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawArrow(dimension.x + 100, dimension.y + 30, dimension.x + 100, dimension.y+10, 10);
    }
}



