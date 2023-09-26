

import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Shop By' iconCss='e-cart-icon e-shopping' (beforeItemRender)='itemBeforeEvent($event)'></button>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Flipkart',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=flipkart'
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
    // To open the url in the blank page.
    public itemBeforeEvent (args: MenuEventArgs) {
        args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
    }

}


