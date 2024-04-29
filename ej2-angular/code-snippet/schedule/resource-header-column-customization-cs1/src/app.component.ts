import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';
import {
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel, RenderCellEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { roomData } from './datasource';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService,
                TimelineViewsService, TimelineMonthService],
standalone: true,
    selector: "app-root",
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group' (renderCell)='onRenderCell($event)'>
        <e-resources>
            <e-resource field="RoomId" title="Room Type" name="MeetingRoom"
            [dataSource]="roomDataSource" [allowMultiple]='allowMultipleRoom'
            textField='text' idField='id' colorField='color'>
            </e-resource>
        </e-resources>
        <ng-template #resourceHeaderTemplate let-data>
            <div class='template-wrap'>
                <div class="room-name">{{data.resourceData.text}}</div>
                <div class="room-type">{{data.resourceData.type}}</div>
                <div class="room-capacity">{{data.resourceData.capacity}}</div>
            </div>
        </ng-template>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 7, 1);
    public views: Array<string> = ['TimelineWeek', 'TimelineMonth'];
    public eventSettings: EventSettingsModel = {
        dataSource: roomData
    };
    public group: GroupModel = {
        resources: ['MeetingRoom']
    };
    public allowMultipleRoom: Boolean = true;
    public roomDataSource: Object[] = [
        { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
        { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
        { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
        { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
        { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
        { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
        { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
        { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
        { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
        { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
    ];
    onRenderCell(args: RenderCellEventArgs):void {
        if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
            let target: HTMLElement = args.element.children[0] as HTMLElement;
            target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
        }
    }
}


