import { Component, ViewChild } from '@angular/core';
import { 
    ScheduleComponent, 
    EventSettingsModel, 
    View, 
    TooltipOpenEventArgs, 
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    YearService, 
    AgendaService, 
    MonthAgendaService, 
    TimelineViewsService, 
    TimelineMonthService, 
    TimelineYearService, 
    ResizeService, 
    DragAndDropService 
} from '@syncfusion/ej2-angular-schedule';
import { eventsData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    YearService, 
    AgendaService, 
    MonthAgendaService, 
    TimelineViewsService, 
    TimelineMonthService, 
    TimelineYearService, 
    ResizeService, 
    DragAndDropService
  ],
})
export class AppComponent {
  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
  public selectedDate: Date = new Date(2025, 1, 15);
  public currentView: View = 'Month';
  public scheduleViews: View[] = [
    'Day', 'Week', 'WorkWeek', 'Month', 'Year', 'Agenda', 
    'MonthAgenda', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 
    'TimelineMonth', 'TimelineYear'
  ];
  
  public eventSettings: EventSettingsModel = {
    dataSource: eventsData,
    enableTooltip: true,
    fields: {
      subject: { title: 'Name', name: 'Subject' },
      location: { title: 'Country Name', name: 'Location' },
      description: { title: 'Summary', name: 'Description' },
      startTime: { title: 'From', name: 'StartTime' },
      endTime: { title: 'To', name: 'EndTime' },
      startTimezone: { title: 'Origin', name: 'StartTimezone' },
      endTimezone: { title: 'Destination', name: 'EndTimezone' }
    }
  };

  public onTooltipOpen(args: TooltipOpenEventArgs): void {
    let record = args.data as { Subject: string };
    if (record.Subject === 'Vacation') {
      args.cancel = true;
    }
  }
}
