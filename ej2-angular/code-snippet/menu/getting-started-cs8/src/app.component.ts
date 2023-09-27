

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent, FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Menu. -->
            <ejs-menu #menu [items]='data' [fields]='menuFields' (created)='created()'></ejs-menu>`
})

export class AppComponent {
    @ViewChild('menu')
    public menuObj?: MenuComponent;

    //Menu datasource
    public data: { [key: string]: Object }[] = [
        {
            continent: 'Asia',
            countries: [
                { country: 'China' },
                { country: 'India' },
                { country: 'Japan' }
            ]
        },
        {
            continent: 'North America',
            countries: [
                { country: 'Canada' },
                { country: 'Mexico' },
                { country: 'USA' }
            ]
        },
        {
            continent: 'South America',
            countries: [
                { country: 'Brazil' },
                { country: 'Colombia' },
                { country: 'Argentina' }
            ]
        },
        {
            continent: 'Oceania',
            countries: [
                { country: 'Australia' },
                { country: 'New Zealand' },
                { country: 'Samoa' },
            ]
        },
        { continent: 'Antarctica' }
    ];

    //Menu fields definition
    public menuFields: FieldSettingsModel = {
        text: ['continent', 'country'],
        children: ['countries']
    };

    public created(): void {
        let insertItem: { [key: string]: Object }[] = [
            {
                continent: 'Europe',
                countries: [
                    { country: 'Finland' },
                    { country: 'Austria' }
                ]
            }
        ];
        //Add items before to 'Oceania'
        this.menuObj?.insertBefore(insertItem, 'Oceania', false);

        insertItem = [
            {
                continent: 'Africa',
                countries: [
                    { country: 'Nigeria' }
                ]
            }
        ];

        //Add items after to 'Asia'
        this.menuObj?.insertAfter(insertItem, 'Asia', false);

        //Remove items
        this.menuObj?.removeItems(['South America', 'Mexico'], false);
    }
}


