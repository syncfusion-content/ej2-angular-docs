/**
 * Schedule datasource spec
 */

export let eventData: Object[] = [
    {
        Id: 1,
        Subject: 'Surgery - Andrew',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 12, 9, 0),
        EndTime: new Date(2018, 1, 12, 10, 0),
        OwnerId: 3
    }, {
        Id: 2,
        Subject: 'Consulting - John',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 12, 10, 0),
        EndTime: new Date(2018, 1, 12, 11, 30),
        OwnerId: 3
    }, {
        Id: 3,
        Subject: 'Therapy - Robert',
        EventType: 'Requested',
        StartTime: new Date(2018, 1, 12, 11, 30),
        EndTime: new Date(2018, 1, 12, 12, 30),
        OwnerId: 1
    }, {
        Id: 4,
        Subject: 'Observation - Steven',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 12, 12, 30),
        EndTime: new Date(2018, 1, 12, 13, 30),
        OwnerId: 1
    }, {
        Id: 5,
        Subject: 'Extraction - Nancy',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 12, 13, 30),
        EndTime: new Date(2018, 1, 12, 15, 0),
        OwnerId: 2
    }, {
        Id: 6,
        Subject: 'Surgery - Paul',
        EventType: 'New',
        StartTime: new Date(2018, 1, 13, 9, 0),
        EndTime: new Date(2018, 1, 13, 10, 0),
        OwnerId: 3
    }, {
        Id: 7,
        Subject: 'Extraction - Josephs',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 13, 10, 0),
        EndTime: new Date(2018, 1, 13, 11, 0),
        OwnerId: 3
    }, {
        Id: 8,
        Subject: 'Consulting - Mario',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 13, 11, 0),
        EndTime: new Date(2018, 1, 13, 12, 0),
        OwnerId: 2
    }, {
        Id: 9,
        Subject: 'Therapy - Saveley',
        EventType: 'Requested',
        StartTime: new Date(2018, 1, 13, 12, 0),
        EndTime: new Date(2018, 1, 13, 13, 30),
        OwnerId: 2
    }, {
        Id: 10,
        Subject: 'Observation - Cartrain',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 13, 13, 30),
        EndTime: new Date(2018, 1, 13, 15, 30),
        OwnerId: 2
    }, {
        Id: 11,
        Subject: 'Consulting - Yang',
        EventType: 'New',
        StartTime: new Date(2018, 1, 14, 9, 0),
        EndTime: new Date(2018, 1, 14, 10, 0),
        OwnerId: 1
    }, {
        Id: 12,
        Subject: 'Observation - Michael',
        EventType: 'New',
        StartTime: new Date(2018, 1, 14, 10, 0),
        EndTime: new Date(2018, 1, 14, 11, 30),
        OwnerId: 1
    }, {
        Id: 13,
        Subject: 'Surgery - Roland',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 14, 11, 30),
        EndTime: new Date(2018, 1, 14, 12, 30),
        OwnerId: 1
    }, {
        Id: 14,
        Subject: 'Extraction - Francisco',
        EventType: 'Requested',
        StartTime: new Date(2018, 1, 14, 12, 30),
        EndTime: new Date(2018, 1, 14, 13, 30),
        OwnerId: 2
    }, {
        Id: 15,
        Subject: 'Therapy - Henriette',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 14, 13, 30),
        EndTime: new Date(2018, 1, 14, 15, 0),
        OwnerId: 3
    }, {
        Id: 16,
        Subject: 'Observation - Bernardo',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 15, 9, 0),
        EndTime: new Date(2018, 1, 15, 10, 0),
        OwnerId: 1
    }, {
        Id: 17,
        Subject: 'Therapy - Wilson',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 11, 0),
        OwnerId: 2
    }, {
        Id: 18,
        Subject: 'Consulting - Horst',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 15, 11, 0),
        EndTime: new Date(2018, 1, 15, 12, 0),
        OwnerId: 3
    }, {
        Id: 19,
        Subject: 'Surgery - Limeira',
        EventType: 'Requested',
        StartTime: new Date(2018, 1, 15, 12, 0),
        EndTime: new Date(2018, 1, 15, 13, 30),
        OwnerId: 3
    }, {
        Id: 20,
        Subject: 'Observation - Victoria',
        EventType: 'Requested',
        StartTime: new Date(2018, 1, 15, 13, 30),
        EndTime: new Date(2018, 1, 15, 15, 30),
        OwnerId: 1
    }, {
        Id: 21,
        Subject: 'Extraction - Afonso',
        EventType: 'Confirmed',
        StartTime: new Date(2018, 1, 16, 9, 0),
        EndTime: new Date(2018, 1, 16, 10, 0),
        OwnerId: 2
    }, {
        Id: 22,
        Subject: 'Extraction - Paula',
        EventType: 'New',
        StartTime: new Date(2018, 1, 16, 10, 0),
        EndTime: new Date(2018, 1, 16, 11, 0),
        OwnerId: 3
    }, {
        Id: 23,
        Subject: 'Observation - George',
        EventType: 'Requested',
        StartTime: new Date(2018, 1, 16, 11, 0),
        EndTime: new Date(2018, 1, 16, 12, 0),
        OwnerId: 2
    }, {
        Id: 24,
        Subject: 'Therapy - Smith',
        EventType: 'New',
        StartTime: new Date(2018, 1, 16, 12, 0),
        EndTime: new Date(2018, 1, 16, 13, 30),
        OwnerId: 1
    }, {
        Id: 25,
        Subject: 'Surgery - Jennifer',
        EventType: 'New',
        StartTime: new Date(2018, 1, 16, 13, 30),
        EndTime: new Date(2018, 1, 16, 15, 30),
        OwnerId: 1
    }
];