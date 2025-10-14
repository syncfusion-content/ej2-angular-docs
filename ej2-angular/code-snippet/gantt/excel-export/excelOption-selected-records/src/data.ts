export const GanttData: object[] = [
  { TaskID: 1, TaskName: 'Planning', StartDate: new Date('2025-09-01'), Duration: 5, Progress: 100 },
  { TaskID: 2, TaskName: 'Design', StartDate: new Date('2025-09-06'), Duration: 3, Progress: 60, ParentID: 1 },
  { TaskID: 3, TaskName: 'Development', StartDate: new Date('2025-09-10'), Duration: 10, Progress: 30, ParentID: 1 },
  { TaskID: 4, TaskName: 'Soil Test Approval', StartDate: new Date('2025-09-21'), Duration: 2, Progress: 80 },
  { TaskID: 5, TaskName: 'Foundation', StartDate: new Date('2025-09-24'), Duration: 4, Progress: 50, ParentID: 4 },
  { TaskID: 6, TaskName: 'Structure', StartDate: new Date('2025-09-29'), Duration: 6, Progress: 40, ParentID: 4 }
];
