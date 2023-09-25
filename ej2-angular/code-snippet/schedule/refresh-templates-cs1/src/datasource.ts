/**
 * Schedule datasource spec
 */

export let webinarData: Record<string, any>[] = [
    {
        Id: 1,
        Subject: 'Environment Day',
        Tags: 'Eco day, Forest conserving, Earth & its resources',
        Description: 'A day that creates awareness to promote the healthy planet and reduce the air pollution crisis on nature earth.',
        StartTime: new Date(2021, 1, 15, 9, 0),
        EndTime: new Date(2021, 1, 15, 14, 0),
        ImageName: 'environment-day',
        PrimaryColor: '#1aaa55',
        SecondaryColor: '#47bb76',
        DoctorId: 1
    }, {
        Id: 2,
        Subject: 'Health Day',
        Tags: 'Reduce mental stress, Follow good food habits',
        Description: 'A day that raises awareness on different health issues. It marks the anniversary of the foundation of WHO.',
        StartTime: new Date(2021, 1, 16, 9, 0),
        EndTime: new Date(2021, 1, 16, 14, 0),
        ImageName: 'health-day',
        PrimaryColor: '#357cd2',
        SecondaryColor: '#5d96db',
        DoctorId: 2
    }, {
        Id: 3,
        Subject: 'Cancer Day',
        Tags: 'Life threatening cancer effects, Palliative care',
        Description: 'A day that raises awareness on cancer and its preventive measures. Early detection saves life.',
        StartTime: new Date(2021, 1, 17, 9, 0),
        EndTime: new Date(2021, 1, 17, 14, 0),
        ImageName: 'cancer-day',
        PrimaryColor: '#7fa900',
        SecondaryColor: '#a4c932',
        DoctorId: 3
    }
];