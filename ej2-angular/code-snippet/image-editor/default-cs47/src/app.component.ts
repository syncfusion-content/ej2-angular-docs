import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { Component,ViewChild } from '@angular/core';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { DialogComponent, DialogModule} from '@syncfusion/ej2-angular-popups';

@Component({
  imports: [

    ImageEditorModule, DialogModule
  ],


  standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
              <!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px; margin-top: 60px">
              <button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
              <ejs-dialog id='dialog' #template showCloseIcon='true' [height]='height' [width]='width' position='position' width='435px' [visible]='visible'>
                <ng-template #content>
                  <ejs-imageeditor #imageEditor ></ejs-imageeditor>
                </ng-template>
              </ejs-dialog>
              </div>
              </div>`
})

export class AppComponent {
  @ViewChild('imageEditor')
  public imageEditorObj?: ImageEditorComponent;
  @ViewChild('template') 
  public dialog?: DialogComponent;
  public position = { X: "center", Y: 100 }
  public height = '420px';
  public width = '340px'
  public zoomLevel: number = 1;
  public visible: boolean = false;
  public onOpenDialog = (event: any): void => {
    this.dialog?.show();
    this.imageEditorObj?.open('./bridge.png');
  }
}



