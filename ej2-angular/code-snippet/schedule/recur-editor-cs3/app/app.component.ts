

import { Component, OnInit } from '@angular/core';
import { RecurrenceEditor } from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<div style="padding-bottom:15px;">
            <label id="rule-label">Date Collections</label>
            <div class="rule-output-container">
                <div id="rule-output">
                <div  *ngFor="let date of dateArray">{{date}}</div>
                </div>
            </div>
        </div>`
})
export class AppComponent implements OnInit {
    public  dateArray: string[] = [];
    ngOnInit(): void {
        let recObject: RecurrenceEditor = new RecurrenceEditor();
        let dates: number[] = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', '20180108T114224Z,20180110T114224Z', 4, new Date(2018, 0, 7));
        for (let i: number = 0; i < dates.length; i++) {
            this.dateArray.push(new Date(dates[i]).toString());
        }
    }
}


