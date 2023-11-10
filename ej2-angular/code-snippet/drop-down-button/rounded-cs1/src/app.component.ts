

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render DropDownButton with 'e-round-corner' class. -->
               <button ejs-dropdownbutton [items]='items' content='Clipboard' cssClass='e-round-corner'></button></div>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }];

}


