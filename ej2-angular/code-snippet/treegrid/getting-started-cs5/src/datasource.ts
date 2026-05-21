export let data: object[] = [
    {
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4 },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4 },
            { TaskID: 4, TaskName: 'Allocate resources', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4 },
            { TaskID: 5, TaskName: 'Planning complete', StartDate: new Date('02/07/2025'), EndDate: new Date('02/07/2025'), Duration: 1 },
        ],
    },
    {
        TaskID: 6, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 7, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3 },
            { TaskID: 8, TaskName: 'Develop prototype', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3 },
            { TaskID: 9, TaskName: 'Get approval from customer', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2 },
            { TaskID: 10, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2 },
            { TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    },
    {
        TaskID: 12, TaskName: 'Implementation Phase', StartDate: new Date('02/17/2025'), EndDate: new Date('02/28/2025'), Duration: 12,
        subtasks: [
            {
                TaskID: 13, TaskName: 'Phase 1', StartDate: new Date('02/17/2025'), EndDate: new Date('02/27/2025'), Duration: 11,
                subtasks: [
                    {
                        TaskID: 14, TaskName: 'Implementation Module 1',
                        StartDate: new Date('02/17/2025'), EndDate: new Date('02/27/2025'), Duration: 11,
                        subtasks: [
                            { TaskID: 15, TaskName: 'Development Task 1', StartDate: new Date('02/17/2025'), EndDate: new Date('02/19/2025'), Duration: 3 },
                            { TaskID: 16, TaskName: 'Development Task 2', StartDate: new Date('02/17/2025'), EndDate: new Date('02/19/2025'), Duration: 3 },
                            { TaskID: 17, TaskName: 'Testing', StartDate: new Date('02/20/2025'), EndDate: new Date('02/21/2025'), Duration: 2 },
                            { TaskID: 18, TaskName: 'Bug fix', StartDate: new Date('02/24/2025'), EndDate: new Date('02/25/2025'), Duration: 2 },
                            { TaskID: 19, TaskName: 'Customer review meeting', StartDate: new Date('02/26/2025'), EndDate: new Date('02/27/2025'), Duration: 2 },
                            { TaskID: 20, TaskName: 'Phase 1 complete', StartDate: new Date('02/27/2025'), EndDate: new Date('02/27/2025'), Duration: 1 },
                        ],
                    },
                ],
            },
            {
                TaskID: 21, TaskName: 'Phase 2', StartDate: new Date('02/17/2025'), EndDate: new Date('02/28/2025'), Duration: 12,
                subtasks: [
                    {
                        TaskID: 22, TaskName: 'Implementation Module 2', StartDate: new Date('02/17/2025'), EndDate: new Date('02/28/2025'), Duration: 12,
                        subtasks: [
                            { TaskID: 23, TaskName: 'Development Task 1', StartDate: new Date('02/17/2025'), EndDate: new Date('02/20/2025'), Duration: 4 },
                            { TaskID: 24, TaskName: 'Development Task 2', StartDate: new Date('02/17/2025'), EndDate: new Date('02/20/2025'), Duration: 4 },
                            { TaskID: 25, TaskName: 'Testing', StartDate: new Date('02/21/2025'), EndDate: new Date('02/24/2025'), Duration: 2 },
                            { TaskID: 26, TaskName: 'Bug fix', StartDate: new Date('02/25/2025'), EndDate: new Date('02/26/2025'), Duration: 2 },
                            { TaskID: 27, TaskName: 'Customer review meeting', StartDate: new Date('02/27/2025'), EndDate: new Date('02/28/2025'), Duration: 2 },
                            { TaskID: 28, TaskName: 'Phase 2 complete', StartDate: new Date('02/28/2025'), EndDate: new Date('02/28/2025'), Duration: 1 },
                        ],
                    },
                ],
            },
            {
                TaskID: 29, TaskName: 'Phase 3', StartDate: new Date('02/17/2025'), EndDate: new Date('02/27/2025'), Duration: 11,
                subtasks: [
                    {
                        TaskID: 30, TaskName: 'Implementation Module 3',
                        StartDate: new Date('02/17/2025'), EndDate: new Date('02/27/2025'), Duration: 11,
                        subtasks: [
                            { TaskID: 31, TaskName: 'Development Task 1', StartDate: new Date('02/17/2025'), EndDate: new Date('02/19/2025'), Duration: 3 },
                            { TaskID: 32, TaskName: 'Development Task 2', StartDate: new Date('02/17/2025'), EndDate: new Date('02/19/2025'), Duration: 3 },
                            { TaskID: 33, TaskName: 'Testing', StartDate: new Date('02/20/2025'), EndDate: new Date('02/21/2025'), Duration: 2 },
                            { TaskID: 34, TaskName: 'Bug fix', StartDate: new Date('02/24/2025'), EndDate: new Date('02/25/2025'), Duration: 2 },
                            { TaskID: 35, TaskName: 'Customer review meeting', StartDate: new Date('02/26/2025'), EndDate: new Date('02/27/2025'), Duration: 2 },
                            { TaskID: 36, TaskName: 'Phase 3 complete', StartDate: new Date('02/27/2025'), EndDate: new Date('02/27/2025'), Duration: 1 },
                        ],
                    },
                ],
            },
        ],
    },
];