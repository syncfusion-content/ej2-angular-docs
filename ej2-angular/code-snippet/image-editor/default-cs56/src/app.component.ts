import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, RedactSettings, RedactType } from '@syncfusion/ej2-angular-image-editor';

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
              <button class="e-btn e-primary" (click)="addRedact()">Add Redact</button>
              <button class="e-btn e-primary" (click)="updateRedact()">update Redact</button>
              <button class="e-btn e-primary" (click)="selectRedact()">Select Redact</button>
              <button class="e-btn e-primary" (click)="deleteRedact()">Delete Redact</button>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public toolbar: string[] = [];
      public created(): void {
      if (Browser.isDevice) {
            this.imageEditorObj?.open('./flower.png');
        } else {
            this.imageEditorObj?.open('./bridge.png');
        }
    }
    addRedact(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawRedact(RedactType.Blur, dimension?.x, dimension.y, 200, 300);
    }
    updateRedact(): void {
      let redacts: RedactSettings[] = this.imageEditorObj?.getRedacts();
      if (redacts.length > 0) {
        redacts[redacts.length - 1].blurIntensity = 100;
        this.imageEditorObj?.updateRedact(redacts[redacts.length - 1]);
      }
    }
    selectRedact(): void {
      let redacts: RedactSettings[] = this.imageEditorObj?.getRedacts();
      if (redacts.length > 0) {
          this.imageEditorObj?.selectRedact(redacts[redacts.length - 1].id);
      }
    }
    deleteRedact(): void {
      let redacts: RedactSettings[] = this.imageEditorObj?.getRedacts();
      if (redacts.length > 0) {
        this.imageEditorObj?.deleteRedact(redacts[redacts.length - 1].id);
      }
    }
}



