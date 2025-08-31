/**
 * TreeGrid DataSource
 */
export let WBSData: Object[]  = [
    {
        TaskID: 1,
        TaskName: 'Product concept',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024')
    },
    {
        TaskID: 2,
        TaskName: 'Defining the product and its usage',
        StartDate: new Date('04/02/2024'),
        Duration: 3,
        Progress: 30,
        ParentId: 1
    },
    {
        TaskID: 3,
        TaskName: 'Defining target audience',
        StartDate: new Date('04/02/2024'),
        Duration: 3,
        ParentId: 1
    },
    {
        TaskID: 4,
        TaskName: 'Prepare product sketch and notes',
        StartDate: new Date('04/02/2024'),
        Duration: 2,
        Progress: 30,
        Predecessor: '2FS+1',
        ParentId: 1
    },
    {
        TaskID: 5,
        TaskName: 'Manufacturing cost',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        Progress: 30,
        ParentId: 4
    },
    {
        TaskID: 6,
        TaskName: 'Selling cost',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        ParentId: 4
    },
    {
        TaskID: 7,
        TaskName: 'Selling Items',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        ParentId: 6
    },
    {
        TaskID: 8,
        TaskName: 'Market research',
        StartDate: new Date('04/02/2024'),
        EndDate: new Date('04/21/2024')
    },
    {
        TaskID: 9,
        TaskName: 'Demand analysis',
        StartDate: new Date('04/04/2024'),
        EndDate: new Date('04/21/2024'),
        ParentId: 8
    },
    {
        TaskID: 10,
        TaskName: 'Customer strength',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Progress: 30,
        Predecessor: '5',
        ParentId: 9
    },
    {
        TaskID: 11,
        TaskName: 'Market opportunity analysis',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Predecessor: '5',
        ParentId: 9
    },
    {
        TaskID: 12,
        TaskName: 'Competitor analysis',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Predecessor: '7, 8',
        Progress: 30,
        ParentId: 8
    },
    {
        TaskID: 13,
        TaskName: 'Product strength analsysis',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Predecessor: '9',
        ParentId: 8
    },
    {
        TaskID: 14,
        TaskName: 'Research complete',
        StartDate: new Date('04/04/2024'),
        Duration: 0,
        Predecessor: '10',
        ParentId: 8,
        Indicators: [
            {
                'date': new Date('04/27/2024'),
                'name': 'Research completed',
                'tooltip': 'Research completed',
                'iconClass': 'description e-icons'
            }
        ]
    },
    {
        TaskID: 15,
        TaskName: 'Product design and development',
        StartDate: new Date('04/04/2024'),
        EndDate: new Date('04/21/2024')
    },
    {
        TaskID: 16,
        TaskName: 'Functionality design',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Progress: 30,
        Predecessor: '12',
        ParentId: 15
    },
    {
        TaskID: 17,
        TaskName: 'Quality design',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Predecessor: '12',
        ParentId: 15
    },
    {
        TaskID: 18,
        TaskName: 'Define reliability',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        Progress: 30,
        Predecessor: '15',
        ParentId: 15
    },
    {
        TaskID: 19,
        TaskName: 'Identifying raw materials',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        Predecessor: '14',
        ParentId: 15
    },
    {
        TaskID: 20,
        TaskName: 'Define cost plan',
        StartDate: new Date('04/04/2024'),
        EndDate: new Date('04/21/2024'),
        ParentId: 15
    },
    {
        TaskID: 21,
        TaskName: 'Manufacturing cost',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        Progress: 30,
        Predecessor: '17',
        ParentId: 20
    },
    {
        TaskID: 22,
        TaskName: 'Selling cost',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        Predecessor: '17',
        ParentId: 20
    },
    {
        TaskID: 23,
        TaskName: 'Development of the final design',
        StartDate: new Date('04/04/2024'),
        EndDate: new Date('04/21/2024'),
        ParentId: 15
    },
    {
        TaskID: 24,
        TaskName: 'Defining dimensions and package volume',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
         Predecessor: '19, 20',
        Progress: 30,
        ParentId: 23
    },
    {
        TaskID: 25,
        TaskName: 'Develop design to meet industry standards',
        StartDate: new Date('04/04/2024'),
        Duration: 2,
        Predecessor: '22',
        ParentId: 23
    },
    {
        TaskID: 26,
        TaskName: 'Include all the details',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Predecessor: '23',
        ParentId: 23
    },
    {
        TaskID: 27,
        TaskName: 'CAD computer-aided design',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Progress: 30,
        Predecessor: '24',
        ParentId: 15
    },
    {
        TaskID: 28,
        TaskName: 'CAM computer-aided manufacturing',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Predecessor: '25',
        ParentId: 15
    },
    {
        TaskID: 29,
        TaskName: 'Design complete',
        StartDate: new Date('04/04/2024'),
        Duration: 0,
        Predecessor: '26',
        ParentId: 15
    },
    {
        TaskID: 30,
        TaskName: 'Prototype testing',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Progress: 30,
        Predecessor: '27'
    },
    {
        TaskID: 31,
        TaskName: 'Include feedback',
        StartDate: new Date('04/04/2024'),
        Predecessor: '28',
        Duration: 4,
        Indicators: [
            {
                'date': new Date('05/31/2024'),
                'name': 'Production phase',
                'tooltip': 'Production phase completed',
                'iconClass': 'okIcon e-icons'
            }
        ]
    },
    {
        TaskID: 32,
        TaskName: 'Manufacturing',
        StartDate: new Date('04/04/2024'),
        Duration: 5,
        Progress: 30,
        Predecessor: '28,29'
    },
    {
        TaskID: 33,
        TaskName: 'Assembling materials to finsihed goods',
        StartDate: new Date('04/04/2024'),
        Duration: 5,
        Predecessor: '30'
    },
    {
        TaskID: 34,
        TaskName: 'Feedback and testing',
        StartDate: new Date('04/04/2024'),
        EndDate: new Date('04/21/2024')
    },
    {
        TaskID: 35,
        TaskName: 'Internal testing and feedback',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Progress: 45,
        Predecessor: '31',
        ParentId: 34
    },
    {
        TaskID: 36,
        TaskName: 'Customer testing and feedback',
        StartDate: new Date('04/04/2024'),
        Duration: 3,
        Progress: 50,
        Predecessor: '33',
        ParentId: 34
    },
    {
        TaskID: 37,
        TaskName: 'Final product development',
        StartDate: new Date('04/04/2024'),
        EndDate: new Date('04/21/2024')
    },
    {
        TaskID: 38,
        TaskName: 'Important improvements',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Progress: 30,
        Predecessor: '34',
        ParentId: 37
    },
    {
        TaskID: 39,
        TaskName: 'Address any unforeseen issues',
        StartDate: new Date('04/04/2024'),
        Duration: 4,
        Progress: 30,
        Predecessor: '36',
        ParentId: 37,
        Indicators: [
            {
                'date': new Date('06/28/2024'),
                'name': 'Sales and marketing',
                'tooltip': 'Sales and marketing',
                'iconClass': 'description e-icons'
            }
        ]
    }
];
