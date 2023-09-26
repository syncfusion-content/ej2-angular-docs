

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Find & Select' iconCss='e-icons e-search' iconPosition='Top' cssClass='e-custom'></button>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Find'
    },
    {
        text: 'Replace'
    },
    {
        text: 'Go To'
    },
    {
        text: 'Go To Special'
    }];
}


