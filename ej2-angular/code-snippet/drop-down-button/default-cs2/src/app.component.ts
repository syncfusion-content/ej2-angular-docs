

import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Clipboard' (beforeItemRender)="itemRender($event)"></button>`
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
    public itemRender(args: MenuEventArgs) {
        if (args.item.text === 'Copy') {
            //To underline a particular text.
            args.element.innerHTML = '<u>C</u>opy';
        }
    }
}


