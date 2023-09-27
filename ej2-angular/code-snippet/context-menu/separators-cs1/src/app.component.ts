

import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `<div id="target">Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu id='contextmenu' target='#target' [items]= 'menuItems'></ejs-contextmenu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        },
        {
            separator: true
        },
        {
            text: 'Font'
        },
        {
            text: 'Paragraph'
        }
        ];
}


