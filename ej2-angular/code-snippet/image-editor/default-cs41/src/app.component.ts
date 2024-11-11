import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { Component,ViewChild } from '@angular/core';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'

@Component({
  imports: [
    UploaderModule, ImageEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
              <ejs-uploader #defaultupload  (selected)="selected()" ></ejs-uploader>
                <ejs-imageeditor #imageEditor ></ejs-imageeditor>
              </div>
              </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public selected(args: any): void {
    if (args.filesData.length > 0) {
      // Read the file as a Data URL
      const reader = new FileReader();
      reader.onload = () => {
        // Load the image into the Image Editor
        this.imageEditorObj?.open(reader.result  as any);
      };
      reader.readAsDataURL(args.filesData[0].rawFile);
    }
  }
}



