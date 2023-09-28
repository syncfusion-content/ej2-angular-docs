

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IPointerDragEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge style="display:block" id="gauge-container" (dragStart)='dragStart($event)'>
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer enableDrag=true></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    dragStart(args: IPointerDragEventArgs) {
    }
}


