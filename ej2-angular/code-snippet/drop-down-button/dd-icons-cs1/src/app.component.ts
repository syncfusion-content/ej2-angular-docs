

import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Message' iconCss='ddb-icons e-message'></button>
               <!-- To render DropDownButton with iconposition as 'top'. -->
               <button ejs-dropdownbutton [items]='items' content='Message' iconCss='ddb-icons e-message' iconPosition='Top'></button>
               </div>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    },
    {
        text: 'Mark as Read'
    },
    {
        text: 'Like Message'
    }];

}


