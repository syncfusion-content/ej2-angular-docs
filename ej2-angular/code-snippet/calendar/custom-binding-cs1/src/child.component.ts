import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'child',
  template: `
  <br>
  <span><h4>Child Component</h4></span>
  <div class="childelement"> 
    <ejs-calendar id="date2" #child (change)="ValueChange()" [value]="xvalue" width="200px"></ejs-calendar>
  </div>
  `,
})
export class ChildComponent {
  @ViewChild('child')
  public DateValue?: CalendarComponent;
  @Input() xvalue?: Date;
  @Output() valueChange = new EventEmitter();

  ValueChange() {
  this.xvalue = ((this.DateValue) as CalendarComponent).value;
  this.valueChange.emit(((this.DateValue) as CalendarComponent).value);
  }
}