/**
 * TreeGrid DataSource
 */
export let htmlData: Object[] =  [
    {
        taskID: '<span>1</span>',
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: '<span>2</span>', taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: '<span>6</span>',
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: '<span>9</span>', taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    progress: 10,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 60,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 30,
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    progress: 60,
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];

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
        price: 133.66,
        category: 'Seafoods',
        subtasks: [
            { ID: '1.1', Name: 'Mackerel', category: 'Frozen seafood', units: '235', unitPrice: '12.26', price: 28.20 },
            { ID: '1.2', Name: 'Yellowfin Tuna', category: 'Frozen seafood', units: '324', unitPrice: '18.45', price: 25.92 },
            { ID: '1.3', Name: 'Herrings', category: 'Frozen seafood', units: '488', unitPrice: '11.45', price: 52.68 },
            { ID: '1.4', Name: 'Preserved Olives', category: 'Edible', units: '125', unitPrice: '19.56', price: 11.25 },
            { ID: '1.5', Name: 'Sweet corn Frozen', category: 'Edible', units: '223', unitPrice: '12.34', price: 15.61 }
         ]
    },
    {
        ID: '2',
        Name: 'Order 2',
        units: '1944',
        unitPrice: '58.45',
        price: 21.33,
        category: 'Products',
        subtasks: [
            { ID: '2.1', Name: 'Tilapias', category: 'Frozen seafood', units: '278', unitPrice: '15.45', price: 41.70 },
            { ID: '2.2', Name: 'White Shrimp', category: 'Frozen seafood', units: '560', unitPrice: '17.66', price: 39.20 },
            { ID: '2.3', Name: 'Fresh Cheese', category: 'Dairy', units: '323', unitPrice: '12.35', price: 38.76 },
            { ID: '2.4', Name: 'Blue Veined Cheese', category: 'Dairy', units: '370', unitPrice: '15.77', price: 55.50 },
            { ID: '2.5', Name: 'Butter', category: 'Dairy', units: '413', unitPrice: '19.45', price: 37.17 }
        ]
    },
    {
        ID: '3',
        Name: 'Order 3',
        units: '1120',
        unitPrice: '33.45',
        price: 10.80,
        category: 'Crystals',
        subtasks: [
            { ID: '3.1', Name: 'Lead glassware', category: 'Solid crystals', units: '542', unitPrice: '19.56', price: 32.52 },
            { ID: '3.2', Name: 'Pharmaceutical Glassware', category: 'Solid crystals', units: '324', unitPrice: '11.36', price: 35.64 },
            { ID: '3.3', Name: 'Glass beads', category: 'Solid crystals', units: '254', unitPrice: '16.11', price: 40.64 }
        ]
    }

];
export let sampleData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    progress: 10,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 60,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 30,
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    progress: 60,
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];

