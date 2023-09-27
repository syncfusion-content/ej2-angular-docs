

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer value=60 type='Bar' width=20 color='#f44141'></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
    ngOnInit(): void {
    }
}


