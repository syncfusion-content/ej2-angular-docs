export let sampleData: Object[] =  [
    {
        taskID: 1,
        taskName: '<b>Planning</b>',
        startDate:  new Date(1696937e6),
        endDate: new Date(1598763e6),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: '<b>Plan timeline</b>', startDate: new Date(1536944e6), 
                endDate: new Date(1536951e6), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: '<b>Plan budget</b>', startDate: new Date(1537951e6), 
                endDate:  new Date(1538951e6), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: '<b>Allocate resources</b>', startDate: new Date(1536958e6), 
                endDate: new Date(1535565e6), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: '<b>Planning complete</b>', startDate: new Date(1538751e6),
                endDate: new Date(1537781e6), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: '<b>Design</b>',
        startDate: new Date(1638958e6),
        endDate: new Date(1636679e6),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: '<b>Software Specification</b>', startDate: new Date(1634965e6),
                endDate: new Date(1636586e6), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: '<b>Develop prototype</b>', startDate:new Date(1637972e6),
                endDate: new Date(1638993e6), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: '<b>Get approval from customer</b>', startDate: new Date(1633979e6),
                endDate: new Date(1637800e6), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: '<b>Design Documentation</b>', startDate:  new Date(1636986e6), 
                endDate: new Date(1637027e6), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: '<b>Design complete</b>', startDate: new Date(1636393e6),  
                endDate: new Date(1637314e6), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: '<b>Implementation Phase</b>',
        startDate:  new Date(1637000e6),
        endDate: new Date(1637021e6),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
        subtasks: [
            {
                taskID: 13,
                taskName: '<b>Phase 1</b>',
                startDate: new Date(1637607e6),
                endDate: new Date(16370548e6),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: '<b>Implementation Module 1</b>',
                    startDate: new Date(1637714e6),
                    endDate: new Date(16370235e6),
                    priority: 'Normal',
                    duration: 11,
                    progress: 10,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: '<b>Development Task 1</b>', startDate: new Date(1737021e6),
                            endDate:  new Date(1737042e6), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: '<b>Development Task 2</b>', startDate: new Date('02/17/2023'),
                            endDate:  new Date(1737635e6),  duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: '<b>Testing</b>', startDate: new Date(1737028e6),
                            endDate:new Date(17372328e6),duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: '<b>Bug fix</b>', startDate: new Date(1737035e6),
                            endDate: new Date(1737621e6),  duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: '<b>Customer review meeting</b>', startDate: new Date(1737042e6),
                            endDate:  new Date(1735014e6), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: '<b>Phase 1 complete</b>', startDate: new Date(1737035e6),
                            endDate:  new Date(1737057e6), duration: 0, progress: '50', priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: '<b>Phase 2</b>',
                startDate: new Date(1737028e6),
                endDate: new Date(1737050e6),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 60,
                subtasks: [{
                    taskID: 22,
                    taskName: '<b>Implementation Module 2</b>',
                    startDate: new Date(1735021e6),
                    endDate: new Date(1736993e6),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
                    subtasks: [
                        { taskID: 23, taskName: '<b>Development Task 1</b>', startDate: new Date(1737014e6),
                            endDate: new Date(1737007e6), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: '<b>Development Task 2</b>', startDate: new Date(1736007e6),
                            endDate: new Date(1735014e6), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: '<b>Testing</b>', startDate: new Date(1737000e6),
                            endDate:  new Date(1734021e6), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: '<b>Bug fix</b>', startDate:  new Date(1737993e6),
                            endDate: new Date(1733028e6), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: '<b>Customer review meeting</b>', startDate: new Date(1736886e6),
                            endDate:  new Date(1736986e6), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: '<b>Phase 2 complete</b>', startDate: new Date(1735979e6),
                            endDate: new Date(1733979e6), duration: 0, progress: '50', priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: '<b>Phase 3</b>',
                startDate:  new Date(1736971e6),
                endDate: new Date(1736972e6), 
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 30,
                subtasks: [{
                    taskID: 30,
                    taskName: '<b>Implementation Module 3</b>',
                    startDate: new Date(1736965e6),
                    endDate: new Date(1736965e6),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    progress: 60,
                    subtasks: [
                        { taskID: 31, taskName: '<b>Development Task 1</b>', startDate: new Date(1736957e6),
                            endDate: new Date(1736958e6), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: '<b>Development Task 2</b>', startDate:  new Date(1736951e6),
                            endDate: new Date(1736951e6),  duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: '<b>Testing</b>', startDate:new Date(1736943e6),
                            endDate: new Date(1736944e6), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: '<b>Bug fix</b>', startDate: new Date(1736937e6),
                            endDate: new Date(1736937e6),  duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: '<b>Customer review meeting</b>', startDate:  new Date(1736944e6),
                            endDate:  new Date(1736943e6), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: '<b>Phase 3 complete</b>', startDate:  new Date(1736944e6),
                            endDate:  new Date(1736951e6),duration: 0, progress: '50', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];