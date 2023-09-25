

import { Component, ViewChild } from '@angular/core';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { Query, Predicate } from '@syncfusion/ej2-data';
import {
  ScheduleComponent, MonthService, DayService, WeekService, WorkWeekService,
  EventSettingsModel, AgendaService, EventRenderedArgs
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('confirmObj')
    public confirmObj?: CheckBox;
    @ViewChild('requestedObj')
    public requestedObj?: CheckBox;
    @ViewChild('freshObj')
    public freshObj?: CheckBox;
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public selectedDate: Date = new Date(2018, 1, 15);
    public isChecked: Boolean = true;
    public onEventRendered(args: EventRenderedArgs): void {
        switch (args.data['EventType']) {
            case 'Requested':
                (args.element as HTMLElement).style.backgroundColor = '#F57F17';
                break;
            case 'Confirmed':
                (args.element as HTMLElement).style.backgroundColor = '#7fa900';
                break;
            case 'New':
                (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
                break;
        }
    }
    public onCheckBoxChange(): void {
        let predicate: Predicate | undefined;
        const checkBoxes: CheckBox[] = [this.confirmObj as any, this.requestedObj, this.freshObj];
        checkBoxes.forEach((checkBoxObj: CheckBox) => {
            if (checkBoxObj.checked) {
                if (predicate) {
                    predicate = predicate.or('EventType', 'equal', checkBoxObj.label);
                } else {
                    predicate = new Predicate('EventType', 'equal', checkBoxObj.label);
                }
            }
        });
        (this.scheduleObj as any).eventSettings.query = new Query().where(predicate || '');
    }
}


