export let baselineData: Object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify Site location', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/06/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50, ParentID: 1 },
    { TaskID: 3, TaskName: 'Perform Soil test', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/09/2019'), StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, BaselineDuration: 5, ParentID: 1 },
    { TaskID: 4, TaskName: 'Soil test approval', BaselineStartDate: new Date('04/08/2019'), StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, BaselineDuration: 4, ParentID: 1 },

    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentID: 5 },
    { TaskID: 7, TaskName: 'List materials', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/04/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, BaselineDuration: 2, ParentID: 5 },
    { TaskID: 8, TaskName: 'Estimation approval', BaselineStartDate: new Date('04/02/2019'), StartDate: new Date('04/04/2019'), Duration: 0, Progress: 50, BaselineDuration: 0, ParentID: 5 }
];