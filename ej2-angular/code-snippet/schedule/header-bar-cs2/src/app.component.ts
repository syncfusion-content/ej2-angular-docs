import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { createElement, compile } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { Popup } from '@syncfusion/ej2-popups';
import { EventSettingsModel, ActionEventArgs, ToolbarActionArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

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
                MonthAgendaService],
standalone: true,
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<ejs-schedule id='schedule' width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' [showHeaderBar]='showHeaderBar'
    [currentView]='currentView' (actionBegin)='onActionBegin($event)'
    (actionComplete)='onActionComplete($event)' #schedule></ejs-schedule>`
})


export class AppComponent {
    @ViewChild('schedule') public scheduleObj?: ScheduleComponent
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Month'];
    public currentView: string = 'Month';
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
    public userContentEle: HTMLElement = createElement('div', {
        className: 'e-profile-wrapper'
    });
    public profilePopup?: Popup;
    showHeaderBar: any;
    onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
        if (args.requestType === 'toolbarItemRendering') {
            let userIconItem: ItemModel = {
                align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
            };
            (args.items as ItemModel[]).push(userIconItem);
        }
    }
    onActionComplete(args: ActionEventArgs): void {
        let scheduleElement: HTMLElement = (this.scheduleObj as ScheduleComponent).element;
        if (args.requestType === 'toolBarItemRendered') {
            let userIconEle: HTMLElement = scheduleElement.querySelector('.e-schedule-user-icon') as HTMLElement;
            userIconEle.onclick = () => {
                (this.profilePopup as Popup).relateTo = userIconEle;
                (this.profilePopup as Popup).dataBind();
                if ((this.profilePopup as Popup).element.classList.contains('e-popup-close')) {
                    (this.profilePopup as Popup).show();
                } else {
                    (this.profilePopup as Popup).hide();
                }
            };
        }

        let userContentEle: HTMLElement = createElement('div', {
            className: 'e-profile-wrapper'
        });
        (scheduleElement.parentElement as HTMLElement).appendChild(userContentEle);

        let userIconEle: HTMLElement = scheduleElement.querySelector('.e-schedule-user-icon') as HTMLElement;
        let getDOMString: (data: object) => NodeList = compile('<div class="profile-container"><div class="profile-image">' +
            '</div><div class="content-wrap"><div class="name">Nancy</div>' +
            '<div class="destination">Product Manager</div><div class="status">' +
            '<div class="status-icon"></div>Online</div></div></div>');
        let output: NodeList = getDOMString({});
        this.profilePopup = new Popup(userContentEle, {
            content: output[0] as HTMLElement,
            relateTo: userIconEle,
            position: { X: 'left', Y: 'bottom' },
            collision: { X: 'flip', Y: 'flip' },
            targetType: 'relative',
            viewPortElement: scheduleElement,
            width: 185,
            height: 80
        });
        this.profilePopup.hide();
    }
}


