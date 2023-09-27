

import { Component, ViewChild } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
@Component({
    selector: 'app-container',
    template: `
    <div> <button  id='btn' (click)='clicked()'>Click</button></div>
    <ejs-lineargauge id="gauge-container" #gauge>
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer value=80></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
  @ViewChild('gauge')
  public gaugeObj: LinearGaugeComponent| any;
  clicked() {
    this.gaugeObj.setPointerValue(0, 0, 30);
  };
}


