import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ToolbarEventArgs } from '@syncfusion/ej2-angular-image-editor';
import { ItemModel } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        ImageEditorModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" (toolbarUpdating)="toolbarUpdating($event)"></ejs-imageeditor>
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

  public toolbarUpdating(args: ToolbarEventArgs): void {
    if (args.toolbarType === 'pen') {
      args.toolbarItems?.forEach((item: any) => {
        if (item.align === 'Center' && (item.tooltipText === 'Stroke Width' || item.tooltipText === 'Remove' || item.type === 'Separator')) {
          item.visible = false;
        }
      });
    }
  }
}



