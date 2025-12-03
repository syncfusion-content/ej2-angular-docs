export let GanttData: object[] = [
  { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('2025-03-01'), EndDate: new Date('2025-03-10'), Duration: 8, Progress: 100, Resources: [1] },
  { TaskID: 2, TaskName: 'Requirements Gathering', StartDate: new Date('2025-03-01'), EndDate: new Date('2025-03-05'), Duration: 4, Progress: 100, Resources: [5], ParentID: 1 },
  { TaskID: 3, TaskName: 'Feasibility Study', StartDate: new Date('2025-03-03'), EndDate: new Date('2025-03-07'), Duration: 4, Progress: 100, Resources: [2], ParentID: 1, Predecessor: '2FS' },
  { TaskID: 4, TaskName: 'Stakeholder Approval', StartDate: new Date('2025-03-08'), EndDate: new Date('2025-03-08'), Duration: 0, Progress: 100, Resources: [3], ParentID: 1, Predecessor: '3FS' },
  { TaskID: 5, TaskName: 'Planning Phase', StartDate: new Date('2025-03-10'), EndDate: new Date('2025-03-20'), Duration: 9, Progress: 90, Resources: [1,5], Predecessor: '4FS' },
  { TaskID: 6, TaskName: 'Project Plan Creation', StartDate: new Date('2025-03-10'), EndDate: new Date('2025-03-14'), Duration: 4, Progress: 100, Resources: [6], ParentID: 5 },
  { TaskID: 7, TaskName: 'Resource Allocation', StartDate: new Date('2025-03-12'), EndDate: new Date('2025-03-17'), Duration: 5, Progress: 85, Resources: [1,2], ParentID: 5, Predecessor: '6FS' },
  { TaskID: 8, TaskName: 'Risk Assessment', StartDate: new Date('2025-03-15'), EndDate: new Date('2025-03-19'), Duration: 4, Progress: 70, Resources: [1], ParentID: 5, Predecessor: '6FS' },
  { TaskID: 9, TaskName: 'Design & Development', StartDate: new Date('2025-03-20'), EndDate: new Date('2025-04-18'), Duration: 28, Progress: 65, Resources: [2,3], Predecessor: '5FS' },
  { TaskID: 10, TaskName: 'UI/UX Design', StartDate: new Date('2025-03-20'), EndDate: new Date('2025-03-28'), Duration: 8, Progress: 90, Resources: [4], ParentID: 9 },
  { TaskID: 11, TaskName: 'Wireframes & Prototypes', StartDate: new Date('2025-03-20'), EndDate: new Date('2025-03-26'), Duration: 6, Progress: 85, Resources: [4], ParentID: 10 },
  { TaskID: 12, TaskName: 'Backend Development', StartDate: new Date('2025-03-25'), EndDate: new Date('2025-04-10'), Duration: 14, Progress: 60, Resources: [2], ParentID: 9, Predecessor: '11FS' },
  { TaskID: 13, TaskName: 'API Design', StartDate: new Date('2025-03-25'), EndDate: new Date('2025-03-29'), Duration: 4, Progress: 100, Resources: [2], ParentID: 12 },
  { TaskID: 14, TaskName: 'Frontend Development', StartDate: new Date('2025-03-28'), EndDate: new Date('2025-04-12'), Duration: 14, Progress: 55, Resources: [3], ParentID: 9, Predecessor: '11FS' },
  { TaskID: 15, TaskName: 'Testing Phase', StartDate: new Date('2025-04-10'), EndDate: new Date('2025-04-24'), Duration: 12, Progress: 40, Resources: [6], Predecessor: '14FS' },
  { TaskID: 16, TaskName: 'Unit Testing', StartDate: new Date('2025-04-10'), EndDate: new Date('2025-04-15'), Duration: 5, Progress: 60, Resources: [6], ParentID: 15 },
  { TaskID: 17, TaskName: 'Integration Testing', StartDate: new Date('2025-04-16'), EndDate: new Date('2025-04-21'), Duration: 5, Progress: 30, Resources: [6], ParentID: 15, Predecessor: '16FS' },
  { TaskID: 18, TaskName: 'Deployment', StartDate: new Date('2025-04-24'), EndDate: new Date('2025-04-24'), Duration: 0, Progress: 0, Resources: [5], Predecessor: '17FS' },
  { TaskID: 19, TaskName: 'Project Closure', StartDate: new Date('2025-04-25'), EndDate: new Date('2025-04-29'), Duration: 4, Progress: 0, Resources: [1], Predecessor: '18FS' },
  { TaskID: 20, TaskName: 'Final Documentation', StartDate: new Date('2025-04-25'), EndDate: new Date('2025-04-28'), Duration: 3, Progress: 0, Resources: [1,3], ParentID: 19 }
];

export let resourceCollection: object[] = [
  { resourceId: 1, resourceName: 'Martin Tamer',},
  { resourceId: 2, resourceName: 'Rose Fuller' },
  { resourceId: 3, resourceName: 'Margaret Buchanan'},
  { resourceId: 4, resourceName: 'Fuller King'},
  { resourceId: 5, resourceName: 'Davolio Fuller'},
  { resourceId: 6, resourceName: 'Van Jack'}
];