import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { Component, ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
  imports: [
    ImageEditorModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
                  <div id="wrapperDiv" style="width:550px;height:330px;">
                    <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar"></ejs-imageeditor>
                  </div>
                  <div style="display: flex; gap: 12px; margin-top: 10px;">
                    <button ejs-button class="e-btn e-primary" (click)="contains()">Fit to Width (Aspect Ratio)</button>
                    <button ejs-button class="e-btn e-primary" (click)="cover()">Cover (Aspect Ratio)</button>
                    <button ejs-button class="e-btn e-primary" (click)="stretch()">Stretch / Shrink</button>
                  </div>
                </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public toolbar: string[] = [];
  public created(): void {
    this.imageEditorObj?.open('./bridge.png');
  }
  contains(): void {
    this.imageEditorObj?.open('./bridge.png', true, { backgroundColor: '', width: 550, height: undefined, isAspectRatio: true });
  }

  cover(): void {
    this.imageEditorObj?.open('./bridge.png', true, { backgroundColor: '', width: 550, height: 550, isAspectRatio: true });
  }

  stretch(): void {
    this.imageEditorObj?.open('./bridge.png', true, { backgroundColor: '', width: 330, height: 330, isAspectRatio: false });
  }
}
