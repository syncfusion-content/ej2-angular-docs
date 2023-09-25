

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend, Internationalization } from "@syncfusion/ej2-base";
import {
    EventSettingsModel, ScheduleComponent, WeekService, MonthService, TimelineMonthService, ResizeService,
    DragAndDropService, View, GroupModel, ResourceDetails
} from "@syncfusion/ej2-angular-schedule";
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { webinarData } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [WeekService, MonthService, TimelineMonthService, ResizeService, DragAndDropService],
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('scheduleObj', { static: true })
    public scheduleObj?: ScheduleComponent;
    public eventSettings: EventSettingsModel = { dataSource: extend([], webinarData, undefined, true) as Record<string, any>[] };
    public currentView: View = 'Week';
    public readonly = true;
    public selectedDate: Date = new Date(2021, 1, 15);
    public instance: Internationalization = new Internationalization();
    public resourceDataSource: Record<string, any>[] = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5], startHour: '08:00', endHour: '15:00' },
        { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5], startHour: '08:00', endHour: '17:00' },
        { text: 'Robson', id: 3, color: '#7fa900', startHour: '08:00', endHour: '16:00' }
    ];
    public group: GroupModel = { resources: ['Doctors'] };
ImageName: any;

    constructor() {

    }

    public getDoctorName(value: ResourceDetails): string {
        return ((value as ResourceDetails).resourceData) ?
            (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField!] as string
            : value.resourceName as string;
    }

    public getDoctorImage(value: ResourceDetails): string {
        const resourceName: string = this.getDoctorName(value);
        return resourceName.replace(' ', '-').toLowerCase();
    }

    public getDoctorLevel(value: ResourceDetails): string {
        const resourceName: string = this.getDoctorName(value);
        return (resourceName === 'Will Smith') ? 'Cardiologist' : (resourceName === 'Alice') ? 'Neurologist' : 'Orthopedic Surgeon';
    }

    public getWeatherImage(value: Date): string {
        switch (value.getDay()) {
            case 0:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clear.svg"/><div class="weather-text">25°C</div>';
            case 1:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clouds.svg"/><div class="weather-text">18°C</div>';
            case 2:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-rain.svg"/><div class="weather-text">10°C</div>';
            case 3:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clouds.svg"/><div class="weather-text">16°C</div>';
            case 4:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-rain.svg"/><div class="weather-text">8°C</div>';
            case 5:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clear.svg"/><div class="weather-text">27°C</div>';
            case 6:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clouds.svg"/><div class="weather-text">17°C</div>';
            default:
                return '';
        }
    }

    public getDateHeaderText(value: Date): string {
        return this.instance.formatDate(value, { skeleton: 'Ed' });
    }

    getMonthCellText(date: Date): string {
        if (date.getMonth() === 1 && date.getDate() === 23) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        } else if (date.getMonth() === 1 && date.getDate() === 9) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/get-together.svg" />';
        } else if (date.getMonth() === 1 && date.getDate() === 13) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        } else if (date.getMonth() === 1 && date.getDate() === 22) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/thanksgiving-day.svg" />';
        } else if (date.getMonth() === 1 && date.getDate() === 14) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        return '';
    }
    getWorkCellText(date: Date): string {
        let weekEnds: number[] = [0, 6];
        if (weekEnds.indexOf(date.getDay()) >= 0) {
            return "<span class='caption'>Weekend</span>";
        }
        return '';
    }

    public getTimeString(value: Date): string {
        return this.instance.formatDate(value, { skeleton: 'hm' });
    }
    refreshCellTemplate(): void {
        this.scheduleObj?.refreshTemplates("cellTemplate");
    }
    refreshDateHeaderTemplate(): void {
        this.scheduleObj?.refreshTemplates("dateHeaderTemplate");
    }
    refreshEventTemplate(): void {
        this.scheduleObj?.refreshTemplates("eventTemplate");
    }
    refreshResHeaderTemplate(): void {
        this.scheduleObj?.refreshTemplates("resourceHeaderTemplate");
    }
    refreshAllTemplate(): void {
        this.scheduleObj?.refreshTemplates();
    }
}


