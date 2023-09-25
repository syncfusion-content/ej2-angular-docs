

import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [currentView]='currentView' [cssClass]='cssClass' [eventSettings]='eventSettings' (popupOpen)='onPopupOpen($event)'></ejs-schedule>`,
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public currentView: string = 'Month';
    public cssClass: string = 'schedule-more-indicator';
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'EventContainer') {
            let instance: Internationalization = new Internationalization();
            let date: string  = instance.formatDate((<any>args.data).date, { skeleton: 'MMMEd' });
            ((args.element.querySelector('.e-header-date')) as HTMLElement).innerText = date;
            ((args.element.querySelector('.e-header-day')) as HTMLElement).innerText = 'Event count: ' + (<any>args.data).event.length;
        }
    }
}


