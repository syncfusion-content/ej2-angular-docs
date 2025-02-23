import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule, ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { Browser, enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';

@Component({
  imports: [ImageEditorModule, FileManagerModule],
  standalone: true,
  selector: 'app-root',
  template: `
  <div class="e-section-control">
    <div id="wrapperDiv" style="width:550px;height:350px; margin-top: 60px">
      <ejs-filemanager id="default-filemanager" 
                       [fileSystemData]="resultData"  
                       (fileOpen)="fileOpen($event)">
      </ejs-filemanager>
      <ejs-imageeditor #imageEditor></ejs-imageeditor>
    </div>
  </div>
`,
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public resultData = [
    {
      dateCreated: new Date('2023-11-15T19:02:02.3419426+05:30'),
      dateModified: new Date('2024-01-08T16:55:20.9464164+05:30'),
      filterPath: '\\',
      hasChild: true,
      id: '0',
      isFile: false,
      name: 'Pictures',
      parentId: '0',
      size: 228465,
      type: 'folder',
    },
    {
      dateCreated: new Date('2023-11-15T19:02:02.3419426+05:30'),
      dateModified: new Date('2024-01-08T16:55:20.9464164+05:30'),
      filterPath: '\\Pictures\\',
      hasChild: false,
      id: '1',
      isFile: true,
      name: 'Flower',
      parentId: '0',
      size: 69632,
      type: '.png',
      imageUrl:
        'https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png',
    },
    {
      dateCreated: new Date('2023-11-15T19:02:02.3419426+05:30'),
      dateModified: new Date('2024-01-08T16:55:20.9464164+05:30'),
      filterPath: '\\Pictures\\',
      hasChild: false,
      id: '2',
      isFile: true,
      name: 'Bridge',
      parentId: '0',
      size: 48951,
      type: '.png',
      imageUrl:
        'https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png',
    },
  ];
  fileOpen(args: any): void {
    const file = args.fileDetails;
    if (file.isFile && file.imageUrl && this.imageEditorObj) {
      args.cancel = true;
      this.imageEditorObj.open(file.imageUrl);
    }
  }
}
