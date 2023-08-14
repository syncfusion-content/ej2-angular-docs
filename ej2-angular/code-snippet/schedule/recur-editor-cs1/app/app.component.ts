

import { Component} from '@angular/core';
import { RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-angular-schedule';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

@Component({
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<div style="padding-bottom:15px;">
            <label id="rule-label">Rule Output</label>
            <div class="rule-output-container">
                <div id="rule-output">{{selectRule}}</div>
            </div>
        </div>
        <ejs-recurrenceeditor (change)="onChange($event)"></ejs-recurrenceeditor>
        `
})
export class AppComponent {
  public selectRule: string = 'Select Rule';
  onChange(args: RecurrenceEditorChangeEventArgs): void {
    if (!isNullOrUndefined(args.value)) {
        if(args.value == "") {
            this.selectRule = 'Select Rule';
        } else {
            this.selectRule = args.value;
        }
    }
  }
}


