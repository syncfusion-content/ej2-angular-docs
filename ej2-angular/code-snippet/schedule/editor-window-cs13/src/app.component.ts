

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Internationalization, createElement } from '@syncfusion/ej2-base';
import { EventSettingsModel, MonthService, PopupOpenEventArgs,  ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #scheduleObj width='100%' height='650px' cssClass="more-indicator-app" [selectedDate]="selectedDate" [views]="views" [eventSettings]="eventSettings" (popupOpen)="onPopupOpen($event)">
    </ejs-schedule>`,
    styles: [`.more-indicator-app .e-more-popup-wrapper .e-appointment {
        display: inline-grid;
        height: 60px;
    }

    .more-indicator-app .e-more-popup-wrapper .e-appointment .e-subject {
        white-space: initial;
    }`],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {
    @ViewChild('scheduleObj') public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 1);
    public views: Array<string> = ['Month'];
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };

    private instance: Internationalization = new Internationalization();
    getTimeString(value: Date): string {
        return this.instance.formatDate(value, { format: 'hh:mm:a : dd-MMM-y' });
    }

    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'EventContainer') {
            let appointments = args.element.querySelectorAll('.e-appointment');
            for (let i = 0; i < appointments.length; i++) {
                let eventData = this.scheduleObj?.getEventDetails(appointments[i]) as { [key: string]: Object };
                let time = this.getTimeString(eventData['StartTime'] as Date) + ' - ' + this.getTimeString(eventData['EndTime'] as Date);
                let customElement = createElement('div', { className: 'e-more-popup-event-time' });
                customElement.innerText = time;
                appointments[i].insertBefore(customElement, appointments[i].firstChild);
            }
        }
    }
}


