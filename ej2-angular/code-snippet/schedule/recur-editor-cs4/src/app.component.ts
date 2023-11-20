

import { Component, OnInit } from '@angular/core';
import { RecurrenceEditor } from '@syncfusion/ej2-angular-schedule';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-inputs';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

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
  </div>
  <ejs-numerictextbox [(value)]='numericValue' (change)= "onChange($event)"></ejs-numerictextbox>`
})
export class AppComponent implements OnInit {
    public ruleString = 'FREQ=DAILY;INTERVAL=1';
    public numericValue: number = 10;
    public dateArray: string[] = [];
    public recObject: RecurrenceEditor = new RecurrenceEditor();
    ngOnInit(): void {
        let dates: number[] = this.recObject.getRecurrenceDates(
            new Date(2018, 0, 7, 10, 0),
            this.ruleString,
            '20180108T114224Z,20180110T114224Z',
            this.numericValue,
            new Date(2018, 0, 7)
        );
        for (let i: number = 0; i < dates.length; i++) {
            this.dateArray.push(new Date(dates[i]).toString());
        }
    }
    onChange(args: ChangeEventArgs) {
        if (!isNullOrUndefined(args.value)) {
            this.dateArray = [];
            let dates: number[] = this.recObject.getRecurrenceDates(
                new Date(2018, 0, 7, 10, 0),
                this.ruleString,
                '20180108T114224Z,20180110T114224Z',
                args.value,
                new Date(2018, 0, 7)
            );
            for (let i: number = 0; i < dates.length; i++) {
                this.dateArray.push(new Date(dates[i]).toString());
            }
        }
    }
}


