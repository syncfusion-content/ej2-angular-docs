import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule, ImageEditorComponent, ShapeChangeEventArgs } from '@syncfusion/ej2-angular-image-editor';
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
                <ejs-imageeditor #imageEditor (created)="created()" (shapeChanging)="shapeChanging($event)"></ejs-imageeditor>
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

  public shapeChanging(args: ShapeChangeEventArgs): void {
    if (args.currentShapeSettings?.type === 'FreehandDraw') {
      args.currentShapeSettings.strokeColor = 'red',
        args.currentShapeSettings.strokeWidth = 5
    }
  }
}
