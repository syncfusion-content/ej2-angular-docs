import { Component, ViewChild } from '@angular/core';
import {
  ScheduleComponent,
  EventSettingsModel,
  ActionEventArgs,
  ToolbarActionArgs,
  BeforePrintEventArgs,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  PrintService,
  ItemModel
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  template: `
    <ejs-schedule #scheduleObj id="schedule" width="100%" height="550px" 
      [selectedDate]="selectedDate" [eventSettings]="eventSettings" 
      [views]="scheduleViews" (actionBegin)="onActionBegin($event)" 
      (beforePrint)="onBeforePrint($event)">
    </ejs-schedule>
  `,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, PrintService]
})
export class AppComponent {
  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
  public selectedDate: Date = new Date();
  public scheduleViews = ['Day', 'Week', 'WorkWeek', 'Month'];

  private currentUser = this.getCurrentUserInfo();
  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData
  };

  public onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      const printItem: ItemModel = {
        align: 'Right',
        showTextOn: 'Both',
        prefixIcon: 'e-icon-schedule-print',
        text: 'Print',
        cssClass: 'e-schedule-print',
        click: this.onPrintIconClick.bind(this)
      };
      args.items.push(printItem);
    }
  }

  public onPrintIconClick(): void {
    this.scheduleObj.print();
  }

  public onBeforePrint(args: BeforePrintEventArgs): void {
    const headerElement = document.createElement('div');
    headerElement.innerHTML = `
      <h1>${this.currentUser.department} Department Schedule</h1>
      <p>Printed by: ${this.currentUser.userRole}</p>
      <p>Date: ${new Date().toLocaleString()}</p>
    `;
    headerElement.style.backgroundColor = this.getDepartmentColor(this.currentUser.department);
    headerElement.style.color = 'white';
    headerElement.style.padding = '10px';
    args.printElement.insertBefore(headerElement, args.printElement.firstChild);

    const highPriorityEvents = args.printElement.querySelectorAll('.e-appointment.high-priority');
    highPriorityEvents.forEach(event => {
      (event as HTMLElement).style.border = '2px solid red';
    });

    const events = this.scheduleObj.getEvents();
    const summaryElement = document.createElement('div');
    summaryElement.innerHTML = `
      <p>Total Events: ${events.length}</p>
      <p>High Priority Events: ${events.filter(e => e.priority === 'high').length}</p>
    `;
    args.printElement.appendChild(summaryElement);

    if (this.currentUser.userRole === 'Manager') {
      const managerNote = document.createElement('div');
      managerNote.textContent = 'Confidential - For managerial use only';
      managerNote.style.color = 'red';
      args.printElement.appendChild(managerNote);
    }
  }

  private getDepartmentColor(dept: string): string {
    const colors: Record<string, string> = {
      'Sales': '#4CAF50',
      'Marketing': '#2196F3',
      'Engineering': '#FF9800',
      'HR': '#9C27B0'
    };
    return colors[dept] || '#607D8B';
  }

  private getCurrentUserInfo() {
    return { department: 'Sales', userRole: 'Manager' };
  }
}
