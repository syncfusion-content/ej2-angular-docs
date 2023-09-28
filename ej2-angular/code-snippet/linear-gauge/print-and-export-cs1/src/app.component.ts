

import { Component, ViewChild } from '@angular/core';
import { PrintService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IPrintEventArgs } from '@syncfusion/ej2-lineargauge';
@Component({
    selector: 'app-container',
    template: `
    <div><button id='print' (click)='print()'>Print</button></div>
    <ejs-lineargauge id="gauge-container" [allowPrint]=true (beforePrint)='beforePrint($event)' #gauge>
    </ejs-lineargauge>`,
    providers: [PrintService]
})
export class AppComponent {
  @ViewChild('gauge')
  public gaugeObj: LinearGaugeComponent | any;
  print() {
    this.gaugeObj.print();
  };
  beforePrint(args: IPrintEventArgs) {
  };
}


