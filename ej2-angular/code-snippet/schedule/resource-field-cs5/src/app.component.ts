

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { extend, isNullOrUndefined } from "@syncfusion/ej2-base";
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DateTimePicker } from "@syncfusion/ej2-calendars";
import { FormValidators, FormValidator, TextBox } from "@syncfusion/ej2-angular-inputs";
import { PopupOpenEventArgs, EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, EJ2Instance
} from "@syncfusion/ej2-angular-schedule";
import { eventData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [ MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
    encapsulation: ViewEncapsulation.None,
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showQuickInfo]='showQuickInfo' (popupOpen)='onPopupOpen($event)' >
    <ng-template #editorTemplate let-data>
        <table class="custom-event-editor" width="100%" cellpadding="5">
            <tbody>
                <tr>
                    <td class="e-textlabel">Summary</td>
                    <td colspan="4">
                        <input id="Subject" class=" e-field e-input" type="text" name="Subject" style="width: 100%" value="{{data.Subject}}" (keyup)="onChange($event)"/>
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
                        <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; 
                        height: 60px !important; resize: vertical" value="{{data.Description}}" (keyup)="onChange($event)"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </ng-template>
    </ejs-schedule>`
})

export class AppComponent {
  @ViewChild("scheduleObj") scheduleObj: ScheduleComponent | undefined;
  public selectedDate: Date = new Date(2018, 1, 15);
  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
  public showQuickInfo: Boolean = false;
  public startDate!: Date;
  public endDate!: Date;
  public eventSettings: EventSettingsModel = {
    dataSource: eventData,
    fields: {
      subject: { name: "Subject", validation: { required: true } },
      description: {
        name: "Description",
        validation: { required: true }
      }
    }
  };
  public validator?: FormValidator;
  public statusFields: Object = { text: "StatusText", value: "StatusText" };
  public StatusData: Object[] = [
    { StatusText: "New", Id: 1 },
    { StatusText: "Requested", Id: 2 },
    { StatusText: "Confirmed", Id: 3 }
  ];

  public onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === "Editor") {
      const formElement: HTMLElement = args.element.querySelector(".e-schedule-form") as HTMLElement;
      this.validator = (formElement as EJ2Instance).ej2_instances[0] as FormValidator;
      this.validator.addRules("EventType", { required: [true, "This field is required."]});
      if (args.target!.classList.contains("e-work-cells")) {
        args.element.querySelector(".e-event-save")!.classList.add("e-custom-disable");
      }
    }
  }

  public onChange(args : any) {
    let form = (document.querySelector(".e-schedule-form") as any).ej2_instances[0];
    if (args.element && !args.e) {
      return;
    }
    let names = ["Subject", "Description", "EventType"];
    names.forEach(e => {
      form.validateRules(e);
    });
    let isValidated = false;
    let errorElements = document.querySelector(".e-dlg-content")!.querySelectorAll(".e-schedule-error");
    for (let i = 0; i < errorElements.length; i++) {
      isValidated =(errorElements[i] as any).style.display === "none" ? true : false;
      if (isValidated === false) {
        break;
      }
    }
    let saveBtn = document.querySelector(".e-custom-disable");
    if (isValidated && saveBtn) {
      saveBtn.classList.remove("e-custom-disable");
    } else if (!isValidated && !saveBtn) {
      document.querySelector(".e-event-save")!.classList.add("e-custom-disable");
    }
  }

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


