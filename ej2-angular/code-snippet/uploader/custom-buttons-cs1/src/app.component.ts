

import { Component } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
@Component({
    selector: 'app-root',
    templateUrl: './default.html',
    styleUrls: ['./index.css']
})

export class AppComponent {

   public path: Object = {
       saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
       removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
   };
   public uploadEle: HTMLElement = createElement('span', { className: 'upload e-icons', innerHTML : 'Upload All' });
   public clearEle = createElement('span', { className: 'remove e-icons', innerHTML : 'Clear All' });
   public buttons: Object = {
    browse: 'Choose file',
    clear: this.clearEle,
    upload: this.uploadEle
   };
}



