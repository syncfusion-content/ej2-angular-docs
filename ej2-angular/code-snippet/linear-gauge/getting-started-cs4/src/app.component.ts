


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-lineargauge id="gauge-container">
      <e-axes>
         <e-axis minimum=0 maximum=200>
           <e-pointers>
             <e-pointer value=140></e-pointer>
           </e-pointers>
           <e-ranges>
             <e-range start=0 end=80 startWidth=15 endWidth=15></e-range>
             <e-range start=80 end=120 startWidth=15 endWidth=15></e-range>
             <e-range start=120 end=140 startWidth=15 endWidth=15></e-range>
             <e-range start=140 end=200 startWidth=15 endWidth=15></e-range>
           </e-ranges>
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



