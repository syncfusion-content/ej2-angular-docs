

import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render Button. -->
               <button ejs-dropdownbutton [items]='items' content='Clipboard' iconCss='e-icons e-edit'></button>`
})

export class AppComponent {

   public items: ItemModel[] = [
    {
        text: 'Cut',
        iconCss: 'e-db-icons e-cut'
    },
    {
        text: 'Copy',
        iconCss: 'e-icons e-copy'
    },
    {
        text: 'Paste',
        iconCss: 'e-db-icons e-paste'
    },
    {
        separator: true
    },
    {
        text: 'Font',
        iconCss: 'e-db-icons e-font'
    },
    {
        text: 'Paragraph',
        iconCss: 'e-db-icons e-paragraph'
    }];

    public itemBeforeEvent (args: MenuEventArgs) {
       args.element.style.height = '105px';
    }

}


