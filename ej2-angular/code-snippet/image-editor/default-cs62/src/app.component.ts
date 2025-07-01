import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  imports: [
    ImageEditorModule, ButtonModule
  ],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
                  <div id="wrapperDiv" style="width:550px; height:350px;">
                      <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="[]" [showQuickAccessToolbar]="false"></ejs-imageeditor>
                  </div>
                  <div class="button-toolbar" style="display: flex; align-items: center; gap: 12px; margin-top: 10px; flex-wrap: wrap;">
                      <button ejs-button [disabled]="isTextInserted" class="e-btn e-primary" (click)="text()">Add Text</button>
                      <div class="e-btn-group  button-group">
                              <input type="checkbox" id="bold" value="bold"  (click)="bold()"/>
                              <label class="e-btn" for="bold">
                                  <span class="e-icons e-bold" style="margin-right: 5px;"></span>Bold
                              </label>
                              <input type="checkbox" id="italic" value="italic" (click)="italic()"/>
                              <label class="e-btn" for="italic">
                                  <span class="e-icons e-italic" style="margin-right: 5px;"></span>Italic
                              </label>
                              <input type="checkbox" id="underline" value="underline" (click)="underline()"/>
                              <label class="e-btn" for="underline" >
                                  <span class="e-icons e-underline" style="margin-right: 5px;"></span>Underline
                              </label>
                              <input type="checkbox" id="strikethrough" value="strikethrough" (click)="strikethrough()"/>
                              <label class="e-btn" for="strikethrough" >
                                  <span class="e-icons e-strikethrough" style="margin-right: 5px;"></span>Strikethrough
                              </label>
                          </div>
                  </div>
              </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public toolbar: string[] = [];
  public isTextInserted: boolean = false;
  public created(): void {
    if (Browser.isDevice) {
      this.imageEditorObj?.open('./flower.png');
    } else {
      this.imageEditorObj?.open('./bridge.png');
    }
  }
  text(): void {
    if (!this.isTextInserted) {
      this.isTextInserted = true;
      let dimension: any = this.imageEditorObj?.getImageDimension();
      this.imageEditorObj?.drawText(dimension.x, dimension.y, 'Syncfusion');
    }
  }
  bold(): void {
    let shapes: any = this.imageEditorObj?.getShapeSettings();
    if (shapes && shapes[0]) {
      if (shapes[0].fontStyle.includes('bold')) {
        shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'bold');
      } else {
        shapes[0].fontStyle.push('bold');
      }
      this.imageEditorObj?.updateShape(shapes[0]);
    }
  }
  italic(): void {
    let shapes: any = this.imageEditorObj?.getShapeSettings();
    if (shapes && shapes[0]) {
      if (shapes[0].fontStyle.includes('italic')) {
        shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'italic');
      } else {
        shapes[0].fontStyle.push('italic');
      }
      this.imageEditorObj?.updateShape(shapes[0]);
    }
  }
  underline(): void {
    let shapes: any = this.imageEditorObj?.getShapeSettings();
    if (shapes && shapes[0]) {
      if (shapes[0].fontStyle.includes('underline')) {
        shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'underline');
      } else {
        shapes[0].fontStyle.push('underline');
      }
      this.imageEditorObj?.updateShape(shapes[0]);
    }
  }
  strikethrough(): void {
    let shapes: any = this.imageEditorObj?.getShapeSettings();
    if (shapes && shapes[0]) {
      if (shapes[0].fontStyle.includes('strikethrough')) {
        shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'strikethrough');
      } else {
        shapes[0].fontStyle.push('strikethrough');
      }
      this.imageEditorObj?.updateShape(shapes[0]);
    }
  }
}
