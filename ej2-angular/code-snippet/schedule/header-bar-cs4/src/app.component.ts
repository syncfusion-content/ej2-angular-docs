

import { Component, ViewEncapsulation } from '@angular/core';
import { EventSettingsModel, MonthService, RenderCellEventArgs } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule id='schedule' width='100%' height='550px' [cssClass]='cssClass' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'
    (renderCell)='onRenderCell($event)'></ejs-schedule>`,
    styles: [`.weather-text {
        float: right;
        margin: -20px 2px 0 0;
        color: #EA7A57;
    }`],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Month'];
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
    public cssClass: string = 'schedule-date-header-template';
    onRenderCell(args: RenderCellEventArgs): void {
        if (args.elementType === 'monthCells') {
            let ele: Element = document.createElement('div');
            ele.innerHTML = this.getWeather(args.date);
            (args.element).appendChild((ele as any).firstChild);
        }
    }
    getWeather: Function = (value: Date) => {
        switch (value.getDay()) {
            case 0:
                return '<div class="weather-text">25°C</div>';
            case 1:
                return '<div class="weather-text">18°C</div>';
            case 2:
                return '<div class="weather-text">10°C</div>';
            case 3:
                return '<div class="weather-text">16°C</div>';
            case 4:
                return '<div class="weather-text">8°C</div>';
            case 5:
                return '<div class="weather-text">27°C</div>';
            case 6:
                return '<div class="weather-text">17°C</div>';
            default:
                return null;
        }
    }
}