export let textWrapData: Object[] = [
    {
        taskID: 1,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Specification of Software', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 4, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true, priority: 'Normal' },
            { taskID: 5, taskName: 'Design Document', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true, priority: 'Critical' },
            { taskID: 6, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 7,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
        subtasks: [
            {
                taskID: 8,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                progress: 86,
                subtasks: [{
                    taskID: 9,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    progress: 96,
                    approved: false,
                    subtasks: [
                        { taskID: 10, taskName: 'Development', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 12, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 13, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 14, taskName: 'Get approval from customer', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 15, taskName: 'Completed', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '0', priority: 'Low', approved: true }

                    ]
                }]
            },

            {
                taskID: 16,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 50,
                subtasks: [{
                    taskID: 17,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 56,
                    subtasks: [
                        { taskID: 18, taskName: 'Development', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 20, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 21, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 22, taskName: 'Get approval from customer', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 23, taskName: 'Completed', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '0', priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 24,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 50,
                subtasks: [{
                    taskID: 25,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    progress: 56,
                    duration: 11,
                    subtasks: [
                        { taskID: 26, taskName: 'Development', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 28, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 29, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 30, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 31, taskName: 'Completed', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '0', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];

export let textdata: Object[] = [{
    'Name': 'Robert King',
    'FullName': 'RobertKing',
    'Designation': 'Chief Executive Officer',
    'EmployeeID': '1',
    'EmpID': 'EMP001',
    'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
    'Contact': '(206) 555-9857',
    'Country': 'USA',
    'DOB': new Date('2/15/1963'),

    'Children': [{
        'Name': 'David william',
        'FullName': 'DavidWilliam',
        'Designation': 'Vice President',
        'EmployeeID': '2',
        'EmpID': 'EMP004',
        'Address': '722 Moss Bay Blvd., Kirkland',
        'Country': 'USA',
        'Contact': '(206) 555-3412',
        'DOB': new Date('5/20/1971'),


        'Children': [{
            'Name': 'Nancy Davolio',
            'FullName': 'NancyDavolio',
            'Designation': 'Marketing Executive',
            'EmployeeID': '3',
            'EmpID': 'EMP035',
            'Address': '4110 Old Redmond Rd., Redmond',
            'Country': 'USA',
            'Contact': '(206) 555-8122',
            'DOB': new Date('3/19/1966'),
            'Children': [
                {
                    'Name': 'Andrew Fuller',
                    'FullName': 'AndrewFuller',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '4',
                    'EmpID': 'EMP045',
                    'Address': '14 Garrett Hill, London',
                    'Country': 'UK',
                    'Contact': '(71) 555-4848',
                    'DOB': new Date('9/20/1980')
                },
            {
                'Name': 'Anne Dodsworth',
                'FullName': 'AnneDodsworth',
                'Designation': 'Sales Representative',
                'EmployeeID': '5',
                'EmpID': 'EMP091',
                'Address': '4726 - 11th Ave. N.E., Seattle',
                'Country': 'USA',
                'Contact': '(206) 555-1189',
                'DOB': new Date('10/19/1989')
            },
            {
                'Name': 'Michael Suyama',
                'FullName': 'MichaelSuyama',
                'Designation': 'Sales Representative',
                'EmployeeID': '6',
                'EmpID': 'EMP110',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/02/1987')
            },
            {
                'Name': 'Janet Leverling',
                'FullName': 'JanetLeverling',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '7',
                'EmpID': 'EMP131',
                'Address': 'Edgeham Hollow Winchester Way, London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/06/1990')
            },
            ]

        },
        {
            'Name': 'Romey Wilson',
            'FullName': 'RomeyWilson',
            'Designation': 'Sales Executive',
            'EmployeeID': '8',
            'EmpID': 'EMP039',
            'Address': '7 Houndstooth Rd., London',
            'Country': 'UK',
            'Contact': '(71) 555-3690',
            'DOB': new Date('02/02/1980'),
            'Children': [
            {
                'Name': 'Margaret Peacock',
                'FullName': 'MargaretPeacock',
                'Designation': 'Sales Representative',
                'EmployeeID': '9',
                'EmpID': 'EMP213',
                'Address': '4726 - 11th Ave. N.E., California',
                'Country': 'USA',
                'Contact': '(206) 555-1989',
                'DOB': new Date('01/21/1986')
            },
            {
                'Name': 'Laura Callahan',
                'FullName': 'LauraCallahan',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '10',
                'EmpID': 'EMP201',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-2222',
                'DOB': new Date( '12/01/1990')
            },
            {
                'Name': 'Steven Buchanan',
                'FullName': 'StevenBuchanan',
                'Designation': 'Sales Representative',
                'EmployeeID': '11',
                'EmpID': 'EMP197',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7408',
                'DOB': new Date('03/23/1987')
            },
            {
                'Name': 'Tedd Lawson',
                'FullName': 'TeddLawson',
                'Designation': 'Sales Representative',
                'EmployeeID': '12',
                'EmpID': 'EMP167',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7368 ',
                'DOB': new Date('08/09/1989')
            },
            ]
        }]
    }]
}];

export let headerData: Object[] = [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        resourceId: '8',
        duration: 5,
        progress: '100',
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '2' },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: '100', resourceId: '7' }
        ]
    },
     {
         taskID: 6,
         taskName: 'Design',
         startDate: new Date('02/10/2017'),
         endDate: new Date('02/14/2017'),
         resourceId: '1',
         progress: '60',
         duration: 3,
         subtasks: [
             { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: '60', predecessor: '6FS', resourceId: '2' },
             { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: '100', predecessor: '6FS', resourceId: '3' },
             { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: '100', predecessor: '9FS', resourceId: '1' },
             { taskID: 10, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: '100', resourceId: '9' }
         ]
     },
     {
         taskID: 11,
         taskName: 'Implementation Phase',
         startDate: new Date('02/17/2017'),
         endDate: new Date('02/27/2017'),
         resourceId: '5',
         progress: '80',
         duration: 5,
         subtasks: [
             {
                 taskID: 12,
                 taskName: 'Phase',
                 startDate: new Date('02/17/2017'),
                 endDate: new Date('02/27/2017'),
                 resourceId: '7',
                 duration: 5,
                 progress: '50',
                 subtasks: [{
                     taskID: 13,
                     taskName: 'Implementation Module',
                     resourceId: '3',
                     progress: '50',
                     duration: 3,
                     startDate: new Date('02/17/2017'),
                     endDate: new Date('02/27/2017'),
                     subtasks: [
                        { taskID: 14, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                        { taskID: 15, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                        { taskID: 16, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: '4' },
                        { taskID: 17, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', predecessor: '17FS', resourceId: '4' },
                        { taskID: 18, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', predecessor: '18FS', resourceId: '1' },
                        { taskID: 19, taskName: 'Phase complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, predecessor: '19FS', progress: '0', resourceId: '9' }
                     ]
                 }]
             }
         ]
     }
];

export let stackedData: Object[] = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('02/09/2017'),
        units: '1395',
        unitPrice: '47.00',
        price: 133.66,
        shipMentCategory: 'Seafood',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', shipMentCategory: 'Frozen seafood', units: '35',
                orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: '12.56', price: 28.20 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', shipMentCategory: 'Frozen seafood', units: '324',
                orderDate: new Date('05/03/2017'), shippedDate: new Date('05/10/2017'), unitPrice: '28.26', price: 25.92 },
            { orderID: '1.3', orderName: 'Herrings', shipMentCategory: 'Frozen seafood', units: '48',
                orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: '11.35', price: 52.68 },
            { orderID: '1.4', orderName: 'Preserved Olives', shipMentCategory: 'Edible', units: '125',
               orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: '29.23', price: 11.25 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', shipMentCategory: 'Edible', units: '223',
                orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2017'), unitPrice: '47.17', price: 15.61 }

         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('01/10/2018'),
        shippedDate: new Date('01/16/2018'),
        units: '1944',
        unitPrice: '58.45',
        price: 21.23,
        shipMentCategory: 'Seafood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', shipMentCategory: 'Frozen Seafood',
            orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: '278', unitPrice: '15.25', price: 41.70 },
            { orderID: '2.2', orderName: 'White Shrimp', shipMentCategory: 'Frozen seafood', units: '560',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: '72.45', price: 39.20 },
            { orderID: '2.3', orderName: 'Fresh Cheese', shipMentCategory: 'Dairy', units: '323', unitPrice: 12.45,
            orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: 38.76 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', shipMentCategory: 'Dairy', units: '370', unitPrice: 15.36,
            orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: 55.50 },
            { orderID: '2.5', orderName: 'Butter', shipMentCategory: 'Dairy', units: '413', unitPrice: '19.35',
            orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('09/10/2018'),
        shippedDate: new Date('09/20/2018'),
        units: '1120',
        unitPrice: '33.34',
        price: 10.80,
        shipMentCategory: 'Seafood',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', shipMentCategory: 'Solid crystals',
                orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: '542', unitPrice: '46.45', price: 32.52 },
            { orderID: '3.2', orderName: 'Pharmaceutical', shipMentCategory: 'Solid crystals',
                orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: '324', unitPrice: '11.56', price: 35.64 },
            { orderID: '3.3', orderName: 'Glass beads', shipMentCategory: 'Solid crystals', units: '254',
                orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: '16.25', price: 40.64 }
        ]
    }
];

export let formatData: Object[] = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('10/03/2018'),
        units: '1395',
        unitPrice: '47',
        price: 133.66,
        Category: 'seafood',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: '235',
            orderDate: new Date('02/03/2017'), shippedDate: new Date('05/13/2018'), unitPrice: '12', price: 28.20 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: '324',
            orderDate: new Date('05/03/2017'), shippedDate: new Date('05/22/2018'), unitPrice: '8', price: 25.92 },
            { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: '488',
            orderDate: new Date('10/03/2017'), shippedDate: new Date('10/14/2018'), unitPrice: '11', price: 52.68 },
            { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: '125',
            orderDate: new Date('08/03/2017'), shippedDate: new Date('08/03/2018'), unitPrice: '9', price: 11.25 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: '223',
            orderDate: new Date('09/03/2017'), shippedDate: new Date('09/03/2018'), unitPrice: '7', price: 15.61 }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('05/03/2017'),
        shippedDate: new Date('03/15/2018'),
        units: '1944',
        unitPrice: '58',
        price: 212.33,
        Category: 'seafood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('03/05/2017'), shippedDate: new Date('03/15/2018'), units: '278', unitPrice: '15', price: 41.70 },
            { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: '560',
            orderDate: new Date('07/05/2017'), shippedDate: new Date('03/15/2018'), unitPrice: '7', price: 39.20 },
            { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: '12',
            orderDate: new Date('09/03/2017'), shippedDate: new Date('09/19/2018'), price: 38.76 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: '370', unitPrice: '15',
            orderDate: new Date('11/03/2017'), shippedDate: new Date('11/13/2018'), price: 55.50 },
            { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: '413', unitPrice: '9',
            orderDate: new Date('10/23/2017'), shippedDate: new Date('10/23/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('03/10/2017'),
        shippedDate: new Date('03/20/2018'),
        units: '1120',
        unitPrice: '33',
        price: '108.80',
        Category: 'seafood',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('08/03/2017'), shippedDate: new Date('03/18/2018'), units: '542', unitPrice: '6', price: '32.52' },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('03/10/2017'), shippedDate: new Date('03/20/2018'), units: '324', unitPrice: '11', price: '35.64' },
            { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: '254',
            orderDate: new Date('03/02/2017'), shippedDate: new Date('03/22/2018'), unitPrice: '16', price: '40.64' }
        ]
    }

];

export let sortData: Object[] = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('02/09/2017'),
        units: '1395',
        unitPrice: '47',
        price: 133.66,
        Category: 'Seafoods',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: '235',
            orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: '12', price: 28.20 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: '324',
            orderDate: new Date('04/05/2017'), shippedDate: new Date('04/12/2017'), unitPrice: '8', price: 25.92 },
            { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: '488',
            orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: '11', price: 52.68 },
            { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: '125',
            orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: '9', price: 11.25 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: '223',
            orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2019'), unitPrice: '7', price: 15.61 }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('01/10/2018'),
        shippedDate: new Date('01/16/2018'),
        units: '1944',
        unitPrice: '58',
        price: 212.33,
        Category: 'products',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: '278', unitPrice: '15', price: 41.70 },
            { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: '560',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: '7', price: 39.20 },
            { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: '12',
            orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: 38.76 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: '370', unitPrice: '15',
            orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: 55.50 },
            { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: '413', unitPrice: '9',
            orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('09/10/2018'),
        shippedDate: new Date('09/20/2018'),
        units: '1120',
        unitPrice: '33',
        price: 108.80,
        Category: 'Crystals',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: '542', unitPrice: '6', price: 32.52 },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: '324', unitPrice: '11', price: 35.64 },
            { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: '254',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: '16', price: 40.64 }
        ]
    }

];

