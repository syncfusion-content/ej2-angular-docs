import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'child',
  template: `
  <br>
  <div class="childelement"> 
    <ejs-timepicker id="date2" #child (change)="ValueChange()" placeholder="Child component" floatLabelType="Always" [value]="xvalue" width="200px"></ejs-timepicker>
  </div>
  `,
})
export class ChildComponent {
  @ViewChild('child')
  public DateValue?: TimePickerComponent;
  @Input() xvalue?: Date;
  @Output() valueChange = new EventEmitter();

  ValueChange() {
  this.xvalue = this.DateValue?.value;
  this.valueChange.emit(this.DateValue?.value);
  }
}