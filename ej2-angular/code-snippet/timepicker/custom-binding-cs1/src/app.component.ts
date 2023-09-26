

import { Component, ViewChild } from '@angular/core';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';


@Component({
    selector: 'app-root',
    template: `
  <div class="parentelement">
   <div class="datevalue">
   <ejs-timepicker id="timepicker" #time (change)="deposit()" placeholder="Parent component" floatLabelType="Always" [value]="value" width="200px"></ejs-timepicker>
   </div>
   </div>
   <child [xvalue]="value" (valueChange)="valuecheck($event)"> </child>
  `,
})
export class ParentComponent {
    @ViewChild('time')
    public Time?: TimePickerComponent;
    value: Date | any;
    constructor() {
        this.value = new Date("2/1/2020");
    }
    deposit() {
        this.value = this.Time?.value;
    }
    valuecheck(args: any) {
        this.value = args;
    }
}



