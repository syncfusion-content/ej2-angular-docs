

import { Component, ViewChild } from '@angular/core';
import { RecurrenceEditor, RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-angular-schedule';
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
  <ejs-recurrenceeditor #recurrenceObj [value]="value" (change)="onChange($event)"></ejs-recurrenceeditor>`
})
export class AppComponent {
    @ViewChild('recurrenceObj') public recObject: RecurrenceEditor;
    public value = 'FREQ=DAILY;INTERVAL=1';
    public dateArray: string[] = [];
    public selectRule: string = 'Select Rule';

    onChange(args: RecurrenceEditorChangeEventArgs): void {
        if (!isNullOrUndefined(args.value)) {
            this.dateArray = [];
            if (args.value == '') {
                this.dateArray.push(this.selectRule.toString());
            } else {
                let dates: number[] = this.recObject.getRecurrenceDates(
                    new Date(),
                    args.value
                );
                for (let i: number = 0; i < dates.length; i++) {
                    this.dateArray.push(new Date(dates[i]).toString());
                }
            }
        }
    }
}


