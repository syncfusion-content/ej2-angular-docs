import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ElementRef, ViewChild } from '@angular/core';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { EventSettingsModel, PopupOpenEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule,
        DropDownListModule,
        DateTimePickerModule 
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo'>
    <ng-template #editorTemplate let-data>
        <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
                <tr>
                    <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                        <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Status</td>
                    <td colspan="4">
                    <ejs-dropdownlist id='EventType' class="e-field" data-name="EventType" placeholder='Choose Status'
                    [dataSource]='statusData' value="{{data.EventType}}">
                  </ejs-dropdownlist>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">From</td>
                    <td colspan="4">
                    <ejs-datetimepicker id="StartTime" class="e-field" data-name="StartTime" format="M/dd/yy h:mm a"
                    (change)="onDateChange($event)" [value]="startDateParser(data.startTime || data.StartTime)">
                  </ejs-datetimepicker>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">To</td>
                    <td colspan="4">
                    <ejs-datetimepicker id="EndTime" class="e-field" data-name="EndTime" format="M/dd/yy h:mm a"
                    (change)="onDateChange($event)" [value]="endDateParser(data.endTime || data.EndTime)">
                  </ejs-datetimepicker>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Reason</td>
                    <td colspan="4">
                    <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50"
                    value="{{data.Description}}" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </ng-template>
    </ejs-schedule>`
})


export class AppComponent {
    @ViewChild('schedule') public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfo: Boolean = false;
    public startDate!: Date;
    public endDate!: Date;
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    public statusData: Object[] = ['New', 'Requested', 'Confirmed'];

    public startDateParser(data: string) {
        if (isNullOrUndefined(this.startDate) && !isNullOrUndefined(data)) {
          return new Date(data);
        } else if (!isNullOrUndefined(this.startDate)) {
          return new Date(this.startDate);
        }
        return new Date();
    }

      public endDateParser(data: string) {
        if (isNullOrUndefined(this.endDate) && !isNullOrUndefined(data)) {
          return new Date(data);
        } else if (!isNullOrUndefined(this.endDate)) {
          return new Date(this.endDate);
        }
        return new Date();
      }

      public onDateChange(args: ChangeEventArgs): void {
        if (!isNullOrUndefined(args.event as any)) {
          if (args.element.id === "StartTime") {
            this.startDate = args.value as Date;
          } else if (args.element.id === "EndTime") {
            this.endDate = args.value as Date;
          }
        }
    }
}


