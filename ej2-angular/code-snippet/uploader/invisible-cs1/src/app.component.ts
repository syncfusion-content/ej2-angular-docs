

import { Component } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { SelectedEventArgs } from '@syncfusion/ej2-angular-inputs';

/**
 * Default Uploader Default Component
 */
@Component({
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})
export class AppComponent {
public locale: string = 'en-US';
    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
  public allowExtensions: string = '.png, .jpg, .jpeg';
  public onSelected(args: SelectedEventArgs):void {
    for(let i = 0; i< args.filesData.length ; i++){
        let liparentDiv = createElement('div',  { className: 'image-list'});
        let liImage = createElement('img',  { className: 'image'});
        liparentDiv.appendChild(liImage);
        this.readURL(liImage, args.filesData[i]);
        (document.getElementById('preview') as HTMLElement).appendChild(liparentDiv);
    }
    args.cancel=true;
}

public readURL(liImage: HTMLElement, file: any):void {
    let imgPreview: HTMLImageElement | any = liImage as HTMLImageElement;
    let imageFile: File = file.rawFile;
    let reader: FileReader = new FileReader();
    reader.addEventListener( 'load', () => {
        imgPreview.src = reader.result;
    }, false);
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
};
}


