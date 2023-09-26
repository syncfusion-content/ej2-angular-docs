

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Message' iconCss='ddb-icons e-message'></button>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Edit',
        iconCss: 'ddb-icons e-edit'
    },
    {
        text: 'Delete',
        iconCss: 'ddb-icons e-delete'
    },
    {
        text: 'Mark As Read',
        iconCss: 'ddb-icons e-read'
    },
    {
        text: 'Like Message',
        iconCss: 'ddb-icons e-like'
    }];

}


