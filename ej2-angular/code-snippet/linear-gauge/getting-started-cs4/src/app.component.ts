import { Component, OnInit } from '@angular/core';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@Component({
    imports: [
        LinearGaugeModule
    ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-lineargauge id="gauge-container">
      <e-axes>
         <e-axis minimum=0 maximum=200 [labelStyle]='Label'>
           <e-pointers>
             <e-pointer value=140></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public Label?: Object;
    ngOnInit(): void {
      this.Label = {
           format: '{value}°C'
      };
    }
}



