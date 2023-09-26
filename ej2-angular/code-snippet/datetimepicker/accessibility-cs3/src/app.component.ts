


import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<ejs-datetimepicker [value]='date' [min]='minDate' [max]='maxDate'></ejs-datetimepicker>`
})
export class AppComponent {
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public currentHour: number = this.today.getHours();
  public currentMinute: number = this.today.getMinutes();
  public currentSecond: number = this.today.getSeconds();
  public date: Date = new Date(new Date().setDate(14));
  public minDate: Date = new Date(this.currentYear,this.currentMonth,7,0,0,0);
  public maxDate: Date = new Date(this.currentYear,this.currentMonth,27,this.currentHour,this.currentMinute,this.currentSecond);
  constructor() {}
}



