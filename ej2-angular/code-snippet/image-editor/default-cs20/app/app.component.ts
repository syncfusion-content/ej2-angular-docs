

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ZoomSettingsModel } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" [zoomSettings]="zoomSettings"></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="zoomInClick()">Zoom In</button>
              <button class="e-btn e-primary" (click)="zoomOutClick()">Zoom Out</button>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public toolbar: string[] = [];
    public zoomLevel: number = 1;
    public zoomSettings: ZoomSettingsModel = {maxZoomFactor: 30, minZoomFactor: 0.1};
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    zoomInClick(): void {
        if(this.zoomLevel < 1) {
            this.zoomLevel += 0.1;
        }
        else {
            this.zoomLevel += 1;
        }
        const value: any = this.imageEditorObj?.zoomSettings.maxZoomFactor;
        if(this.zoomLevel > value) {
            this.zoomLevel = value;
        }
        this.imageEditorObj?.zoom(this.zoomLevel) // zoom in
    }
    zoomOutClick(): void {
        if(this.zoomLevel <= 1) {
            this.zoomLevel -= 0.1;
        }
        else {
            this.zoomLevel -= 1;
        }
        const value: any = this.imageEditorObj?.zoomSettings.minZoomFactor;
        if(this.zoomLevel < value) {
            this.zoomLevel = value;
        }
        this.imageEditorObj?.zoom(this.zoomLevel) // zoom out
    }
}



