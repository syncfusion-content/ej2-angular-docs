import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'



import { Component } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [
        
        RecurrenceEditorModule,
        DropDownListAllModule
    ],

,
standalone: true,
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<div class="content-wrapper recurrence-editor-wrap">
  <div style="padding-bottom:15px;">
      <label>Rule Output</label>
      <div class="rule-output-container">
          <div id="rule-output">{{selectRule}}</div>
      </div>
  </div>
  <ejs-recurrenceeditor (change)="onChange($event)" value="FREQ=DAILY;INTERVAL=2;COUNT=8"></ejs-recurrenceeditor>
</div>`
})
export class AppComponent {
    public selectRule: string = 'FREQ=DAILY;INTERVAL=2;COUNT=8';
    public onChange(args: RecurrenceEditorChangeEventArgs): void {
        if (!isNullOrUndefined(args.value)) {
            this.selectRule = args.value;
        }
    }
}


