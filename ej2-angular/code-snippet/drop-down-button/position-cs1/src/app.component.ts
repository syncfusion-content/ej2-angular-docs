

import { Component, ViewChild } from '@angular/core';
import { ItemModel, OpenCloseMenuEventArgs, DropDownButtonComponent  } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton #dropdownbutton [items]='items' content='Clipboard' (open)='onOpen($event)'></button>`
})

export class AppComponent {
   @ViewChild('dropdownbutton')
   public dropdownbutton?: DropDownButtonComponent;
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
    // To open popup in particular position.
    public onOpen (args: OpenCloseMenuEventArgs) {
       args.element.parentElement!.style.top = this.dropdownbutton!.element.getBoundingClientRect().top - args.element.parentElement!.offsetHeight +'px';
    }

}


