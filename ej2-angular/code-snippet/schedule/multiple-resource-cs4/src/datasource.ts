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

export let resourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2018, 3, 1, 9, 30),
        EndTime: new Date(2018, 3, 1, 12, 0),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 2,
        Subject: 'Requirement planning',
        StartTime: new Date(2018, 3, 1, 12, 30),
        EndTime: new Date(2018, 3, 1, 14, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 3,
        Subject: 'Quality Analysis',
        StartTime: new Date(2018, 3, 2, 10, 0),
        EndTime: new Date(2018, 3, 2, 12, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 4,
        Subject: 'Resource planning',
        StartTime: new Date(2018, 3, 2, 13, 0),
        EndTime: new Date(2018, 3, 2, 15, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 5,
        Subject: 'Timeline estimation',
        StartTime: new Date(2018, 3, 3, 9, 0),
        EndTime: new Date(2018, 3, 3, 11, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 6,
        Subject: 'Developers Meeting',
        StartTime: new Date(2018, 3, 3, 14, 0),
        EndTime: new Date(2018, 3, 3, 16, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 7,
        Subject: 'Project Review',
        StartTime: new Date(2018, 3, 4, 11, 15),
        EndTime: new Date(2018, 3, 4, 13, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 8,
        Subject: 'Manual testing',
        StartTime: new Date(2018, 3, 4, 9, 15),
        EndTime: new Date(2018, 3, 4, 11, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 9,
        Subject: 'Project Preview',
        StartTime: new Date(2018, 3, 5, 9, 30),
        EndTime: new Date(2018, 3, 5, 12, 45),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 10,
        Subject: 'Cross-browser testing',
        StartTime: new Date(2018, 3, 5, 13, 45),
        EndTime: new Date(2018, 3, 5, 16, 30),
        IsAllDay: false,
        OwnerId: 2
    }, {
        Id: 11,
        Subject: 'Bug Automation',
        StartTime: new Date(2018, 3, 6, 10, 0),
        EndTime: new Date(2018, 3, 6, 12, 15),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 12,
        Subject: 'Functionality testing',
        StartTime: new Date(2018, 3, 6, 9, 0),
        EndTime: new Date(2018, 3, 6, 11, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 13,
        Subject: 'Resolution-based testing',
        StartTime: new Date(2018, 3, 7, 13, 0),
        EndTime: new Date(2018, 3, 7, 15, 15),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 14,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 3, 7, 9),
        EndTime: new Date(2018, 3, 7, 11),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 15,
        Subject: 'Test case correction',
        StartTime: new Date(2018, 3, 8, 9, 45),
        EndTime: new Date(2018, 3, 8, 11, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 16,
        Subject: 'Run test cases',
        StartTime: new Date(2018, 3, 8, 10, 30),
        EndTime: new Date(2018, 3, 8, 13, 0),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 17,
        Subject: 'Quality Analysis',
        StartTime: new Date(2018, 3, 9, 12),
        EndTime: new Date(2018, 3, 9, 15, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 18,
        Subject: 'Debugging',
        StartTime: new Date(2018, 3, 9, 9, 0),
        EndTime: new Date(2018, 3, 9, 11, 15),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 19,
        Subject: 'Exception handling',
        StartTime: new Date(2018, 3, 10, 10, 10),
        EndTime: new Date(2018, 3, 10, 13, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 20,
        Subject: 'Decoding',
        StartTime: new Date(2018, 3, 10, 10, 30),
        EndTime: new Date(2018, 3, 10, 12, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 21,
        Subject: 'workflow Analysis',
        StartTime: new Date(2018, 3, 11, 9, 30),
        EndTime: new Date(2018, 3, 11, 11, 30),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 22,
        Subject: 'Requirement planning',
        StartTime: new Date(2018, 3, 11, 12, 30),
        EndTime: new Date(2018, 3, 11, 14, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 23,
        Subject: 'Quality Analysis',
        StartTime: new Date(2018, 3, 12, 10),
        EndTime: new Date(2018, 3, 12, 12, 30),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 24,
        Subject: 'Resource planning',
        StartTime: new Date(2018, 3, 12, 13),
        EndTime: new Date(2018, 3, 12, 14, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 25,
        Subject: 'Timeline estimation',
        StartTime: new Date(2018, 3, 13, 9),
        EndTime: new Date(2018, 3, 13, 11),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 26,
        Subject: 'Developers Meeting',
        StartTime: new Date(2018, 3, 13, 9),
        EndTime: new Date(2018, 3, 13, 11, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 27,
        Subject: 'Project Review',
        StartTime: new Date(2018, 3, 14, 11),
        EndTime: new Date(2018, 3, 14, 13),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 28,
        Subject: 'Manual testing',
        StartTime: new Date(2018, 3, 14, 9),
        EndTime: new Date(2018, 3, 14, 11, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 29,
        Subject: 'Project Preview',
        StartTime: new Date(2018, 3, 15, 9, 30),
        EndTime: new Date(2018, 3, 15, 11),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 30,
        Subject: 'Cross-browser testing',
        StartTime: new Date(2018, 3, 15, 8),
        EndTime: new Date(2018, 3, 15, 11, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 31,
        Subject: 'Bug Automation',
        StartTime: new Date(2018, 3, 16, 10),
        EndTime: new Date(2018, 3, 16, 11),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 32,
        Subject: 'Functionality testing',
        StartTime: new Date(2018, 3, 11, 9),
        EndTime: new Date(2018, 3, 11, 11, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 33,
        Subject: 'Resolution-based testing',
        StartTime: new Date(2018, 3, 17, 14),
        EndTime: new Date(2018, 3, 17, 15),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 34,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 3, 17, 9),
        EndTime: new Date(2018, 3, 17, 11),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 35,
        Subject: 'Test case correction',
        StartTime: new Date(2018, 3, 18, 10),
        EndTime: new Date(2018, 3, 18, 11, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 36,
        Subject: 'Run test cases',
        StartTime: new Date(2018, 3, 18, 10),
        EndTime: new Date(2018, 3, 18, 10, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 37,
        Subject: 'Bug fixing',
        StartTime: new Date(2018, 3, 9, 10),
        EndTime: new Date(2018, 3, 9, 10, 30),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 38,
        Subject: 'Debugging',
        StartTime: new Date(2018, 3, 12, 9),
        EndTime: new Date(2018, 3, 12, 10, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 39,
        Subject: 'Exception handling',
        StartTime: new Date(2018, 3, 20, 10),
        EndTime: new Date(2018, 3, 20, 11),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 40,
        Subject: 'Decoding',
        StartTime: new Date(2018, 3, 20, 10, 30),
        EndTime: new Date(2018, 3, 20, 12, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 41,
        Subject: 'workflow Analysis',
        StartTime: new Date(2018, 3, 21, 9, 30),
        EndTime: new Date(2018, 3, 21, 11, 30),
        IsAllDay: false,
        OwnerId: 1,RoomId: 1
    }, {
        Id: 42,
        Subject: 'Requirement planning',
        StartTime: new Date(2018, 3, 21, 12, 30),
        EndTime: new Date(2018, 3, 21, 13, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 43,
        Subject: 'Quality Analysis',
        StartTime: new Date(2018, 3, 22, 10),
        EndTime: new Date(2018, 3, 22, 11, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 44,
        Subject: 'Resource planning',
        StartTime: new Date(2018, 3, 22, 13),
        EndTime: new Date(2018, 3, 22, 14, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 45,
        Subject: 'Timeline estimation',
        StartTime: new Date(2018, 3, 23, 9),
        EndTime: new Date(2018, 3, 23, 10),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 46,
        Subject: 'Developers Meeting',
        StartTime: new Date(2018, 3, 23, 14),
        EndTime: new Date(2018, 3, 23, 15, 45),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 47,
        Subject: 'Project Review',
        StartTime: new Date(2018, 3, 24, 11),
        EndTime: new Date(2018, 3, 24, 12),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 48,
        Subject: 'Manual testing',
        StartTime: new Date(2018, 3, 24, 9),
        EndTime: new Date(2018, 3, 24, 11, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 49,
        Subject: 'Project Preview',
        StartTime: new Date(2018, 3, 25, 9, 30),
        EndTime: new Date(2018, 3, 25, 11),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 50,
        Subject: 'Cross-browser testing',
        StartTime: new Date(2018, 3, 25, 14),
        EndTime: new Date(2018, 3, 25, 15, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 51,
        Subject: 'Bug Automation',
        StartTime: new Date(2018, 3, 26, 10),
        EndTime: new Date(2018, 3, 26, 11),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 52,
        Subject: 'Functionality testing',
        StartTime: new Date(2018, 3, 26, 9),
        EndTime: new Date(2018, 3, 26, 11, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 53,
        Subject: 'Resolution-based testing',
        StartTime: new Date(2018, 3, 27, 14),
        EndTime: new Date(2018, 3, 27, 15),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 54,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 3, 27, 9),
        EndTime: new Date(2018, 3, 27, 11),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 55,
        Subject: 'Test case correction',
        StartTime: new Date(2018, 3, 28, 10),
        EndTime: new Date(2018, 3, 28, 11, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 56,
        Subject: 'Run test cases',
        StartTime: new Date(2018, 3, 28, 10),
        EndTime: new Date(2018, 3, 28, 10, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 57,
        Subject: 'Bug fixing',
        StartTime: new Date(2018, 3, 29, 12),
        EndTime: new Date(2018, 3, 29, 12, 30),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 58,
        Subject: 'Debugging',
        StartTime: new Date(2018, 3, 29, 9),
        EndTime: new Date(2018, 3, 29, 10, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 59,
        Subject: 'Exception handling',
        StartTime: new Date(2018, 3, 30, 10),
        EndTime: new Date(2018, 3, 30, 11),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 60,
        Subject: 'Decoding',
        StartTime: new Date(2018, 3, 30, 10, 30),
        EndTime: new Date(2018, 3, 30, 12, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }
];

export let doctorData: Object[] = [
    {
        Id: 1,
        Subject: 'Echocardiogram',
        StartTime: new Date(2018, 3, 2, 9, 30),
        EndTime: new Date(2018, 3, 2, 11, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 2,
        Subject: 'Lumbar punctures',
        StartTime: new Date(2018, 3, 2, 9, 30),
        EndTime: new Date(2018, 3, 2, 10, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 3,
        Subject: 'Osteoarthritis',
        StartTime: new Date(2018, 3, 2, 8),
        EndTime: new Date(2018, 3, 2, 10, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 4,
        Subject: 'Ambulatory ECG',
        StartTime: new Date(2018, 3, 3, 12),
        EndTime: new Date(2018, 3, 3, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 5,
        Subject: 'Osteoporosis',
        StartTime: new Date(2018, 3, 3, 11),
        EndTime: new Date(2018, 3, 3, 11, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 6,
        Subject: 'Neuromuscular',
        StartTime: new Date(2018, 3, 4, 11, 30),
        EndTime: new Date(2018, 3, 4, 13, 30),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 7,
        Subject: 'Rheumatoid arthritis',
        StartTime: new Date(2018, 3, 4, 13, 40),
        EndTime: new Date(2018, 3, 4, 14, 40),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 8,
        Subject: 'Cardiac Catheterization',
        StartTime: new Date(2018, 3, 5, 11, 30),
        EndTime: new Date(2018, 3, 5, 13),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 9,
        Subject: 'Growth abnormalities',
        StartTime: new Date(2018, 3, 5, 14),
        EndTime: new Date(2018, 3, 5, 15, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 10,
        Subject: 'Sleep disorders',
        StartTime: new Date(2018, 3, 6, 12),
        EndTime: new Date(2018, 3, 6, 14),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 11,
        Subject: 'Torn ligaments',
        StartTime: new Date(2018, 3, 6, 13, 30),
        EndTime: new Date(2018, 3, 6, 14, 45),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 12,
        Subject: 'Coronary angiogram',
        StartTime: new Date(2018, 3, 6, 8),
        EndTime: new Date(2018, 3, 6, 8, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 13,
        Subject: 'Blood pressure',
        StartTime: new Date(2018, 3, 9, 12),
        EndTime: new Date(2018, 3, 9, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 14,
        Subject: 'Radiculopathy',
        StartTime: new Date(2018, 3, 9, 15, 45),
        EndTime: new Date(2018, 3, 9, 16, 30),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 15,
        Subject: 'Sprains and strains',
        StartTime: new Date(2018, 3, 9, 14),
        EndTime: new Date(2018, 3, 9, 15, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 16,
        Subject: 'Cardiac stress testing',
        StartTime: new Date(2018, 3, 10, 10),
        EndTime: new Date(2018, 3, 10, 10, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 17,
        Subject: 'Tendon injuries',
        StartTime: new Date(2018, 3, 10, 14),
        EndTime: new Date(2018, 3, 10, 15, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 18,
        Subject: 'Dementia',
        StartTime: new Date(2018, 3, 11, 15),
        EndTime: new Date(2018, 3, 11, 17),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 19,
        Subject: 'Pulled muscles',
        StartTime: new Date(2018, 3, 11, 13, 30),
        EndTime: new Date(2018, 3, 11, 15, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 20,
        Subject: 'Coronary angiogram',
        StartTime: new Date(2018, 3, 12, 10, 30),
        EndTime: new Date(2018, 3, 12, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 21,
        Subject: 'Back pain',
        StartTime: new Date(2018, 3, 12, 10, 30),
        EndTime: new Date(2018, 3, 12, 11, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 22,
        Subject: 'Neuropathy',
        StartTime: new Date(2018, 3, 13, 12, 30),
        EndTime: new Date(2018, 3, 13, 13, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 23,
        Subject: 'Ruptured disks',
        StartTime: new Date(2018, 3, 13, 13),
        EndTime: new Date(2018, 3, 13, 15, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 24,
        Subject: 'Atherosclerosis',
        StartTime: new Date(2018, 3, 13, 10),
        EndTime: new Date(2018, 3, 13, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 25,
        Subject: 'Arthroplasty',
        StartTime: new Date(2018, 3, 16, 9),
        EndTime: new Date(2018, 3, 16, 10),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 26,
        Subject: 'Hyperactivity disorder',
        StartTime: new Date(2018, 3, 16, 14),
        EndTime: new Date(2018, 3, 16, 15, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 27,
        Subject: 'Muscular dystrophy',
        StartTime: new Date(2018, 3, 16, 13, 10),
        EndTime: new Date(2018, 3, 16, 15, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 28,
        Subject: 'Consulting',
        StartTime: new Date(2018, 3, 17, 9, 20),
        EndTime: new Date(2018, 3, 17, 10, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 29,
        Subject: 'Hand surgery',
        StartTime: new Date(2018, 3, 17, 13, 20),
        EndTime: new Date(2018, 3, 17, 15, 22),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 30,
        Subject: 'Neuromuscular',
        StartTime: new Date(2018, 3, 18, 14),
        EndTime: new Date(2018, 3, 18, 15, 40),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 31,
        Subject: 'Spine surgery',
        StartTime: new Date(2018, 3, 18, 12, 18),
        EndTime: new Date(2018, 3, 18, 14, 23),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 32,
        Subject: 'Fibrinogen',
        StartTime: new Date(2018, 3, 19, 9),
        EndTime: new Date(2018, 3, 19, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 33,
        Subject: 'Bone tumors',
        StartTime: new Date(2018, 3, 19, 10, 45),
        EndTime: new Date(2018, 3, 19, 12, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 34,
        Subject: 'Neuromuscular',
        StartTime: new Date(2018, 3, 20, 13),
        EndTime: new Date(2018, 3, 20, 17),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 35,
        Subject: 'Osteoporosis',
        StartTime: new Date(2018, 3, 20, 11, 45),
        EndTime: new Date(2018, 3, 20, 14, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 36,
        Subject: 'Triglyceride',
        StartTime: new Date(2018, 3, 20, 7),
        EndTime: new Date(2018, 3, 20, 10, 45),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 37,
        Subject: 'Fibrinogen',
        StartTime: new Date(2018, 3, 23, 8),
        EndTime: new Date(2018, 3, 23, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 38,
        Subject: 'Head trauma',
        StartTime: new Date(2018, 3, 23, 12),
        EndTime: new Date(2018, 3, 23, 15),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 39,
        Subject: 'Arthroplasty',
        StartTime: new Date(2018, 3, 23, 12, 18),
        EndTime: new Date(2018, 3, 23, 13, 22),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 40,
        Subject: 'Echocardiogram',
        StartTime: new Date(2018, 3, 24, 7, 30),
        EndTime: new Date(2018, 3, 24, 12, 40),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 41,
        Subject: 'Skull reconstruction',
        StartTime: new Date(2018, 3, 24, 13, 20),
        EndTime: new Date(2018, 3, 24, 15, 45),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 42,
        Subject: 'Dementia',
        StartTime: new Date(2018, 3, 25, 12, 30),
        EndTime: new Date(2018, 3, 25, 16, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 43,
        Subject: 'Orthopedic trauma',
        StartTime: new Date(2018, 3, 25, 10, 18),
        EndTime: new Date(2018, 3, 25, 12, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 44,
        Subject: 'Blood pressure',
        StartTime: new Date(2018, 3, 26, 7, 50),
        EndTime: new Date(2018, 3, 26, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 45,
        Subject: 'Ruptured disks',
        StartTime: new Date(2018, 3, 26, 12, 50),
        EndTime: new Date(2018, 3, 26, 15, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 46,
        Subject: 'Head trauma',
        StartTime: new Date(2018, 3, 27, 11, 50),
        EndTime: new Date(2018, 3, 27, 12, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 47,
        Subject: 'Cerebral palsy',
        StartTime: new Date(2018, 3, 27, 14, 50),
        EndTime: new Date(2018, 3, 27, 15, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 48,
        Subject: 'Consulting',
        StartTime: new Date(2018, 3, 27, 9),
        EndTime: new Date(2018, 3, 27, 11, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 49,
        Subject: 'Electrocardiogram',
        StartTime: new Date(2018, 3, 30, 9, 30),
        EndTime: new Date(2018, 3, 30, 11, 50),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 50,
        Subject: 'Radiculopathy',
        StartTime: new Date(2018, 3, 30, 14),
        EndTime: new Date(2018, 3, 30, 15, 30),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 51,
        Subject: 'Skull reconstruction',
        StartTime: new Date(2018, 3, 30, 14),
        EndTime: new Date(2018, 3, 30, 16),
        IsAllDay: false,
        DoctorId: 3
    }
];