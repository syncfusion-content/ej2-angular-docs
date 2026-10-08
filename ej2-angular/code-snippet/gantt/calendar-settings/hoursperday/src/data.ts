export let GanttData: Object[] = [
    { TaskId: 1, TaskName: 'Project Planning', StartDate: new Date('04/02/2026'), Duration: 3 },
    { TaskId: 2, TaskName: 'Requirements Analysis', StartDate: new Date('04/05/2026'), Duration: 2, ParentId: 1 },
    { TaskId: 3, TaskName: 'Design', StartDate: new Date('04/07/2026'), Duration: 4, ParentId: 1 },
    { TaskId: 4, TaskName: 'Development', StartDate: new Date('04/11/2026'), Duration: 5 },
    { TaskId: 5, TaskName: 'Testing', StartDate: new Date('04/16/2026'), Duration: 3 }
];
