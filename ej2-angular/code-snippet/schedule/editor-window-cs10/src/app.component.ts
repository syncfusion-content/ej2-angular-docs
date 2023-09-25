

import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [views]='views' [quickInfoOnSelectionEnd]='showQuickInfoOnSelectionEnd'></ejs-schedule>`
})


export class AppComponent {
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfoOnSelectionEnd: Boolean = true;
}