export  let lockRowDropDownData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
31, 32, 33, 34, 35, 36];

export let projectData: Object[] = [
    { TaskID: 1, TaskName: 'Parent Task 1', StartDate: new Date('02/23/2017'), Duration: 3, Priority : 'Normal',
    EndDate: new Date('02/27/2017'), Progress: '40' },
    { TaskID: 2, TaskName: 'Child Task 1', StartDate: new Date('02/23/2017'), Duration: 4, Priority : 'Low',
    EndDate: new Date('02/27/2017'), Progress: '40', parentID: 1 },
    { TaskID: 3, TaskName: 'Child Task 2', StartDate: new Date('02/23/2017'), Duration: 2, Priority : 'Normal',
    EndDate: new Date('02/27/2017'), Progress: '40', parentID: 1 },
    { TaskID: 4, TaskName: 'Child Task 3', StartDate: new Date('02/23/2017'), Duration: 2, Priority : 'Low',
    EndDate: new Date('02/27/2017'), Progress: '40', parentID: 1 },
    { TaskID: 5, TaskName: 'Parent Task 2', StartDate: new Date('03/14/2017'), Duration: 6, Priority : 'Normal',
    EndDate: new Date('03/18/2017'), Progress: '40' },
    { TaskID: 6, TaskName: 'Child Task 1', StartDate: new Date('03/02/2017'), Duration: 11, Priority : 'High',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 7, TaskName: 'Child Task 2', StartDate: new Date('03/02/2017'), Duration: 7, Priority : 'Critical',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 8, TaskName: 'Child Task 3', StartDate: new Date('03/02/2017'), Duration: 10, Priority : 'Breaker',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 9, TaskName: 'Child Task 4', StartDate: new Date('03/02/2017'), Duration: 15, Priority : 'High',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 10, TaskName: 'Parent Task 3', StartDate: new Date('03/09/2017'), Duration: 17, Priority : 'Breaker',
    EndDate: new Date('03/13/2017'), Progress: '40' },
    { TaskID: 11, TaskName: 'Child Task 1', StartDate: new Date('03/9/2017'), Duration: 0, Priority : 'Low',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 12, TaskName: 'Child Task 2', StartDate: new Date('03/9/2017'), Duration: 10, Priority : 'Breaker',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 13, TaskName: 'Child Task 3', StartDate: new Date('03/9/2017'), Duration: 11, Priority : 'Normal',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 14, TaskName: 'Child Task 4', StartDate: new Date('03/9/2017'), Duration: 1, Priority : 'Normal',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 15, TaskName: 'Child Task 5', StartDate: new Date('03/9/2017'), Duration: 14, Priority : 'Critical',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 }
];

