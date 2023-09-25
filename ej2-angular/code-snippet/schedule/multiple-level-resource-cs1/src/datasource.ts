export let resourceTeamData: Object[] = [
    {
        Id: 1,
        Subject: 'Developers Meeting',
        StartTime: new Date(2018, 5, 1, 10, 0),
        EndTime: new Date(2018, 5, 1, 11, 0),
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR',
        ProjectId: 1,
        CategoryId: 1
    }, {
        Id: 2,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 5, 2, 10, 30),
        EndTime: new Date(2018, 5, 2, 13, 0),
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR',
        ProjectId: 1,
        CategoryId: 2
    }, {
        Id: 3,
        Subject: 'Requirement planning',
        StartTime: new Date(2018, 5, 4, 9, 30),
        EndTime: new Date(2018, 5, 4, 10, 45),
        ProjectId: 2,
        CategoryId: 1
    }, {
        Id: 4,
        Subject: 'Bug Automation',
        StartTime: new Date(2018, 5, 2, 11, 0),
        EndTime: new Date(2018, 5, 2, 13, 0),
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR',
        ProjectId: 2,
        CategoryId: 2
    }, {
        Id: 5,
        Subject: 'Timeline estimation',
        StartTime: new Date(2018, 5, 3, 10, 0),
        EndTime: new Date(2018, 5, 3, 12, 0),
        ProjectId: 1,
        CategoryId: 1
    }, {
        Id: 6,
        Subject: 'Timeline estimation',
        StartTime: new Date(2018, 5, 3, 13, 0),
        EndTime: new Date(2018, 5, 3, 15, 0),
        ProjectId: 2,
        CategoryId: 1
    }, {
        Id: 7,
        Subject: 'Functionality testing',
        StartTime: new Date(2018, 5, 4, 14, 0),
        EndTime: new Date(2018, 5, 4, 15, 30),
        ProjectId: 1,
        CategoryId: 2
    }, {
        Id: 8,
        Subject: 'Functionality testing',
        StartTime: new Date(2018, 5, 4, 19, 0),
        EndTime: new Date(2018, 5, 4, 21, 0),
        ProjectId: 2,
        CategoryId: 2
    }, {
        Id: 9,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2018, 5, 5, 14, 0),
        EndTime: new Date(2018, 5, 5, 15, 30),
        ProjectId: 1,
        CategoryId: 1
    }, {
        Id: 10,
        Subject: 'Quality Analysis',
        StartTime: new Date(2018, 5, 5, 13, 0),
        EndTime: new Date(2018, 5, 5, 16, 0),
        ProjectId: 2,
        CategoryId: 1
    }, {
        Id: 11,
        Subject: 'Cross-browser testing',
        StartTime: new Date(2018, 5, 5, 14, 45),
        EndTime: new Date(2018, 5, 5, 16, 15),
        ProjectId: 1,
        CategoryId: 2
    }, {
        Id: 12,
        Subject: 'Resolution-based testing',
        StartTime: new Date(2018, 5, 5, 15, 0),
        EndTime: new Date(2018, 5, 5, 17, 30),
        ProjectId: 2,
        CategoryId: 2
    }, {
        Id: 13,
        Subject: 'Project Preview',
        StartTime: new Date(2018, 5, 8, 16, 0),
        EndTime: new Date(2018, 5, 8, 18, 0),
        ProjectId: 1,
        CategoryId: 1
    }, {
        Id: 14,
        Subject: 'Project Preview',
        StartTime: new Date(2018, 5, 8, 15, 0),
        EndTime: new Date(2018, 5, 8, 17, 30),
        ProjectId: 2,
        CategoryId: 1
    }, {
        Id: 15,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 5, 8, 15, 30),
        EndTime: new Date(2018, 5, 8, 17, 45),
        ProjectId: 1,
        CategoryId: 2
    }, {
        Id: 16,
        Subject: 'Test report Validation',
        StartTime: new Date(2018, 5, 8, 15, 0),
        EndTime: new Date(2018, 5, 8, 17, 0),
        ProjectId: 2,
        CategoryId: 2
    }, {
        Id: 17,
        Subject: 'Resource planning',
        StartTime: new Date(2018, 5, 6, 15, 0),
        EndTime: new Date(2018, 5, 6, 18, 0),
        ProjectId: 1,
        CategoryId: 1
    }, {
        Id: 18,
        Subject: 'Resource planning',
        StartTime: new Date(2018, 5, 7, 16, 0),
        EndTime: new Date(2018, 5, 7, 17, 0),
        ProjectId: 2,
        CategoryId: 1
    }, {
        Id: 19,
        Subject: 'Run test cases',
        StartTime: new Date(2018, 5, 7, 14, 0),
        EndTime: new Date(2018, 5, 7, 18, 0),
        ProjectId: 1,
        CategoryId: 2
    }, {
        Id: 20,
        Subject: 'Run test cases',
        StartTime: new Date(2018, 5, 6, 14, 0),
        EndTime: new Date(2018, 5, 6, 17, 30),
        ProjectId: 2,
        CategoryId: 2
    }, {
        Id: 21,
        Subject: 'Resource planning',
        StartTime: new Date(2018, 5, 7, 9, 30),
        EndTime: new Date(2018, 5, 7, 11, 30),
        ProjectId: 2,
        CategoryId: 1
    }, {
        Id: 22,
        Subject: 'Developers Meeting',
        StartTime: new Date(2018, 5, 1, 12, 0),
        EndTime: new Date(2018, 5, 1, 13, 0),
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR',
        ProjectId: 2,
        CategoryId: 1
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
        StartTime: new Date(2018, 3, 13, 14),
        EndTime: new Date(2018, 3, 13, 15, 45),
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
        StartTime: new Date(2018, 3, 15, 14),
        EndTime: new Date(2018, 3, 15, 16, 30),
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
        StartTime: new Date(2018, 3, 16, 9),
        EndTime: new Date(2018, 3, 16, 11, 30),
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
        StartTime: new Date(2018, 3, 19, 9),
        EndTime: new Date(2018, 3, 19, 10, 30),
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