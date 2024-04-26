import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'



import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],
standalone: true,
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer [shapeData]='shapeData' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
  </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public shapeData = world_map;
  public shapeSettings = {
      autofill: true,
      palette: ['#C7DE6C', '#59A076', '#88D0BC', '#FEA78C', '#FFC557'],
      border: {
          color: '#FEE1DD',
          width: 3
      },
      dashArray: '1',
      opacity: 0.9
  };
}


