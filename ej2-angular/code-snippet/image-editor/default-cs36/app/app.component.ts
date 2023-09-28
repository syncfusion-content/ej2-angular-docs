import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="aspectBtn()">Aspect Ratio</button>
              <button class="e-btn e-primary" (click)="nonaspectBtn()">Non Aspect Ratio</button>`
              
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

    aspectBtn(): void {
      this.imageEditorObj?.reset();
      this.imageEditorObj?.resize(300, 400, true);
    }
   nonaspectBtn(): void {
      this.imageEditorObj?.reset();
      this.imageEditorObj?.resize(400, 100, false);
    }
    
}



