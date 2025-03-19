import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule, ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { enableRipple } from '@syncfusion/ej2-base';
import { Component, ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  imports: [ImageEditorModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="e-section-control">
      <!-- Image Editor -->
      <div id="wrapperDiv" style="width:550px;height:350px;">
        <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" (toolbarItemClicked)="toolbarItemClicked($event)"></ejs-imageeditor>
      </div>
    </div>
  `
})
export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  public toolbar = [
    {
      id: 'rotate-left',
      prefixIcon: 'e-icons e-anti-clock-wise',
      tooltipText: 'Rotate Left',
      align: 'Left',
    },
    {
      id: 'rotate-right',
      prefixIcon: 'e-icons e-clock-wise',
      tooltipText: 'Rotate Right',
      align: 'Left',
    },
    {
      id: 'annotate',
      prefixIcon: 'e-icons e-annotation',
      tooltipText: 'Annotate',
      align: 'Center',
      disabled: true,
    },
    {
      id: 'save',
      prefixIcon: 'e-icons e-save',
      tooltipText: 'Save',
      align: 'Right',
    },
  ];
  public created(): void {
    if (Browser.isDevice) {
      this.imageEditorObj?.open('./flower.png');
    } else {
      this.imageEditorObj?.open('./bridge.png');
    }
  }
  public toolbarItemClicked(args: any): void {
    switch (args.item.id) {
      case 'rotate-left':
        this.imageEditorObj?.rotate(-90);
        break;
      case 'rotate-right':
        this.imageEditorObj?.rotate(90);
        break;
      case 'save':
        this.imageEditorObj?.export('PNG');
        break;
    }
  }
}
