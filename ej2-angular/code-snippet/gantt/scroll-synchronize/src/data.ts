/**
 * TreeGrid DataSource
 */

export let projectNewData: Object[] = [
      {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          {
            TaskID: 2,
            TaskName: 'Identify site location',
            StartDate: new Date('04/02/2019'),
            Duration: 0,
            Progress: 30,
            resources: [1],
            info: 'Measure the total property area allotted for construction'
          },
          {
            TaskID: 3,
            TaskName: 'Perform Soil test',
            StartDate: new Date('04/02/2019'),
            Duration: 4,
            Predecessor: '2',
            resources: [2, 3, 5],
            info: 'Obtain an engineered soil test of lot where construction is planned. From an engineer or company specializing in soil testing.'
          },
          {
            TaskID: 4,
            TaskName: 'Soil test approval',
            StartDate: new Date('04/02/2019'),
            Duration: 0,
            Predecessor: '3',
            Progress: 30
          }
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          {
            TaskID: 6,
            TaskName: 'Develop floor plan for estimation',
            StartDate: new Date('04/04/2019'),
            Duration: 3,
            Predecessor: '4',
            Progress: 30,
            resources: 4,
            info: 'Develop floor plans and obtain a materials list for estimations'
          },
          {
            TaskID: 7,
            TaskName: 'List materials',
            StartDate: new Date('04/04/2019'),
            Duration: 3,
            Predecessor: '6',
            resources: [4, 8],
            info: ''
          },
          {
            TaskID: 8,
            TaskName: 'Estimation approval',
            StartDate: new Date('04/04/2019'),
            Duration: 0,
            Predecessor: '7',
            resources: [12, 5],
            info: ''
          }
        ]
      }
    ];
