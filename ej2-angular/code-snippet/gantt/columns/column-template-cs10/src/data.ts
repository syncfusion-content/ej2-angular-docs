export let GanttData: Object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    OrderStatus: 'Pending',
    subtasks: [
      {
        TaskID: 2,
        TaskName: 'Identify Site location',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        resources: [{ resourceId: 1 }],
        OrderStatus: 'Confirmed'
      },
      {
        TaskID: 3,
        TaskName: 'Perform Soil test',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        resources: [{ resourceId: 1 }],
        OrderStatus: 'Shipped'
      },
      {
        TaskID: 4,
        TaskName: 'Soil test approval',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        resources: [{ resourceId: 1 }],
        OrderStatus: 'Pending'
      }
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    OrderStatus: 'Confirmed',
    subtasks: [
      {
        TaskID: 6,
        TaskName: 'Develop floor plan for estimation',
        StartDate: new Date('04/04/2019'),
        Duration: 3,
        Progress: 50,
        resources: [{ resourceId: 1 }],
        OrderStatus: 'Confirmed'
      },
      {
        TaskID: 7,
        TaskName: 'List materials',
        StartDate: new Date('04/04/2019'),
        Duration: 3,
        Progress: 50,
        OrderStatus: 'Pending'
      },
      {
        TaskID: 8,
        TaskName: 'Estimation approval',
        StartDate: new Date('04/04/2019'),
        Duration: 3,
        Progress: 50,
        resources: [{ resourceId: 1 }],
        OrderStatus: 'Shipped'
      }
    ]
  }
];
