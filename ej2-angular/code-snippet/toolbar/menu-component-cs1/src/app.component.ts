


import { Component } from '@angular/core';
import { ToolbarComponent, MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: ` <ejs-toolbar>
                <e-items>
                    <e-item text='Cut'></e-item>
                    <e-item text='Copy'></e-item>
                    <e-item text='Paste'></e-item>
                    <e-item>
                        <ng-template #template>
                            <ejs-menu [items]="data"></ejs-menu>
                        </ng-template>
                    </e-item>
                </e-items>
        </ejs-toolbar>`
})

export class AppComponent {
     public data: MenuItemModel[] = [
    {
      text: 'Appliances',
      items: [
        {
          text: 'Kitchen',
          items: [
            { text: 'Electric Cookers' },
            { text: 'Coffee Makers' },
            { text: 'Blenders' },
          ],
        },
        {
          text: 'Washing Machine',
          items: [{ text: 'Fully Automatic' }, { text: 'Semi Automatic' }],
        },
        {
          text: 'Air Conditioners',
          items: [
            { text: 'Inverter ACs' },
            { text: 'Split ACs' },
            { text: 'Window ACs' },
          ],
        },
      ],
    },
    {
      text: 'Accessories',
      items: [
        {
          text: 'Mobile',
          items: [
            { text: 'Headphones' },
            { text: 'Memory Cards' },
            { text: 'Power Banks' },
          ],
        },
        {
          text: 'Computer',
          items: [
            { text: 'Pendrives' },
            { text: 'External Hard Disks' },
            { text: 'Monitors' },
          ],
        },
      ],
    },
    {
      text: 'Fashion',
      items: [
        {
          text: 'Men',
          items: [
            { text: 'Shirts' },
            { text: 'Jackets' },
            { text: 'Track Suits' },
          ],
        },
        {
          text: 'Women',
          items: [{ text: 'Kurtas' }, { text: 'Salwars' }, { text: 'Sarees' }],
        },
      ],
    },
    {
      text: 'Home & Living',
      items: [
        {
          text: 'Furniture',
          items: [
            { text: 'Beds' },
            { text: 'Mattresses' },
            { text: 'Dining Tables' },
          ],
        },
        {
          text: 'Decor',
          items: [
            { text: 'Clocks' },
            { text: 'Wall Decals' },
            { text: 'Paintings' },
          ],
        },
      ],
    },
  ];
}



