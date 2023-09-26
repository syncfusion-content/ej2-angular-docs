import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'child',
  template: `
  <br>
  <div class="childelement"> 
    <ejs-datetimepicker id="date2" #child (change)="ValueChange()" placeholder="Child component" floatLabelType="Always" [value]="xvalue" width="200px"></ejs-datetimepicker>
  </div>
  `,
})
export class ChildComponent {
  @ViewChild('child')
  public DateValue?: DateTimePickerComponent;
  @Input() xvalue?: Date;
  @Output() valueChange = new EventEmitter();

  ValueChange() {
  this.xvalue = this.DateValue?.value;
  this.valueChange.emit(this.DateValue?.value);
  }
}