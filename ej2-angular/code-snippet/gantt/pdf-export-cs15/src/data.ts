/**
 * Gantt DataSource
 */

export let editingResources: Object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];
var indicatorImage = "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";

export let editingData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        Indicators: [
            {
                'date': '04/11/2019',
                'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                'name': 'Indicator title',
                'base64': indicatorImage,
            }
        ],
    }, 
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID:1, Progress: 90 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID:1, Progress: 40 },
    { TaskID: 4, Predecessor: '3FS', TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID:1, Progress: 10 },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/10/2019'),
        Indicators: [
            {
                'date': '04/13/2019',
                'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                'name': 'Indicator title',
                'base64': indicatorImage,
            }
        ],
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID:5, Progress: 85 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID:5, Progress: 15 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID:5, Progress: 70 }
];


export let projectResources: Object[] = [
    { resourceId: 1, resourceName: 'Project Manager' },
    { resourceId: 2, resourceName: 'Software Analyst' },
    { resourceId: 3, resourceName: 'Developer' },
    { resourceId: 4, resourceName: 'Testing Engineer' }
];

export let projectData: Object[] = [
    {
        taskID: 1,
        taskName: 'Project Schedule',
        startDate: new Date('02/08/2019'),
        endDate: new Date('03/15/2019'),
        subtasks: [
            {
                taskID: 2,
                taskName: 'Planning',
                startDate: new Date('02/08/2019'),
                endDate: new Date('02/12/2019'),
                subtasks: [
                    {
                        taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/08/2019'),
                        endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                    },
                    {
                        taskID: 4, taskName: 'Plan budget', startDate: new Date('02/08/2019'),
                        endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                    },
                    {
                        taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/08/2019'),
                        endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                    },
                    {
                        taskID: 6, taskName: 'Planning complete', startDate: new Date('02/10/2019'),
                        endDate: new Date('02/10/2019'), duration: 0, predecessor: '3FS,4FS,5FS'
                    }
                ]
            },
        ]
    }
];