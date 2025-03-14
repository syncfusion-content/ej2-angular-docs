export let scheduleData: Object[] = [
  {
      Id: 1,
      Subject: 'Paris',
      StartTime: new Date(2023, 9, 29, 10, 0),
      EndTime: new Date(2023, 9, 29, 11, 30),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 2,
      Subject: 'Meeting - 1',
      StartTime: new Date(2023, 9, 30, 10, 0),
      EndTime: new Date(2023, 9, 30, 12, 30),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 3,
      Subject: 'Meeting - 2',
      StartTime: new Date(2023, 9, 30, 11, 0),
      EndTime: new Date(2023, 9, 30, 14, 30),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 4,
      StartTime: new Date(2023, 9, 31),
      EndTime: new Date(2023, 10, 1),
      IsAllDay: true,
      OwnerId: 1
  }, {
      Id: 5,
      Subject: 'Conference - 2',
      StartTime: new Date(2023, 9, 31, 22, 0),
      EndTime: new Date(2023, 10, 1, 0, 0),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 6,
      Subject: 'Conference - 3',
      StartTime: new Date(2023, 10, 1, 9, 30),
      EndTime: new Date(2023, 10, 1, 11, 45),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 7,
      Subject: 'Conference - 4',
      StartTime: new Date(2023, 10, 1, 10, 30),
      EndTime: new Date(2023, 10, 1, 12, 45),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 8,
      Subject: 'Travelling',
      StartTime: new Date(2023, 10, 1, 11, 30),
      EndTime: new Date(2023, 10, 1, 13, 45),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 9,
      Subject: 'Vacation',
      StartTime: new Date(2023, 10, 2, 10, 0),
      EndTime: new Date(2023, 10, 2, 12, 30),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 10,
      Subject: 'Conference',
      StartTime: new Date(2023, 10, 2, 15, 30),
      EndTime: new Date(2023, 10, 2, 18, 45),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 11,
      Subject: 'Vacation',
      StartTime: new Date(2023, 10, 3, 10, 15),
      EndTime: new Date(2023, 10, 3, 14, 45),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 12,
      Subject: 'Conference',
      StartTime: new Date(2023, 10, 4, 9, 30),
      EndTime: new Date(2023, 10, 5, 5, 45),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 13,
      StartTime: new Date(2023, 10, 5, 10, 0),
      EndTime: new Date(2023, 10, 5, 11, 30),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 14,
      Subject: 'Same Time',
      StartTime: new Date(2023, 10, 5, 10, 0),
      EndTime: new Date(2023, 10, 5, 11, 30),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 15,
      Subject: 'Same Time',
      StartTime: new Date(2023, 10, 5, 10, 0),
      EndTime: new Date(2023, 10, 5, 11, 30),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 16,
      Subject: 'Same Time',
      StartTime: new Date(2023, 10, 5, 10, 0),
      EndTime: new Date(2023, 10, 5, 11, 30),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 17,
      Subject: 'Same Time',
      StartTime: new Date(2023, 10, 5, 10, 0),
      EndTime: new Date(2023, 10, 5, 11, 30),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 18,
      Subject: 'Same Time',
      StartTime: new Date(2023, 10, 5, 10, 0),
      EndTime: new Date(2023, 10, 5, 11, 30),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 19,
      Subject: 'Meeting - 1',
      StartTime: new Date(2023, 10, 6),
      EndTime: new Date(2023, 10, 7),
      IsAllDay: true,
      OwnerId: 1
  }, {
      Id: 20,
      Subject: 'Meeting - 2',
      StartTime: new Date(2023, 10, 6, 11, 0),
      EndTime: new Date(2023, 10, 6, 14, 30),
      IsAllDay: false,
      OwnerId: 3
  }, {
      Id: 21,
      Subject: 'Conference - 1',
      StartTime: new Date(2023, 10, 7, 22, 0),
      EndTime: new Date(2023, 10, 8, 20, 0),
      IsAllDay: true,
      OwnerId: 2
  }, {
      Id: 22,
      Subject: 'Conference - 2',
      StartTime: new Date(2023, 10, 7, 22, 0),
      EndTime: new Date(2023, 10, 14, 23, 0),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 23,
      Subject: 'Conference - 3',
      StartTime: new Date(2023, 10, 8, 9, 30),
      EndTime: new Date(2023, 10, 9, 11, 45),
      IsAllDay: true,
      OwnerId: 2
  }, {
      Id: 24,
      Subject: 'Conference - 3 - A',
      StartTime: new Date(2023, 10, 8, 9, 30),
      EndTime: new Date(2023, 10, 8, 10, 0),
      IsAllDay: true,
      OwnerId: 3
  }, {
      Id: 25,
      Subject: 'Conference - 3 - B',
      StartTime: new Date(2023, 10, 8, 10, 0),
      EndTime: new Date(2023, 10, 8, 10, 30),
      IsAllDay: false,
      OwnerId: 1
  }, {
      Id: 26,
      Subject: 'Conference - 4',
      StartTime: new Date(2023, 10, 8, 10, 30),
      EndTime: new Date(2023, 10, 8, 12, 45),
      IsAllDay: false,
      OwnerId: 2
  }, {
      Id: 27,
      Subject: 'Travelling',
      StartTime: new Date(2023, 10, 8, 11, 30),
      EndTime: new Date(2023, 10, 8, 13, 45),
      IsAllDay: false,
      OwnerId: 3
  }
];