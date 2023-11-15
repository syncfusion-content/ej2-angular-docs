

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ShapeChangeEventArgs, ToolbarEventArgs } from '@syncfusion/ej2-angular-image-editor';

@Component({
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
       if (args.currentShapeSettings?.type === 'Text') {
            args.currentShapeSettings.color = 'red';
            args.currentShapeSettings.fontStyle = ['bold'];
            args.currentShapeSettings.fontSize = 20;
            args.currentShapeSettings.text = 'Syncfusion';
        }
    }
}



