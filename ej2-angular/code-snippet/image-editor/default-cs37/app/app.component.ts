import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
                <button class="e-btn e-primary" (click)="clickBtn()">Add Image</button>
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

    clickBtn(): void {
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawImage('./flower.png', dimension?.x, dimension?.y, 100, 100, true, 0);
    }
}



