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

export let editingData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 40  },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 10 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 85 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 15 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 }
        ]
    },
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