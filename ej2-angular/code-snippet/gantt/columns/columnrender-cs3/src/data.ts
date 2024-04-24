/**
 * TreeGrid DataSource
 */
export let GanttData: Object[]  = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        Name: [{firstName: 'Nancy'}, {lastName: 'Davolio'}],
        subtasks: [
            {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, Name: [{firstName: 'Andrew'}, { lastName: 'Fuller'}] },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, Name: [{firstName: 'Janet'}, { lastName: 'Leverling'}] },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, Name: [{firstName: 'Margaret'}, { lastName: 'Peacock'}] },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        Name: [{firstName: 'Steven'}, { lastName: 'Buchanan'}],
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, Name: [{firstName: 'Robert'}, { lastName: 'King'}] },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, Name: [{firstName: 'Tamer'}, { lastName: 'Nancy'}] },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, Name: [{firstName: 'Laura'}, { lastName: 'Martin'}] }
        ]
    },
];
