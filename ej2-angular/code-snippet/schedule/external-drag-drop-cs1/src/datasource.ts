export let hospitalData: Object[] = [
    {
        Id: 10,
        Name: 'David',
        StartTime: new Date(2018, 7, 1, 9, 0),
        EndTime: new Date(2018, 7, 1, 10, 0),
        Description: 'Health Checkup',
        DepartmentID: 1,
        ConsultantID: 1,
        DepartmentName: 'GENERAL'
    }, {
        Id: 11,
        Name: 'John',
        StartTime: new Date(2018, 7, 1, 10, 30),
        EndTime: new Date(2018, 7, 1, 11, 30),
        Description: 'Tooth Erosion',
        DepartmentID: 2,
        ConsultantID: 2,
        DepartmentName: 'DENTAL'
    }, {
        Id: 12,
        Name: 'Peter',
        StartTime: new Date(2018, 7, 1, 12, 0),
        EndTime: new Date(2018, 7, 1, 13, 0),
        Description: 'Eye and Spectacles Checkup',
        DepartmentID: 1,
        ConsultantID: 3,
        DepartmentName: 'GENERAL'
    }, {
        Id: 13,
        Name: 'Starc',
        StartTime: new Date(2018, 7, 1, 14, 0),
        EndTime: new Date(2018, 7, 1, 15, 0),
        Description: 'Toothaches',
        DepartmentID: 2,
        ConsultantID: 4,
        DepartmentName: 'DENTAL'
    }, {
        Id: 14,
        Name: 'James',
        StartTime: new Date(2018, 7, 1, 10, 0),
        EndTime: new Date(2018, 7, 1, 11, 0),
        Description: 'Surgery Appointment',
        DepartmentID: 1,
        ConsultantID: 5,
        DepartmentName: 'GENERAL'
    }, {
        Id: 15,
        Name: 'Jercy',
        StartTime: new Date(2018, 7, 1, 9, 30),
        EndTime: new Date(2018, 7, 1, 10, 30),
        Description: 'Tooth Sensitivity',
        DepartmentID: 2,
        ConsultantID: 6,
        DepartmentName: 'DENTAL'
    }, {
        Id: 16,
        Name: 'Albert',
        StartTime: new Date(2018, 7, 2, 10, 0),
        EndTime: new Date(2018, 7, 2, 11, 30),
        Description: 'Skin care treatment',
        DepartmentID: 1,
        ConsultantID: 7,
        DepartmentName: 'GENERAL'
    }, {
        Id: 17,
        Name: 'Louis',
        StartTime: new Date(2018, 7, 2, 12, 30),
        EndTime: new Date(2018, 7, 2, 13, 45),
        Description: 'General Checkup',
        DepartmentID: 1,
        ConsultantID: 9,
        DepartmentName: 'GENERAL'
    }, {
        Id: 18,
        Name: 'Williams',
        StartTime: new Date(2018, 7, 2, 12, 0),
        EndTime: new Date(2018, 7, 2, 14, 0),
        Description: 'Mouth Sores',
        DepartmentID: 2,
        ConsultantID: 10,
        DepartmentName: 'DENTAL'
    },
    {
        Id: 19,
        Name: 'David',
        StartTime: new Date(2018, 7, 2, 16, 30),
        EndTime: new Date(2018, 7, 2, 18, 15),
        Description: 'Eye checkup and Treatment',
        DepartmentID: 1,
        ConsultantID: 1,
        DepartmentName: 'GENERAL'
    }, {
        Id: 20,
        Name: 'John',
        StartTime: new Date(2018, 7, 2, 19, 30),
        EndTime: new Date(2018, 7, 2, 21, 45),
        Description: 'Toothaches',
        DepartmentID: 2,
        ConsultantID: 2,
        DepartmentName: 'DENTAL'
    }, {
        Id: 21,
        Name: 'Peter',
        StartTime: new Date(2018, 7, 3, 17, 30),
        EndTime: new Date(2018, 7, 3, 19, 30),
        Description: 'Surgery Treatment',
        DepartmentID: 1,
        ConsultantID: 3,
        DepartmentName: 'GENERAL'
    }, {
        Id: 22,
        Name: 'Starc',
        StartTime: new Date(2018, 7, 4, 18, 30),
        EndTime: new Date(2018, 7, 4, 21, 30),
        Description: 'Tooth Decay',
        DepartmentID: 2,
        ConsultantID: 4,
        DepartmentName: 'DENTAL'
    }, {
        Id: 23,
        Name: 'James',
        StartTime: new Date(2018, 7, 3, 19, 0),
        EndTime: new Date(2018, 7, 3, 21, 0),
        Description: 'General Checkup',
        DepartmentID: 1,
        ConsultantID: 5,
        DepartmentName: 'GENERAL'
    }, {
        Id: 24,
        Name: 'Jercy',
        StartTime: new Date(2018, 7, 4, 20, 0),
        EndTime: new Date(2018, 7, 4, 22, 0),
        Description: 'Tooth Erosion',
        DepartmentID: 2,
        ConsultantID: 6,
        DepartmentName: 'DENTAL'
    }];

export let waitingList: { [key: string]: Object }[] = [
    {
        Id: 1,
        Name: 'Steven',
        StartTime: new Date(2018, 8, 3, 7, 30),
        EndTime: new Date(2018, 8, 3, 9, 30),
        Description: 'Consulting',
        DepartmentName: 'GENERAL'
    },
    {
        Id: 2,
        Name: 'Milan',
        StartTime: new Date(2018, 8, 4, 8, 30),
        EndTime: new Date(2018, 8, 4, 10, 30),
        Description: 'Bad Breath',
        DepartmentName: 'DENTAL'
    },
    {
        Id: 3,
        Name: 'Laura',
        StartTime: new Date(2018, 8, 4, 9, 30),
        EndTime: new Date(2018, 8, 4, 10, 30),
        Description: 'Eye Checkup',
        DepartmentName: 'GENERAL'
    },
    {
        Id: 4,
        Name: 'Janet',
        StartTime: new Date(2018, 8, 3, 11, 0),
        EndTime: new Date(2018, 8, 3, 12, 30),
        Description: 'Gum Disease',
        DepartmentName: 'DENTAL'
    },
    {
        Id: 5,
        Name: 'Adams',
        StartTime: new Date(2018, 8, 3, 11, 0),
        EndTime: new Date(2018, 8, 3, 12, 30),
        Description: 'Observation',
        DepartmentName: 'GENERAL'
    },
    {
        Id: 6,
        Name: 'John',
        StartTime: new Date(2018, 8, 3, 11, 0),
        EndTime: new Date(2018, 8, 3, 12, 30),
        Description: 'Mouth Sores',
        DepartmentName: 'DENTAL'
    }
];
