


import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton with sprite image. -->
               <button ejs-dropdownbutton [items]='items' iconCss='e-image' cssClass='e-caret-hide'></button>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Display Settings'
    },
    {
        text: 'System Settings'
    },
    {
        text: 'Additional Settings'
    }];

}


