export let infiniteTimelineScrollData: Object[] = [
    { TaskID: 1, TaskName: 'Project kickoff & planning', StartDate: new Date('01/01/2026'), EndDate: new Date('01/10/2026') },
    { TaskID: 2, TaskName: 'Requirement gathering', StartDate: new Date('01/01/2026'), Duration: 5, Progress: 100, ParentID: 1 },
    { TaskID: 3, TaskName: 'Scope finalization', StartDate: new Date('01/06/2026'), Duration: 4, Predecessor: "2", ParentID: 1 },

    { TaskID: 4, TaskName: 'Design phase', StartDate: new Date('01/11/2026'), EndDate: new Date('01/31/2026') },
    { TaskID: 5, TaskName: 'UI/UX design', StartDate: new Date('01/11/2026'), Duration: 10, ParentID: 4 },
    { TaskID: 6, TaskName: 'Architecture setup', StartDate: new Date('01/15/2026'), Duration: 12, ParentID: 4 },

    { TaskID: 7, TaskName: 'Development phase', StartDate: new Date('02/01/2026'), EndDate: new Date('12/15/2026') },
    { TaskID: 8, TaskName: 'Frontend development', StartDate: new Date('02/01/2026'), Duration: 120, Progress: 60, ParentID: 7 },
    { TaskID: 9, TaskName: 'Backend development', StartDate: new Date('02/05/2026'), Duration: 140, Progress: 55, ParentID: 7 },
    { TaskID: 10, TaskName: 'API integration', StartDate: new Date('08/01/2026'), Duration: 60, Predecessor: "8,9", ParentID: 7 },

    { TaskID: 11, TaskName: 'Testing & bug fixing', StartDate: new Date('12/16/2026'), EndDate: new Date('01/31/2027') },
    { TaskID: 12, TaskName: 'Unit testing', StartDate: new Date('12/16/2026'), Duration: 20, ParentID: 11 },
    { TaskID: 13, TaskName: 'Integration testing', StartDate: new Date('01/05/2027'), Duration: 20, Predecessor: "10", ParentID: 11 },

    { TaskID: 14, TaskName: 'Release', StartDate: new Date('02/01/2027'), EndDate: new Date('02/15/2027') },
    { TaskID: 15, TaskName: 'Beta release', StartDate: new Date('02/01/2027'), Duration: 5, ParentID: 14 },
    { TaskID: 16, TaskName: 'Production deployment', StartDate: new Date('02/10/2027'), Duration: 2, Predecessor: "15", ParentID: 14 }
];