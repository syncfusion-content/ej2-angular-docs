/**
 * TreeGrid DataSource
 */

export let projectNewData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
            {
                TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2,
                Predecessor: '2', Progress: 30
            },
        ]
    },
    {
        TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4',
        Indicators: [
            {
                'date': '04/10/2019',
                'name': '#briefing',
                'title': 'Product concept breifing',
            }
        ]
    },
    {
        TaskID: 6,
        TaskName: 'Market Research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 7,
                TaskName: 'Demand Analysis',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4,
                        Predecessor: '5', Progress: 30
                    },
                    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5' }
                ]
            },
            {
                TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4,
                Predecessor: '7, 8', Progress: 30
            },
            { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '9' },
            {
                TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '10',
                Indicators: [
                    {
                        'date': '04/20/2019',
                        'name': '#meeting',
                        'title': '1st board of directors meeting',
                    }
                ]
            }
        ]
    },
    {
        TaskID: 13,
        TaskName: 'Product Design and Development',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '12'
            },
            { TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '12' },
            { TaskID: 16, TaskName: 'Define Reliability', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '15' },
            { TaskID: 17, TaskName: 'Identifying raw materials', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '15' },
            {
                TaskID: 18,
                TaskName: 'Define cost plan',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'),
                        Duration: 2, Progress: 30, Predecessor: '17'
                    },
                    { TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '17' }
                ]
            },
            {
                TaskID: 21,
                TaskName: 'Development of the final design',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'),
                        Duration: 2, Progress: 30, Predecessor: '19,20'
                    },
                    {
                        TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'),
                        Duration: 2, Predecessor: '22'
                    },
                    { TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '23' }
                ]
            },
            {
                TaskID: 25, TaskName: 'CAD Computer-aided design', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '24'
            },
            { TaskID: 26, TaskName: 'CAM Computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '25' },
            {
                TaskID: 27, TaskName: 'Design complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '26',
                Indicators: [
                    {
                        'date': '05/18/2019',
                        'name': '#meeting',
                        'title': '2nd board of directors meeting',
                    }
                ]
            }

        ]
    },
    { TaskID: 28, TaskName: 'Prototype Testing', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '27' },
    { TaskID: 29, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '28ss' },
    { TaskID: 30, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30, Predecessor: '28,29' },
    { TaskID: 31, TaskName: 'Assembling materials to finsihed goods', StartDate: new Date('04/04/2019'), Duration: 5, Predecessor: '30' },
    {
        TaskID: 32,
        TaskName: 'Feedback and Testing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 33, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 45, Predecessor: '31'
            },
            {
                TaskID: 34, TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 50, Predecessor: '33'
            }
        ]
    },
    {
        TaskID: 35,
        TaskName: 'Final Product Development',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 36, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'),
                Duration: 4, Progress: 30, Predecessor: '34'
            },
            {
                TaskID: 37, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'),
                Duration: 4, Progress: 30, Predecessor: '36ss'
            }
        ]
    },
    {
        TaskID: 38,
        TaskName: 'Final Product',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 39, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '37' },
            {
                TaskID: 40, TaskName: 'Marketing and presales', StartDate: new Date('04/04/2019'),
                Duration: 4, Progress: 30, Predecessor: '39'
            }
        ]
    }
];

