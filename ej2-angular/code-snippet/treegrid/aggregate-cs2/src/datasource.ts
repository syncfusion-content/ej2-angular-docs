/**
 * TreeGrid DataSource
 */
export let summaryRowData: Object[] = [{
    'FreightID': 'CX2389NK',
    'FreightName': 'Maersk Edibles Co.',
    'TotalUnits': 59,
    'TotalCosts': 278,
    'UnitWeight': 241,
    'children': [{

        'FreightID': 'QW4567OP',
        'FreightName': 'Chang',
        'TotalUnits': 12,
        'TotalCosts': 140,
        'UnitWeight': 50,
    }, {
        'FreightID': 'QW3458BH',
        'FreightName': 'Aniseed Syrup',
        'TotalUnits': 89,
        'TotalCosts': 590,
        'UnitWeight': 87,
    }, {
        'FreightID': 'QW8967OH',
        'FreightName': 'Chef Anton',
        'TotalUnits': 46,
        'TotalCosts': 460,
        'UnitWeight': 54,
    }, {

        'FreightID': 'QW6549NJ',
        'FreightName': 'Chef Antons Gumbo Mix',
        'TotalUnits': 34,
        'TotalCosts': 590,
        'UnitWeight': 50,
    }]
},
{
    'FreightID': 'DW8954IO',
    'FreightName': 'Aeon fitness inc.',
    'TotalUnits': 172,
    'TotalCosts': 24,
    'UnitWeight': 296,
    'children': [
        {
            'FreightID': 'UF5647YH',
            'FreightName': 'Reebox CrossFit Back Bay',
            'TotalUnits': 60,
            'TotalCosts': 870,
            'UnitWeight': 73,
        },
        {
            'FreightID': 'UF1290LK',
            'FreightName': 'The Green Microgym',
            'TotalUnits': 56,
            'TotalCosts': 876,
            'UnitWeight': 90,
        },
        {
            'FreightID': 'UF8956KU',
            'FreightName': 'DeFrancos',
            'TotalUnits': 45,
            'TotalCosts': 458,
            'UnitWeight': 68,
        },
        {
            'FreightID': 'UF7464JK',
            'FreightName': 'Westside Barbell',
            'TotalUnits': 25,
            'TotalCosts': 231,
            'UnitWeight': 65,
        }],
    },
    {
        'FreightID': 'EJ9456KN',
        'FreightName': 'Sun technologies inc',
        'TotalUnits': 33,
        'TotalCosts': 229,
        'UnitWeight': 192,
        'children': [
            {
                'FreightID': 'GH2367OP',
                'FreightName': 'Haier Group',
                'TotalUnits': 78,
                'TotalCosts': 678,
                'UnitWeight': 23,
            },
            {
                'FreightID': 'GH4309TH',
                'FreightName': 'Panda Electronics',
                'TotalUnits': 90,
                'TotalCosts': 790,
                'UnitWeight': 48,
            },
            {
                'FreightID': 'GH3494SD',
                'FreightName': 'Jiangsu Etern',
                'TotalUnits': 36,
                'TotalCosts': 435,
                'UnitWeight': 56,
            },
            {
                'FreightID': 'GH3213FR',
                'FreightName': 'Zhejiang Fuchunjiang',
                'TotalUnits': 12,
                'TotalCosts': 278,
                'UnitWeight': 65,
            }],

        }
];

export let summaryData: Object[] = [
    {
        ID: '1',
        Name: 'Order 1',
        units: '1395',
        unitPrice: '47.00',
        price: 65565,
        category: 'Seafoods',
        subtasks: [
            { ID: '1.1', Name: 'Mackerel', category: 'Frozen seafood', units: '235', unitPrice: '12.26', price: 2881.1 },
            { ID: '1.2', Name: 'Yellowfin Tuna', category: 'Frozen seafood', units: '324', unitPrice: '18.45', price: 5977.8 },
            { ID: '1.3', Name: 'Herrings', category: 'Frozen seafood', units: '488', unitPrice: '11.45', price: 5587.6 },
            { ID: '1.4', Name: 'Preserved Olives', category: 'Edible', units: '125', unitPrice: '19.56', price: 2445 },
            { ID: '1.5', Name: 'Sweet corn Frozen', category: 'Edible', units: '223', unitPrice: '12.34', price: 2751.82 }
         ]
    },
    {
        ID: '2',
        Name: 'Order 2',
        units: '1944',
        unitPrice: '58.45',
        price: 1245.73,
        category: 'Products',
        subtasks: [
            { ID: '2.1', Name: 'Tilapias', category: 'Frozen seafood', units: '278', unitPrice: '15.45', price: 4295.1 },
            { ID: '2.2', Name: 'White Shrimp', category: 'Frozen seafood', units: '560', unitPrice: '17.66', price: 9889.6 },
            { ID: '2.3', Name: 'Fresh Cheese', category: 'Dairy', units: '323', unitPrice: '12.35', price: 3989 },
            { ID: '2.4', Name: 'Blue Veined Cheese', category: 'Dairy', units: '370', unitPrice: '15.77', price: 5834.9 },
            { ID: '2.5', Name: 'Butter', category: 'Dairy', units: '413', unitPrice: '19.45', price: 8032.85 }
        ]
    },
    {
        ID: '3',
        Name: 'Order 3',
        units: '1120',
        unitPrice: '33.45',
        price: 37464,
        category: 'Crystals',
        subtasks: [
            { ID: '3.1', Name: 'Lead glassware', category: 'Solid crystals', units: '542', unitPrice: '19.56', price: 10601.52 },
            { ID: '3.2', Name: 'Pharmaceutical Glassware', category: 'Solid crystals', units: '324', unitPrice: '11.36', price: 3680.64 },
            { ID: '3.3', Name: 'Glass beads', category: 'Solid crystals', units: '254', unitPrice: '16.11', price: 4091.94 }
        ]
    }

];
