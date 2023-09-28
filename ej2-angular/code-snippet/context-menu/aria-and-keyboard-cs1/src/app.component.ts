

import { Component } from '@angular/core';
import { getInstance } from '@syncfusion/ej2-base';
import { MenuItemModel, ContextMenu } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu id='contextmenu' target='#target' [items]= 'menuItems' (load)="menuOpen()"></ejs-contextmenu>`
})

export class AppComponent {
    menuOpen() {

    }
    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut',
            iconCss: 'e-cm-icons e-cut'
        },
        {
            text: 'Copy',
            iconCss: 'e-cm-icons e-copy'
        },
        {
            text: 'Paste',
            iconCss: 'e-cm-icons e-paste',
            items: [
                {
                    text: 'Paste Text',
                    iconCss: 'e-cm-icons e-pastetext'
                },
                {
                    text: 'Paste Special',
                    iconCss: 'e-cm-icons e-pastespecial'
                }
            ]
        }];

     ngAfterViewInit(): void{
         setTimeout(() => {
            let contextmenuObj: ContextMenu = getInstance(document.getElementById("contextmenu_0") as HTMLElement, ContextMenu) as ContextMenu;
            contextmenuObj.open(40, 20);
        }, 300);
     }
}


