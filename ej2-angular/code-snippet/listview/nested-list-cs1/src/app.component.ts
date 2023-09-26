


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ejs-listview id='sample-list' [dataSource]='data' [fields]='fields' [showHeader]='true' [headerTitle]='headertitle'></ejs-listview>`,
})

export class AppComponent {
    public data: Object = [
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
            },
            {
                'text': 'Kashmir',
                'id': '1002',
                'category': 'India',
            },
            {
                'text': 'Goa',
                'id': '1003',
                'category': 'India',
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
            },
            {
                'text': 'Hunan',
                'id': '2002',
                'category': 'China',
            },
            {
                'text': 'Shandong',
                'id': '2003',
                'category': 'China',
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
            },
            {
                'text': 'New York',
                'id': '3002',
                'category': 'USA',
            },
            {
                'text': 'Florida',
                'id': '3003',
                'category': 'USA',
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
            },
            {
                'text': 'Alberta',
                'id': '4002',
                'category': 'Canada',
            },
            {
                'text': 'Manitoba',
                'id': '4003',
                'category': 'Canada',
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
            },
            {
                'text': 'Bavaria',
                'id': '5002',
                'category': 'Germany',
            },
            {
                'text': 'Hesse',
                'id': '5003',
                'category': 'Germany',
            }]
        }, {
            'text': 'France',
            'id': '6',
            'category': 'Europe',
            'child': [{
                'text': 'Paris',
                'id': '6001',
                'category': 'France',
            },
            {
                'text': 'Lyon',
                'id': '6002',
                'category': 'France',
            },
            {
                'text': 'Marseille',
                'id': '6003',
                'category': 'France',
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
            },
            {
                'text': 'Melbourne',
                'id': '7002',
                'category': 'Australia',
            },
            {
                'text': 'Brisbane',
                'id': '7003',
                'category': 'Australia',
            }]
        }, {
            'text': 'New Zealand',
            'id': '8',
            'category': 'Australia',
            'child': [{
                'text': 'Milford Sound',
                'id': '8001',
                'category': 'New Zealand',
            },
            {
                'text': 'Tongariro National Park',
                'id': '8002',
                'category': 'New Zealand',
            },
            {
                'text': 'Fiordland National Park',
                'id': '8003',
                'category': 'New Zealand',
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
            },
            {
                'text': 'Toubkal',
                'id': '9002',
                'category': 'Morocco',
            },
            {
                'text': 'Todgha Gorge',
                'id': '9003',
                'category': 'Morocco',
            }]
        }, {
            'text': 'South Africa',
            'id': '10',
            'category': 'Africa',
            'child': [{
                'text': 'Cape Town',
                'id': '10001',
                'category': 'South Africa',
            },
            {
                'text': 'Pretoria',
                'id': '10002',
                'category': 'South Africa',
            },
            {
                'text': 'Bloemfontein',
                'id': '10003',
                'category': 'South Africa',
            }]
        }]
    }
];

    public fields: {[key: string]: string} ={ tooltip: 'text'};
    public headertitle = 'Continent';
}



