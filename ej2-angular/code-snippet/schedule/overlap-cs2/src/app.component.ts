import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule, DayService, WeekService, MonthService, AgendaService, ResizeService, DragAndDropService, TimelineViewsService,EventSettingsModel, ScheduleComponent, ActionEventArgs, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, ViewChild } from '@angular/core';

interface EventData {
    Id: number;
    Subject: string;
    StartTime: Date;
    EndTime: Date;
}

@Component({
    imports: [ScheduleModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, MonthService, AgendaService, ResizeService, DragAndDropService, TimelineViewsService],
    template: `    
    <ejs-schedule #scheduleObj width='100%' height='550px' 
      [selectedDate]="selectedDate"
      [views]="views"
      [allowOverlap]="false"
      [eventSettings]="eventSettings"
      (actionBegin)="onActionBegin($event)">
    </ejs-schedule>
    <div style="margin-bottom: 10px;">
      <button ejs-button id="AddOverlapEvent" (click)="addOverlapEvent()">Add Overlap Event</button>
      <button ejs-button id="AddNonOverlapEvent" (click)="addNonOverlapEvent()" style="margin-left: 10px;">Add Non-Overlap Event</button>
    </div>
    `
})
export class AppComponent {
    @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
    
    public eventsData: EventData[] = [
        { Id: 1, Subject: 'Board Meeting', StartTime: new Date(2025, 1, 26, 9, 30), EndTime: new Date(2025, 1, 26, 11, 0) },
        { Id: 2, Subject: 'Annual Conference', StartTime: new Date(2025, 2, 2, 10, 0), EndTime: new Date(2025, 2, 2, 11, 0) },
        { Id: 3, Subject: 'Tech Symposium', StartTime: new Date(2025, 2, 2, 10, 30), EndTime: new Date(2025, 2, 2, 11, 30) },
        { Id: 4, Subject: 'Project Workshop', StartTime: new Date(2025, 2, 10, 9, 0), EndTime: new Date(2025, 2, 10, 11, 0) },
        { Id: 5, Subject: 'Client Presentation', StartTime: new Date(2025, 2, 5, 9, 0), EndTime: new Date(2025, 2, 5, 10, 30) },
        { Id: 6, Subject: 'Business Meetup', StartTime: new Date(2025, 2, 15, 11, 0), EndTime: new Date(2025, 2, 15, 13, 0) },
        { Id: 7, Subject: 'Project Review', StartTime: new Date(2025, 2, 13, 10, 0), EndTime: new Date(2025, 2, 13, 13, 0) }
    ];
    public selectedDate: Date = new Date(2025, 2, 6);
    public views: string[] = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];

    public eventSettings: EventSettingsModel = {
        dataSource: this.eventsData
    };

    public overlapEvent: EventData = {
        Id: 8,
        Subject: 'OverlapEvent',
        StartTime: new Date(2025, 2, 13, 10, 0),
        EndTime: new Date(2025, 2, 13, 11, 0)
    };

    public nonOverlapEvent: EventData = {
        Id: 9,
        Subject: 'Non-OverlapEvent',
        StartTime: new Date(2025, 2, 12, 10, 0),
        EndTime: new Date(2025, 2, 12, 11, 0)
    };

    onActionBegin(args: ActionEventArgs): void {
        if ((args.requestType === 'eventCreate') || (args.requestType === 'eventChange')) {
            const result: Promise<boolean> = this.checkOverlap(args);
            args.promise = result;
        }
    }
    checkOverlap(args: ActionEventArgs): Promise<boolean> {
        return new Promise((resolve) => {
            let eventsToCheck = Array.isArray(args.data) ? args.data : [args.data];
            const overlappingEvents = this.eventsData.filter(event =>
                eventsToCheck.some((newEvent: EventData) => {
                    return new Date(event.StartTime) < newEvent.EndTime &&
                        new Date(event.EndTime) > newEvent.StartTime &&
                        event.Id !== newEvent.Id;
                })
            );

            let result: boolean = overlappingEvents.length === 0;
            if (!result) {
                const popupArgs: PopupOpenEventArgs = {
                    type: 'OverlapAlert',
                    data: eventsToCheck,
                    overlapEvents: overlappingEvents,
                    element: this.scheduleObj.element,
                    cancel: false
                };
                this.scheduleObj.openOverlapAlert(popupArgs);
            }
            resolve(result);
        });
    }

    addOverlapEvent(): void {
        if (this.scheduleObj) {
            this.scheduleObj.addEvent(this.overlapEvent);
        }
    }

    addNonOverlapEvent(): void {
        if (this.scheduleObj) {
            this.scheduleObj.addEvent(this.nonOverlapEvent);
        }
    }
}


