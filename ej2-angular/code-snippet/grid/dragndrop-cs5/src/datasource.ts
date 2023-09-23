export let sampleGridData: Object[] =  [
   {
       taskID: 1,
       taskName: 'Planning',
       startDate: new Date('02/03/2017'),
       endDate: new Date('02/07/2017'),
       progress: 100,
       duration: 5,
       priority: 'Normal',
       approved: false,
       description: 'Task description 1',
       category: 'Task category 1',
       subtasks: [
           { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
               endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
           { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
               endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
           { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
               endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
           { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
               endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
       ]
   },
   {
       taskID: 6,
       taskName: 'Design',
       startDate: new Date('02/10/2017'),
       endDate: new Date('02/14/2017'),
       duration: 3,
       progress: 86,
       priority: 'High',
       approved: false,
       description: 'Task description 2',
       category: 'Task category 2',
       subtasks: [
           { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
               endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
           { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
               endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
           { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
               endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
           { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
               endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
           { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
               endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
       ]
   },
   {
     taskID: 12,
     taskName: 'Implementation Phase',
     startDate: new Date('02/17/2017'),
     endDate: new Date('02/27/2017'),
     priority: 'Normal',
     approved: false,
     description: 'Task description 3',
     category: 'Task category 3',
     duration: 11,
     progress: 66,
     subtasks: [
         {
             taskID: 13,
             taskName: 'Phase 1',
             startDate: new Date('02/17/2017'),
             endDate: new Date('02/27/2017'),
             priority: 'High',
             approved: false,
             progress: 50,
             duration: 11
         },
         {
             taskID: 21,
             taskName: 'Phase 2',
             startDate: new Date('02/17/2017'),
             endDate: new Date('02/28/2017'),
             priority: 'High',
             approved: false,
             duration: 12,
             progress: 60
         },

         {
             taskID: 29,
             taskName: 'Phase 3',
             startDate: new Date('02/17/2017'),
             endDate: new Date('02/27/2017'),
             priority: 'Normal',
             approved: false,
             duration: 11,
             progress: 30
         }
     ]
 }
   ];