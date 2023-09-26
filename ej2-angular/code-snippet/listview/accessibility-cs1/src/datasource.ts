export let continent = [
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
    }
];

export let employees: Object[] = [
    { name: 'Brooke', id: '01' },
    { name: 'Claire', id: '02' },
    { name: 'Erik', id: '03' },
    { name: 'Grace', id: '04' },
    { name: 'Jacob', id: '05' }
];