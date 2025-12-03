export let GanttData: Object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: null, EndDate: null, Duration: null, Progress: null, ParentID: null },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/01/2019'), EndDate: new Date('04/05/2019'), Duration: 3, Progress: 100, ParentID: 1 },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), EndDate: new Date('04/05/2019'), Duration: 3, Progress: 75, ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), EndDate: new Date('04/06/2019'), Duration: 3, Progress: 75, ParentID: 1 },

  { TaskID: 5, TaskName: 'Project Estimation', StartDate: null, EndDate: null, Duration: null, Progress: null, ParentID: null },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/05/2019'), EndDate: new Date('04/08/2019'), Duration: 3, Progress: 100, ParentID: 5 },
  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), EndDate: new Date('04/11/2019'), Duration: 3, Progress: 75, ParentID: 5 },
  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/08/2019'), EndDate: new Date('04/11/2019'), Duration: 3, Progress: 75, ParentID: 5 }
];