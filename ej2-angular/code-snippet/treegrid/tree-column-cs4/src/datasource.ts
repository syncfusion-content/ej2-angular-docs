/**
 * TreeGrid DataSource
 */

export let expandData = [
    {
      taskID: 1,
      taskName: 'Planning',
      startDate: new Date('02/03/2017'),
      endDate: new Date('02/07/2017'),
      progress: 100,
      duration: 5,
      isExpanded: true,
      priority: 'Normal',
      approved: false,
      subtasks: [
        {
          taskID: 2,
          taskName: 'Plan timeline',
          startDate: new Date('02/03/2017'),
          endDate: new Date('02/07/2017'),
          duration: 10,
          progress: 100,
          priority: 'Normal',
          isExpanded: true,
          approved: false,
          subtasks: [
            {
              taskID: 3,
              taskName: 'Plan budget',
              startDate: new Date('02/03/2017'),
              endDate: new Date('02/07/2017'),
              duration: 15,
              progress: 100,
              priority: 'Low',
              isExpanded: false,
              approved: true,
              subtasks: [
                {
                  taskID: 4,
                  taskName: 'Allocate resources',
                  startDate: new Date('02/03/2017'),
                  endDate: new Date('02/07/2017'),
                  duration: 25,
                  progress: 100,
                  priority: 'Critical',
                  approved: false,
                },
                {
                  taskID: 5,
                  taskName: 'Planning complete',
                  startDate: new Date('02/07/2017'),
                  endDate: new Date('02/07/2017'),
                  duration: 30,
                  progress: 0,
                  priority: 'Low',
                  approved: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
