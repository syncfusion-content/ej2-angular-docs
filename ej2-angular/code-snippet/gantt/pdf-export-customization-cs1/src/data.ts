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
export let image: string = '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';

export let editingData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 90 },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: 2, ParentID: 1, Progress: 40 },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 10 },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 85 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 15 },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 70 }
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