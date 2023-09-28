

import { Component } from '@angular/core';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `<div id="target">Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu id='contextmenu' target='#target' [items]='menuItems'
            (beforeItemRender)='itemBeforeEvent($event)'></ejs-contextmenu>`,
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
     {
        text: 'Flipkart',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?source=hp&q=flipkart'
    },
    {
        text: 'Amazon',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=amazon'
    },
    {
        text: 'Snapdeal',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=snapdeal'
    }];

    public itemBeforeEvent (args: MenuEventArgs) {
        args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
    }
}


