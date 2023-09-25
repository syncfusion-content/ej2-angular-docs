

import { Component } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { EventSettingsModel, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='Agenda' [allowVirtualScrolling]="allowVirtualScroll">
        <ng-template #eventTemplate let-data>
          <div class="template-wrap">
            <div class="subject">{{data.Subject}}</div>
            <div class="time">{{getTimeString(data.StartTime)}} - {{getTimeString(data.EndTime)}}</div>
          </div>
        </ng-template>
        </e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public allowVirtualScroll: boolean = true;
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  private instance: Internationalization = new Internationalization();
  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  };
}


