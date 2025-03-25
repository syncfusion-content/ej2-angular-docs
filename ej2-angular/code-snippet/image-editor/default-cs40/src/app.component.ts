import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule, ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { Component, ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  imports: [ImageEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()"></ejs-imageeditor>
                <button class="e-btn e-primary" (click)="drawShapes()">Draw Shapes</button>
                <button class="e-btn e-primary" (click)="bringForward()">Bring Forward</button>
                <button class="e-btn e-primary" (click)="sendBackward()">Send Backward</button>
                <button class="e-btn e-primary" (click)="bringToFront()">Bring To Front</button>
                <button class="e-btn e-primary" (click)="sendToBack()">Send To Back</button>
              </div>
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
  drawShapes(): void {
    let dimension: any = this.imageEditorObj?.getImageDimension();
    this.imageEditorObj?.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, 2, '', 'red');
    this.imageEditorObj?.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, 2, '', 'red');
    this.imageEditorObj?.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, 2, '', 'green');
    this.imageEditorObj?.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, 2, '', 'red');
  }
  bringForward(): void {
    this.imageEditorObj?.bringForward('shape_3');
  }
  sendBackward(): void {
    this.imageEditorObj?.sendBackward('shape_3');
  }
  bringToFront(): void {
    this.imageEditorObj?.bringToFront('shape_3');
  }
  sendToBack(): void {
    this.imageEditorObj?.sendToBack('shape_3');
  }
}
