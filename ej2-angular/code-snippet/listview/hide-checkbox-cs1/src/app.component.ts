

import { Component, ViewChild } from "@angular/core";
import { ListViewComponent } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'my-app',
    template: `
    <div id="sample">
      <ejs-listview #list id='folderCheckbox' [dataSource]='dataSource' [fields]='fields' [sortOrder]='Ascending' headerTitle='Mixed Leaf Checkbox Hidden List' [showHeader]=true [showCheckBox]=true (select)="onSelect($event)"></ejs-listview>
    </div>
    `,
})

export class AppComponent {

  public dataSource: Object = [
    {
        'text': 'Asia',
        'id': '01',
        'category': 'Continent',

        'child': [{
            'text': 'India',
            'id': '1',
            'category': 'Asia',

            'child': [{
                'text': 'Delhi',
                'id': '1001',
                'category': 'India',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Kashmir',
                'id': '1002',
                'category': 'India',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Goa',
                'id': '1003',
                'category': 'India',
                'htmlAttributes': { 'class': 'e-file' },
            },
            ]
        },
        {
            'text': 'China',
            'id': '2',
            'category': 'Asia',

            'child': [{
                'text': 'Zhejiang',
                'id': '2001',
                'category': 'China',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Hunan',
                'id': '2002',
                'category': 'China',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Shandong',
                'id': '2003',
                'category': 'China',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    },

    {
        'text': 'North America',
        'id': '02',
        'category': 'Continent',

        'child': [{
            'text': 'USA',
            'id': '3',
            'category': 'North America',

            'child': [{
                'text': 'California',
                'id': '3001',
                'category': 'USA',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'New York',
                'id': '3002',
                'category': 'USA',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Florida',
                'id': '3003',
                'category': 'USA',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        },
        {
            'text': 'Canada',
            'id': '4',
            'category': 'North America',

            'child': [{
                'text': 'Ontario',
                'id': '4001',
                'category': 'Canada',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Alberta',
                'id': '4002',
                'category': 'Canada',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Manitoba',
                'id': '4003',
                'category': 'Canada',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    },

    {
        'text': 'Europe',
        'id': '03',
        'category': 'Continent',

        'child': [{
            'text': 'Germany',
            'id': '5',
            'category': 'Europe',

            'child': [{
                'text': 'Berlin',
                'id': '5001',
                'category': 'Germany',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Bavaria',
                'id': '5002',
                'category': 'Germany',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Hesse',
                'id': '5003',
                'category': 'Germany',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            }]
        }, {
            'text': 'France',
            'id': '6',
            'category': 'Europe',

            'child': [{
                'text': 'Paris',
                'id': '6001',
                'category': 'France',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Lyon',
                'id': '6002',
                'category': 'France',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Marseille',
                'id': '6003',
                'category': 'France',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    },
    {
        'text': 'Australia',
        'id': '04',
        'category': 'Continent',

        'child': [{
            'text': 'Australia',
            'id': '7',
            'category': 'Australia',

            'child': [{
                'text': 'Sydney',
                'id': '7001',
                'category': 'Australia',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Melbourne',
                'id': '7002',
                'category': 'Australia',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Brisbane',
                'id': '7003',
                'category': 'Australia',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }, {
            'text': 'New Zealand',
            'id': '8',
            'category': 'Australia',

            'child': [{
                'text': 'Milford Sound',
                'id': '8001',
                'category': 'New Zealand',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Tongariro National Park',
                'id': '8002',
                'category': 'New Zealand',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Fiordland National Park',
                'id': '8003',
                'category': 'New Zealand',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            }]
        }]
    },
    {
        'text': 'Africa',
        'id': '05',
        'category': 'Continent',

        'child': [{
            'text': 'Morocco',
            'id': '9',
            'category': 'Africa',

            'child': [{
                'text': 'Rabat',
                'id': '9001',
                'category': 'Morocco',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Toubkal',
                'id': '9002',
                'category': 'Morocco',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Todgha Gorge',
                'id': '9003',
                'category': 'Morocco',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            }]
        }, {
            'text': 'South Africa',
            'id': '10',
            'category': 'Africa',

            'child': [{
                'text': 'Cape Town',
                'id': '10001',
                'category': 'South Africa',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Pretoria',
                'id': '10002',
                'category': 'South Africa',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Bloemfontein',
                'id': '10003',
                'category': 'South Africa',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    }
];
    public fields = { tooltip: 'text' };
    @ViewChild('list')listViewInstance?: ListViewComponent;
Ascending: any;
    onSelect(args: any){
       let normalElements: HTMLElement[] = Array.prototype.slice.call((this.listViewInstance as any).curUL.getElementsByClassName('e-checkbox-hidden'));

        // Looping through all the selected element and removing e-active class
        // to avoid behaviour interference  with getSelectedItems method
        normalElements.forEach((element) => {
            element.classList.remove('e-active');
        });

        // Finally adding e-active class to currently selected item except checkbox item.
        // because if it is checkbox item their actions will taken care from the source side itself.
        if (args.item.classList.contains('e-checkbox-hidden')) {
            args.item.classList.add('e-active');
        }
   }
}


