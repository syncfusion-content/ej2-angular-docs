import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { RatingModule } from '@syncfusion/ej2-angular-inputs'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'

import { Component, ViewChild, ElementRef } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { RatingComponent } from '@syncfusion/ej2-angular-inputs';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, PopupCloseEventArgs,AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule,
        DropDownListModule,
        DateTimePickerModule,
        RatingModule  
    ],
standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,
        MonthAgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)' (popupClose) ='onPopupClose($event)'>
    <ng-template #editorTemplate let-data>
        <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
                <tr>
                    <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                        <input id="Subject" class="e-input" type="text" name="Subject" style="width: 100%" #subject value="{{data.Subject}}"/>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Rating</td>
                    <td colspan="4">
                    <input ejs-rating id='rating1' #rating value="{{data.Rating}}"/>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">From</td>
                    <td colspan="4">
                    <ejs-datetimepicker id="StartTime" class="e-field" data-name="StartTime" format="M/dd/yy h:mm a"
                    (change)="onDateChange($event)" [value]="startDateParser(data.startTime || data.StartTime)" #startTime>
                  </ejs-datetimepicker>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">To</td>
                    <td colspan="4">
                    <ejs-datetimepicker id="EndTime" class="e-field" data-name="EndTime" format="M/dd/yy h:mm a"
                    (change)="onDateChange($event)" [value]="endDateParser(data.endTime || data.EndTime)" #endTime>
                  </ejs-datetimepicker>
                    </td>
                </tr>
                <tr>
                    <td class="e-textlabel">Reason</td>
                    <td colspan="4">
                        <textarea id="Description" class="e-input" name="Description" rows="3" cols="50" style="width: 100%; 
                        height: 60px !important; resize: vertical" #textArea value="{{data.Description}}" ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </ng-template>
    </ejs-schedule>`
})

export class AppComponent {
    @ViewChild('rating') public rating!: RatingComponent;
    @ViewChild('startTime') public startTime!: DateTimePicker;
    @ViewChild('endTime') public endTime!: DateTimePicker;
    @ViewChild('textArea') public textArea!: ElementRef<HTMLInputElement>;
    @ViewChild('subject') public subject!: ElementRef<HTMLInputElement>;
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfo: Boolean = false;
    public startDate!: Date;
    public endDate!: Date;
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    public statusData: Object[] = ['New', 'Requested', 'Confirmed'];

    onPopupOpen(args: PopupOpenEventArgs) : void {
        if (args.type === 'Editor') {
            if (this.subject.nativeElement) {
                (this.subject.nativeElement as HTMLInputElement).value = ((<{ [key: string]: Object; }>(args.data))['Subject'] as string) || "";
            }
            if (this.textArea.nativeElement) {
                (this.textArea.nativeElement as HTMLInputElement).value = (<{ [key: string]: Object; }>(args.data))['Description'] as string || "";
            }
        }
    }
    onPopupClose(args: PopupCloseEventArgs) : void {
        if (args.type === 'Editor' && !isNullOrUndefined((args as any).data)) {
            if ( this.subject.nativeElement ) {
                (<{ [key: string]: Object; }>(args.data))['Subject'] = (this.subject.nativeElement as HTMLInputElement).value;
            }
            if(this.rating.element) {
                ((<{ [key: string]: Object; }>(args.data))['Rating'] as string) = (this.rating.element as HTMLInputElement).value;
            }
           
            if (this.startTime.element) {
                (<{ [key: string]: Object; }>(args.data))['StartTime'] = (this.startTime.element as HTMLInputElement).value;
            }
            
            if (this.endTime.element) {
                (<{ [key: string]: Object; }>(args.data))['EndTime'] = (this.endTime.element as HTMLInputElement).value;
            }
            if (this.textArea.nativeElement) {
                ((<{ [key: string]: Object; }>(args.data))['Description'] as string) = (this.textArea.nativeElement as HTMLInputElement).value;
            }
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
}


