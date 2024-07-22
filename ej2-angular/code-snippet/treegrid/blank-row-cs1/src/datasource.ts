/**
 * TreeGrid DataSource
 */

export let projectData: Object[] = [
    { TaskID: 1, TaskName: 'Parent Task 1', StartDate: new Date('02/23/2017'), Duration: 3, Priority : 'Normal',
    EndDate: new Date('02/27/2017'), Progress: '40' },
    { TaskID: 2, TaskName: 'Child Task 1', StartDate: new Date('02/23/2017'), Duration: 4, Priority : 'Low',
    EndDate: new Date('02/27/2017'), Progress: '40', parentID: 1 },
    { TaskID: 3, TaskName: 'Child Task 2', StartDate: new Date('02/23/2017'), Duration: 2, Priority : 'Normal',
    EndDate: new Date('02/27/2017'), Progress: '40', parentID: 1 },
    { TaskID: 4, TaskName: 'Child Task 3', StartDate: new Date('02/23/2017'), Duration: 2, Priority : 'Low',
    EndDate: new Date('02/27/2017'), Progress: '40', parentID: 1 },
    { TaskID: 5, TaskName: 'Parent Task 2', StartDate: new Date('03/14/2017'), Duration: 6, Priority : 'Normal',
    EndDate: new Date('03/18/2017'), Progress: '40' },
    { TaskID: 6, TaskName: 'Child Task 1', StartDate: new Date('03/02/2017'), Duration: 11, Priority : 'High',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 7, TaskName: 'Child Task 2', StartDate: new Date('03/02/2017'), Duration: 7, Priority : 'Critical',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 8, TaskName: 'Child Task 3', StartDate: new Date('03/02/2017'), Duration: 10, Priority : 'Breaker',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 9, TaskName: 'Child Task 4', StartDate: new Date('03/02/2017'), Duration: 15, Priority : 'High',
    EndDate: new Date('03/06/2017'), Progress: '40', parentID: 5 },
    { TaskID: 10, TaskName: 'Parent Task 3', StartDate: new Date('03/09/2017'), Duration: 17, Priority : 'Breaker',
    EndDate: new Date('03/13/2017'), Progress: '40' },
    { TaskID: 11, TaskName: 'Child Task 1', StartDate: new Date('03/9/2017'), Duration: 0, Priority : 'Low',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 12, TaskName: 'Child Task 2', StartDate: new Date('03/9/2017'), Duration: 10, Priority : 'Breaker',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 13, TaskName: 'Child Task 3', StartDate: new Date('03/9/2017'), Duration: 11, Priority : 'Normal',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 14, TaskName: 'Child Task 4', StartDate: new Date('03/9/2017'), Duration: 1, Priority : 'Normal',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 },
    { TaskID: 15, TaskName: 'Child Task 5', StartDate: new Date('03/9/2017'), Duration: 14, Priority : 'Critical',
    EndDate: new Date('03/13/2017'), Progress: '40', parentID: 10 }
];
