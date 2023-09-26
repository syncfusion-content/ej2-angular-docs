import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core'
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'child',
  template: `
  <br>
  <div class="childelement">
     <ejs-daterangepicker id="daterange2" #child (change)="ValueChange()" [value]="xvalue" placeholder="Child component" floatLabelType="Always" width="200px"></ejs-daterangepicker>
  </div>
  `,
})
export class ChildComponent {
  @ViewChild('child')
  public DateRangeValue?: DateRangePickerComponent;
  @Input() xvalue?: Date[];
  @Output() valueChange = new EventEmitter();

  ValueChange() {
  this.xvalue = (this.DateRangeValue as DateRangePickerComponent ).value as Date[];
  this.valueChange.emit(this.DateRangeValue?.value);
  }
}