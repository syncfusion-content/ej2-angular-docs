

import { Component, ViewChild } from '@angular/core';
import { AnnotationsService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
@Component({
    selector: 'app-container',
    template: `
    <div> <button  id='btn' (click)='clicked()'>Click</button></div>
    <ejs-lineargauge id="gauge-container" #gauge>
        <e-annotations>
            <e-annotation zIndex='1' content='10' axisValue=0></e-annotation>
        </e-annotations>
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer value=10></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`,
     providers: [AnnotationsService]
})
export class AppComponent {
  @ViewChild('gauge')
  public gaugeObj: LinearGaugeComponent | any;
  clicked() {
    this.gaugeObj.setAnnotationValue(0, '50', 50);
  };
}


