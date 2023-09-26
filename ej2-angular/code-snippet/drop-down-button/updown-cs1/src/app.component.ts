

import { Component, ViewChild } from '@angular/core';
import { ItemModel, BeforeOpenCloseMenuEventArgs, DropDownButtonComponent  } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton #dropdownbutton [items]='items' content='Clipboard' (beforeOpen)='beforeOpen($event)' (beforeClose)='beforeClose($event)'></button>`
})

export class AppComponent {
   @ViewChild('dropdownbutton')
   public dropdownbutton: DropDownButtonComponent | any;
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
    // To update up arrow with `e-caret-up` class.
    public beforeOpen (args: BeforeOpenCloseMenuEventArgs) {
        this.dropdownbutton.cssClass = 'e-caret-up';
    }
    // To remove `e-caret-up` class.
    public beforeClose (args: BeforeOpenCloseMenuEventArgs) {
        this.dropdownbutton.cssClass = '';
    }

}


