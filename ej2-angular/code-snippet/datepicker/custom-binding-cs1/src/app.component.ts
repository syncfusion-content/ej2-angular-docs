

import { Component, ViewChild } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';


@Component({
    selector: 'app-root',
    template: `
  <div class="parentelement">
   <div class="datevalue">
   <ejs-datepicker id="datepicker" #date (change)="deposit()" placeholder="Parent component" floatLabelType="Always" [value]="value" width="200px"></ejs-datepicker>
   </div>
   </div>
   <child [xvalue]="value" (valueChange)="valuecheck($event)"> </child>
  `,
})
export class ParentComponent {
    @ViewChild('date')
    public Date?: DatePickerComponent;
    value: Date;
    constructor() {
        this.value = new Date("2/1/2020");
    }
    deposit() {
        this.value = this.Date?.value as Date;
    }
    valuecheck(args: any) {
        this.value = args;
    }
}



