

import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { View, MonthService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [MonthService],
  // specifies the template string for the Schedule component
   template: `<ejs-schedule width='100%' height='550px' cssClass="schedule-cell-header-template">
    <ng-template #cellHeaderTemplate let-data>
      <div class="date-text">{{getDateHeaderText(data.date)}}</div>
    </ng-template>
    <e-views>
      <e-view option='Month'></e-view>
    </e-views>
  </ejs-schedule>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public instance: Internationalization = new Internationalization();
  getDateHeaderText: Function = (value: Date) => {
    return this.instance.formatDate(value, { skeleton: "Ed" });
  };
}


