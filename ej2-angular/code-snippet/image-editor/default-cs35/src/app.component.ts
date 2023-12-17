import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { FrameLineStyle, FrameType, ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="matBtn()">Mat</button>
              <button class="e-btn e-primary" (click)="bevelBtn()">Bevel</button>
              <button class="e-btn e-primary" (click)="lineBtn()">Line</button>
              <button class="e-btn e-primary" (click)="insetBtn()">Inset</button>
              <button class="e-btn e-primary" (click)="hookBtn()">Hook</button>
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
    matBtn(): void {
        this.imageEditorObj?.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    bevelBtn(): void {
        this.imageEditorObj?.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    lineBtn(): void {
      this.imageEditorObj?.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    insetBtn(): void {
      this.imageEditorObj?.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    hookBtn(): void {
      this.imageEditorObj?.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
}



