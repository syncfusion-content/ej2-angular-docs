/**
 * TreeGrid DataSource
 */
export let sampleData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5.67,
        priority: 'Normal',
        approved: false,
        postalCode:'87650',
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), postalCode:'76543',
                endDate: new Date('02/07/2017'), duration: 15.87, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), postalCode:'65329',
                endDate: new Date('02/07/2017'), duration: 64.98, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),postalCode:'87654',
                endDate: new Date('02/07/2017'), duration: 34.90, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),postalCode:'87321',
                endDate: new Date('02/07/2017'), duration: 22.77, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 37.98,
        progress: 86,
        priority: 'High',
        approved: false,
        postalCode:'65709',
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),postalCode:'90876',
                endDate: new Date('02/12/2017'), duration: 45.95, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),postalCode:'89075',
                endDate: new Date('02/12/2017'), duration: 24.86, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),postalCode:'67808',
                endDate: new Date('02/14/2017'), duration: 28.94, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),postalCode:'76543',
                endDate: new Date('02/14/2017'), duration: 26.92, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'), postalCode:'563489',
                endDate: new Date('02/14/2017'), duration: 37.76, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11.76,
        progress: 66,
        postalCode:'987654',
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 15.86,
                postalCode:'87654',
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 16.89,
                    progress: 10,
                    approved: false,
                    postalCode:'98765',
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),postalCode:'98345',
                            endDate: new Date('02/19/2017'), duration: 67.89, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),postalCode:'54678',
                            endDate: new Date('02/19/2017'), duration: 45.96, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'),postalCode:'87654',
                            endDate: new Date('02/21/2017'), duration: 64.97, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'),postalCode:'65432',
                            endDate: new Date('02/25/2017'), duration: 33.67, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),postalCode:'97625',
                            endDate: new Date('02/27/2017'), duration: 25.34, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'),postalCode:'65109',
                            endDate: new Date('02/27/2017'), duration: 89.76, progress: '50', priority: 'Low', approved: true }

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
                duration: 12.78,
                postalCode:'76543',
                progress: 60,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 67.98,
                    postalCode:'76541',
                    progress: 90,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),postalCode:'61239',
                            endDate: new Date('02/20/2017'), duration: 64.87, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),postalCode:'74190',
                            endDate: new Date('02/20/2017'), duration: 75.29, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'),postalCode:'27906',
                            endDate: new Date('02/24/2017'), duration: 65.23, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'),postalCode:'25679',
                            endDate: new Date('02/26/2017'), duration: 78.92, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),postalCode:'43218',
                            endDate: new Date('02/28/2017'), duration: 56.98, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),postalCode:'59075',
                            endDate: new Date('02/28/2017'), duration: 34.70, progress: '50', priority: 'Normal', approved: false }

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
                duration: 11.86,
                progress: 30,
                postalCode:'90876',
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 65.72,
                    progress: 60,
                    postalCode:'58908',
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),postalCode:'65218',
                            endDate: new Date('02/19/2017'), duration:45.03, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),postalCode:'65190',
                            endDate: new Date('02/19/2017'), duration: 65.29, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'),postalCode:'87642',
                            endDate: new Date('02/21/2017'), duration: 89.56, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'),postalCode:'93160',
                            endDate: new Date('02/25/2017'), duration: 73.68, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),postalCode:'76410',
                            endDate: new Date('02/27/2017'), duration: 92.58, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'),postalCode:'83219',
                            endDate: new Date('02/27/2017'), duration: 75.89, progress: '50', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];

export let dropdowndata =['Planning','Plan timeline','Plan budget','Allocate resources','Planning complete',
'Design','Software Specification','Develop prototype', 'Get approval from customer','Design Documentation','Design complete',
'Implementation Phase','Phase 1','Implementation Module 1','Development Task 1', 'Development Task 2','Testing',
'Bug fix','Customer review meeting', 'Phase 1 complete', 'Phase 2','Implementation Module 2','Phase 2 complete', 
'Phase 3','Implementation Module 3', 'Phase 3 complete',
];