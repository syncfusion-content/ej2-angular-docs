

import { Component,ViewChild } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { ImageEditorCommand, ImageEditorComponent, ShapeChangeEventArgs } from '@syncfusion/ej2-angular-image-editor';

@Component({
    selector: 'app-root',
    template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
                <ejs-imageeditor #imageEditor (created)="created()" [toolbar]="toolbar" (shapeChanging)="shapeChanging($event)" showQuickAccessToolbar=false></ejs-imageeditor>
                <button class="e-btn e-primary" (click)="btnClick()">Click</button>
              </div>`
})

export class AppComponent {
    @ViewChild('imageEditor')
    public imageEditorObj?: ImageEditorComponent;
    public id?: string | ImageEditorCommand;
    public toolbar: string[]= ['Annotate', "Line", "Rectangle", "Ellipse", "Circle", "Arrow", "Path"]
      public created(): void {
        if (Browser.isDevice) {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            this.imageEditorObj?.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }

    public shapeChanging(args: ShapeChangeEventArgs): void {
        if (args.action === 'select') {
            this.id = args.currentShapeSettings?.id;
            
        }
    }
    btnClick(): void {
        if (this.id) {
            this.imageEditorObj?.deleteShape(this.id);
        }
    }

}



