/**
 * TreeGrid DataSource
 */
export let GanttData: Object[]  = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),  work1: 'Testing', work2: 'Testing', work3: 'support', work4: 'consulting',
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, work1: 'consulting', work2: 'development', work3: 'development', work4: 'support', },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, work1: 'support', work2: 'support', work3: 'support', work4: 'development', },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, work1: 'Testing', work2: 'support', work3: 'development', work4: 'consulting', },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'), work1: 'Testing', work2: 'Testing', work3: 'development', work4: 'development',
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, work1: 'support', work2: 'support', work3: 'support', work4: 'consulting', },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, work1: 'consulting', work2: 'Testing', work3: 'development', work4: 'consulting', },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50,  work1: 'Testing', work2: 'support', work3: 'support', work4: 'development', }
        ]
    },
];