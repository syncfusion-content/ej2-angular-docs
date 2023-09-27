

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-menu #menu [items]='menuItems'></ejs-menu>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'Fashion',
            items: [
                {
                    text: 'Men Fashion',
                    items: [
                        {
                            text: 'Personal Care',
                            items: [
                                { text: 'Trimmers' },
                                { text: 'Shavers' }
                            ]
                        },
                        {
                            text: 'Clothing',
                            items: [
                                { text: 'Shirts' },
                                { text: 'Jackets' },
                                { text: 'Track Suits' }
                            ]
                        },
                        { text: 'Footwear' }
                    ]
                },
                {
                    text: 'Women Fashion',
                    items: [
                        {
                            text: 'Clothing',
                            items: [
                                { text: 'Kurtas' },
                                { text: 'Salwars' },
                                { text: 'Sarees' }
                            ]
                        },
                        {
                            text: 'Jewellery',
                            items: [
                                { text: 'Nosepins' },
                                { text: 'Anklets' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            text: 'Home & Living',
            items: [
                {
                    text: 'Washing Machine',
                    items: [
                        { text: 'Fully Automatic' },
                        { text: 'Semi Automatic' }
                    ]
                },
                {
                    text: 'Air Conditioners',
                    items: [
                        { text: 'Inverter ACs' },
                        { text: 'Split ACs' }
                    ]
                }
            ]
        },
        { text: 'Accessories' },
        { text: 'Sports' },
        { text: 'Gaming' }
    ];
}


