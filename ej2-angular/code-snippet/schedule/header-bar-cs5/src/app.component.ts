import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, AgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, AgendaService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule id='schedule' width='100%' height='650px'>
      <ng-template #dateRangeTemplate let-data>
        <div class="date-text">{{getDateRange(data.startDate)}}-{{getDateRange(data.endDate)}}</div>
      </ng-template>
      <e-views>
        <e-view option="Day"></e-view>
        <e-view option="Week"></e-view>
        <e-view option="WorkWeek"></e-view>
        <e-view option="Month"></e-view>
        <e-view option="Agenda"></e-view>
        <e-view option="TimelineMonth"></e-view>
      </e-views>
    </ejs-schedule>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public instance: Internationalization = new Internationalization();
    public getDateRange(value: Date): string {
        return this.instance.formatDate(value, { skeleton: 'Ed' });
    }
}