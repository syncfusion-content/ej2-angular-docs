

import { Component } from '@angular/core';
import { getInstance } from '@syncfusion/ej2-base';
import { MenuItemModel, ContextMenu } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `<!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' [items]= 'menuItems'></ejs-contextmenu>
            <!-- To Render Button. -->
            <button ejs-button (click)="btnClick()">Open ContextMenu</button>`,
})

export class AppComponent  {
    // Initialize action items.
    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }];

    btnClick() {
        let contextmenuObj: ContextMenu = getInstance(document.getElementById("contextmenu_0") as HTMLElement, ContextMenu) as ContextMenu;
        contextmenuObj.open(40, 20);
    }
}


