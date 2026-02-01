export let ProjectResources: Object[] = [
    { resourceID: 1, resourceName: 'Martin Tamer' },
    { resourceID: 2, resourceName: 'Rose Fuller' },
    { resourceID: 3, resourceName: 'Margaret Buchanan' },
    { resourceID: 4, resourceName: 'Fuller King' },
    { resourceID: 5, resourceName: 'Davolio Fuller' },
    { resourceID: 6, resourceName: 'Van Jack' },
    { resourceID: 7, resourceName: 'Fuller Buchanan' },
    { resourceID: 8, resourceName: 'Jack Davolio' },
    { resourceID: 9, resourceName: 'Tamer Vinet' },
    { resourceID: 10, resourceName: 'Vinet Fuller' },
    { resourceID: 11, resourceName: 'Bergs Anton' },
    { resourceID: 12, resourceName: 'Construction Supervisor' }
];

export let data: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, resources: [1] },
    { TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, resources: [2] },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, resources: [3] },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, resources: [4] },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, resources: [3], Progress: 50 },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50
    }];
