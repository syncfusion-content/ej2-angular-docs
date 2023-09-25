

import { Component } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, TimelineViewsService, DragAndDropService, GroupModel, ResizeService, View, TimelineMonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { roomData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService, ResizeService, DragAndDropService, TimelineMonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [views]="scheduleViews" [selectedDate]="selectedDate" [eventSettings]="eventSettings"  [group]="group" [currentView]="currentView" [rowAutoHeight]="rowAutoHeight">
  <e-resources><e-resource field='RoomId' title='Room Type' [dataSource]='resourceDataSource' [allowMultiple]='allowMultiple' name='MeetingRoom' textField='text' idField='id' colorField='color'></e-resource>
  <e-views> <e-view option='TimelineDay'></e-view>
            <e-view option='TimelineWeek'></e-view>
            <e-view option='TimelineWorkWeek'></e-view>
            <e-view option='TimelineMonth'></e-view>
            <e-view option='Agenda'></e-view></e-views></e-resources></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 7, 1);
  public rowAutoHeight: boolean = true;
  public scheduleViews: View[] = ['TimelineWeek'];
  public currentView: View = 'TimelineWeek';
  public group: GroupModel = {
    enableCompactView: false,
    resources: ['MeetingRoom']
  };
  public allowMultiple: Boolean = true;
  public resourceDataSource: Object[] = [
    { text: 'Room A', id: 1, color: '#98AFC7' },
    { text: 'Room B', id: 2, color: '#99c68e' },
    { text: 'Room C', id: 3, color: '#C2B280' },
    { text: 'Room D', id: 4, color: '#3090C7' },
    { text: 'Room E', id: 5, color: '#95b9' },
    { text: 'Room F', id: 6, color: '#95b9c7' },
    { text: 'Room G', id: 7, color: '#deb887' },
    { text: 'Room H', id: 8, color: '#3090C7' },
    { text: 'Room I', id: 9, color: '#98AFC7' },
    { text: 'Room J', id: 10, color: '#778899' }
  ];
  
  public eventSettings: EventSettingsModel = {
    dataSource: roomData,
    fields: {
      id: 'Id',
      subject: { name: 'Subject', title: 'Summary' },
      location: { name: 'Location', title: 'Location' },
      description: { name: 'Description', title: 'Comments' },
      startTime: { name: 'StartTime', title: 'From' },
      endTime: { name: 'EndTime', title: 'To' }
    }
  };

 }


