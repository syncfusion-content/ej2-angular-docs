


import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<ejs-datetimepicker [min]='minDate' [max]='maxDate'></ejs-datetimepicker>`
})
export class AppComponent {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public minDate: Date = new Date(this.fullYear, this.month , 22, 12);
  public maxDate: Date = new Date(this.fullYear, this.month, 25, 17);
  constructor() {}
}



