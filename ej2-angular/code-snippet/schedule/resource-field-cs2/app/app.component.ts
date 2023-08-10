

import { Component, ViewChild } from '@angular/core';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, RecurrenceEditor, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)'>
        <ng-template #editorTemplate>
            <table class="custom-event-editor" width="100%" cellpadding="5">
                <tbody>
                    <tr>
                        <td class="e-textlabel">Summary</td>
                        <td colspan="4">
                            <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                        </td>
                    </tr>
                    <tr>
                    <td class="e-textlabel">From</td>
                        <td colspan="4">
                            <input id="StartTime" class="e-field" type="text" name="StartTime" />
                        </td>
                    </tr>
                    <tr>
                        <td class="e-textlabel">To</td>
                        <td colspan="4">
                            <input id="EndTime" class="e-field" type="text" name="EndTime" />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <div id='RecurrenceEditor'></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="e-textlabel">Reason</td>
                        <td colspan="4">
                            <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    </ejs-schedule>`
})


export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfo: Boolean = false;
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'Editor') {
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (!startElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (!endElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
            let recurElement: HTMLElement = args.element.querySelector('#RecurrenceEditor') as HTMLElement;
            if (!recurElement.classList.contains('e-recurrenceeditor')) {
                let recurrObject: RecurrenceEditor = new RecurrenceEditor({
                });
                recurrObject.appendTo(recurElement);
                (this.scheduleObj?.eventWindow as any).recurrenceEditor = recurrObject;
            }
            document.getElementById('RecurrenceEditor')!.style.display = (this.scheduleObj!.currentAction == "EditOccurrence") ? 'none' : 'block';
        }
    }
}


