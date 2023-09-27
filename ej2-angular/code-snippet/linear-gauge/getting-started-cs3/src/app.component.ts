


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-lineargauge id="gauge-container">
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



