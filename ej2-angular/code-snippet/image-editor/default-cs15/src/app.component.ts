

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="customToolbar" (toolbarItemClicked)="toolbarItemClicked($event)"></ejs-imageeditor>
              </div>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public customToolbar = ['Annotate', "Line", "Rectangle", "Text", 'ZoomIn', 'ZoomOut', {text: 'Custom'}];
      public created(): void {
      if (Browser.isDevice) {
        this.imageEditorObj?.open('./flower.png');        
      } 
      else {
        this.imageEditorObj?.open('./bridge.png');
      }
    }

    public toolbarItemClicked(args: ClickEventArgs): void {
        if(args.item.text == "Custom") {
            this.imageEditorObj?.rotate(90);
        }
    }
}



