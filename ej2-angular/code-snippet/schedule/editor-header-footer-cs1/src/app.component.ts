import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, PopupOpenEventArgs
} from '@syncfusion/ej2-angular-schedule';
@Component({
imports: [
        
        ScheduleModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  encapsulation: ViewEncapsulation.None,
  template: `
  <ejs-schedule #schedule  width='100%' height='550px' [eventSettings]='eventSettings' (popupOpen)="onPopupOpen($event)">
    <ng-template #editorHeaderTemplate let-data>
      <div *ngIf="data.Subject; else createNewEvent">
        {{ data.Subject }}
      </div>
      <ng-template #createNewEvent>
        Create New Event
      </ng-template>
    </ng-template>
    <ng-template #editorFooterTemplate>
      <div id="verify">
        <input type="checkbox" id="check-box" value="unchecked">
        <label id="text">Verified</label>
      </div>
      <div id="right-button">
        <button id="Save" class="e-control e-btn e-primary" disabled data-ripple="true">Save</button>
        <button id="Cancel" class="e-control e-btn e-primary"  data-ripple="true">Cancel</button>
      </div>
    </ng-template>
  </ejs-schedule>`
})
export class AppComponent {
  @ViewChild('schedule') public scheduleObj?: ScheduleComponent;
  private today: Date = new Date();
  private data: Record<string, any>[] = [{
    Id: 1,
    Subject: 'Surgery - Andrew',
    StartTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 9, 0),
    EndTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 10, 0),
    IsAllDay: false
  },
  {
    Id: 2,
    Subject: 'Consulting - John',
    StartTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 10, 0),
    EndTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 11, 30),
    IsAllDay: false
  },
  {
    Id: 3,
    Subject: 'Therapy - Robert',
    StartTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 11, 30),
    EndTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 12, 30),
    IsAllDay: false
  },
  {
    Id: 4,
    Subject: 'Observation - Steven',
    StartTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 12, 30),
    EndTime: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 13, 30),
    IsAllDay: false
  }];
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  private onSaveButtonClick(args: PopupOpenEventArgs): void {
    const data: Record<string, any> = {
      Id: args.data?.['Id'],
      Subject: (args.element.querySelector('#Subject') as HTMLInputElement).value,
      StartTime: (args.element.querySelector('#StartTime') as any).ej2_instances[0].value,
      EndTime: (args.element.querySelector('#EndTime') as any).ej2_instances[0].value,
      IsAllDay: (args.element.querySelector('#IsAllDay')as HTMLInputElement).checked
    };
    if (args.target?.classList.contains('e-appointment')) {
      this.scheduleObj?.saveEvent(data, 'Save');
    } else {
      data['Id'] = this.scheduleObj?.getEventMaxID();
      this.scheduleObj?.addEvent(data);
    }
    this.scheduleObj?.closeEditor();
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
      const saveButton: HTMLElement = args.element.querySelector('#Save') as HTMLElement;
      const cancelButton: HTMLElement = args.element.querySelector('#Cancel') as HTMLElement;
      const checkBox: HTMLInputElement = args.element.querySelector('#check-box') as HTMLInputElement;
      checkBox.onchange = () => {
        if (!(checkBox as HTMLInputElement).checked) {
          saveButton.setAttribute('disabled', '');
        } else {
          saveButton.removeAttribute('disabled');
        }
      };
      saveButton.onclick = () => {
        this.onSaveButtonClick(args);
      }
      cancelButton.onclick = () => {
        this.scheduleObj?.closeEditor();
      };
    }
  }
}