export let lineData: Object[] = [
    [0, 6, 4, 1, 3, 2, 5],
    [5, 4, 6, 3, 1, 2, 0],
    [6, 4, 0, 3, 2, 5, 1],
    [4, 6, 3, 0, 1, 2, 5],
    [3, 5, 6, 4, 0, 1, 2],
    [1, 3, 4, 2, 5, 0, 6],
    [2, 4, 0, 3, 5, 6, 1],
    [5, 4, 6, 3, 1, 2, 0],
    [0, 6, 4, 1, 3, 2, 5],
    [6, 4, 0, 3, 2, 5, 1],
    [4, 6, 3, 0, 1, 2, 5],
    [3, 5, 6, 4, 0, 1, 2],
    [1, 3, 4, 2, 5, 0, 6],
    [2, 4, 0, 3, 5, 6, 1],
    [5, 4, 6, 3, 1, 2, 0],
    [0, 6, 4, 1, 3, 2, 5],
    [6, 4, 0, 3, 2, 5, 1],
    [4, 6, 3, 0, 1, 2, 5],
    [2, 4, 0, 3, 5, 6, 1],
    [3, 5, 6, 4, 0, 1, 2],
    [1, 3, 4, 2, 5, 0, 6]
];
export let columnData: Object[] = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
    [4, 6, -3, 0, 1, 2, 5],
    [3, -5, -6, 4, 0, 1, 2],
    [1, 3, -4, -2, 5, 0, 6],
    [2, -4, 0, -3, 5, 6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, 6, 4, -1, -3, 2, 5],
    [6, -4, 0, -3, 2, 5, 1],
    [4, 6, -3, 0, -1, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
    [3, 5, 6, -4, 0, 1, 2],
    [1, 3, -4, 2, -5, 0, 6]
];
export let getSparkData: Function = (type: string, count: number) => {
    if (type === 'line') {
        return lineData[count];
    } else {
        return columnData[count];
    }
};
export let complexData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        assignee: {firstName: 'Nancy', lastName: 'Davolio'},
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),assignee: {firstName: 'Andrew', lastName: 'Fuller'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),assignee: {firstName: 'Janet', lastName: 'Leverling'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),assignee: {firstName: 'Margaret', lastName: 'Peacock'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),assignee: {firstName: 'Steven', lastName: 'Buchanan'},
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        assignee: {firstName: 'Michael', lastName: 'Suyama'},
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),assignee: {firstName: 'Robert', lastName: 'King'},
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),assignee: {firstName: 'Laura', lastName: 'Challahan'},
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),assignee: {firstName: 'Anne', lastName: 'Dodsworth'},
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),assignee: {firstName: 'Tamer', lastName: 'Nancy'},
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),assignee: {firstName: 'Laura', lastName: 'Martin'},
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

export let stringData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        name: [{firstName: 'Nancy'}, {lastName: 'Davolio'}],
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),name: [{firstName: 'Andrew'}, { lastName: 'Fuller'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),name: [{firstName: 'Janet'}, { lastName: 'Leverling'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),name: [{firstName: 'Margaret'}, { lastName: 'Peacock'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),name: [{firstName: 'Steven'}, { lastName: 'Buchanan'}],
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        name: [{firstName: 'Michael'}, { lastName: 'Suyama'}],
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),name: [{firstName: 'Robert'}, { lastName: 'King'}],
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),name: [{firstName: 'Laura'}, { lastName: 'Challahan'}],
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),name: [{firstName: 'Anne'}, { lastName: 'Dodsworth'}],
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),name: [{firstName: 'Tamer'}, { lastName: 'Nancy'}],
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),name: [{firstName: 'Laura'}, { lastName: 'Martin'}],
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

export let diacritics: Object[] = [{
    'Name': 'Aeróbics',
    'Designation': 'Chief Executive Officer',
    'EmployeeID': '1',
    'EmpID': 'EMP001',
    'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
    'Contact': '(206) 555-9857',
    'Country': 'USA',
    'DOB': new Date('2/15/1963'),

    'Children': [{
        'Name': 'Aerógrafía en Agua',
        'Designation': 'Vice President',
        'EmployeeID': '2',
        'EmpID': 'EMP004',
        'Address': '722 Moss Bay Blvd., Kirkland',
        'Country': 'USA',
        'Contact': '(206) 555-3412',
        'DOB': new Date('5/20/1971'),


        'Children': [{
            'Name': 'AerografÃ­a',
            'Designation': 'Marketing Executive',
            'EmployeeID': '3',
            'EmpID': 'EMP035',
            'Address': '4110 Old Redmond Rd., Redmond',
            'Country': 'USA',
            'Contact': '(206) 555-8122',
            'DOB': new Date('3/19/1966'),
            'Children': [
                {
                    'Name': 'Aeromodelaje',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '4',
                    'EmpID': 'EMP045',
                    'Address': '14 Garrett Hill, London',
                    'Country': 'UK',
                    'Contact': '(71) 555-4848',
                    'DOB': new Date('9/20/1980')
                },
            {
                'Name': 'Águilas',
                'Designation': 'Sales Representative',
                'EmployeeID': '5',
                'EmpID': 'EMP091',
                'Address': '4726 - 11th Ave. N.E., Seattle',
                'Country': 'USA',
                'Contact': '(206) 555-1189',
                'DOB': new Date('10/19/1989')
            },
            {
                'Name': 'Álbumes de Delta',
                'Designation': 'Sales Representative',
                'EmployeeID': '6',
                'EmpID': 'EMP110',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/02/1987')
            },
            {
                'Name': 'Ãlbumes de Música',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '7',
                'EmpID': 'EMP131',
                'Address': 'Edgeham Hollow Winchester Way, London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/06/1990')
            },
            ]

        },
        {
            'Name': 'Alusivos',
            'Designation': 'Sales Executive',
            'EmployeeID': '8',
            'EmpID': 'EMP039',
            'Address': '7 Houndstooth Rd., London',
            'Country': 'UK',
            'Contact': '(71) 555-3690',
            'DOB': new Date('02/02/1980'),
            'Children': [
            {
                'Name': 'Ãerografía',
                'Designation': 'Sales Representative',
                'EmployeeID': '9',
                'EmpID': 'EMP213',
                'Address': '4726 - 11th Ave. N.E., California',
                'Country': 'USA',
                'Contact': '(206) 555-1989',
                'DOB': new Date('01/21/1986')
            },
            {
                'Name': 'Análisis de Escritura a Mano',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '10',
                'EmpID': 'EMP201',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-2222',
                'DOB': new Date( '12/01/1990')
            },
            {
                'Name': 'Aeromodelaje',
                'Designation': 'Sales Representative',
                'EmployeeID': '11',
                'EmpID': 'EMP197',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7408',
                'DOB': new Date('03/23/1987')
            },
            {
                'Name': 'Álbumes de Delta',
                'Designation': 'Sales Representative',
                'EmployeeID': '12',
                'EmpID': 'EMP167',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7368 ',
                'DOB': new Date('08/09/1989')
            },
            ]
        }]
    }]
}];

