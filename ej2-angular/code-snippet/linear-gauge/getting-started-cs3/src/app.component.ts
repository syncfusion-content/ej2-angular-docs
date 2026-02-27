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
         <e-axis [minimum]='Minimum' [maximum]='Maximum'>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public Minimum?: number;
    public Maximum?: number;
    ngOnInit(): void {
       this.Minimum = 0,
       this.Maximum = 200
    }
}



