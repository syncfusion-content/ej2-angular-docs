import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component, ViewChild } from '@angular/core';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { isNullOrUndefined } from '@syncfusion/ej2-base'
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs, GroupModel,  AgendaService,
    MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule,
        DateTimePickerModule,
        MultiSelectModule 
    ],
standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,
        MonthAgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]='selectedDate' [views]='views'[eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' [group]='group'>
        <e-resources>
            <e-resource field="OwnerId" title="Owner" name="Owners"
            [dataSource]="ownerDataSource"
            textField="text" idField="id" colorField="color">
            </e-resource>
        </e-resources>
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
                        <td class="e-textlabel">Owner</td>
                        <td colspan="4">
                        <ejs-multiselect id='OwnerId' [dataSource]='ownerDataSource' [fields]='fields' placeholder='Choose a owner' value="{{data.OwnerId}}"></ejs-multiselect>
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
    public startDate!: Date;
    public endDate!: Date;
    public eventSettings: EventSettingsModel = {
        dataSource: eventData
    };
    public group: GroupModel = { resources: ['Owners'] };
    public ownerDataSource: Object[] = [
        { text: "Nancy", id: 1, color: "#1aaa55" },
        { text: "Smith", id: 2, color: "#7fa900" },
        { text: "Paul", id: 3, color: "#357cd2" }
    ];
    public fields: Object = { text: 'text', value: 'id'}
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