export let adventProFont: string = 'AAEAAAARAQAABAAQRFNJRwAAAAEAALa8AAAACEZGVE1fekHUAACnZAAAABxHREVGACgBwQAAp4AAAAAoR1BPU0UutbcAAKeoAAAO8EdTVUK49LjmAAC2mAAAACRPUy8yegjc7gAAAZgAAABgY21hcP/iHw8AAAhoAAADdmdhc3AAAAAQAACnXAAAAAhnbHlm1UxHIQAADyQAAIfEaGVhZPyoXpQAAAEcAAAANmhoZWEK6QfqAAABVAAAACRobXR4CMZdfQAAAfgAAAZwbG9jYWAAPVIAAAvoAAADOm1heHAB5QBRAAABeAAAACBuYW1lvYEfIwAAlugAAAbGcG9zdL7lSo8AAJ2wAAAJqXByZXBoBoyFAAAL4AAAAAcAAQAAAAIAg2XnRcRfDzz1AAsD6AAAAADK+KMLAAAAAMttdz//xP8lB14DvQAAAAgAAgAAAAAAAAABAAADxP8YAAAHfP/E/7kHXgABAAAAAAAAAAAAAAAAAAABnAABAAABnABOAAcAAAAAAAIAAAABAAEAAABAAAAAAAAAAAIBggEsAAUAAAKKAlgAAABLAooCWAAAAV4AMgD6AAACAAUGBAAAAgAEgAAArxAAIEoAAAAAAAAAAEFEQkUAAAAg+wQDxP8YAAADwgDoAAAAmwAAAAAB9QK8AAAAIAACAfQAAAHKAAABTQAAARYAAADWAE4BqgBzAmUAIgIcACICngAmAiIAIwCqAC4BFgBOARYATgFgABoBgQAiAKUAEQGaAC0AewARAaYAGgIlAD8A0gAaAZMAGgG6ABoB6gAaAboAGgHdABoBvgAaAdoAGgHdABoAawAaAJQAGgFpABoBdAAaAWkAGgGXABoCxwAaAg8ADAIiAE4BsgBCAkAATgHRAE4BvwBOAhkAQQJMAE4AxAAdALL//gHcAE8BuABOArYATgKKAE4CJQA/AiMATgIlAD8CNABOAjEAJQGSAAACNgBKAk8ATgMpAE4CSwAtAiwAPAImAB8BPwBOAeMATgE/AE4BkwBOAgIATADeAC4BygAlAeIATgF/ACQB2wBHAbIAIwEoAE4BwAAlAe0AQADVAE4Awv/6AbMAQwDLAE4C4QBOAfQAQAHHAC8B6gBOAcAAJQFNAD0BrwAkAPMALAG/ACQBqgASAr4AEgHhADoB3gAlAeAATgE0AE4AywBOATQATgICAE4A1gBOAbMATgHZAE4B0ABOAjAANQJMAE4A3gAEAyAAGQF+AE4B8gAqAZoALQMgABkBTgBOAZEATgG1AE4A3gAuAd0AJQKfAE4BmgBMAgIABAHUAE8CDwAMAg8ADAIPAAwCDwAMAg8ADAIPAAwDLgBOAbIAQgHRAE4B0QBOAdEATgHRAE4BGABTAVgATgHAAE4BFABOAoAATgKKAE4CJQA/AiUAPwIlAD8CJQA/AiUAPwGGAE4CFQBOAjYASgI2AEoCNgBKAjYASgIsADwB6gBOAgAATgHyAE4B8gBOAfIATgHyAE4B8gBOAfIATgMuAE4BfwAkAdkATgHZAE4B4gBOAcIAIwDnAE4A4wBRAJ//xACO/98B4gBOAeYATgHmAE4B5gBOAeYATgHmAE4BsABOAe8ATgHmAE4B5gBOAeYATgHmAE4CCABOAeoATgIIAE4CDwAMAfIATgIPAAwB8gBOApYATgH2ACUBsgBCAbMATgGyAEIB0wBOAbIAQgGzAE4BsgBCAbQATgJAAE4CYABOAkAATgIfAE4B0QBOAcIAIwHRAE4B2QBOAfsATgGyACMB0QBOAdkATgIZAEEB6wBOAhkAQQHqAE4CNgBKAeoATgIZAEEB6gBOAkwATgJDAB8CrQBOAiAATgHoAE4BuwBOAXYATgFKAE4BWwBOAQn/+gEYAE4AgQApAQT//gGTAE4B3ABPAb4AQwHiAE4BuABOARIAUQG4AE4A/wBOAb//3gDN/9oCVQBOAaYATgKKAE4B4gBOAooATgH0AEACigBOAeIATgKLAE4B9QBAAiUAPwHmAE4CJQA/AeYATgM2AE4DFwBOAjQATgFrAE4CNABOAVsAPQI0AE4BkwBOAjEAJQG8ADECMQAlAdkATgGvACQCMQAlAdkATgGSAAABCwAsAZIAAAFu/+sBkgAAAWcATgI2AEoB5gBOAjYASgHmAE4CNgBKAeYATgI2AEoB5gBOAjYASgHmAE4CNgBKAeIAJAIsADwCJgAfAeAATgImAB8B4ABOAiYAHwHgAE4CMQAlAa8AJAGTAC4BiwAuAVMALgA/AAQByv/+AX8ATAG7AE4Bxf/+AUYATgJqAE4CZgBOAsgATgGCAE4CigBOAs8ATgLRAE4A+wAPAhsADAIiAE4BvwBOAhEADAG/AE4CWABOAkAAUAIVAE4BKwBQAf4ATgIVAAwCtwBQ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ACAATgBhAG0AZQAgACIAQQBkAHYAZQBuAHQAIABQAHIAbwAiAEEAZAB2AGUAbgB0ACAAUAByAG8ATABpAGcAaAB0AEEAbgBkAHIAZQBhAHMASwBhAGwAcABhAGsAaQBkAGkAcwA6ACAAQQBkAHYAZQBuAHQAIABQAHIAbwAgAEwAaQBnAGgAdAA6ACAAMgAwADAAOABBAGQAdgBlAG4AdAAgAFAAcgBvACAATABpAGcAaAB0AFYAZQByAHMAaQBvAG4AIAAyAC4AMAAwADMAQQBkAHYAZQBuAHQAUAByAG8ALQBMAGkAZwBoAHQAQQBkAHYAZQBuAHQAIABQAHIAbwAgAFQAaABpAG4AIABpAHMAIABhACAAdAByAGEAZABlAG0AYQByAGsAIABvAGYAIABJAE4ARABFACAAQQBuAGQAcgBlAGEAcwAgAEsAYQBsAHAAYQBrAGkAZABpAHMALgBBAG4AZAByAGUAYQBzACAASwBhAGwAcABhAGsAaQBkAGkAcwB3AHcAdwAuAGkAbgBkAGUAcgBlAHMAdABpAG4AZwAuAGMAbwBtAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQAsACAAVgBlAHIAcwBpAG8AbgAgADEALgAxAC4AIABUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGkAcwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATAAAAAIAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAABnAAAAAEAAgADAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEAowCEAIUAvQCWAIYAjgCLAJ0AqQECAIoA2gCDAJMAjQCXAIgA3gCqAKIArQDJAMcArgBiAGMAkABkAMsAZQDIAMoAzwDMAM0AzgDpAGYA0wDQANEArwBnAPAAkQDWANQA1QBoAOsA7QCJAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcAeAB6AHkAewB9AHwAuAChAH8AfgCAAIEA7ADuALoBAwEEAQUBBgEHAQgA/QD+AQkBCgELAQwA/wEAAQ0BDgEPAQEBEAERARIBEwEUARUBFgEXARgBGQD4APkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnAPoA1wEoASkBKgErASwBLQEuAS8BMAExATIA4gDjATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+ALAAsQE/AUABQQFCAUMBRAFFAUYBRwFIAPwA5ADlAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaALsBWwFcAV0BXgDmAOcBXwFgANgA4QDbANwA3QDgANkA3wFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZIBkwGUAZUBlgCbAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAC2ALcAxAC0ALUAxQCHAKsAxgC+AL8AvAGlAIwAnwCoAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9B3VuaTAwQUQHQW1hY3JvbgdhbWFjcm9uBkFicmV2ZQZhYnJldmUHQW9nb25lawdhb2dvbmVrC0NjaXJjdW1mbGV4C2NjaXJjdW1mbGV4CkNkb3RhY2NlbnQKY2RvdGFjY2VudAZEY2Fyb24GZGNhcm9uBkRjcm9hdAdFbWFjcm9uB2VtYWNyb24KRWRvdGFjY2VudAplZG90YWNjZW50B0VvZ29uZWsHZW9nb25lawZFY2Fyb24GZWNhcm9uC0djaXJjdW1mbGV4C2djaXJjdW1mbGV4Ckdkb3RhY2NlbnQKZ2RvdGFjY2VudAxHY29tbWFhY2NlbnQMZ2NvbW1hYWNjZW50C0hjaXJjdW1mbGV4C2hjaXJjdW1mbGV4BEhiYXIEaGJhcgZJdGlsZGUGaXRpbGRlB0ltYWNyb24HaW1hY3JvbgdJb2dvbmVrB2lvZ29uZWsLSmNpcmN1bWZsZXgLamNpcmN1bWZsZXgMS2NvbW1hYWNjZW50DGtjb21tYWFjY2VudAxrZ3JlZW5sYW5kaWMGTGFjdXRlBmxhY3V0ZQxMY29tbWFhY2NlbnQMbGNvbW1hYWNjZW50BkxjYXJvbgZsY2Fyb24GTmFjdXRlBm5hY3V0ZQxOY29tbWFhY2NlbnQMbmNvbW1hYWNjZW50Bk5jYXJvbgZuY2Fyb24DRW5nA2VuZwdPbWFjcm9uB29tYWNyb24NT2h1bmdhcnVtbGF1dA1vaHVuZ2FydW1sYXV0BlJhY3V0ZQZyYWN1dGUMUmNvbW1hYWNjZW50DHJjb21tYWFjY2VudAZSY2Fyb24GcmNhcm9uBlNhY3V0ZQZzYWN1dGULU2NpcmN1bWZsZXgLc2NpcmN1bWZsZXgMVGNvbW1hYWNjZW50DHRjb21tYWFjY2VudAZUY2Fyb24GdGNhcm9uBFRiYXIEdGJhcgZVdGlsZGUGdXRpbGRlB1VtYWNyb24HdW1hY3JvbgZVYnJldmUGdWJyZXZlBVVyaW5nBXVyaW5nDVVodW5nYXJ1bWxhdXQNdWh1bmdhcnVtbGF1dAdVb2dvbmVrB3VvZ29uZWsGWmFjdXRlBnphY3V0ZQpaZG90YWNjZW50Cnpkb3RhY2NlbnQMU2NvbW1hYWNjZW50DHNjb21tYWFjY2VudA1kaWVyZXNpc3Rvbm9zCkFscGhhdG9ub3MMRXBzaWxvbnRvbm9zCEV0YXRvbm9zCUlvdGF0b25vcwxPbWljcm9udG9ub3MMVXBzaWxvbnRvbm9zCk9tZWdhdG9ub3MRaW90YWRpZXJlc2lzdG9ub3MFQWxwaGEEQmV0YQVHYW1tYQd1bmkwMzk0B0Vwc2lsb24EWmV0YQNFdGEFVGhldGEESW90YQVLYXBwYQZMYW1iZGECTXUCTnUCWGkHT21pY3JvbgJQaQNSaG8FU2lnbWEDVGF1B1Vwc2lsb24DUGhpA0NoaQNQc2kMSW90YWRpZXJlc2lzE1Vwc2lsb25kaWVyZXNpc19hbHQKYWxwaGF0b25vcwxlcHNpbG9udG9ub3MIZXRhdG9ub3MJaW90YXRvbm9zFHVwc2lsb25kaWVyZXNpc3Rvbm9zBWFscGhhBGJldGEFZ2FtbWEFZGVsdGEHZXBzaWxvbgR6ZXRhA2V0YQV0aGV0YQRpb3RhBWthcHBhBmxhbWJkYQd1bmkwM0JDAm51AnhpB29taWNyb24DcmhvBnNpZ21hMQVzaWdtYQN0YXUHdXBzaWxvbgNwaGkDY2hpA3BzaQVvbWVnYQxpb3RhZGllcmVzaXMPdXBzaWxvbmRpZXJlc2lzDG9taWNyb250b25vcwx1cHNpbG9udG9ub3MKb21lZ2F0b25vcwRFdXJvA2ZfZgNmX2kDZl9sBWZfZl9sAkNSD1Vwc2lsb25kaWVyZXNpcwRfMTk2BXdfd193A2ZfdAN0X3QFWV9hbHQFeV9hbHQNWWRpZXJlc2lzX2FsdApZYWN1dGVfYWx0CnlhY3V0ZV9hbHQNeWRpZXJlc2lzX2FsdAtVcHNpbG9uX2FsdAhkb3RsZXNzaglzaWdtYV9jaGkJc2lnbWFfdGF1DWxhbWJkYV9sYW1iZGELZ2FtbWFfZ2FtbWELZ2FtbWFfa2FwcGEQVXBzaWxvbnRvbm9zX2FsdAAAAAABAAH//wAPAAAAAQAAAADJiW8xAAAAAMr4L8QAAAAAyvii3gABAAAADAAAABYAHgACAAEAAQGbAAEABAAAAAEAAAACAAEAAAAAAAAAAQAAAAoAJAAyAAJERkxUAA5sYXRuAA4ABAAAAAD//wABAAAAAWtlcm4ACAAAAAEAAAABAAQAAgAAAAEACAABAMoABAAAAGABfAGaAbABtgG8AcIByAHOAdQMUAHaAgQCPgLYAuYDdAPSA/QD+gQoBGoE6AT6BSQFMgXsBhIG2AeeB6gNQggeCEAIXg2sCHgJGg3sCZwJtgn4CiIKMApWCnwKjgtgC24LdAu2DAAMGgxEDEoMUAxQDFAMUAxQDFANHg0kDSoNMA02DTwNQg1CDUINQg1CDUINaA2SDawNrA2sDawN7A3sDewN7A38DfwN/A38DfwN/A3GDewN9g38Dh4OmA6eDqQAAgAdAAUABQAAAAoACgABABUAFwACABkAHAAFACQAJQAJACcAJwALACkAKgAMAC0APAAOAEQASgAeAEwAUwAlAFUAVwAtAFkAXAAwAHEAcQA0AHMAcwA1AHcAfAA2AIEAgQA8AIQAhQA9AIsAiwA/AI0AjQBAAJIAkgBBAJcApgBCAKgArABSAK4ArgBXALUAtQBYAOMA4wBZAP0A/gBaAR4BHgBcASsBKwBdAXQBdQBeAAcAJP9HAHf/RwB4/0cAef9HAHr/RwB7/0cAfP9HAAUABf9lAAr/awBH/tMAT/+TAFf/pwABABb/9wABABf/6gABABj/8wABABr/8wABABv/7QABABz/9gABABMADQAKAA//rQAR/50AJP+/ACb/+wB3/78AeP+/AHn/vwB6/78Ae/+/AHz/vwAOAA//owAR/5IAJP+0ACj/8gA5/7gAOv+zADz/sAB3/7QAeP+0AHn/tAB6/7QAe/+0AHz/tAEe/7AAJgAP/wYAEf76ACT/XQAq//IARP9SAEj/dABM/8AAUv9vAFX/agB3/10AeP9dAHn/XQB6/10Ae/9dAHz/XQCX/1IAmP9SAJn/UgCa/1IAm/9SAJz/UgCd/1IAn/90AKD/dACh/3QAov90AKP/wACk/8AApf/AAKb/wACo/28Aqf9vAKr/bwCr/28ArP9vAK7/bwDj/8AA/v9vAAMAD//aABH/zAAr//gAIwAP/8kAEf+8ACT/0QBE/9EASP/dAFL/3ABY/90Ad//RAHj/0QB5/9EAev/RAHv/0QB8/9EAl//RAJj/0QCZ/9EAmv/RAJv/0QCc/9EAnf/RAJ//3QCg/90Aof/dAKL/3QCo/9wAqf/cAKr/3ACr/9wArP/cAK7/3ACv/90AsP/dALH/3QCy/90A/v/cABcAJv/NAC//+wAy/+kASP/vAFL/6wBY/+0AXP/dAJ//7wCg/+8Aof/vAKL/7wCo/+sAqf/rAKr/6wCr/+sArP/rAK7/6wCv/+0AsP/tALH/7QCy/+0Atf/dAP7/6wAIAAX+/gAK/vQAN/+6ADn/rAA6/7kAPP9OAR7/TgF1/7QAAQAx//UACwAP/8gAEf+6ACT/2gAq//cAMv/zAHf/2gB4/9oAef/aAHr/2gB7/9oAfP/aABAAD//PABH/vQAk/94AMv/9ADP/9QA5/+YAOv/iADv/9wA8/9gAd//eAHj/3gB5/94Aev/eAHv/3gB8/94BHv/YAB8AD/7WABH+xwAk/50AL//6AET/xQBI/9sAUv/XAHf/nQB4/50Aef+dAHr/nQB7/50AfP+dAJf/xQCY/8UAmf/FAJr/xQCb/8UAnP/FAJ3/xQCf/9sAoP/bAKH/2wCi/9sAqP/XAKn/1wCq/9cAq//XAKz/1wCu/9cA/v/XAAQAD/8lABH/CQA1//YAOP8RAAoAMv/cADb/+AA3/90AOP/FADn/3gA6/9gAPP/gAFz/2wC1/9sBHv/gAAMAD//BABH/sAA3//QALgAP/5MAEP+wABH/hQAd/7IAHv+sACT/pgBE/6oARv+jAEj/sgBL//YAUv+xAFX/oQBW/5EAWP+5AFr/twBc/7YAd/+mAHj/pgB5/6YAev+mAHv/pgB8/6YAl/+qAJj/qgCZ/6oAmv+qAJv/qgCc/6oAnf+qAJ7/owCf/7IAoP+yAKH/sgCi/7IAqP+xAKn/sQCq/7EAq/+xAKz/sQCu/7EAr/+5ALD/uQCx/7kAsv+5ALX/tgD+/7EACQAP/60AEf+bACT/vAB3/7wAeP+8AHn/vAB6/7wAe/+8AHz/vAAxAA//gQAQ/7oAEf90AB3/uwAe/6sAJP+OACr/yAAy/98ARP+pAEj/uwBM//MAUv+4AFX/2wBY/98AXP/kAHf/jgB4/44Aef+OAHr/jgB7/44AfP+OAJf/qQCY/6kAmf+pAJr/qQCb/6kAnP+pAJ3/qQCf/7sAoP+7AKH/uwCi/7sAo//zAKT/8wCl//MApv/zAKj/uACp/7gAqv+4AKv/uACs/7gArv+4AK//3wCw/98Asf/fALL/3wC1/+QA4//zAP7/uAAxAA//mwAQ/8cAEf+PAB3/yAAe/74AJP+oADL/5gBE/7sASP/RAEv/6ABM//AAUv/GAFX/7gBY/+AAXP/SAHf/qAB4/6gAef+oAHr/qAB7/6gAfP+oAJf/uwCY/7sAmf+7AJr/uwCb/7sAnP+7AJ3/uwCf/9EAoP/RAKH/0QCi/9EAo//wAKT/8ACl//AApv/wAKj/xgCp/8YAqv/GAKv/xgCs/8YArv/GAK//4ACw/+AAsf/gALL/4AC1/9IA4//wAP7/xgACADz/6gEe/+oAHQAP/8sAEP/SABH/vAAd/9cAHv/eACT/2AAy/9gAUv/lAFP/xgB3/9gAeP/YAHn/2AB6/9gAe//YAHz/2ACX/+IAmP/iAJn/4gCa/+IAm//iAJz/4gCd/+IAqP/lAKn/5QCq/+UAq//lAKz/5QCu/+UA/v/lAAgAD//FABH/tABF/8wAT//LAFH//QBZ/9QAXP/XALX/1wAHABH/6QBH//AAS//eAE7/3wBP/98AXP/oALX/6AAGAEf/+QBIAAYAnwAGAKAABgChAAYAogAGACgABf+/AAr/xgAP/7AAEf+kAET/rgBF//cARv/qAEf/6gBI/80ASf/tAEr/7QBL//QATP/wAE//6wBQ//QAUf/3AFL/xQBT/+oAVP/tAFX/9ABd/+oAl/++AJj/vgCZ/74Amv++AJv/vgCc/74Anf++AJ//1wCg/9cAof/XAKL/1wCo/8UAqf/FAKr/xQCr/8UArP/FAK7/xQD+/8UBdf/6ACAAEf/mAET/+wBI//8ASv/+AEz/6wBS//8AVf/qAFz/8QCX//sAmP/7AJn/+wCa//sAm//7AJz/+wCd//sAn///AKD//wCh//8Aov//AKP/6wCk/+sApf/rAKb/6wCo//8Aqf//AKr//wCr//8ArP//AK7//wC1//EA4//rAP7//wAGAE7/8ABY//AAr//wALD/8ACx//AAsv/wABAASP/pAE//9gBS/90AXP/PAJ//6QCg/+kAof/pAKL/6QCo/90Aqf/dAKr/3QCr/90ArP/dAK7/3QC1/88A/v/dAAoARP/wAFD/8ABa/+gAl//wAJj/8ACZ//AAmv/wAJv/8ACc//AAnf/wAAMAUf/9AFz/2QC1/9kACQBS/+0AWP/OAFn/wwBc/8AAr//OALD/zgCx/84Asv/OALX/wAAJAA//1wAR/8YASv/8AFP/9wBZ/+YAWv/iAFv/5wBc//IAtf/yAAQAD/+9ABH/rABc/9YAtf/WADQAD/9rABD/tgAR/14AHf+3AB7/nQBE/5sARv/LAEf/1ABI/9EASv/PAEz/5QBO/9kAT//bAFD/2wBR/9sAUv/CAFP/2QBU/80AVf/fAFb/ywBX/+8AWP/5AFz/6QCX/5sAmP+bAJn/mwCa/5sAm/+bAJz/mwCd/5sAnv/LAJ//0QCg/9EAof/RAKL/0QCj/+UApP/lAKX/5QCm/+UAqP/CAKn/wgCq/8IAq//CAKz/wgCu/8IAr//5ALD/+QCx//kAsv/5ALX/6QDj/+UA/v/CAAMAD//kABH/1ABa/8oAAQBL//MAEAAP/5cAEf+KAET/xwBF//oASP/cAJf/xwCY/8cAmf/HAJr/xwCb/8cAnP/HAJ3/xwCf/9wAoP/cAKH/3ACi/9wAEgAP/5oAEf+OAET/zABH//0ASP/kAEv/5gBb/+0Al//MAJj/zACZ/8wAmv/MAJv/zACc/8wAnf/MAJ//5ACg/+QAof/kAKL/5AAGAEj/6ACf/+gAoP/oAKH/6ACi/+gAtf/tAAoAEf/WAET/4wBd//cAl//jAJj/4wCZ/+MAmv/jAJv/4wCc/+MAnf/jAAEAm//wAAEBfAAcADMABf9DAAr/OAAl//YAJv/GACr/xgAy/9oANP/XADf/rAA4/74AOf+YADr/qAA8/5UARP/mAEb/5gBH/+gASP/wAFL/5ABT/+oAVP/mAFb/7ABX/+oAWP/nAFn/swBa/7MAXP/YAJf/5gCY/+YAmf/mAJr/5gCb/+YAnP/mAJ3/5gCe/+YAn//wAKD/8ACh//AAov/wAKj/5ACp/+QAqv/kAKv/5ACs/+QArv/kAK//5wCw/+cAsf/nALL/5wC1/9gA/v/kAR7/lQF1/58AAQCC//0AAQCFABcAAQCGAA8AAQCNAAEAAQCJAAEAAQCT//cACQBF/9sASQAGAEr/+QBT/+QAV//0AFn/4QBa/+IAXP/wALX/8AAKAEX/2wBJAAYASv/5AFP/5ABX//QAWf/hAFr/4gBc//AAl//6ALX/8AAGABH/6QBL/94ATv/fAE//3wBc/+gAtf/oAAYAD//WABH/ygBF/9kAU//WAFn/3gBb/+IACQAR/9YARP/jAJf/4wCY/+MAmf/jAJr/4wCb/+MAnP/jAJ3/4wACAEb//QCe//0AAQCK/+0ACAAP/9cAEf/GAEr//ABZ/+YAWv/iAFv/5wBc//IAtf/yAB4AD//LABD/0gAR/7wAHf/XAB7/3gAk/9gAMv/YAET/4gBS/+UAU//GAHf/2AB4/9gAef/YAHr/2AB7/9gAfP/YAJf/4gCY/+IAmf/iAJr/4gCb/+IAnP/iAJ3/4gCo/+UAqf/lAKr/5QCr/+UArP/lAK7/5QD+/+UAAQEuABYAAQF0/6EAAwBW/7YAV//uAXX/oQABAAAACgAiACIAAkRGTFQADmxhdG4ADgAEAAAAAP//AAAAAAAAAAEAAAAA';
