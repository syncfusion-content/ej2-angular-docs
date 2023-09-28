

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container">
        <e-axes>
         <e-axis>
           <e-pointers>
             <e-pointer value=80 markerType='Circle' [height]='height' [width]='width' color='#cd41f4'></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent {
  public height?: number;
  public width?: number;
  ngOnInit(): void {
    this.height = 15;
    this.width= 15;
  }
}


