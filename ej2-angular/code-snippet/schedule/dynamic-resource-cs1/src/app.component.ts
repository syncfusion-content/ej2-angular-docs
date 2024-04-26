import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'




import { Component, ViewChild } from '@angular/core';
import { holidayData, birthdayData, companyData, personalData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { ScheduleComponent, EventSettingsModel, GroupModel, MonthService, TimelineViewsService, TimelineMonthService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [
        
        ScheduleModule,
        CheckBoxModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
    selector: "app-root",
    providers: [MonthService, TimelineViewsService, TimelineMonthService, ResizeService, DragAndDropService],
    // specifies the template string for the Schedule component
    template: `<div class="control-section">
  <div class="col-lg-12 property-section">
    <table id="property" title="Show / Hide Resource">
        <tbody>
            <tr>
                <td>
                    <ejs-checkbox cssClass="personal" label="My Calender" value="1" [checked]="true" [disabled]="true" (change)="onChange($event)"></ejs-checkbox>
                </td>
                <td>
                    <ejs-checkbox cssClass="company" label="Company" value="2" [checked]="false" (change)="onChange($event)"></ejs-checkbox>
                </td>
                <td>
                    <ejs-checkbox cssClass="birthday" label="Birthday" value="3" [checked]="false" (change)="onChange($event)"></ejs-checkbox>
                </td>
                <td>
                    <ejs-checkbox cssClass="holiday" label="Holiday" value="4" [checked]="false" (change)="onChange($event)"></ejs-checkbox>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  <div>
      <ejs-schedule #scheduleObj cssClass='schedule-add-remove-resources' width='100%' height='650px' [group]="group" [selectedDate]="selectedDate"
          [eventSettings]="eventSettings">
          <e-resources>
              <e-resource field='CalendarId' title='Calendars' [dataSource]='resourceDataSource' [allowMultiple]='allowMultiple' name='Calendars'
                  textField='CalendarText' idField='CalendarId' colorField='CalendarColor'>
              </e-resource>
          </e-resources>
          <e-views>
              <e-view option="Month"></e-view>
              <e-view option="TimelineWeek"></e-view>
              <e-view option="TimelineMonth"></e-view>
          </e-views>
      </ejs-schedule>
  </div>
</div>`
})

export class AppComponent {
    public calendarCollections: Object[] = [
        { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
        { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
        { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
        { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
    ];
    public group: GroupModel = { resources: ['Calendars'] };
    public resourceDataSource: Object[] = [this.calendarCollections[0]];
    public allowMultiple: Boolean = true;
    public selectedDate: Date = new Date(2018, 3, 1);
    public eventSettings: EventSettingsModel = { dataSource: this.generateCalendarData() };
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    generateCalendarData(): Object[] {
        return [...personalData, ...companyData, ...birthdayData, ...holidayData];
    }
    public onChange(args: ChangeEventArgs): void {
        const value: number = parseInt((args.event?.currentTarget as Element)?.querySelector('input')?.getAttribute('value') ?? '0', 10);
        const resourceData: Record<string, any>[] =
          this.calendarCollections.filter((calendar: Record<string, any>) => calendar['CalendarId'] === value);
        if (args.checked) {
          this.scheduleObj?.addResource(resourceData[0], 'Calendars', value );
        } else {
          this.scheduleObj?.removeResource(value, 'Calendars');
        }
    }
}


