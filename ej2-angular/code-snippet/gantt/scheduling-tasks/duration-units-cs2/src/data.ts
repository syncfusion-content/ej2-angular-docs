export let GanttData: Object[] = [
  { TaskID: 1, TaskName: 'Project Planning', ParentID: null, StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true },
  { TaskID: 2, TaskName: 'Planning Phase', ParentID: 1, StartDate: new Date('04/02/2019'), Duration: 1, DurationUnit: 'week', Progress: 50, isParent: false },
  { TaskID: 3, TaskName: 'Resource Allocation', ParentID: 1, StartDate: new Date('04/09/2019'), Duration: 2, DurationUnit: 'week', Predecessor: '2FS', Progress: 70, isParent: false },
  { TaskID: 4, TaskName: 'Design Phase', ParentID: null, StartDate: new Date('04/23/2019'), EndDate: new Date('05/21/2019'), isParent: true },
  { TaskID: 5, TaskName: 'Design Mockups', ParentID: 4, StartDate: new Date('04/23/2019'), Duration: 1, DurationUnit: 'month', Progress: 60, isParent: false },
  { TaskID: 6, TaskName: 'Design Review', ParentID: 4, StartDate: new Date('05/21/2019'), Duration: 1, DurationUnit: 'week', Predecessor: '5FS', Progress: 40, isParent: false },
  { TaskID: 7, TaskName: 'Development', ParentID: null, StartDate: new Date('05/28/2019'), EndDate: new Date('07/21/2019'), isParent: true },
  { TaskID: 8, TaskName: 'Backend Development', ParentID: 7, StartDate: new Date('05/28/2019'), Duration: 2, DurationUnit: 'week', Progress: 35, isParent: false },
  { TaskID: 9, TaskName: 'Frontend Development', ParentID: 7, StartDate: new Date('06/11/2019'), Duration: 1, DurationUnit: 'month', Predecessor: '8FS', Progress: 25, isParent: false },
  { TaskID: 10, TaskName: 'Testing', ParentID: 7, StartDate: new Date('07/09/2019'), Duration: 2, DurationUnit: 'week', Predecessor: '9FS', Progress: 10, isParent: false }
];
