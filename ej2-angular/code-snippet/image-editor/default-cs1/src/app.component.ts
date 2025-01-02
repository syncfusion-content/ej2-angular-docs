import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

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
              <button class="e-btn e-primary" (click)="btnClick()">Add Text</button>
              <button class="e-btn e-primary" (click)="outlineText()">Text Outline</button>
              <button class="e-btn e-primary" (click)="bgColour()">Background Color</button>
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
    btnClick(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawText(dimension?.x, dimension?.y);
    }
    outlineText(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawText(dimension.x, dimension.y+100, 'Syncfusion', 'Arial', 70, false, false, '', false, 0, '', 'green', 8);
    }
    bgColour(): void {
        let dimension: any = this.imageEditorObj?.getImageDimension();
        this.imageEditorObj?.drawText(dimension.x, dimension.y+200, 'Syncfusion', 'Arial', 70, false, false, '', false, 0, 'red', '', 0);
    }
}



