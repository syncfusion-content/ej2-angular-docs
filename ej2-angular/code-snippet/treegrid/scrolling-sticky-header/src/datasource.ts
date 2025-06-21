export let sampleData: Object[] =  [
    {
        TaskID: 1,
        TaskName: 'Planning',
        StartDate: new Date('02/03/2017'),
        EndDate: new Date('02/07/2017'),
        Progress: 100,
        Duration: 5,
        Priority: 'Normal',
        Approved: false,
        SubTasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/03/2017'),
                EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, Priority: 'Normal', Approved: false },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/03/2017'),
                EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, Priority: 'Low', Approved: true },
            { TaskID: 4, TaskName: 'Allocate resources', StartDate: new Date('02/03/2017'),
                EndDate: new Date('02/07/2017'), Duration: 5, Progress: 100, Priority: 'Critical', Approved: false },
            { TaskID: 5, TaskName: 'Planning complete', StartDate: new Date('02/07/2017'),
                EndDate: new Date('02/07/2017'), Duration: 0, Progress: 0, Priority: 'Low', Approved: true }
        ]
    },
    {
        TaskID: 6,
        TaskName: 'Design',
        StartDate: new Date('02/10/2017'),
        EndDate: new Date('02/14/2017'),
        Duration: 3,
        Progress: 86,
        Priority: 'High',
        Approved: false,
        SubTasks: [
            { TaskID: 7, TaskName: 'Software Specification', StartDate: new Date('02/10/2017'),
                EndDate: new Date('02/12/2017'), Duration: 3, Progress: 60, Priority: 'Normal', Approved: false },
            { TaskID: 8, TaskName: 'Develop prototype', StartDate: new Date('02/10/2017'),
                EndDate: new Date('02/12/2017'), Duration: 3, Progress: 100, Priority: 'Critical', Approved: false },
            { TaskID: 9, TaskName: 'Get approval from customer', StartDate: new Date('02/13/2017'),
                EndDate: new Date('02/14/2017'), Duration: 2, Progress: 100, Priority: 'Low', Approved: true },
            { TaskID: 10, TaskName: 'Design Documentation', StartDate: new Date('02/13/2017'),
                EndDate: new Date('02/14/2017'), Duration: 2, Progress: 100, Priority: 'High', Approved: true },
            { TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/14/2017'),
                EndDate: new Date('02/14/2017'), Duration: 0, Progress: 0, Priority: 'Normal', Approved: true }
        ]
    },
    {
        TaskID: 12,
        TaskName: 'Implementation Phase',
        StartDate: new Date('02/17/2017'),
        EndDate: new Date('02/27/2017'),
        Priority: 'Normal',
        Approved: false,
        Duration: 11,
        Progress: 66,
        SubTasks: [
            {
                TaskID: 13,
                TaskName: 'Phase 1',
                StartDate: new Date('02/17/2017'),
                EndDate: new Date('02/27/2017'),
                Priority: 'High',
                Approved: false,
                Progress: 50,
                Duration: 11,
                SubTasks: [{
                    TaskID: 14,
                    TaskName: 'Implementation Module 1',
                    StartDate: new Date('02/17/2017'),
                    EndDate: new Date('02/27/2017'),
                    Priority: 'Normal',
                    Duration: 11,
                    Progress: 10,
                    Approved: false,
                    SubTasks: [
                        { TaskID: 15, TaskName: 'Development Task 1', StartDate: new Date('02/17/2017'),
                            EndDate: new Date('02/19/2017'), Duration: 3, Progress: '50', Priority: 'High', Approved: false },
                        { TaskID: 16, TaskName: 'Development Task 2', StartDate: new Date('02/17/2017'),
                            EndDate: new Date('02/19/2017'), Duration: 3, Progress: '50', Priority: 'Low', Approved: true },
                        { TaskID: 17, TaskName: 'Testing', StartDate: new Date('02/20/2017'),
                            EndDate: new Date('02/21/2017'), Duration: 2, Progress: '0', Priority: 'Normal', Approved: true },
                        { TaskID: 18, TaskName: 'Bug fix', StartDate: new Date('02/24/2017'),
                            EndDate: new Date('02/25/2017'), Duration: 2, Progress: '0', Priority: 'Critical', Approved: false },
                        { TaskID: 19, TaskName: 'Customer review meeting', StartDate: new Date('02/26/2017'),
                            EndDate: new Date('02/27/2017'), Duration: 2, Progress: '0', Priority: 'High', Approved: false },
                        { TaskID: 20, TaskName: 'Phase 1 complete', StartDate: new Date('02/27/2017'),
                            EndDate: new Date('02/27/2017'), Duration: 0, Progress: '50', Priority: 'Low', Approved: true }

                    ]
                }]
            },
            {
                TaskID: 21,
                TaskName: 'Phase 2',
                StartDate: new Date('02/17/2017'),
                EndDate: new Date('02/28/2017'),
                Priority: 'High',
                Approved: false,
                Duration: 12,
                Progress: 60,
                SubTasks: [{
                    TaskID: 22,
                    TaskName: 'Implementation Module 2',
                    StartDate: new Date('02/17/2017'),
                    EndDate: new Date('02/28/2017'),
                    Priority: 'Critical',
                    Approved: false,
                    Duration: 12,
                    Progress: 90,
                    SubTasks: [
                        { TaskID: 23, TaskName: 'Development Task 1', StartDate: new Date('02/17/2017'),
                            EndDate: new Date('02/20/2017'), Duration: 4, Progress: '50', Priority: 'Normal', Approved: true },
                        { TaskID: 24, TaskName: 'Development Task 2', StartDate: new Date('02/17/2017'),
                            EndDate: new Date('02/20/2017'), Duration: 4, Progress: '50', Priority: 'Critical', Approved: true },
                        { TaskID: 25, TaskName: 'Testing', StartDate: new Date('02/21/2017'),
                            EndDate: new Date('02/24/2017'), Duration: 2, Progress: '0', Priority: 'High', Approved: false },
                        { TaskID: 26, TaskName: 'Bug fix', StartDate: new Date('02/25/2017'),
                            EndDate: new Date('02/26/2017'), Duration: 2, Progress: '0', Priority: 'Low', Approved: false },
                        { TaskID: 27, TaskName: 'Customer review meeting', StartDate: new Date('02/27/2017'),
                            EndDate: new Date('02/28/2017'), Duration: 2, Progress: '0', Priority: 'Critical', Approved: true },
                        { TaskID: 28, TaskName: 'Phase 2 complete', StartDate: new Date('02/28/2017'),
                            EndDate: new Date('02/28/2017'), Duration: 0, Progress: '50', Priority: 'Normal', Approved: false }

                    ]
                }]
            },

            {
                TaskID: 29,
                TaskName: 'Phase 3',
                StartDate: new Date('02/17/2017'),
                EndDate: new Date('02/27/2017'),
                Priority: 'Normal',
                Approved: false,
                Duration: 11,
                Progress: 30,
                SubTasks: [{
                    TaskID: 30,
                    TaskName: 'Implementation Module 3',
                    StartDate: new Date('02/17/2017'),
                    EndDate: new Date('02/27/2017'),
                    Priority: 'High',
                    Approved: false,
                    Duration: 11,
                    Progress: 60,
                    SubTasks: [
                        { TaskID: 31, TaskName: 'Development Task 1', StartDate: new Date('02/17/2017'),
                            EndDate: new Date('02/19/2017'), Duration: 3, Progress: '50', Priority: 'Low', Approved: true },
                        { TaskID: 32, TaskName: 'Development Task 2', StartDate: new Date('02/17/2017'),
                            EndDate: new Date('02/19/2017'), Duration: 3, Progress: '50', Priority: 'Normal', Approved: false },
                        { TaskID: 33, TaskName: 'Testing', StartDate: new Date('02/20/2017'),
                            EndDate: new Date('02/21/2017'), Duration: 2, Progress: '0', Priority: 'Critical', Approved: true },
                        { TaskID: 34, TaskName: 'Bug fix', StartDate: new Date('02/24/2017'),
                            EndDate: new Date('02/25/2017'), Duration: 2, Progress: '0', Priority: 'High', Approved: false },
                        { TaskID: 35, TaskName: 'Customer review meeting', StartDate: new Date('02/26/2017'),
                            EndDate: new Date('02/27/2017'), Duration: 2, Progress: '0', Priority: 'Normal', Approved: true },
                        { TaskID: 36, TaskName: 'Phase 3 complete', StartDate: new Date('02/27/2017'),
                            EndDate: new Date('02/27/2017'), Duration: 0, Progress: '50', Priority: 'Critical', Approved: false },
                    ]
                }]
            }
        ]
    }
];
