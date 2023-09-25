

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ScheduleComponent, CurrentAction, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"
    (popupOpen)="onPopupOpen($event)">

    <!-- Header template -->
    <ng-template #quickInfoTemplatesHeader let-data>
      <div *ngIf="data.elementType == 'cell' || data.elementType == 'event'">
        <div class="e-popup-header">
          <div class="e-header-icon-wrapper">
            <div *ngIf="data.elementType == 'event'" class="subject">{{data.Subject}}</div>
            <button class="e-close e-close-icon e-icons" title="Close" (click)="onCloseClick()"></button>
          </div>
        </div>
      </div>
    </ng-template>

    <!-- Content Template -->
    <ng-template #quickInfoTemplatesContent let-data>
      <div *ngIf="data.elementType == 'cell'" class="e-cell-content">
        <form class="e-schedule-form">
          <div style="padding:10px">
            <input class="subject e-field e-input" type="text" name="Subject" placeholder="Title" style="width:100%">
          </div>
          <div style="padding:10px">
            <input class="location e-field e-input" type="text" name="Location" placeholder="Location" style="width:100%">
          </div>
        </form>
      </div>
      <div *ngIf="data.elementType == 'event'" class="e-event-content">
        <div class="start-time">Start: {{data.StartTime.toLocaleString()}}</div>
        <div class="end-time">End: {{data.EndTime.toLocaleString()}}</div>
        <div *ngIf="data.Location != undefined && data.Location != ''" class="location">Location: {{data.Location}}</div>
      </div>
    </ng-template>

    <!-- Footer Template -->
    <ng-template #quickInfoTemplatesFooter let-data>
      <div *ngIf="data.elementType == 'cell'" class="e-cell-footer">
        <div class="left-button">
          <button class="e-event-details" title="Extra Details" (click)="onDetailsClick($event)">More Details</button>
        </div>
        <div class="right-button">
          <button class="e-event-create" title="Add" (click)="onAddClick($event)">Add</button>
        </div>
      </div>
      <div *ngIf="data.elementType == 'event'" class="e-event-footer">
        <div class="left-button">
          <button class="e-delete" title="Delete" (click)="onDeleteClick($event)">Delete</button>
          <button *ngIf="data.RecurrenceRule != undefined && data.RecurrenceRule != ''" class="e-delete-series"
            title="Delete" (click)="onDeleteClick($event)">Delete Series</button>
        </div>
        <div class="right-button">
          <button class="e-edit" title="Edit" (click)="onEditClick($event)">Edit</button>
          <button *ngIf="data.RecurrenceRule != undefined && data.RecurrenceRule != ''" class="e-edit-series"
            title="Edit" (click)="onEditClick($event)">Edit Series</button>
        </div>
      </div>
    </ng-template>
  </ejs-schedule>`,
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None,
})


export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
    public selectedDate: Date = new Date(2018, 1, 15);
    private selectionTarget: Element | undefined;
    public onPopupOpen(args: PopupOpenEventArgs): void {
        this.selectionTarget = undefined;
        this.selectionTarget = args.target;
    }
    public onDetailsClick(Data: any): void {
        this.onCloseClick();
        const data: Object = this.scheduleObj?.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
        this.scheduleObj?.openEditor(data, 'Add');
    }
    public onAddClick(Data: any): void {
        this.onCloseClick();
        const data: Object = this.scheduleObj?.getCellDetails(this.scheduleObj.getSelectedElements()) as Object;
        const eventData: { [key: string]: Object } | undefined= this.scheduleObj?.eventWindow.getObjectFromFormData('e-quick-popup-wrapper');
        this.scheduleObj?.eventWindow.convertToEventData(data as { [key: string]: Object }, eventData as any);
        (eventData as any)['Id'] = this.scheduleObj?.eventBase.getEventMaxID() as number + 1;
        this.scheduleObj?.addEvent(eventData as any);
    }
    public onEditClick(args: any): void {
        if (this.selectionTarget) {
        let eventData: { [key: string]: Object } = this.scheduleObj?.getEventDetails(this.selectionTarget) as { [key: string]: Object };
        let currentAction: CurrentAction = 'Save';
        if (!isNullOrUndefined(eventData['RecurrenceRule']) && eventData['RecurrenceRule'] !== '') {
            if (args.target.classList.contains('e-edit-series')) {
            currentAction = 'EditSeries';
            eventData  = this.scheduleObj?.eventBase.getParentEvent(eventData, true) as any;
            } else {
            currentAction = 'EditOccurrence';
            }
        }
        this.scheduleObj?.openEditor(eventData, currentAction);
        }
    }
    public onDeleteClick(args: any): void {
        this.onCloseClick();
        if (this.selectionTarget) {
        const eventData: { [key: string]: Object } = this.scheduleObj?.getEventDetails(this.selectionTarget) as { [key: string]: Object };
        let currentAction: CurrentAction = 'Delete';
        if (!isNullOrUndefined(eventData['RecurrenceRule']) && eventData['RecurrenceRule'] !== '') {
            currentAction = args.target.classList.contains('e-delete-series') ? 'DeleteSeries' : 'DeleteOccurrence';
        }
        this.scheduleObj?.deleteEvent(eventData, currentAction);
        }
    }
    public onCloseClick(): void {
        this.scheduleObj?.quickPopup.quickPopupHide();
    }
}


