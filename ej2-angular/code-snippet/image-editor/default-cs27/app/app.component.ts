

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" allowUndoRedo ></ejs-imageeditor>
              </div>
              <button class="e-btn e-primary" (click)="btnClick()">Click</button>
              <button class="e-btn e-primary" (click)="undoClick()">Undo</button>
              <button class="e-btn e-primary" (click)="redoClick()">Redo</button>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    undoClick(): void {
        this.imageEditorObj?.undo()
    }
    redoClick(): void {
        this.imageEditorObj?.redo()
    }
}



