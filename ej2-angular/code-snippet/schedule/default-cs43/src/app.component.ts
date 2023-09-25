

import { Component } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { EventSettingsModel, TimelineMonthService, getWeekNumber, getWeekLastDate, CellTemplateArgs } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings">
        <e-header-rows>
            <e-header-row option='Year'>
                <ng-template #template let-data>
                    <span [innerHTML]="getYearDetails(data)"></span>
                </ng-template>
            </e-header-row>
            <e-header-row option='Month'>
                <ng-template #template let-data>
                    <span [innerHTML]="getMonthDetails(data)"></span>
                </ng-template>
            </e-header-row>
            <e-header-row option='Week'>
                <ng-template #template let-data>
                    <span [innerHTML]="getWeekDetails(data)"></span>
                </ng-template>
            </e-header-row>
            <e-header-row option='Date'></e-header-row>
        </e-header-rows>
        <e-views>
            <e-view option='TimelineMonth'></e-view>
        </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 0, 1);
    public instance: Internationalization = new Internationalization();
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public getYearDetails(value: CellTemplateArgs): string {
        return 'Year: ' + this.instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'y' });
    }
    public getMonthDetails(value: CellTemplateArgs): string {
        return 'Month: ' + this.instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'yMMM' });
    }
    public getWeekDetails(value: CellTemplateArgs): string {
        return 'Week: ' + getWeekNumber(getWeekLastDate((value as CellTemplateArgs).date, 0));
    }
}


