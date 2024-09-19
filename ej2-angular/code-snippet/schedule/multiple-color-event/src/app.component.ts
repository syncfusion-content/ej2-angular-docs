import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
@Component({
  imports: [ScheduleModule, CommonModule ],
  standalone: true,
  selector: "app-root",
  styleUrls: ['./index.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None,
  template: `<ejs-schedule width='100%' height='650px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" cssClass='schedule-event-template'>
        <e-views>
          <e-view option="Week">
            <ng-template #eventTemplate let-data>
              <div class='template-wrap'>
                <ng-template ngFor let-item [ngForOf]="data.SubCount">
                  <div [style.background]="item.background" [style.height]="item.height">
                    <div class="subject">{{data.Subject}}</div>
                  </div>
                </ng-template>
              </div>
          </ng-template>
        </e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
  public data: Record<string, any>[] = [
    {
      Id: 1,
      Subject: 'Environment Day',
      Description: 'A day that creates awareness to promote the healthy planet and reduce the air pollution crisis on nature earth.',
      StartTime: new Date(2024, 1, 15, 9, 0),
      EndTime: new Date(2024, 1, 15, 14, 0),
      SubCount: [
        { background: 'darkblue', height: '50%' },
        { background: 'lightblue', height: '50%' },
      ],
    },
    {
      Id: 2,
      Subject: 'Health Day',
      Description: 'A day that raises awareness on different health issues. It marks the anniversary of the foundation of WHO.',
      StartTime: new Date(2024, 1, 16, 9, 0),
      EndTime: new Date(2024, 1, 16, 14, 0),
      SubCount: [
        { background: 'yellow', height: '33.3%' },
        { background: 'yellowgreen', height: '33.3%' },
        { background: 'green', height: '33.3%' },
      ],
    },
    {
      Id: 3,
      Subject: 'Cancer Day',
      Tags: 'Life threatening cancer effects, Palliative care',
      Description: 'A day that raises awareness on cancer and its preventive measures. Early detection saves life.',
      StartTime: new Date(2024, 1, 17, 9, 0),
      EndTime: new Date(2024, 1, 17, 14, 0),
      SubCount: [
        { background: 'pink', height: '50%' },
        { background: 'red', height: '50%' },
      ],
    },
  ];
  public selectedDate: Date = new Date(2024, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
}


