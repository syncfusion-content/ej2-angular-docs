

import { Component, ViewChild, Inject } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TimelineViewsService , EventSettingsModel} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService ],
  // specifies the template string for the Schedule component
  template: `<div id="container">
  <button (click)="onOpenDialog()">Open dialog</button>
  <ejs-dialog id="modalDialog" #modalDialog [closeOnEscape]="'false'" [visible]='false'
    [position]='position' [animationSettings]="animationSettings" height='94%' width='100%' [showCloseIcon]="'true'">
    <ng-template #content>
      <div *ngIf="renderSchedule">
        <ejs-schedule #schedule height='448px' width="100%" [(currentView)]="currentView" [(selectedDate)]="selectedDate" [eventSettings]="eventSettings">
          <e-views>
            <e-view option="TimelineDay"></e-view>
            <e-view option="TimelineWeek"></e-view>
          </e-views>
        </ejs-schedule>
      </div>
    </ng-template>
  </ejs-dialog>
</div>`,
})

export class AppComponent {
  @ViewChild('modalDialog') modalDialog: DialogComponent | undefined;
  public animationSettings: Object = { effect: 'SlideTop', duration: 400, delay: 0 };
  public renderSchedule: boolean = false;
  public selectedDate: Date = new Date(2022, 1, 3);
  public currentView = "TimelineWeek";
  public eventSettings: EventSettingsModel = {
    dataSource:[{
        Id: 1,
        Subject: 'Board Meeting',
        Description: 'Meeting to discuss business goal of 2020.',
        StartTime: new Date(2022, 1, 3, 15, 0),
        EndTime: new Date(2022, 1, 3, 17, 0),
    },
    {
        Id: 2,
        Subject: 'Training session on JSP',
        Description: 'Knowledge sharing on JSP topics.',
        StartTime: new Date(2022, 1, 4, 15, 0),
        EndTime: new Date(2022, 1, 4, 17, 0),
    }],
  };
position: any;
  public onOpenDialog() {
    this.modalDialog!.show();
    this.renderSchedule = true;
  }
}


