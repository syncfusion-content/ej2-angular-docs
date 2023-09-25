

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineYearService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineYearService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [rowAutoHeight]='rowAutoHeight' [eventSettings]='eventSettings'>
  <e-views>
        <e-view option='TimelineYear' displayName='Horizontal Timeline Year' isSelected=true></e-view>
        <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'></e-view>
  </e-views>
  </ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 5, 17);
  public rowAutoHeight: boolean = true;
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


