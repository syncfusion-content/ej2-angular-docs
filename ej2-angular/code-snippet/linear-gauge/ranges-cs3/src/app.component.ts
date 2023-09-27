

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
         <e-axis [labelStyle]='labelStyle'>
           <e-ranges>
             <e-range start=50 end=80 startWidth=15 endWidth=15 color="red"></e-range>
           </e-ranges>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
  public labelStyle?: Object;
  ngOnInit(): void {
    this.labelStyle = {
      useRangeColor: true
    };
  }
}


