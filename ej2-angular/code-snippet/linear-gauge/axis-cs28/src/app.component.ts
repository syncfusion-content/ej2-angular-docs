

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IValueChangeEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (valueChange)='valueChange($event)'>
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer value=40 enableDrag=true></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    valueChange(args: IValueChangeEventArgs) {
    }
}


