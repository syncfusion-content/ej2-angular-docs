import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
                <ejs-imageeditor #imageEditor (created)="created()">
                <ng-template #toolbarTemplate>
                  <div class = 'e-toolbar'>
                    <button class="e-btn" (click)="enableFreeHandDraw()">Enable Freehand Draw</button>
                  </div>
                </ng-template>
                </ejs-imageeditor>
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

  enableFreeHandDraw(): void {
    this.imageEditorObj?.freeHandDraw(true);
  }
}
