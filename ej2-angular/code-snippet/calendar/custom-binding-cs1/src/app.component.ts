


import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-root',
    template: `
  <div class="parentelement">
  <span><h4>Parent Component</h4></span>
   <div class="datevalue">
   <ejs-calendar id="calendar" #calendar (change)="deposit()" [value]="value" width="200px"></ejs-calendar>
   </div>
   </div>
   <child [xvalue]="value" (valueChange)="valuecheck($event)"> </child>
  `,
})
export class ParentComponent {
    @ViewChild('calendar')
    public calendar?: CalendarComponent;
    value: Date;
    constructor() {
        this.value = new Date("2/1/2020");
    }
    deposit() {
        this.value = ((this.calendar) as CalendarComponent).value;
    }
    valuecheck(args: any) {
        this.value = args;
    }
}



