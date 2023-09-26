

import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `
  <div class="parentelement">
   <div class="datevalue">
   <ejs-datetimepicker id="datetime" #datetime (change)="deposit()" placeholder="Parent component" floatLabelType="Always" [value]="value" width="200px"></ejs-datetimepicker>
   </div>
   </div>
   <child [xvalue]="value" (valueChange)="valuecheck($event)"> </child>
  `,
})
export class ParentComponent {
    value: Date;
    Date: any;
    constructor() {
        this.value = new Date("2/1/2020");
    }
    deposit() {
        this.value = this.Date.value as Date;
    }
    valuecheck(args: any) {
        this.value = args;
    }
}



