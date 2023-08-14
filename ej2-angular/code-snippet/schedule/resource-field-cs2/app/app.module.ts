import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule, RecurrenceEditorModule  } from '@syncfusion/ej2-angular-schedule';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ScheduleModule,
        TimePickerModule,
        RecurrenceEditorModule,
        DateTimePickerModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService]
})
export class AppModule { }