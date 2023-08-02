import { Component, ViewChild } from '@angular/core';
import { RecurrenceEditorComponent } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-root',
  template: `<ejs-recurrenceeditor #recurrenceObj></ejs-recurrenceeditor>`
})
export class AppComponent {
  @ViewChild('recurrenceObj')
  public recurrenceObj?: RecurrenceEditorComponent;
  ngAfterViewInit() {
    (this.recurrenceObj as RecurrenceEditorComponent ).selectedType = 1;
    (this.recurrenceObj as RecurrenceEditorComponent | any ).endTypes = ['until', 'count'];
  }
}