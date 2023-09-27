

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-menu #menu [items]='menuItems' (beforeItemRender)='beforeItemRender($event)'></ejs-menu>`
})

export class AppComponent {
    //Menu items definition
    public menuItems: MenuItemModel[] = [
        {
            text: 'Appliances',
            items: [
                { text: 'Washing Machine', url: 'https://www.google.com/search?q=washing+machine' },
                { text: 'Air Conditioners', url: 'https://www.google.com/search?q=air+conditioners' }
            ]
        },
        {
            text: 'Mobile',
            items: [
                { text: 'Headphones', url: 'https://www.google.com/search?q=headphones' },
                { text: 'Memory Cards', url: 'https://www.google.com/search?q=memory+cards' },
                { text: 'Power Banks', url: 'https://www.google.com/search?q=power+banks' }
            ]
        },
        {
            text: 'Entertainment',
            items: [
                { text: 'Televisions', url: 'https://www.google.com/search?q=televisions' },
                { text: 'Home Theatres', url: 'https://www.google.com/search?q=home+theatres' },
                { text: 'Gaming Laptops', url: 'https://www.google.com/search?q=gaming+laptops' }
            ]
        },
        { text: 'Fashion', url: 'https://www.google.com/search?q=fashion' },
        { text: 'Offers', url: 'https://www.google.com/search?q=offers' }
    ];

    public beforeItemRender(args: MenuEventArgs): void {
        if (args.item.url) {
            // To open url in blank page.
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }
}


