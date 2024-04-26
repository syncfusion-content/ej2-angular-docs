import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component, ViewChild } from '@angular/core';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
imports:      [  DateRangePickerModule ],


standalone: true,
    selector: 'app-root',
    template: `
  <div class="parentelement">
   <div class="rangevalue">
   <ejs-daterangepicker id="daterangepicker" #range (change)="deposit()" [value]="value" placeholder="Parent component" floatLabelType="Always" width="200px"></ejs-daterangepicker>
   </div>
   </div>
   <child [xvalue]="value" (valueChange)="valuecheck($event)"> </child>
  `,
})
export class ParentComponent {
    @ViewChild('range')
    public DateRange?: DateRangePickerComponent;
    value: Date[];
    constructor() {
        this.value = [new Date("1/1/2019"), new Date("2/1/2020")]
    }
    deposit() {
        this.value = (this.DateRange as DateRangePickerComponent ).value as Date[];
    }
    valuecheck(args: any) {
        this.value = args;
    }
}



