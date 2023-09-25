import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { WeekService, MonthService} from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ScheduleModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [WeekService,
                MonthService]
})
export class AppModule { }