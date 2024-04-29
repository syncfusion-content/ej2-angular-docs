import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component} from '@angular/core';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, EJ2Instance, } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule,
        DropDownListModule,
        DateTimePickerModule 
    ],
standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService,  AgendaService,
      MonthAgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)'>
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
                        [dataSource]='statusData' value="{{data.EventType}}" (select)="eventSelect($event)">
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
                                style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ng-template>
    </ejs-schedule>`
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfo: Boolean = false;
    public startDate!: Date;
    public endDate!: Date;
    public statusData: Object[] = ['New', 'Requested', 'Confirmed'];
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    public eventSelect(args: any) {
        if (!isNullOrUndefined(document.getElementById("EventType_Error")as any)) {
            document.getElementById("EventType_Error")!.style.display = "none";
        }
    }
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

    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'Editor') {
            if (!isNullOrUndefined(document.getElementById("EventType_Error")as any)) {
                document.getElementById("EventType_Error")!.style.display = "none";
                document.getElementById("EventType_Error")!.style.left = "351px";
            }
            let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
            let validator: FormValidator = ((formElement as EJ2Instance).ej2_instances[0] as FormValidator);
            validator.addRules('EventType', { required: true });
        }
    }
}


