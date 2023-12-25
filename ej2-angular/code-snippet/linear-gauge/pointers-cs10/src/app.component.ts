import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <ejs-lineargauge id="gauge-container" orientation="Horizontal">
        <e-axes>
         <e-axis [majorTicks]='major' [minorTicks]='minor' [labelStyle]='label'>
           <e-pointers>
             <e-pointer value=60 markerType="Image" width="40" height="40" imageUrl="https://ej2.syncfusion.com/angular/demos/assets/linear-gauge/images/step-count.png" offset="-27"></e-pointer>
           </e-pointers>
         </e-axis>
      </e-axes>
    </ejs-lineargauge>`,
})
export class AppComponent {
  public major?: Object;
  public minor?: Object;
  public label?: Object;
  ngOnInit(): void {
    this.label = {
      position: 'Outside',
    };
    this.major = {
      interval: 20,
      position: 'Outside',
    };
    this.minor = {
      position: 'Outside',
    };
  }
}
