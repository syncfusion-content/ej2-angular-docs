import {NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { ImageEditorModule, ShapeChangeEventArgs } from '@syncfusion/ej2-angular-image-editor'
import { enableRipple } from '@syncfusion/ej2-base'
import { Component,ViewChild } from '@angular/core';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import { ImageEditorComponent, ZoomSettingsModel } from '@syncfusion/ej2-angular-image-editor';

@Component({
  imports: [
          
          ImageEditorModule
      ],
  
  
  standalone: true,
      selector: 'app-root',
      template: `<div class="e-section-control">
                <!-- To render Image Editor. -->
                <div id="wrapperDiv" style="width:550px;height:350px;">
                  <ejs-imageeditor #imageEditor (created)="created()" (shapeChanging)="shapeChanging($event)"></ejs-imageeditor>
                </div>
                </div>`
  })
  
  export class AppComponent {
      @ViewChild('imageEditor')
      public imageEditorObj?: ImageEditorComponent;
      public changeColor: boolean = true;
        public created(): void {
        if (Browser.isDevice) {
          this.imageEditorObj?.open('./flower.png');        
        } 
        else {
          this.imageEditorObj?.open('./bridge.png');
        }
      }
      shapeChanging(args: ShapeChangeEventArgs): void {
        if (this.changeColor && args.action == "insert" && args.currentShapeSettings?.type === 'Rectangle') {
          args.currentShapeSettings.strokeColor = 'red';
          this.changeColor = false;
        }
      }
  
  }


