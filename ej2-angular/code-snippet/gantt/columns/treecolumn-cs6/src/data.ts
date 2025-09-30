export let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 60 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 70 },
            { TaskID: 9, TaskName: 'Environmental clearance', StartDate: new Date('04/03/2019'), Duration: 3, Progress: 50 }
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 10 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 20 },
            { TaskID: 10, TaskName: 'Budget review', StartDate: new Date('04/05/2019'), Duration: 2, Progress: 40 }
        ]
    },
    {
        TaskID: 11,
        TaskName: 'Design Phase',
        StartDate: new Date('04/22/2019'),
        EndDate: new Date('05/10/2019'),
        subtasks: [
            { TaskID: 12, TaskName: 'Architectural design', StartDate: new Date('04/22/2019'), Duration: 5, Progress: 30 },
            { TaskID: 13, TaskName: 'Structural design', StartDate: new Date('04/23/2019'), Duration: 4, Progress: 50 },
            { TaskID: 14, TaskName: 'Electrical layout', StartDate: new Date('04/24/2019'), Duration: 3, Progress: 20 },
            { TaskID: 15, TaskName: 'Design approval', StartDate: new Date('04/25/2019'), Duration: 2, Progress: 10 }
        ]
    },
    {
        TaskID: 16,
        TaskName: 'Procurement',
        StartDate: new Date('05/11/2019'),
        EndDate: new Date('05/25/2019'),
        subtasks: [
            { TaskID: 17, TaskName: 'Identify vendors', StartDate: new Date('05/11/2019'), Duration: 3, Progress: 60 },
            { TaskID: 18, TaskName: 'Request quotations', StartDate: new Date('05/12/2019'), Duration: 2, Progress: 40 },
            { TaskID: 19, TaskName: 'Vendor selection', StartDate: new Date('05/13/2019'), Duration: 2, Progress: 30 },
            { TaskID: 20, TaskName: 'Purchase materials', StartDate: new Date('05/14/2019'), Duration: 3, Progress: 20 }
        ]
    },
    {
        TaskID: 21,
        TaskName: 'Foundation Work',
        StartDate: new Date('05/26/2019'),
        EndDate: new Date('06/10/2019'),
        subtasks: [
            { TaskID: 22, TaskName: 'Excavation', StartDate: new Date('05/26/2019'), Duration: 4, Progress: 50 },
            { TaskID: 23, TaskName: 'Foundation pouring', StartDate: new Date('05/30/2019'), Duration: 3, Progress: 40 },
            { TaskID: 24, TaskName: 'Curing', StartDate: new Date('06/02/2019'), Duration: 5, Progress: 30 },
            { TaskID: 25, TaskName: 'Inspection', StartDate: new Date('06/07/2019'), Duration: 2, Progress: 20 }
        ]
    },
    {
        TaskID: 26,
        TaskName: 'Structural Work',
        StartDate: new Date('06/11/2019'),
        EndDate: new Date('06/30/2019'),
        subtasks: [
            { TaskID: 27, TaskName: 'Column construction', StartDate: new Date('06/11/2019'), Duration: 4, Progress: 60 },
            { TaskID: 28, TaskName: 'Beam construction', StartDate: new Date('06/15/2019'), Duration: 4, Progress: 50 },
            { TaskID: 29, TaskName: 'Slab casting', StartDate: new Date('06/19/2019'), Duration: 4, Progress: 40 },
            { TaskID: 30, TaskName: 'Structural inspection', StartDate: new Date('06/23/2019'), Duration: 3, Progress: 30 }
        ]
    },
    {
        TaskID: 31,
        TaskName: 'Roofing',
        StartDate: new Date('07/01/2019'),
        EndDate: new Date('07/15/2019'),
        subtasks: [
            { TaskID: 32, TaskName: 'Roof frame setup', StartDate: new Date('07/01/2019'), Duration: 3, Progress: 20 },
            { TaskID: 33, TaskName: 'Sheet installation', StartDate: new Date('07/04/2019'), Duration: 3, Progress: 30 },
            { TaskID: 34, TaskName: 'Waterproofing', StartDate: new Date('07/07/2019'), Duration: 2, Progress: 40 },
            { TaskID: 35, TaskName: 'Roof inspection', StartDate: new Date('07/09/2019'), Duration: 2, Progress: 50 }
        ]
    },
    {
        TaskID: 36,
        TaskName: 'Interior Work',
        StartDate: new Date('07/16/2019'),
        EndDate: new Date('08/05/2019'),
        subtasks: [
            { TaskID: 37, TaskName: 'Plastering', StartDate: new Date('07/16/2019'), Duration: 4, Progress: 30 },
            { TaskID: 38, TaskName: 'Painting', StartDate: new Date('07/20/2019'), Duration: 4, Progress: 40 },
            { TaskID: 39, TaskName: 'Flooring', StartDate: new Date('07/24/2019'), Duration: 4, Progress: 50 },
            { TaskID: 40, TaskName: 'Electrical fittings', StartDate: new Date('07/28/2019'), Duration: 3, Progress: 60 }
        ]
    },
    {
        TaskID: 41,
        TaskName: 'Final Inspection',
        StartDate: new Date('08/06/2019'),
        EndDate: new Date('08/15/2019'),
        subtasks: [
            { TaskID: 42, TaskName: 'Safety check', StartDate: new Date('08/06/2019'), Duration: 2, Progress: 70 },
            { TaskID: 43, TaskName: 'Compliance review', StartDate: new Date('08/08/2019'), Duration: 2, Progress: 80 },
            { TaskID: 44, TaskName: 'Client walkthrough', StartDate: new Date('08/10/2019'), Duration: 2, Progress: 90 },
            { TaskID: 45, TaskName: 'Final approval', StartDate: new Date('08/12/2019'), Duration: 2, Progress: 100 }
        ]
    },
    {
        TaskID: 46,
        TaskName: 'Project Closure',
        StartDate: new Date('08/16/2019'),
        EndDate: new Date('08/25/2019'),
        subtasks: [
            { TaskID: 47, TaskName: 'Documentation', StartDate: new Date('08/16/2019'), Duration: 2, Progress: 100 },
            { TaskID: 48, TaskName: 'Final billing', StartDate: new Date('08/18/2019'), Duration: 2, Progress: 100 },
            { TaskID: 49, TaskName: 'Feedback collection', StartDate: new Date('08/20/2019'), Duration: 2, Progress: 100 },
            { TaskID: 50, TaskName: 'Team debrief', StartDate: new Date('08/22/2019'), Duration: 2, Progress: 100 }
        ]
    }
];
